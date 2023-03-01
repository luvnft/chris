import Header from './Header'
import TechSkills from './TechSkills/TechSkills'
import TechnicalProjects from './TechnicalProjects'
import ProfessionalExperience from './ProfessionalExperience'
import Education from 'app/resume/Education'
import SocialLink from 'components/SocialLink'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Resumé',
    description: 'Read through my resume if you are interested in hiring me!',
}

// sanity.io client & query
import {
    getImage,
    getTechData,
    getResume,
    getSocialLinks,
} from '../../lib/sanity'

export default async function Resume() {
    const pictureData = getImage()
    const techData = getTechData()
    const resumeData = getResume()
    const socialLinkData = getSocialLinks()

    const [chrisnowicki, tech, resume, socialLink] = await Promise.all([
        pictureData,
        techData,
        resumeData,
        socialLinkData,
    ])

    const headerData = {
        name: resume.name,
        email: resume.email,
        location: resume.location,
    }

    const links = [
        { name: 'pdf', url: resume.resumeURL },
        { name: 'Linkedin', url: socialLink.linkedin },
        { name: 'GitHub', url: socialLink.github },
    ]

    return (
        <div className="px-5 lg:px-0">
            <Header image={chrisnowicki} data={headerData} />

            {/* resume and social links */}
            <div className="mb-12 flex w-full flex-col items-center gap-4 md:flex-row">
                {links.map((link) => (
                    <SocialLink
                        key={link.name}
                        content={link.name}
                        icon={link.name.toLowerCase()}
                        url={link.url}
                        padding={4}
                        fontSize={'md'}
                    />
                ))}
            </div>

            {/* technical skills, projects, professional experience, and education */}
            <div>
                {/* Technical Skills */}
                <div className="-mb-8 flex w-full flex-col gap-4">
                    <div className="mb-1">
                        <h1 className="mb-2 text-center text-xl uppercase text-purple-light dark:text-purple-dark md:text-left md:text-2xl">
                            Technical Skills
                        </h1>
                        <TechSkills tech={tech} />
                    </div>
                </div>

                <TechnicalProjects projects={resume.projects} />
                {/* Professional Experience  */}
                <ProfessionalExperience
                    experience={resume.professionalExperience[0]}
                />

                {/* Education */}
                <Education education={resume.education} />
            </div>
        </div>
    )
}
