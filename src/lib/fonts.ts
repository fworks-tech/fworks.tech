import { Orbitron } from 'next/font/google';

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'swap',
  variable: '--font-orbitron' // Create a CSS variable
});
