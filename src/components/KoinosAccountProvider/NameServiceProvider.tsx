import React, {
  useContext,
  createContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import { Contract, utils } from "koilib";
import { useAccount } from "./AccountProvider";
import namerserviceAbi from "../../abis/collections-abi.json";

export type NameObject = {
  name: string;
  domain: string;
  owner: string;
  expiration: string;
  grace_period_end: string;
};

type NameServiceContextType = {
  getOwner: (name: string) => Promise<{ value: string } | undefined>;
  getName: (name: string) => Promise<NameObject | undefined>;
  fetchNames: () => Promise<void>;
  names: NameObject[];
};

export const NameServiceContext = createContext<NameServiceContextType>({
  getOwner: async () => undefined,
  getName: async () => undefined,
  fetchNames: async () => undefined,
  names: [],
});

export const useNameService = () => useContext(NameServiceContext);

export const NameServiceProvider = ({
  kapNameServiceAddress,
  children,
}: {
  kapNameServiceAddress: string;
  children: React.ReactNode;
}): JSX.Element => {
  const { address, provider, signer } = useAccount();

  const { getOwner, getName, fetchNames } = useMemo(() => {
    if (!kapNameServiceAddress) {
      return {
        getOwner: async () => undefined,
        getName: async () => undefined,
        fetchNames: async () => undefined,
      };
    }
    const nameService = new Contract({
      id: kapNameServiceAddress,
      abi: namerserviceAbi,
      provider,
      signer,
    });

    return {
      getOwner: async (name: string) => {
        const buffer = new TextEncoder().encode(name);
        const token_id = "0x" + utils.toHexString(buffer);
        const { result } = await nameService!.functions.owner_of<{
          value: string;
        }>({
          token_id,
        });
        return result;
      },
      getName: async (name: string) => {
        const { result } = await nameService!.functions.get_name<NameObject>({
          name,
        });
        return result;
      },
      fetchNames: async () => {
        console.log({kapNameServiceAddress,address,provider,signer});
        const { result } = await nameService!.functions.get_names<{
          names: NameObject[];
        }>({
          owner: address,
          nameOffset: "",
          descending: false,
          limit: 100,
        });

        if (result?.names && result.names.length > 0) {
          setNames(result.names);
        }
      },
    };
  }, [kapNameServiceAddress, address, provider, signer]);

  const [names, setNames] = useState<NameObject[]>([]);
  useEffect(() => {
    if (address) {
      fetchNames();
    }
  }, [address, fetchNames]);

  return (
    <NameServiceContext.Provider
      value={{
        names,
        getOwner,
        getName,
        fetchNames,
      }}
    >
      {children}
    </NameServiceContext.Provider>
  );
};
