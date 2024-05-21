import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-200 w-full">
      <Header/>
      <div className="text-black bg-rose-500 flex justify-center py-2" >CPRG 306 Section D</div>
      <div>
      <Link href="/week-2">
      <span className="text-blue-500 text-lg hover:underline">Week 2 Assignment</span>
      </Link>
      </div>
    </main>
  );
}
