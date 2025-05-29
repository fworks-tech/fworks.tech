// src/components/shared/Logo.tsx
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center flex-shrink-0 select-none">
      <span
        className="text-2xl font-semibold uppercase tracking-widest text-fworks-glow leading-none"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        FWORKS
      </span>
      <span
        className="text-2xl font-extrabold uppercase tracking-widest text-tech-glow -mt-[2px]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        TECH
      </span>
    </Link>
  );
}
