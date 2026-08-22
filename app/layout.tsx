import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sienna Shea Butter | Care for every crown',
  description: 'Hibiscus-infused shea butter for adults, kids, natural and relaxed hair.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
