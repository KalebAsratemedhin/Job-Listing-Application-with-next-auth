"use client"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"
import PinEntry from "./PinEntry"

const VerifyEmail = ({email}: {email: string}) => {
    const session = useSession()

    const [values, setValues] = useState<string[]>(Array(4).fill('')); 
    const handleContinue = () => {
        const OTP = values.join("")
        email  = email.toWellFormed()
        console.log("email, otp", {email, OTP})

        if(email && OTP){
            console.log("email, otp", {email, OTP})
            signIn('verify', {email, OTP, callbackUrl: '/landing'})

        }
    }

    const hanldeSetValues = (newvalue: string[]) => {
        setValues(newvalue)
    }

    // if(isSuccess)
    //     return <h1>Success</h1>
    // if(isError)
    //     return <h1>Error</h1>

    // if(isLoading)
    //     return <h1>Is loading .</h1>

  return (
    <div className="w-96 flex flex-col items-center gap-16 justify-center">
        
        
        <div className="w-96 flex flex-col items-center gap-12">
            <h1 className="font-heading text-dark-blue font-black text-3xl">Verify Email</h1>
            <p className="text-justify text-grey-subtitle font-body font-normal text-sm">We've sent a verification code to  the email address you provided. To complete the verification process,
                please enter the code here.
            </p>
        </div>
        <div className="w-96 flex flex-col gap-6">
            <div className="">
                <PinEntry handleSetValues={hanldeSetValues} values={values}></PinEntry>
           </div>
            <p className="font-body text-sm font-normal text-grey-subtitle">You can request to <span className="font-body text-sm font-semibold text-purple-tag">Resend code</span> in <span className="font-body text-sm font-semibold text-purple-tag">0:30</span> </p>
            <button onClick={handleContinue} type='button' className='bg-purple-tag text-white  font-body font-normal w-full rounded-full h-12'>Continue</button>

        </div>
    </div>
  )
}
 
export default VerifyEmail