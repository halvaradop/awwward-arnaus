import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SkillsLineProps } from "../../@types/props"

const SkillsLine = ({ skills }: SkillsLineProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        smooth: 100,
        offset: ["start end", "end start"]
    })
    const scroll = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"])

    return (
        <motion.div className="w-full min-w-max py-5 flex items-center justify-between gap-x-14 text-black font-bold" style={{ x: scroll }} ref={ref}>
            {skills.map((skill, key) => (
                <span key={key}>{skill}</span>
            ))}
        </motion.div>
    )
}

export { SkillsLine }