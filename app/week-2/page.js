import Header from "@/components/header";
import Image from "next/image";
import StudentInfo from "./student-info";

export default function Page() {
    return (
      <main className="min-h-screen bg-sky-200 w-full">
        <Header/>
        <h1>Shopping List</h1>
        <StudentInfo/>
      </main>
    );
  }