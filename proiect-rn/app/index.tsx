import { Text, View } from "react-native";
import { AuthContextProvider, useAuth } from "./src/hooks/authContext";
import { UserDetailsContextProvider } from "./src/hooks/userDetailsContext";
import Router from "./src/router";
import React from "react";

const AppProviders: React.FC = () => {
  const { token } = useAuth();

  return (
    <UserDetailsContextProvider token={token}>
      <Router />
    </UserDetailsContextProvider>
  );
};

export default function Index() {
  return (
    <AuthContextProvider>
      <AppProviders />
    </AuthContextProvider>
  );
}