import { notFound } from 'next/navigation';

import { getAllNews } from '@/lib/news';

export default async function ImagePage({ params }) {
  const { slug: imageSlug } = await params;

  const newsItem = getAllNews().find((it) => it.slug === imageSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
