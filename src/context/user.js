import React from "react";

const userContext = React.createContext();

// provider
export const UserContextProvider = userContext.Provider;

// consumer

export const UserContextConsumer = userContext.Consumer;

export default userContext;
