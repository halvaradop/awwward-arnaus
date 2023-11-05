import { motion } from "framer-motion"
import { TitleSectionProps } from "../@types/props"
import { merge } from "../utils/merge"

const TitleSection = ({ className = "", title, hasLine = false }: TitleSectionProps) => {

    return (
        <h2 className={merge("text-2xl font-semibold capitalize", className)}>
            {title}
            { hasLine && <motion.span className="w-full h-0.5 mt-2 block rounded-full bg-black" />}
        </h2>
    )
}

export { TitleSection }