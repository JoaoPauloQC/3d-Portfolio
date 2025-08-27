import miniMe from '@/../public/assets/aboutme/miniMe.jpg'
import { StaticImageData } from 'next/image'
import { start } from 'repl'
import me4x4 from '@/../public/assets/aboutme/me4per4.jpg'
import githubProfile from "@/../public/assets/aboutme/githubProfile.png"
type navElement = {

    name: string,
    link: string,

}

export type {navElement}

const home : navElement = {
    name: "Home",
    link: "/"
} 
const aboutme : navElement = {
    name: "About Me",
    link: "/aboutme"
} 
const knowledge : navElement = {
    name: "Knowledge",
    link: "/knowledge"
} 

let navElementArray : navElement[] = [];
navElementArray.push(home)
navElementArray.push(aboutme)
navElementArray.push(knowledge)

export {navElementArray}

type Profile = {
    img: string,
    name: string

}

export const me: Profile = {
    img: "/assets/image 1.png",
    name: "MyProfileImg"
} 


const studies : string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
const history : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const textsObj = {
    studies : studies,
    history: history
}


type AbtMeCardType = {
    text: string,
    img: StaticImageData
}
const Start: AbtMeCardType = {
    text: "This all started with a young child that grew in a world of games and mediafire stuffs",
    img: miniMe
}
const enteringIF: AbtMeCardType = {
    text: "Then I grow up and with my effort, I passed on Insituto Federal de São Paulo, and started learning programming",
    img: me4x4
}

const githubContext: AbtMeCardType = {
    text: "Then I grow up and with my effort, I passed on Insituto Federal de São Paulo, and started learning programming",
    img: githubProfile
}

export const abtmecards: AbtMeCardType[] = [Start,enteringIF,githubContext]

export type {AbtMeCardType}