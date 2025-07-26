import { textsObj } from "@/data/data"
import { useState } from "react"

export default function MeText () {

    const [text, setText] = useState(textsObj['studies'])

    return (
        <div className="flex flex-col max-w-4/5">
            <p>{text}</p>
            <div className="flex justify-center  pt-10 gap-10">
            {Object.entries(textsObj).map(([key,value]) => (
                <button className="cursor-pointer" key={key} onClick={() => setText(value)}>{key}</button>
            ))}
            </div>
        </div>

    )
}