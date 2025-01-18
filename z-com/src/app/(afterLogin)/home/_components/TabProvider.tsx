"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type TabValueType = "rec" | "fol";
type TabActionType = { type: "rec" } | { type: "fol" };

const TabValueContext = createContext<TabValueType>("rec");
const TabActionContext = createContext<null | Dispatch<TabActionType>>(null);

function reducer(state: TabValueType, action: TabActionType) {
  switch (action.type) {
    case "rec":
      return "rec";
    case "fol":
      return "fol";
    default:
      throw new Error("Unknown Action Type");
  }
}

type Props = {
  children: ReactNode;
};

export default function TabProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, "rec");

  return (
    <TabValueContext.Provider value={state}>
      <TabActionContext.Provider value={dispatch}>
        {children}
      </TabActionContext.Provider>
    </TabValueContext.Provider>
  );
}

export function useTabState() {
  const context = useContext(TabValueContext);

  if (context === null) {
    throw new Error("Can't find Tab Value Context");
  }

  return context;
}

export function useTabDispatch() {
  const context = useContext(TabActionContext);

  if (context === null) {
    throw new Error("Can't find Tab Action Context");
  }

  return context;
}
