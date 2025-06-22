import { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  description: 'Learn App Router',
  openGraph: {
    description:
      'Learn App Router',
    images: [],
    title: 'App Router',
  },
  title: {
    default: 'App Router',
    template: '%s | App Router',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
