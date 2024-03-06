'use client';

import React, { useState } from 'react';

import {
  MD5,
  RIPEMD160,
  SHA1,
  SHA3,
  SHA224,
  SHA256,
  SHA384,
  SHA512,
  enc,
  lib,
} from 'crypto-js';

import InputCopy from '@/components/ui/input-copy';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { convertHexToBin } from '@/services/hexToBinService';

type DigestEncoding = {
  value: string;
  label: string;
};

export default function HashGenerator() {
  const [encoding, setEncoding] = useState<DigestEncoding['value']>('Hex');
  const [clearText, setClearText] = useState<string>('');

  const digestEncodings: DigestEncoding[] = [
    { value: 'Bin', label: 'Binary' },
    { value: 'Hex', label: 'Hexadecimal' },
    { value: 'Base64', label: 'Base64' },
    { value: 'Base64url', label: 'Base64 URL' },
  ];

  const algos = {
    MD5,
    SHA1,
    SHA256,
    SHA224,
    SHA512,
    SHA384,
    SHA3,
    RIPEMD160,
  } as const;

  type AlgoNames = keyof typeof algos;
  type Encoding = keyof typeof enc | 'Bin';

  function formatWithEncoding(words: lib.WordArray, encoding: Encoding) {
    if (encoding === 'Bin') {
      return convertHexToBin(words.toString(enc.Hex));
    }

    return words.toString(enc[encoding]);
  }

  const hashText = (algo: AlgoNames, value: string) =>
    formatWithEncoding(algos[algo](value), encoding as Encoding);

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-gray-800 bg-white">
      <div className="w-full max-w-xl p-6">
        <div className="space-y-4 mb-6">
          <h2 className="text-center text-xl font-semibold dark:text-white">
            Hash Generator
          </h2>
          <hr className="border-gray-400 dark:border-gray-600" />
          <p className="text-center dark:text-gray-300">
            Generate a hash for your application. You can use this hash to
            authenticate your application. This hash is generated using a
            cryptographically secure hash function.
          </p>
        </div>
        <div className="space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="hashText">Text to hash</Label>
            <Textarea
              placeholder="Enter text to hash"
              id="hashText"
              value={clearText}
              onChange={(e) => setClearText(e.target.value)}
            />
          </div>
          <hr className="border-gray-400 dark:border-gray-600" />
          <div className="grid w-full gap-1.5">
            <Label htmlFor="encoding">Digest encoding</Label>
            <Select onValueChange={setEncoding} value={encoding}>
              <SelectTrigger>
                <SelectValue placeholder="Hexadecimal" />
              </SelectTrigger>
              <SelectContent>
                {digestEncodings.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-2">
            {Object.keys(algos).map((algo) => (
              <div
                key={algo}
                className="relative flex items-center w-full mt-2"
              >
                <div className="absolute start-0 p-2.5 bg-gray-200 dark:bg-gray-600 rounded-l-md w-20">
                  <p className="text-xs font-medium">{algo}</p>
                </div>
                <InputCopy value={hashText(algo as AlgoNames, clearText)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
