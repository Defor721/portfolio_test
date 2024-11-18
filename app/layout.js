import "./globals.css";
import Mainheader from "../components/Main-header";

export const metadata = {
  title: "Defor's Portfolio",
  description: "next js portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9B6HE3CWDK"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-9B6HE3CWDK');
      </script>
      <body className="layout">
        <Mainheader />
        {children}
      </body>
    </html>
  );
}
