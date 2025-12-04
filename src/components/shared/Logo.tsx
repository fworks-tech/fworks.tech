// src/components/shared/Logo.tsx
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-fworks-logo flex flex-shrink-0 select-none flex-col items-center font-orbitron"
    >
      <span className="font-semibold uppercase leading-none tracking-widest">FWORKS</span>
      <span className="-mt-[2px] font-extrabold uppercase tracking-widest">TECH</span>
    </Link>
  );
}
