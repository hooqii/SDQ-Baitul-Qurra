import "./globals.css";
import { Inter } from "next/font/google";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SDQ Baitul Qurra'",
  description:
    "Created as a school project, this website is a collection of information about SDQ Baitul Qurra' Abdya, a school located in Aceh Besar, Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
