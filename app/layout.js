import "./globals.css";
import Mainheader from "../components/Main-header";
import ReactQueryProvider from "../app/providers/ReactQueryProvider";

export const metadata = {
  title: "Defor's Portfolio",
  description: "next js portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <ReactQueryProvider>
          <Mainheader />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
