import { Project } from "../@types/types";
import projectPreview1 from "../../public/images/project1.png"
import projectPreview2 from "../../public/images/project2.png"
import projectPreview3 from "../../public/images/project3.png"

const projectsPreview: Project[] = [
    { title: "01 Example", urlImage: projectPreview1 },
    { title: "02 Example", urlImage: projectPreview2 },
    { title: "03 Example", urlImage: projectPreview3 },
]

const skillsList: string[][] = [["HTML", "CSS", "JavaScript", "TailwindCSS", "Typescript"], ["Java", "Framer Motion", "Redux Toolkit", "React Router DOM", "Figma"]]
export { projectsPreview, skillsList }