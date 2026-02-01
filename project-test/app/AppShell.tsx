'use client';

import Header from '@/components/home/header';
import Hero from '@/components/home/hero';
import Footer from '@/components/footer';
import ClientProviders from './ClientProviders';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ClientProviders>
      <Header />
      <Hero />
      {children}
      <Footer />
    </ClientProviders>
  );
}
