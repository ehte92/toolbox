import { FeatureItems } from '@/components/constants/features';
import FeatureCard from '@/components/dashboard/feature-card';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {FeatureItems.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
