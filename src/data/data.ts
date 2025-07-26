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
