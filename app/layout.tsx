import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover delicious recipes with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <h2>🍽️ NextBites</h2>
          <a href="/">Home</a>
        </nav>

        {children}
      </body>
    </html>
  );
}