import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { idPost: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.idPost
 
  // fetch data
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: posts.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    description:`Mô tả sản phẩm có id là ${posts.id}`
  }
}
 
export default function Page({ params }: Props) {
    return (
        <div>
            SEO với phương thức generat metadata
        </div>
    )
}