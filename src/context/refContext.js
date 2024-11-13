import React, { createContext, useContext } from "react";

// Creating context without default values
export const RefContext = createContext(null);

// Providing context using `Provider`
export const RefProvider = RefContext.Provider;

// Custom hook for consuming the context
export default function useRefConstrain() {
    return useContext(RefContext);
}
