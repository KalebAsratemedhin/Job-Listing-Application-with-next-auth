"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const LandingPage = () => {
    const session = useSession()

    if (session.data )
        return (
            <main className='h-full'>
                <header className="border border-b-2 h-14 border-gray-100 shadow-sm flex justify-end">
                    <nav className="flex justify-between items-center gap-6 mx-2  text-blue-600">
                        <Link className="hover:text-blue-800" href={'/joblist'}>joblist</Link>
                        <Link className="hover:text-blue-800" href={'/api/auth/signout'}>signout</Link>

                    </nav>
                </header>
                <section className='flex mt-10 flex-col items-center justify-center'>
                    <h1 className='font-heading mb-5 font-bold text-2xl'>Welcome {session.data?.user?.name}</h1>

                    <div className='rounded-md border border-light-grey shadow-md py-6 px-10 flex '>
                        <div>
                            {session.data?.user?.image}
                        </div>
                        <div>
                            <p className='font-body font-normal text-base'>Name: {session.data?.user?.name}</p>
                            <p className='font-body font-normal text-base'>Email: {session.data?.user?.email}</p>
                        
                        </div>

                    </div>
                </section>
            </main>
        )
    else return <h1>{session.status}</h1>
}

export default LandingPage