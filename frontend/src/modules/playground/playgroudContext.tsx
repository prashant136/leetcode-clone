import { createContext, useContext, useState, PropsWithChildren } from "react";

// Define the context type
interface PlaygroundContextType {
    input: any[];
    output: any[];
    changePlaygroundState: (value: Partial<PlaygroundContextType>) => void;
}

// Initial state for the context
const initialPlaygroundState = {
    input: [],
    output: [],
    changePlaygroundState: () => {},
};

// Create context with default values
const PlaygroundContext = createContext<PlaygroundContextType>(initialPlaygroundState);

// Create provider component
export const PlaygroundProvider = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState<Omit<PlaygroundContextType, "changePlaygroundState">>({
        input: [],
        output: [],
    });

    // Function to update the context state
    const changePlaygroundState = (value: Partial<PlaygroundContextType>) => {
        setState((prev) => ({ ...prev, ...value }));
    };

    // Context object with state and updater function
    const contextObject: PlaygroundContextType = {
        ...state,
        changePlaygroundState,
    };

    return (
        <PlaygroundContext.Provider value={contextObject}>
            {children}
        </PlaygroundContext.Provider>
    );
};

// Custom hook to use the context
export const usePlaygroundContext = (): PlaygroundContextType => {
    const context = useContext(PlaygroundContext);
    if (!context) {
        throw new Error("usePlaygroundContext must be used within a PlaygroundProvider");
    }
    return context;
};
