import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Header />
        <Main />
        <div className="background border-t-2 border-black p-4">
          <h3 className="text-center">
            All Rights Reserved. Made with 💓 by Aaradhya
          </h3>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
