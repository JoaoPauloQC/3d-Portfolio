import { abtmecards, AbtMeCardType } from "@/data/data"
import { useState } from "react"

type Props = {
    children?: React.ReactNode
}

export const PhoneContext = ({children}: Props) =>{

    return (

        <div className="py-20">
            <div className="ml-auto bg--black bg-neutral-300 text-neutral-50 Poppins  mr-auto phone relative w-[350px] h-[700px] border-4 rounded-xl border-neutral-950">
                {children}
                <div className="absolute right-[] top-2 rawCentralize--x w-3 h-3 rounded-full bg-neutral-800 border-2 border-neutral-950"></div>
                <div className="absolute right-[-8.0px] top-20 w-2 h-10 bg-neutral-950 rounded-r-sm"> </div>
                <div className="absolute right-[-8.0px] top-32 w-2 h-10 bg-neutral-950 rounded-r-sm"> </div>
                <div className="absolute bottom-2.5 w-20 rawCentralize--x h-1 bg-neutral-700 rounded-sm"> </div>
            </div>
        </div>

    )

}

export const Phone = () => {
    return (
        <PhoneContext>
            <PhonePopUp classname="bg-red-700 text-neutral-50">
                <p> Scroll to see about me</p>
            </PhonePopUp>
            <div className="w-full h-full overflow-y-scroll scrollbar--none 2 px-4 pt-18">
                    
                  
                <div className="desc pt-10">
                    <h1 className="text-2xl pb-2">Who am I?</h1>
                    <p className="text-sm">I´m a high school student learning programming, mainly backend stuff nowadays</p>
                </div>
                <div className="cards--area grid gap-10 py-10">
                {abtmecards.map(e=>
                <>
                    <AbtMeCard card={e}></AbtMeCard>
                    <div className="separate--line w-full h-0.5 bg-neutral-400 rounded-full"></div>
                </>
                )}
                </div>
            </div>
        </PhoneContext>
    )
}


type PopUpProps = {
    children: React.ReactNode,
    classname?: string
    close?: boolean
}

export const PhonePopUp = ({children,classname}: PopUpProps) => {
    const [isVisible,setIsVisible] = useState(true)
    return (
        <div className={"absolute top-3.5 w-full p-2 "  + (isVisible? "": "hidden")}>
            <div className={"w-full h-10 flex gap-2 px-2 rounded-sm items-center " + classname}>
                <div className={"relative text-[10px]  "} onClick={()=>setIsVisible(false)}> X </div>
                {children}
            </div>
            
        </div>
    )
}



export const AbtMeCard = ({card}: {card: AbtMeCardType}) => {
    return (
        <div className="card">
            <div className="img-space border-2 rounded-xl border-neutral-300 overflow-hidden w-full object-cover">
                <img src={card.img.src} alt="" className="w-full" />
            </div>
            <div className="pt-10">
                <p>{card.text}</p>
            </div>
        </div>
    )
}