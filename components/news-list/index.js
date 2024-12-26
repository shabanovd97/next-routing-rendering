import Link from 'next/link';

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((it) => (
        <li key={it.id}>
          <Link href={`/news/${it.slug}`}>
            <img src={`/images/news/${it.image}`} alt={it.title} />
            <span>{it.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
