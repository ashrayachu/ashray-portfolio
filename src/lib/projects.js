import { desc } from 'framer-motion/client'
import realEstate from '../assets/image1'
import Sangeeth from '../assets/sangeethbox'
import Cosmos from '../assets/cosmos'
import Blog from '../assets/mern-blog'
import Pdf from '../assets/pdfExtracter'




const projects = [
    {
        name: "Sangeeth Box",
        lang: ["reactjs", "tailwindcss","redux", "express", "nodejs", "mongodb"],
        image: Sangeeth,
        desc:"Music player application developed using MERN stack technology. The application can play and download any music",
        live:"https://sangeethbox.netlify.app",
        gitLink:"https://github.com/ashrayachu/SangeetBox_1"
    },
    {
        name: "Cosmos",
        lang: ["reactjs", "css", "express", "nodejs", "mongodb"],
        image: Cosmos,
        desc:"Cosmos is a website used for camping purpose. It is used to find campgrounds near you and also add your own campground",
        live:"https://evening-taiga-97235.herokuapp.com/",
        gitLink:"https://github.com/ashrayachu/cosmos"
    },
    {
        name: "Blog",
        lang: ["reactjs", "tailwindcss", "express", "nodejs", "mongodb"],
        image: Blog,
        desc:"Blog is a website used to post blogs of users.",
        gitLink:"https://github.com/ashrayachu/mern-blog"
    },
    {
        name: "Pdf-Extracter",
        lang: ["reactjs", "tailwindcss", "express", "nodejs", "mongodb", "pdflib"],
        image: Pdf,
        desc:"PDF-Extracter is a MERN stack application that allows users to extract specific pages from a PDF file and generate a new PDF with only the selected pages. Built using React for the frontend and Node.js/Express with pdf-lib for PDF manipulation, the app provides a seamless way to customize and download PDFs efficiently. ",
        gitLink:"https://github.com/ashrayachu/form-extracter"
    },

]

export default projects