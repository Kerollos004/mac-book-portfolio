// hello text

interface char{
    id: number,
    text:string
}
interface hello {
    p: string,
    h1:char[]
}
export const helloText: hello = {
    p: "hello , this is kerollos and this is my",
    h1:[
        {text: "p", id: 1} ,
        {text: "o", id: 2} ,
        {text: "r", id: 3} ,
        {text: "t", id: 4} ,
        {text: "f", id: 6} ,
        {text: "o", id: 7} ,
        {text: "l", id: 8} ,
        {text: "i", id: 9} ,
        {text: "o", id: 10}
]
}
//nav menu


//about me
interface paragraph {
    id: number,
    p:string
}
export const about:paragraph [] = [
    {
        id: 1,
        p: "My journey with programming started as a self-taught path driven by curiosity and the desire to build real things, not just follow tutorials. Coming from a non-technical academic background, I had to rely heavily on discipline, consistency.",
    },
    {
        id: 2, 
        p:"During my frontend journey, I focused on building solid foundations using modern tools and practices. I worked with technologies like JavaScript, React, Next.js, and Framer Motion, paying close attention to clean UI, performance, and user experience. "
    },
    {
        id: 3, 
        p:"Currently, I’m transitioning into the backend world by starting the Node.js track, with the goal of becoming a well-rounded full-stack developer. My focus is on understanding how systems work behind the scenes, building scalable APIs, handling data, and connecting frontend applications to real backend logic"
    }
]
// export const TitleClass: string = "title text-3xl capitalize mb-5  text-blue-400 relative "
interface service {
    id: number,
    icon:string ,
    name: string,
    desc:string
}

export const services: service[] = [
{
    id: 1,
    icon: "imgs/html-5.png",
    name: "Frontend Development",
    desc: "Building modern, responsive web applications using React.js and Next.js with a focus on performance, clean code, and reusable components."
},
{
    id: 2,
    icon: "imgs/database-file.png",
    name: "Backend Development",
    desc: "Building and learning backend systems using  Firebase , node js , express js and mongo db, focusing on authentication and databases  "
},
{
    id: 3,
    icon: "imgs/ux.png",
    name: "UI / UX",
    desc: "Creating responsive and user-friendly interfaces using Bootstrap and Tailwind CSS, with attention to layout, usability, and consistency."
}

]


//main class
export const mainClass:string = "w-11/12 h-4/5 md:w-2/3 md:h-2/3 z-20  bg-white  relative top-1/2 left-1/2   -translate-x-1/2  -translate-y-1/2" 

interface skill {
    name: string ,
    img: string,
}

export const frontSkills: skill[] = [
    {  name: "html5", img: "/imgs/html-5.png" },
    {  name: "css3", img: "/imgs/CSS3.png" },
    {  name: "javascript", img: "/imgs/js.png" },
    {  name: "bootstrap", img: "/imgs/Bootstrap.png" },
    {  name: "tailwind css", img: "/imgs/Tailwind CSS.png" },
    {  name: "react js", img: "/imgs/react.png" },
    {  name: "next js", img: "/imgs/Next.js.png" },
    {  name: "redux toolkit", img: "/imgs/Redux.png" },
]

export const backSkills: skill[] = [
    { name: "firebase", img: "/imgs/Firebase.png" },
    { name: "node js", img: "/imgs/Node.js.png" },
    { name: "mongo db", img: "/imgs/MongoDB.png" },
    { name: "express js", img: "/imgs/Express.png" },
]

export const tools: skill[] = [
    { name: "postman", img: "/imgs/Postman.png" },
    { name: "git", img: "/imgs/Git.png" },
    { name: "github", img: "/imgs/GitHub.png" },
]

interface projects {
    name:string ,
    img: string,
    desc: string,
    demo: string
    repo: string,
    techs: string[];
}

