import React from "react";

const userContext = React.createContext();

// provider
export const userContextProvider = userContext.Provider;

// consumer

export const userContextConsumer = userContext.Consumer;

export default userContext;
