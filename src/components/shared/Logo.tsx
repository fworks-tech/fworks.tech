// src/components/shared/Logo.tsx
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-fworks-logo flex flex-shrink-0 flex-col items-center select-none"
    >
      <span
        className="leading-none font-semibold tracking-widest uppercase"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        FWORKS
      </span>
      <span
        className="-mt-[2px] font-extrabold tracking-widest uppercase"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        TECH
      </span>
    </Link>
  );
}