export const projects: projects[] = [
{
    name: "Mr Ecommerce",
    img: "/imgs/mr.png",
    desc: "A fully responsive e-commerce website with a complete shopping cart and checkout system built using HTML, CSS, Bootstrap, and GSAP.",
    demo: "https://mr-eta-puce.vercel.app/",
    repo: "https://github.com/Kerollos004/mr",
    techs: [
        "/imgs/html-5.png",
        "/imgs/css-3.png",
        "/imgs/js.png",
        "/imgs/Bootstrap.png"
    ]
},
{
    name: "Admin Panel",
    img: "/imgs/panel.png",
    desc: "A fully responsive admin panel featuring a dashboard, products page, users management, and authentication system built with React and Firebase.",
    demo: "https://admin-pannel-9o57.vercel.app/",
    repo: "https://github.com/Kerollos004/admin-pannel",
    techs: [
        "/imgs/react.png",
        "/imgs/css-3.png",
        "/imgs/Firebase.png"
    ]
},
{
    name: "Food App",
    img: "/imgs/food.png",
    desc: "A simple food application built to learn React and React Router.",
    demo: "https://food-app-pied-two.vercel.app/",
    repo: "https://github.com/Kerollos004/food-app",
    techs: [
        "/imgs/react.png",
        "/imgs/css-3.png"
    ]
},
{
    name: "Movie App",
    img: "/imgs/movs.png",
    desc: "A fully responsive movie application built to learn React and React Router.",
    demo: "https://movies-app-six-swart.vercel.app/",
    repo: "https://github.com/Kerollos004/movies-app",
    techs: [
        "/imgs/react.png",
        "/imgs/css-3.png"
    ]
},
{
    name: "Shopping Cart",
    img: "/imgs/cart.png",
    desc: "A fully responsive shopping cart application with checkout functionality built to learn React, Redux Toolkit, and Tailwind CSS.",
    demo: "https://shopping-cart-redux.vercel.app/",
    repo: "https://github.com/Kerollos004/shopping-cart-redux",
    techs: [
        "/imgs/react.png",
        "/imgs/Redux.png",
        "/imgs/Tailwind CSS.png"
    ]
},
{
    name: "Mahmoud Khalil Museum",
    img: "/imgs/mues.png",
    desc: "A fully responsive graduation project website designed for an archaeology faculty student.",
    demo: "https://mahmoud-khalil-museum.vercel.app/",
    repo: "https://github.com/Kerollos004/mahmoud-khalil-museum",
    techs: [
        "/imgs/html-5.png",
        "/imgs/css-3.png",
        "/imgs/js.png",
        "/imgs/Bootstrap.png"
    ]
}
]


// contact





export interface User {
    name: string,
    email: string,
    message:string,
}





import { type Icon ,  Envelope , TelephoneFill , GeoAltFill } from "react-bootstrap-icons"
interface contact {
    icon: Icon,
    tool: string,
    href:string
}


export const contacts: contact[] = [
    {
        icon: Envelope,
        tool: "email address",
        href:"mailto:meladkerollos0@gmail.com"
    },
    {
        icon: TelephoneFill ,
        tool: "phone",
        href:"tel:+201270354240"
    },
    {
        icon: GeoAltFill ,
        tool: "location",
        href:"https://maps.app.goo.gl/1be5jK6jCeBjZCss8"
    }
]



//hobbies

interface Favourite{
    name: string,
    img:string
}

export const favourites: Favourite[] = [
    {
        name: "favourite city",
        img:"/imgs/city.jpeg"
    },
    {
        name: "favourite team",
        img:"/imgs/team.jpg"
    },
    {
        name: "favourite player",
        img:"/imgs/playr.jpg"
    },
    {
        name: "favourite movie",
        img:"/imgs/movie.jpg"
    },
    {
        name: "favourite actor",
        img:"/imgs/actor.webp"
    },
    {
        name: "favourite artist",
        img:"/imgs/singer.gif"
    }
]

//rock paper 
interface Image{
    id: number,
    name:string,
    src:string
}

export const images: Image[] = [
    { id:1 ,name:"rock" , src: "/imgs/rock.png"},
    { id:2, name:"paper" ,   src: "/imgs/paper.jpeg" },
    { id:3 , name:"scissors",src: "/imgs/scissors.png"},
]

//tic tac 
export interface Square{
    id: number,
    text:string
}

//media
interface media {
    id: number,
    ref: string,
    text:string
}

export const medias: media[] = [
    { id: 1, ref: "https://www.facebook.com/kerollos.melad.2025?mibextid=ZbWKwL", text: "facebook" },
    { id: 4, ref: "https://wa.me/+201270354240", text: "whatsapp" },
    { id: 2, ref: "https://www.tiktok.com/@kerollos.melad46?_r=1&_t=ZS-956Iw3qecgn", text: "tiktok" },
    { id: 3, ref: "https://www.linkedin.com/in/kerollos-melad-6660423b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", text: "linkedin" },
]