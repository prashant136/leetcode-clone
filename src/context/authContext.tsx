import React, {
    createContext,
    useContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react";

type AuthType = "login" | "signup" | "forgetPassword" | undefined;

type AuthContextProps = {
    open: AuthType;
    loading: boolean;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

const initialState: AuthContextProps = {
    open: undefined,
    loading: false
};

export const AuthContextObj = createContext<AuthContextProps>(initialState);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [state, setState] = useState<AuthContextProps>(initialState);

    const updateAuthState = (val: Partial<AuthContextProps>) => {
        setState((prev) => ({
            ...prev,
            ...val
        }));
    };

    const contextValue = {
        ...state,
        updateAuthState
    };

    return (
        <AuthContextObj.Provider value={contextValue}>
            {props.children}
        </AuthContextObj.Provider>
    );
};

// export const AuthHook = () => {
//     const authContext = useContext(AuthContextObj);
//     if (!authContext) {
//         return null;
//     }
//     return authContext;
// }
