import { createContext } from "react";

export const UserContext = createContext(null);

// To make this context available to all components, we have to use a provider
// Every context object come with a provider via component
// The provider allows the context to be consumed by other components