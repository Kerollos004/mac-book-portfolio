//--------------------------------> nav context
import {   createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface Nav{
    nav: string,
    setNav: Dispatch <SetStateAction<string>>
}

//create context
const NavContext = createContext<Nav | null>(null)

//provider
export const NavProvider = ({ children }: { children: ReactNode }) => {
    const [nav, setNav] = useState("")
    const value: Nav = { nav, setNav };
    return <NavContext.Provider value={ value }> { children } </NavContext.Provider>
}

//use context
// eslint-disable-next-line react-refresh/only-export-components
export const useNavContext = () => {
    const context = useContext(NavContext)

    if (!context) {
    throw new Error('useNav must be used within a NavProvider');
    }

    return context
}

//----------------------------------------> skills context
//create context
interface File {
    file: string,
    setFile: Dispatch<SetStateAction<string>>
}
const FilesContext = createContext<File | null>(null)
// context provider
export const FilesProvider = ({ children }: { children: ReactNode }) => {
    const [file, setFile] = useState("")
    const value: File = { file, setFile }
    return (<FilesContext.Provider value={value}>{ children }</FilesContext.Provider>)
}
//usecontext 
// eslint-disable-next-line react-refresh/only-export-components
export const useFilesContext = () => {
    const context = useContext(FilesContext)

    if (!context) {
        throw new Error('useContext must be used within a Provider');
    }

    return context
}

//----------------------------------> projects context

interface Project {
    project: boolean,
    setProject: Dispatch<SetStateAction<boolean>>
}
const ProjectsContext = createContext<Project | null>(null)
// context provider
export const ProjectsProvider  = ({ children }: { children: ReactNode }) => {
    const [project, setProject] = useState(false)
    const value: Project = { project, setProject }
    return (<ProjectsContext.Provider value={value}>{ children }</ProjectsContext.Provider>)
}
//usecontext 
// eslint-disable-next-line react-refresh/only-export-components
export const useProjectsContext = () => {
    const context = useContext(ProjectsContext)

    if (!context) {
        throw new Error('useContext must be used within a Provider');
    }

    return context
}


//----------------------------------> minimize context

interface Mini {
    mini: boolean,
    setMini: Dispatch<SetStateAction<boolean>>
}
const minimizeContext = createContext<Mini | null>(null)
// context provider
export const MinimizeProvider  = ({ children }: { children: ReactNode }) => {
    const [mini, setMini] = useState(false)
    const value: Mini = { mini, setMini }
    return (<minimizeContext.Provider value={value}>{ children }</minimizeContext.Provider>)
}
//usecontext 
// eslint-disable-next-line react-refresh/only-export-components
export const useMinmizeContext = () => {
    const context = useContext(minimizeContext)

    if (!context) {
        throw new Error('useContext must be used within a Provider');
    }

    return context
}