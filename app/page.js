import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-200 w-full">
      <Header/>
      <div className="text-black bg-rose-500 flex justify-center py-2" >CPRG 306 Section D</div>
      <Footer/>
    </main>
  );
}
