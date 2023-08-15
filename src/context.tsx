import { useContext, createContext, useState, FC } from "react";
import { ContextProps, PropsState } from "./interfaces";

const DEFAULT_VALUE = {
    actions: {combine: false, clear: false, transition: false},
    setActions: (): object => new Object(),
    combineSelected: new Object(),
    setCombineSelected: (): object => new Object()
}

const ContextReorderGlobal = createContext<PropsState>(DEFAULT_VALUE)

export const GlobalContextReorderProvider: FC<ContextProps> = ({ children }) => {
    const [actions, setActions] = useState(DEFAULT_VALUE.actions);
    const [combineSelected, setCombineSelected] = useState(DEFAULT_VALUE.combineSelected)

    return (
        <ContextReorderGlobal.Provider value={{ actions, setActions, combineSelected, setCombineSelected }}>
            {children}
        </ContextReorderGlobal.Provider>
    )
}

export const useGlobalReorder = () => useContext(ContextReorderGlobal)

