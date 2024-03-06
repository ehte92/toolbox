import { shuffleString } from './random';

interface TokenOptions {
  withUppercase?: boolean;
  withLowercase?: boolean;
  withNumbers?: boolean;
  withSymbols?: boolean;
  length?: number;
}

export const createToken = ({
  withUppercase = true,
  withLowercase = true,
  withNumbers = true,
  withSymbols = false,
  length = 64,
}: TokenOptions): string => {
  let alphabet = '';

  alphabet += withUppercase ? 'ABCDEFGHIJKLMOPQRSTUVWXYZ' : '';
  alphabet += withLowercase ? 'abcdefghijklmopqrstuvwxyz' : '';
  alphabet += withNumbers ? '0123456789' : '';
  alphabet += withSymbols ? '.,;:!?./-"\'#{([-|\\@)]=}*+' : '';

  return shuffleString(alphabet.repeat(length)).substring(0, length);
};
