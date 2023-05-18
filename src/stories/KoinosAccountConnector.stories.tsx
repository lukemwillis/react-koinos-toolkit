import React from "react";
import KoinosAccountConnector from "../components/KoinosAccountConnector/AccountConnector";
import { KoinosAccountProvider } from "../components/KoinosAccountProvider/";

export default {
  title: "KoinosAccountConnector",
  component: KoinosAccountConnector,
};

export const Default = () => (
  <KoinosAccountProvider>
    <KoinosAccountConnector />
  </KoinosAccountProvider>
);
