'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navbar = ({children}: {children?: React.ReactNode}) => {
    const {data: session, status} = useSession()
    const path  = usePathname()

    if(path === "/signup" || path === "/signin" || path === "/verify-email")
        return ""
  return (
    <div>
        <header className="border border-b-2 h-14 border-gray-100 shadow-sm flex justify-end">
            <nav className="flex justify-between items-center gap-6 mx-2  text-blue-600">
                { 
                    (status === "unauthenticated") ? 
                    <>
                        <Link className="font-body hover:text-blue-800" href={'/signin'}>login</Link>
                        <Link className="font-body hover:text-blue-800" href={'/signup'}>signup</Link> 
                    </> :
                    <>
                        <Link className="font-body hover:text-blue-800" href={'/api/auth/signout'}>signout</Link>
                        {path !== "/landing" && <Link className="font-body hover:text-blue-800" href={'/landing'}>landing</Link> }  
                        {path !== "/joblist" && <Link className="font-body hover:text-blue-800" href={'/joblist'}>joblist</Link> }  

                    </>
                } 
                {children}
    

            </nav>
        </header>
    </div>
  )
}

export default Navbar