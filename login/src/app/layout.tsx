import type { Metadata } from "next";
import "./globals.scss";
import AuthSession from "@/components/AuthSession";
import RQProvider from "@/components/RQProvider";

export const metadata: Metadata = {
  title: "홈",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <AuthSession>
          <RQProvider>{children}</RQProvider>
        </AuthSession>
      </body>
    </html>
  );
}
