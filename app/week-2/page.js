import Image from "next/image";
import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
      <main className="min-h-screen bg-amber-700 w-full">
        <div>
        <h1>Shopping List</h1>
        <StudentInfo/>
        <Link href={"/."} className="hover:underline font-mono shadow-md">
          Go Back
        </Link>
        </div>
      </main>
    );
  }