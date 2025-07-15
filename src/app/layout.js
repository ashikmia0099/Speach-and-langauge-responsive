import "./globals.css";
import { Lora } from 'next/font/google';
import CustomNavbar from "@/Shared/CustomNavbar";
import Footer from "@/Shared/Footer";
import { AuthProvider } from "../../Context/AuthContext/AuthContext";

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'], // ✅ Use normal style instead of italic
  variable: '--font-lora',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="font-lora"> 
        <AuthProvider>
          <CustomNavbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
