import { projectsPreview } from "../../utils/data"
import { ProjectPreview } from "./ProjectPreview"

const ProjectsListPreview = () => {

    return (
        <section className="grid grid-cols-3 gap-x-5">
            {projectsPreview.map((project, key) => (
                <ProjectPreview key={key} project={project} />
            ))}
        </section>
    )
}

export { ProjectsListPreview }