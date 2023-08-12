import { useContext, Dispatch, createContext, useState, FC, ReactNode, SetStateAction } from "react";

const ContextReorderGlobal = createContext({
    clear: false,
    setClear: (data: boolean) => data
})

interface ContextProps {
    children: ReactNode;
  }

export const GlobalContextReorderProvider: FC<ContextProps> = ({ children }) => {
    const [clear, setClear] = useState<boolean>(false);

    return (
        <ContextReorderGlobal.Provider value={{ clear, setClear }}>
            {children}
        </ContextReorderGlobal.Provider>
    )
}

export const useGlobalReorder = () => useContext(ContextReorderGlobal)

