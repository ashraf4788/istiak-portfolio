import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "UI/UX Designer Portfolio",
  description: "Crafting meaningful digital experiences through human-centered design and systematic product architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-[#F7F9F7] text-[#17231F]`}>
        {children}
      </body>
    </html>
  );
}
