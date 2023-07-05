import React, {
  useContext,
  createContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { Contract } from "koilib";
import { useAccount } from "./AccountProvider";
import profileAbi from "../../abis/profile-abi.json";
import nftAbi from "../../abis/collections-abi.json";

export type LinkObject = {
  key: string;
  value: string;
};

export type ProfileObject = {
  avatar_contract_id?: string;
  avatar_token_id?: string;
  name?: string;
  bio?: string;
  theme?: string;
  links?: LinkObject[];
};

type ProfileContextType = {
  profile?: ProfileObject;
  avatarSrc?: string;
};

export const ProfileContext = createContext<ProfileContextType>({});

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({
  kapProfileAddress,
  children,
}: {
  kapProfileAddress: string;
  children: React.ReactNode;
}): JSX.Element => {
  const { provider, signer, address } = useAccount();
  const [profile, setProfile] = useState<ProfileObject>();
  const [avatarSrc, setAvatarSrc] = useState<string>();

  const { fetchProfile } = useMemo(() => {
    if (!kapProfileAddress) {
      return {
        fetchProfile: async () => undefined,
      };
    }

    const profileContract = new Contract({
      id: kapProfileAddress,
      abi: profileAbi,
      provider,
      signer,
    });

    const fetchProfile = async () => {
      const { result: profileResult } =
        await profileContract!.functions.get_profile<ProfileObject>({
          address,
        });
      setProfile(profileResult || {});

      if (profileResult?.avatar_contract_id && profileResult.avatar_token_id) {
        const nftContract = new Contract({
          id: profileResult.avatar_contract_id,
          abi: nftAbi,
          provider,
          signer,
        });

        const { result: nftResult } = await nftContract!.functions.uri({});

        if (nftResult?.value) {
          try {
            const uri = normalizeIpfsUris(nftResult.value as string);
            const metadata = await fetch(
              `${uri}/${profileResult.avatar_token_id}`
            );
            const { image } = await metadata.json();
            const imageSrc = normalizeIpfsUris(image);
            setAvatarSrc(imageSrc);
          } catch {
            // TODO don't just swallow error
          }
        }
      }
    };

    return {
      fetchProfile,
    };
  }, [kapProfileAddress, address, provider, signer]);

  useEffect(() => {
    if (address) {
      setProfile({});
      setAvatarSrc("");
      fetchProfile();
    }
  }, [address]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        avatarSrc,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export function normalizeIpfsUris(uri: string) {
  let result = uri;
  if (uri.startsWith("ipfs://")) {
    const path = uri.indexOf("/", 7);
    if (path > -1) {
      result =
        "https://" +
        uri.substring(7, path) +
        ".ipfs.nftstorage.link" +
        uri.substring(path);
    } else {
      result = "https://" + uri.substring(7) + ".ipfs.nftstorage.link";
    }
  }
  return result;
}
