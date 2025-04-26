import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <div className="background border-t-2 border-black p-4">
        <h3 className="text-center">
          All Rights Reserved. Made with 💓 by Aaradhya
        </h3>
      </div>
    </>
  );
}
