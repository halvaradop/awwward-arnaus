import { motion } from "framer-motion"
import { ProjectPreviewProps } from "../../@types/props"

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
    const { title, urlImage } = project

    return (
        <motion.article>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <img className="w-full aspect-[4/5]" src={urlImage} alt="preview project image" loading="lazy" draggable="false" />
        </motion.article>
    )
}

export { ProjectPreview }