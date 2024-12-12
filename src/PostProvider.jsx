import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};
