export type ProjectType = {
  name: string
  description: string
  liveSiteUrl: string
  gitHubUrl: string
  image: string
  tags: string[]
}

export type MetricsType = {
  tweetCount: number
  githubCommits: number
  githubRepos: number
}

export type githubMetricsType = {
  commits: number
  repos: number
}

export type OGImageType = {
  url: string
}

export type FrontMatter = {
  title: string
  description?: string
  date: Date
  published: boolean
  featured: boolean
  cover?: string
  slug: string
  slugAsParams: string
  readingTime?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Markdown<T = Record<string, any>> = {
  markdown: string
  frontMatter: FrontMatter & T
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TransformedMarkdown<T = Record<string, any>> = {
  html: string
  frontmatter: T
}
