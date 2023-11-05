import hero from "../../public/images/hero.png"
import { ProjectsListPreview } from "../components/ProjectsListPreview"
import { TitleSection } from "../components/TitleSection"

const HomePage = () => {

    return (
        <div className="mt-4 mb-20 grid gap-y-20 overflow-hidden">
            <section className="py-5 relative">
                <h1 className="w-3/4 text-2xl text-start font-semibold relative z-10">
                    I'm Hernan Alvarado, a software developer & designer based. 
                    <span className="mx-1 underline">Available</span> 
                    for freelance & collaborations.
                </h1>
                <img className="absolute -top-1/3 -right-1/3" src={hero} alt="hero image" loading="lazy" draggable="false" />
            </section>
            <section>
                <TitleSection className="mb-10" title="Projects" hasLine={true} />
                <ProjectsListPreview />
            </section>
            <section>
                <TitleSection title="About Me" hasLine={true} />
                <div>
                    <p>
                        I'am a software engineer and designer working on various projects. My skillset
                        lies on creating branding packages & websites to deliver the full online experience
                        for new and also veteran
                        businesses.
                    </p>
                </div>
            </section>
        </div>
    )
}

export { HomePage }