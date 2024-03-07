'use client';

import React, { useState } from 'react';

import { compareSync, hashSync } from 'bcryptjs';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCopy } from '@/services/copy';

export default function Bcrypt() {
  const [inputString, setInputString] = useState<string>('');
  const [inputSalt, setInputSalt] = useState<number>(10);
  const [compareString, setCompareString] = useState<string>('');
  const [compareHash, setCompareHash] = useState<string>('');

  const hashed = hashSync(inputString, inputSalt);
  const compareMatch = compareSync(compareString, compareHash);

  const { copy } = useCopy({
    source: hashed,
    text: 'Hashed string copied to the clipboard',
  });

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-gray-800 bg-white">
      <div className="w-full max-w-6xl p-6">
        <div className="space-y-4 mb-6">
          <h2 className="text-center text-xl font-semibold dark:text-white">
            Bcrypt
          </h2>
          <hr className="border-gray-400 dark:border-gray-600" />
          <p className="text-center dark:text-gray-300">
            Generate a bcrypt hash for your application. You can use this hash
            to authenticate your application. This hash is generated using a
            cryptographically secure hash function.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Hash Block */}
          <div
            className="space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 flex-1 md:basis-1/2"
            style={{ minWidth: '350px', maxWidth: '600px' }}
          >
            <h2>Hash</h2>
            <div className="flex items-center mb-2 px-6">
              <Label htmlFor="string" className="w-1/4">
                String:
              </Label>
              <Input
                id="string"
                placeholder="Your string to hash"
                className="w-3/4 hover:border-primary"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-2 px-6">
              <Label htmlFor="salt" className="w-1/4">
                Salt:
              </Label>
              <Input
                id="salt"
                type="number"
                min={0}
                max={10}
                value={inputSalt}
                onChange={(e) => setInputSalt(Number(e.target.value))}
                className="w-3/4 hover:border-primary"
              />
            </div>
            <Input
              value={hashed}
              readOnly
              className="w-full hover:border-primary"
            />
            <div className="flex justify-center">
              <Button onClick={() => copy()}>Copy hash</Button>
            </div>
          </div>

          {/* Compare block */}
          <div
            className="space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6 flex-1 md:basis-1/2"
            style={{ minWidth: '350px', maxWidth: '600px' }}
          >
            <h2>Compare string with hash</h2>
            <div className="flex items-center mb-2 px-6">
              <Label htmlFor="string" className="w-1/4">
                String:
              </Label>
              <Input
                id="string"
                placeholder="Your string to hash"
                className="w-3/4 hover:border-primary"
                value={compareString}
                onChange={(e) => setCompareString(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-2 px-6">
              <Label htmlFor="hash" className="w-1/4">
                Hash:
              </Label>
              <Input
                id="hash"
                placeholder="Your hash to compare"
                className="w-3/4 hover:border-primary"
                value={compareHash}
                onChange={(e) => setCompareHash(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <p>Do they match?</p>
              <p
                className={`ml-2 ${compareMatch ? 'text-green-500' : 'text-red-500'}`}
              >
                {compareMatch ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
