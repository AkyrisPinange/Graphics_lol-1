import {createContext, useContext, useState} from 'react';


const AppContext = createContext({});

export function AppWrapper ({children} : {children: any}) : JSX.Element {
    
    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
};
export const useAppContext = () : any => useContext(AppContext);

