import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy-news';

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((it) => (
          <li key={it.id}>
            <Link href={`/news/${it.slug}`}>
              <img src={`/images/news/${it.image}`} alt={it.title} />
              <span>{it.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
