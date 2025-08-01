// src/components/shared/Logo.tsx
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-fworks-logo flex flex-shrink-0 select-none flex-col items-center"
    >
      <span
        className="font-semibold uppercase leading-none tracking-widest"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        FWORKS
      </span>
      <span
        className="-mt-[2px] font-extrabold uppercase tracking-widest"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        TECH
      </span>
    </Link>
  );
}
