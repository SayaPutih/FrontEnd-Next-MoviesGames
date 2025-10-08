import type { AppProps } from "next/app";
import React from "react";
import "./globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Kalau halaman punya layout custom (misalnya App.layout = WithEvanderLayout)
  const Layout = (Component as any).layout || ((page: React.ReactNode) => <>{page}</>);

  return Layout(<Component {...pageProps} />);
}
