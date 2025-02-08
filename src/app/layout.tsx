import "./globals.css";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientOnlyWrapper>{children}</ClientOnlyWrapper>
      </body>
    </html>
  );
}
