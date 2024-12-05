import "./styles/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const NoSSRWrapper = dynamic(() => import("./layout"), {
  ssr: false,
});

function Portfolio({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NoSSRWrapper>
      <Component {...pageProps} />
    </NoSSRWrapper>
  );
}

export default Portfolio;
