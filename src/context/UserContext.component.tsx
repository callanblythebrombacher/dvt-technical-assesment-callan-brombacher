import React, { createContext } from 'react';

interface AppContextInterface {
    isLoggedIn: boolean;
    role: string;
}

export const UserCtx = createContext<AppContextInterface | null>(null);

export const defaultUserCtx: AppContextInterface = {
    role: 'user',
    isLoggedIn: false,
};
