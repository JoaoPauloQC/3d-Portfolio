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
