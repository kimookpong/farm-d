"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

// export interface ProvidersProps {
//   children: React.ReactNode;
//   themeProps?: ThemeProviderProps;
// }

// export function Providers({ children, themeProps }: ProvidersProps) {
//   return (
//     <NextUIProvider>
//       <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
//     </NextUIProvider>
//   );
// }

const NextAuthProvider = ({ children, themeProps }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export { NextAuthProvider };
