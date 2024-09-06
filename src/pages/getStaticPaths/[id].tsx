const GetStaticPathsPage = ({ post }: { post: string }) => {
  return (
    <div>
      this is getStaticPaths
      <h1>Post: {post}</h1>
    </div>
  )
}

export const getStaticPaths = () => {
  const paths = new Array(10).fill(0).map((_, i) => ({
    params: { id: i + 1 + '' }
  }))

  console.log('paths', paths)

  return { paths, fallback: true }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log('params', params)

  return { props: { post: `post ${params.id}` } }
}

export default GetStaticPathsPage
