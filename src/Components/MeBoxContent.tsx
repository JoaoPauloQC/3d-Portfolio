import { me } from "@/data/data";
import MeText from "./MeText";

export default function MeBoxContent () {

    return (
        <div className="MeBox flex gap-10">
            <div className="MeBox__left rounded-2xl MeBox__img w-32 h-64">
                <img src={me.img} alt="" className="object-cover rounded-2xl w-full h-full" />
            </div>
            <MeText></MeText>
        </div>
    )

}