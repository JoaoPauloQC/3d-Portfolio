import { useEffect, useRef, useState } from "react"

type Props = {
    children: React.ReactNode
}

export const BgOnSee = ({children}: Props) =>{
    const [isVisible,setIsVisible] = useState(false)
    const divRef = useRef(null)
    const construct = (()=>{
        const observer = new IntersectionObserver((e)=>{
            e.forEach(e =>{
                if(e.isIntersecting){
                    setIsVisible(true)
                }
            })
        },{threshold:0.7})
        if(divRef.current){
            observer.observe(divRef.current)
        }
    })
    useEffect(()=>{
        construct()
    },[])


    return (
        <div ref={divRef} className={`relative `}>
            <div className="absolute inset-0 bg-neutral-900"></div>
                <div className={`absolute inset-0 bg-neutral-100 ${isVisible? "opacity-100" : "opacity-0"}`}></div>
                    <div className="relative">
                    {children}
                    </div>
               
        </div>
    )

}