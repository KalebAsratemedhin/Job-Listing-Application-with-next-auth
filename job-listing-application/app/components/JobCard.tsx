
"use client";
import JobPost from "@/lib/types/jobPost"
import { useRouter } from "next/navigation"
import Tag from "./Tag";

const JobCard = ({jobPost}: {jobPost: JobPost}) => {
    const titleTokens = jobPost.title.split(" ")
    const title = titleTokens.map(token => {

        return token[0].toUpperCase() + token.substring(1)
    
    }).join(" ")

    const router = useRouter()
    const handleClick = () => {
        router.push(`/dashboard/${jobPost.id}`);
        
    }   
    const colors = [['text-orange-tag', 'bg-orange-tag', 'border-orange-tag'], ['text-purple-tag', 'bg-purple-tag', 'border-purple-tag']];


  return (
    <div className="p-6 mt-7 border rounded-3xl bg-white grid grid-cols-10 gap-2 hover:bg-gray-300" onClick={handleClick}>
        <div className="rounded-full col-span-1">
            <img src={jobPost.logoUrl} alt="logo" width={60} height={60} />

        </div>
        <div className="col-span-9">
           
            <div className="mb-2">
                <h1 className="font-body text-dark-blue">{ title}</h1>
                <h2 className="text-grey-subtitle font-body">{jobPost.orgName} <span className="text-gray-500 text-2xl relative bottom-1 ">.</span> {jobPost.location.join(", ")}</h2>
            </div>
            <div>
                <p className="font-body text-dark-blue"> 
                    {jobPost.description}
                </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <div className="border-r-2 pr-3"><Tag type="filled" text="text-green-tag" bg="bg-green-tag" name={jobPost.opType == "inPerson" ? "In Person" : "Remote"} /></div>
                
               {jobPost.categories.map((category, index) => {
                const color = colors[index % colors.length];

                return <Tag type="bordered" key={index} text={color[0]} bg={color[1]}  border={color[2]} name={category} />
                
    
                })}
            </div>
        </div>
        
        
    </div>
  )
}

export default JobCard