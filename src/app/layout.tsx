import type { Metadata } from "next";
import { Toaster } from "sonner";
import GridBackground from "@/components/background/GridBackground";
import { professionalTitle } from "@/data/portfolio";
import "./globals.css";

const title = `Anurag Gaikwad | ${professionalTitle}`;
const description = `Portfolio of Anurag Gaikwad, a ${professionalTitle} building data pipelines, databases, and APIs with Python, PostgreSQL, and AWS.`;

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [
      {
        url: "/portfolio-logo-circular.png",
        type: "image/png",
        sizes: "1254x1254",
      },
    ],
    shortcut: "/portfolio-logo-circular.png",
    apple: "/portfolio-logo-circular.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Anurag Gaikwad",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GridBackground />
        <div className="relative z-10">{children}</div>
        <Toaster
          position="bottom-center"
          theme="light"
          closeButton
          toastOptions={{
            style: {
              background: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              boxShadow:
                "0 0 20px rgba(255, 255, 255, 0.22), 0 8px 24px rgba(0, 0, 0, 0.28)",
              color: "#050505",
              fontSize: "0.95rem",
              justifyContent: "center",
              textAlign: "center",
            },
          }}
        />
      </body>
    </html>
  );
}
