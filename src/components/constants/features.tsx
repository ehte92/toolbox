import {
  ArrowDown01,
  FileLock,
  Fingerprint,
  HashIcon,
  ShuffleIcon,
} from 'lucide-react';

import { type FeatureItem } from '@/types';

export const FeatureItems: FeatureItem[] = [
  {
    title: 'Token Generator',
    description:
      'Generate secure, customizable tokens instantly with our user-friendly Token Generator. Perfect for enhancing application security and API protection.',
    IconComponent: ShuffleIcon,
  },
  {
    title: 'Hash Generator',
    description:
      'Generate a hash for your application. You can use this hash to authenticate your application. This hash is generated using a cryptographically secure hash function.',
    IconComponent: HashIcon,
  },
  {
    title: 'Bcrypt',
    description:
      'Generate a bcrypt hash for your application. You can use this hash to authenticate your application. This hash is generated using a cryptographically secure hash function.',
    IconComponent: FileLock,
  },
  {
    title: 'UUID Generator',
    description:
      'Generate a UUID for your application. You can use this UUID to uniquely identify your application. This UUID is generated using a cryptographically secure random number generator.',
    IconComponent: Fingerprint,
  },
  {
    title: 'ULID Generator',
    description:
      'Generate a ULID for your application. You can use this ULID to uniquely identify your application. This ULID is generated using a cryptographically secure random number generator.',
    IconComponent: ArrowDown01,
  },
];
