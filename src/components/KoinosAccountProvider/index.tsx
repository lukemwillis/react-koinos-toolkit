import React from "react";
import { AccountProvider } from "./AccountProvider";
import { NameServiceProvider } from "./NameServiceProvider";
import { ProfileProvider } from "./ProfileProvider";
import { ChakraProvider } from "@chakra-ui/react";

export const KoinosAccountProvider = ({
  defaultRpcUrl,
  kapNameServiceAddress,
  kapProfileAddress,
  children,
}) => {
  return (
    <ChakraProvider>
      <AccountProvider defaultRpcUrl={defaultRpcUrl}>
        <NameServiceProvider kapNameServiceAddress={kapNameServiceAddress}>
          <ProfileProvider kapProfileAddress={kapProfileAddress}>
            {children}
          </ProfileProvider>
        </NameServiceProvider>
      </AccountProvider>
    </ChakraProvider>
  );
};

export { useAccount } from "./AccountProvider";
export { useNameService } from "./NameServiceProvider";
export { useProfile } from "./ProfileProvider";
