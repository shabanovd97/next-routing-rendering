import { notFound } from 'next/navigation';

import { getAllNews } from '@/lib/news';
import ModalBackdrop from '@/components/modal-backdrop';

export default async function IntecaptedImagePage({ params }) {
  const { slug: imageSlug } = await params;

  const newsItem = getAllNews().find((it) => it.slug === imageSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
