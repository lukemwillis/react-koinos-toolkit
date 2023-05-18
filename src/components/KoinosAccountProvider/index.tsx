import React from "react";
import { AccountProvider } from "./AccountProvider";
import { NameServiceProvider } from "./NameServiceProvider";
import { ProfileProvider } from "./ProfileProvider";

export const KoinosAccountProvider = ({ children }) => {
  return (
    <AccountProvider>
      <NameServiceProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </NameServiceProvider>
    </AccountProvider>
  );
};
