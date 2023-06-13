import { createContext, useState } from "react";

export const DataExcel = createContext();

export const ProviderExcel = function( {children}){

    const [dataExcel, setDataExcel]= useState([]);

    return(
        <DataExcel.Provider value={{dataExcel, setDataExcel}}>
            {children}
        </DataExcel.Provider>
    )

}
