// src/components/UserDetails.tsx
import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import PrettyText from "./PrettyText";
import { IUserDetails } from "../hooks/userDetailsContext";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-top: 30px;
`;

export interface IUserDetailsProps {
  userDetails: IUserDetails | null;
}

const UserDetails: React.FC<IUserDetailsProps> = ({ userDetails }) => {
  return (
    <Container>
      {userDetails ? (
        <>
          <PrettyText text="User Details" size={40} />
          <Text>Email: {userDetails.user.email}</Text>
          <Text>Currently Games Playing: {userDetails.currentlyGamesPlaying}</Text>
          <Text>Games Lost: {userDetails.gamesLost}</Text>
          <Text>Games Played: {userDetails.gamesPlayed}</Text>
          <Text>Games Won: {userDetails.gamesWon}</Text>
        </>
      ) : (
        <PrettyText text="No user details available." size={20} />
      )}
    </Container>
  );
};

export default UserDetails;
