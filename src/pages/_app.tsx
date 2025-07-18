import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import PageViews from "@/components/PageViews";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"Neyo"}
        description={"Neyo's personal bio"}
        canonical={`https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "Aiden.gg",
          description: "Aiden's personal site",
          images: [
            {
              url: "https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/krd90h9v.png",
              alt: "Ocean Banner",
            },
          ],
        }}
      />
      <Component {...pageProps} />
      <PageViews />
    </>
  );
}
