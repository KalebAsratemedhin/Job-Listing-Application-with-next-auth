"use client"

import Link from "next/link";

export default function Home() {

  return (
    <>
    <header className="border border-b-2 h-14 border-gray-100 shadow-sm flex justify-end">
        <nav className="flex justify-between items-center gap-6 mx-2  text-blue-600">
          <Link className="font-body hover:text-blue-800" href={'/signin'}>login</Link>
          <Link className="font-body hover:text-blue-800" href={'/signup'}>signup</Link>

        </nav>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
        <h1 className="font-heading font-medium text-4xl mb-6">Welcome to the JobListing Application</h1>
        <Link className="text-blue-800 underline flex justify-center font-heading" href="/joblist">job list</Link>
       
     </div>
    </main>
    </>
    
  );
}
