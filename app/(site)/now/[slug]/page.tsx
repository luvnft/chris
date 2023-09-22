import { getPostByID } from '@/sanity/sanity-queries'
import Post from '@/components/NowPosts/Post'
import Link from 'next/link'
import Footer from '@/components/NowPosts/Footer'
import Button from '@/components/NowPosts/Button'

type NowProps = {
  params: {
    slug: string
  }
}

export default async function Now({ params }: NowProps) {
  const slug = params.slug
  const post = await getPostByID(slug)

  return (
    <section className="mx-6 mt-20 flex flex-col items-center md:mx-0 md:mt-32">
      {/* now content */}
      <Post post={post.current} />

      {/* pagination */}
      {post.newer ||
        (post.older && (
          <div className="mt-16 flex w-full justify-between">
            <Link href={`/now/${post.newer ? post.newer.slug : ''}`} prefetch>
              <Button data={post.newer} direction="left" />
            </Link>
            <Link href={`/now/${post.older ? post.older.slug : ''}`} prefetch>
              <Button data={post.older} direction="right" />
            </Link>
          </div>
        ))}
      <Footer />
    </section>
  )
}
