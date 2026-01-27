import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import favicon from "@/app/favicon.ico";

export const metadata = {
  title: "Al-Hamra | Trade and Development",
  description: "Indonesia B2B E-commerce Platform",
  appleWebApp: {
    title: "Al-Hamra | Trade and Development",
    icon: favicon,
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
