import {createContext, useState, ReactNode, useEffect} from 'react'
import { getCookie, setCookie } from 'typescript-cookie'

interface LoggedUserProviderProps {
    children: ReactNode; // ReactNode is a common type for components that can be rendered
}

export const LoggedUserContext= createContext<any>(null)

export const LoggedUserProvider: React.FC<LoggedUserProviderProps> = (props) => {
    // const [loggedUser, setLoggedUser]= useState([])
    // Initialize state with data from local storage, if available
    const [loggedUser, setLoggedUser] = useState<string | null>(() => {
    const storedUser = getCookie('loggedUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    // Update local storage when loggedUser state changes
    useEffect(() => {
        setCookie('loggedUser', JSON.stringify(loggedUser), { expires: 1 });
    } , [loggedUser]);

    console.log('context',loggedUser)

    return (
        <LoggedUserContext.Provider value={{
            loggedUser,
            setLoggedUser
        }}>

            {props.children}
        </LoggedUserContext.Provider>
    )
}