import "./globals.css";
import Mainheader from "../components/Main-header";
import Head from "next/head";

export const metadata = {
  title: "Defor's Portfolio",
  description: "next js portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9B6HE3CWDK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9B6HE3CWDK');
            `,
          }}
        />
      </Head>
      <body className="layout">
        <Mainheader />
        {children}
      </body>
    </html>
  );
}
