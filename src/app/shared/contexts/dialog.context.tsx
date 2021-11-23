import React, { useContext } from 'react';
export const DialogContext = React.createContext<any>(null);
export const useDialog = () => useContext(DialogContext);
