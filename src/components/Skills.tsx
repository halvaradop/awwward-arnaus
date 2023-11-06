import { skillsList } from "../utils/data"
import { SkillsLine } from "./SkillsLine"

const Skills = () => {

    return (
        <div className="w-full mb-96 overflow-hidden">
            <SkillsLine skills={skillsList[0]} />
            <SkillsLine skills={skillsList[1]} />
        </div>
    )
}

export { Skills }