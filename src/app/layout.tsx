import React from "react";
import type { Metadata } from "next";
import "@styles/global.css";

export const metadata: Metadata = {
    title: "Meetcode",
    description: "online platform for coding interview"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
