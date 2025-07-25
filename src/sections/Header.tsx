import { me, navElementArray } from "@/data/data"
import Link from "next/link"
import { div } from "three/src/nodes/TSL.js"

export default function Header () {

    return (

        <div className="header bg-neutral-900 ">
            <div className="wrapper ">
                <div className="header__content flex h-25 justify-between items-center">
                    <div className="header__left">
                        <div className="header__img h-16 w-16 overflow-hidden rounded-4xl">
                            <img src={me.img} alt="" className="max-w-full" />
                        </div>
                    </div>
                    <div className="header__right flex gap-10">
                            {navElementArray.map(e =>
                                <Link href={e.link} className="Poppins upscale">{e.name}</Link>
                            )}
                        </div>
                </div>
            </div>
        </div>

    )

}