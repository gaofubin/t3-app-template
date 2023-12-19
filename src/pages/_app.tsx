import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/components/layout";

import "@/styles/globals.css";
import { ModalProvider } from "@/providers/modal-provider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

        <Layout>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
