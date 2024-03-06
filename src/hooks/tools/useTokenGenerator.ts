import { useEffect, useState } from 'react';

import { createToken } from '@/services/tokenGeneratorService';

interface UseTokenGeneratorOptions {
  length: number;
  withUppercase: boolean;
  withLowercase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
}

export const useTokenGenerator = ({
  length,
  withUppercase,
  withLowercase,
  withNumbers,
  withSymbols,
}: UseTokenGeneratorOptions): [string, () => void] => {
  const [token, setToken] = useState('');

  const generate = () => {
    setToken(
      createToken({
        withUppercase,
        withLowercase,
        withNumbers,
        withSymbols,
        length,
      })
    );
  };

  useEffect(() => {
    generate();
  }, [length, withUppercase, withLowercase, withNumbers, withSymbols]);

  return [token, generate];
};
