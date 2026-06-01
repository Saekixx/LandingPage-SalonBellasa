import { Navbar } from "@/components/public/nav-bar";
import Footer from "@/components/public/footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-slate-50/30">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
