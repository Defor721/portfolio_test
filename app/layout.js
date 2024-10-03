import "./globals.css";
import Mainheader from "../components/Main-header";

export const metadata = {
  title: "Defor's Portfolio",
  description: "next js portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <Mainheader />
        {children}
      </body>
    </html>
  );
}
