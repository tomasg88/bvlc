import Link from 'next/link'
import { urlForImage } from '../lib/sanity'
import Image from 'next/image';

export default function CoverImage({ title, slug, image: source }) {
  const image = source ? (
    <Image
      width={2000}
      height={1300}
      alt={`Cover Image for ${title}`}
      className={'shadow-small hover:shadow-medium transition-shadow duration-200'}
      src={urlForImage(source).height(1300).width(2000).url()}
    />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}