'use client';

import { useRouter } from 'next/navigation';

export default function ModalBackdrop() {
  const route = useRouter();

  return <div className="modal-backdrop" onClick={route.back} />;
}
