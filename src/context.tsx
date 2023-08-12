import { useContext, createContext, useState, FC, ReactNode } from "react";

interface ContextProps {
    children: ReactNode;
}

interface PropsClear {
    clear: boolean,
    setClear: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_VALUE = {
    clear: false,
    setClear: (data: boolean) => data 
}


const ContextReorderGlobal = createContext<PropsClear>(DEFAULT_VALUE)



export const GlobalContextReorderProvider: FC<ContextProps> = ({ children }) => {
    const [clear, setClear] = useState(DEFAULT_VALUE.clear);

    return (
        <ContextReorderGlobal.Provider value={{ clear, setClear }}>
            {children}
        </ContextReorderGlobal.Provider>
    )
}

export const useGlobalReorder = () => useContext(ContextReorderGlobal)

