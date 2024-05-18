import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails, login, register } from "../api";
import { useAuth } from "./authContext";

export interface IUser {
    email: string;
}

export interface IUserDetails {
    currentlyGamesPlaying: number;
    gamesLost: number;
    gamesPlayed: number;
    gamesWon: number;
    user: IUser;
  }
  
interface IUserDetailsContext {
    userDetails: IUserDetails | null;
    getUserDetails: (token: string) => Promise<void>;
}

const UserDetailsContext = createContext<IUserDetailsContext>({
    userDetails: null,
    getUserDetails: async () => {},
})

export const UserDetailsContextProvider: React.FC<{children: React.ReactNode; token: string}> = ({children, token}) => {

    const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);

    // token = useAuth().token;

    const handleGetUserDetails = async () => {
        try {
            const result = await getUserDetails(token);
            setUserDetails(result);
            console.log('userDetails: ', result)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (token) {
            handleGetUserDetails();
        }
    }, [token]);

    return (
        <UserDetailsContext.Provider value={{
            userDetails,
            getUserDetails: handleGetUserDetails
        }}>
            {children}
        </UserDetailsContext.Provider>
    )
};

export const useUserDetails = () => useContext(UserDetailsContext);
