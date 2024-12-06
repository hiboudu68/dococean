import React from "react";
import Home from "../pages/index";
import Settings from "../pages/settings";
import Info from "../pages/info";
import "@/pages/styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
