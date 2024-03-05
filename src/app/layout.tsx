import { ReactNode } from 'react';

import { Metadata } from 'next';

import { Document } from '@/app/Document';
import { NextLoader } from '@/app/NextLoader';

import './globals.css';

export const metadata: Metadata = {
  title: 'Toolbox',
  applicationName: 'Toolbox',
  description: 'Toolbox is a collection of tools for developers.',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Document>
      <NextLoader />
      {children}
    </Document>
  );
}
