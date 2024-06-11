import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-700 w-full">
      <div className="text-black border-black border justify-center py-2 text-lg flex font-mono">
        CPRG 306 Section D
      </div>
      <div className="flex-col  p-4 divide-y-4 bg-blue-950">
      <Link href="/week-2" className="">
      <div className="text-blue-500 text-lg hover:underline font-mono shadow-md">Week 2 Assignment</div>
      </Link>
      <Link href="/week-3" className="">
      <div className="text-blue-500 text-lg hover:underline font-mono shadow-md">Week 3 Assignment</div>
      </Link>
      <Link href="/week-4" className="">
      <div className="text-blue-500 text-lg hover:underline font-mono shadow-md">Week 4 Assignment</div>
      </Link>
      <Link href="/week-5" className="">
      <div className="text-blue-500 text-lg hover:underline font-mono shadow-md">Week 5 Assignment</div>
      </Link>
      </div>  
        
    </main>
  );
}
