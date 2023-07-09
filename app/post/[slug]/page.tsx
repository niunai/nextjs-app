import { client } from '../../client'

interface PageProps {
    params: {
        slug: string
    }
}

// const Post = async ({ params: { slug } }: PageProps) => {
const Post = async ({ params: { slug } }: PageProps) => {

    const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })

    return (
        <article>
            <h1>{post?.title}</h1>
            <p>{post?.body[0].children[0].text}</p>
        </article>
    )
}

export default Post