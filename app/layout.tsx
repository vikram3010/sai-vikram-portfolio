import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Vikram Karna Ananth Balasingam | Data Science Portfolio",
  description:
    "Portfolio of Sai Vikram Karna Ananth Balasingam, MS Data Science student at the University of Maryland, College Park, focused on data science, machine learning, data engineering, NLP, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}