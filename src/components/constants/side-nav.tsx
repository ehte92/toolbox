import {
  ArrowDown01,
  FileLock,
  Fingerprint,
  Hash,
  ShieldCheck,
  Shuffle,
} from 'lucide-react';

import { type NavItem } from '@/types';

export const NavItems: NavItem[] = [
  {
    title: 'Crypto',
    icon: ShieldCheck,
    href: '/',
    color: 'text-sky-500',
    isChidren: true,
    children: [
      {
        title: 'Token Generator',
        icon: Shuffle,
        color: 'text-red-500',
        href: '/crypto/token-generator',
      },
      {
        title: 'Hash Generator',
        icon: Hash,
        color: 'text-red-500',
        href: '/crypto/hash-generator',
      },
      {
        title: 'Bcrypt',
        icon: FileLock,
        color: 'text-red-500',
        href: '/crypto/bcrypt',
      },
      {
        title: 'UUID Generator',
        icon: Fingerprint,
        color: 'text-red-500',
        href: '/crypto/uuid-generator',
      },
      {
        title: 'ULID Generator',
        icon: ArrowDown01,
        color: 'text-red-500',
        href: '/crypto/ulid-generator',
      },
    ],
  },
  {
    title: 'Crypto',
    icon: ShieldCheck,
    href: '/',
    color: 'text-sky-500',
    isChidren: true,
    children: [
      {
        title: 'Token Generator',
        icon: Shuffle,
        color: 'text-red-500',
        href: '/crypto/token-generator',
      },
      {
        title: 'Hash Generator',
        icon: Hash,
        color: 'text-red-500',
        href: '/crypto/hash-generator',
      },
      {
        title: 'Bcrypt',
        icon: FileLock,
        color: 'text-red-500',
        href: '/crypto/bcrypt',
      },
      {
        title: 'UUID Generator',
        icon: Fingerprint,
        color: 'text-red-500',
        href: '/crypto/uuid-generator',
      },
      {
        title: 'ULID Generator',
        icon: ArrowDown01,
        color: 'text-red-500',
        href: '/crypto/ulid-generator',
      },
    ],
  },
];
