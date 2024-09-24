import '@/app/ui/global.css';
import { roboto,sofadi,playpen } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${playpen.className} antialiased`}>{children}</body>
    </html>
  );
}
