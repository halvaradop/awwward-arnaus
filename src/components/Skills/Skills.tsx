import { skillsList } from "../../utils/data"
import { SkillsLine } from "./SkillsLine"

const Skills = () => {

    return (
        <div className="w-full overflow-hidden">
            <SkillsLine skills={skillsList[0]} />
            <SkillsLine skills={skillsList[1]} />
        </div>
    )
}

export { Skills }