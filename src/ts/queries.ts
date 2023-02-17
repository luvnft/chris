export const siteSettings: string = `*[_type == "settings"] {
  "profilePicture": profilePicture.asset._ref,
  "showProjects": featuredProjects.showProjects
}`

export const tech: string = '*[_type == "tech"] {name, category, link, show}'

export const featuredProjects: string = `*[_type == "settings"] {
  "projects": featuredProjects.featured[]->{
      "name": projectName,
      "slug": slug.current,
      excerpt,
      gitHubUrl,
      liveSiteUrl,
      "image": image.asset._ref,
      "tags": tags[]->{
        name
      },
  },
}`

export const projects: string = `*[_type == "projects"]{
  projectName,
    dateCreated,
    "tags": tags[]->{
        name
      },
    gitHubUrl,
    liveSiteUrl
}`

export const links = `*[_type == "settings"] {
  "links": navigation.links,
  "showResume": navigation.showResume,
}`

export const resume = `*[_type == "resume"] {
  name,
  email,
  github,
  linkedin,
  "resumeURL": resume.asset->url,
}`

export const technicalProjects = `*[_type == "resume"] {
  "projects": technicalProjects[]->{
    projectName,
    role,
    "liveSiteURL": liveSiteUrl,
    "gitHubURL": gitHubUrl,
    "tags": tags[]->{
      name
    },
      "projectDetails": projectDetails[].children[].text
  }
}`

export const professionalExperience = `*[_type == 'professionalExperience'] {
  company,
  companyURL,
    position,
    startDate,
    endDate,
    "accomplishments": accomplishments[].children[].text
}`

export const education = `*[_type == 'education'] {
  school,
  schoolURL,
    degree,
    dateEarned,
    displayDate,
    "details": details[].children[].text
} | order(dateEarned desc)`

export const Picture = `*[_type == "settings"] {
  "chrisnowicki": profilePicture.asset._ref
}`
