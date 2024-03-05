import {
  BookOpenCheck,
  Hash,
  LayoutDashboard,
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
    ],
  },
  {
    title: 'Example',
    icon: BookOpenCheck,
    href: '/example',
    color: 'text-orange-500',
    isChidren: true,
    children: [
      {
        title: 'Example-01',
        icon: BookOpenCheck,
        color: 'text-red-500',
        href: '/example/employees',
      },
      {
        title: 'Example-02',
        icon: BookOpenCheck,
        color: 'text-red-500',
        href: '/example/example-02',
      },
      {
        title: 'Example-03',
        icon: BookOpenCheck,
        color: 'text-red-500',
        href: '/example/example-03',
      },
    ],
  },
];
