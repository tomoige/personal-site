import "./globals.css";

export const metadata = {
  title: "Thomas Cormican",
  description: "Computer Science student at Maynooth University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
