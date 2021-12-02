import React, { useContext } from 'react';
export const AlertContext = React.createContext(null);
export const useAlert = () => useContext(AlertContext);
