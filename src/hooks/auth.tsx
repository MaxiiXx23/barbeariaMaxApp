import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
} from "react";

import { api } from "../services/axios";

interface User {
    id: string;
    email: string;
    name: string;
    photo: string;
    phone: string;
    token: string
}


interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider ({ children }: AuthProviderProps){
    const [data, setData] = useState<User>({} as User);

    async function signIn({ email, password }: SignInCredentials) {
        try {

            const response = await api.post('/users/authenticate', {
                email,
                password
            })

            const { token, user } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({ ...user, token});

        } catch (error) {

            throw new Error(error);

        }

    }

    async function signOut() {

        try {
            api.defaults.headers.authorization = ``;
            setData({} as User);

        } catch (error) {
            throw new Error(error);
        }

    }

    return (
        <AuthContext.Provider
            value={{
                user: data,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }