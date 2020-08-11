import React, { useContext, createContext, useReducer } from 'react';


export const DataLayerContext = createContext(null);


export const DataLayer = (props) => {
    return (
        <DataLayerContext.Provider value={useReducer(props.reducer, props.initialState)}>
            {props.children}
        </DataLayerContext.Provider>
    )
};

export const useDataLayer = () => useContext(DataLayerContext);