import { HashIcon, ShuffleIcon } from 'lucide-react';

import FeatureCard from '@/components/dashboard/feature-card';

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <FeatureCard
        title="Token Generator"
        description="Generate a random token for your application. You can use this token
        to authenticate your application. This token is generated using a
        cryptographically secure random number generator."
        IconComponent={ShuffleIcon}
      />
      <FeatureCard
        title="Hash Generator"
        description="Generate a hash for your application. You can use this hash to authenticate your application. This hash is generated using a cryptographically secure hash function."
        IconComponent={HashIcon}
      />
    </main>
  );
}
