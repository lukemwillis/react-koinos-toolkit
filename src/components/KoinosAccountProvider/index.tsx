import React from "react";
import { AccountProvider } from "./AccountProvider";
import { NameServiceProvider } from "./NameServiceProvider";
import { ProfileProvider } from "./ProfileProvider";
import { ChakraProvider } from "@chakra-ui/react";

export const KoinosAccountProvider = ({ children }) => {
  return (
    <ChakraProvider>
      <AccountProvider>
        <NameServiceProvider>
          <ProfileProvider>{children}</ProfileProvider>
        </NameServiceProvider>
      </AccountProvider>
    </ChakraProvider>
  );
};
