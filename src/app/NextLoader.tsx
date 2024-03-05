'use client';

import HolyLoader from 'holy-loader';
import { useTheme } from 'next-themes';

export type NextLoaderProps = {
  darkColor?: string;
  lightColor?: string;
  showSpinner?: boolean;
};
export const NextLoader = ({
  lightColor = '#E2E8F0',
  darkColor = '#1F2937',
  showSpinner = false,
}: NextLoaderProps) => {
  const { theme } = useTheme();
  const loaderColorKey = theme === 'dark' ? darkColor : lightColor;

  const loaderColor = loaderColorKey;
  return (
    <HolyLoader
      height={2}
      zIndex={99999}
      color={loaderColor}
      showSpinner={showSpinner}
    />
  );
};
