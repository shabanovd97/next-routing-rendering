'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ url, children }) {
  const path = usePathname();

  return (
    <Link href={url} className={path.startsWith(url) ? 'active' : undefined}>
      {children}
    </Link>
  );
}
