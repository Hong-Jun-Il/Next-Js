"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};
export default function RQProvider({ children }: Readonly<Props>) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          refetchOnReconnect: false,
          retryOnMount: true,
          staleTime: 60 * 1000,
          gcTime: 300 * 1000,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NODE_ENV === "development"}
      />
    </QueryClientProvider>
  );
}
