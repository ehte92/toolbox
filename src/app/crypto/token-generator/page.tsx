'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useTokenGenerator } from '@/hooks/tools/useTokenGenerator';
import { useCopy } from '@/services/copy';

export default function TokenGenerator() {
  const [sliderValue, setSliderValue] = useState(64);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(false);

  const [token, refreshToken] = useTokenGenerator({
    length: sliderValue,
    withUppercase: uppercase,
    withLowercase: lowercase,
    withNumbers: numbers,
    withSymbols: specialCharacters,
  });

  const { copy } = useCopy({ source: token, text: 'Copied to clipboard' });

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-gray-800 bg-white">
      <div className="w-full max-w-md p-6 space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-center text-xl font-semibold dark:text-white">
          Token Generator
        </h2>
        <hr className="border-gray-400 dark:border-gray-600" />
        <p className="text-center dark:text-gray-300">
          Generate secure, customizable tokens instantly with our user-friendly
          Token Generator. Perfect for enhancing application security and API
          protection.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-4">
          <div className="flex items-center justify-start">
            <label htmlFor="uppercase" className="mr-2">
              Uppercase
            </label>
            <Switch
              id="uppercase"
              checked={uppercase}
              onCheckedChange={setUppercase}
            />
          </div>
          <div className="flex items-center justify-start">
            <label htmlFor="lowercase" className="mr-2">
              Lowercase
            </label>
            <Switch
              id="lowercase"
              checked={lowercase}
              onCheckedChange={setLowercase}
            />
          </div>
          <div className="flex items-center justify-start">
            <label htmlFor="numbers" className="mr-2">
              Numbers
            </label>
            <Switch
              id="numbers"
              checked={numbers}
              onCheckedChange={setNumbers}
            />
          </div>
          <div className="flex items-center justify-start">
            <label htmlFor="specialCharacters" className="mr-2">
              Special Characters
            </label>
            <Switch
              id="specialCharacters"
              checked={specialCharacters}
              onCheckedChange={setSpecialCharacters}
            />
          </div>
        </div>
        <div>
          <label htmlFor="slider" className="block text-center mb-2">
            Length: {sliderValue}
          </label>
          <Slider
            id="slider"
            defaultValue={[sliderValue]}
            max={512}
            min={1}
            step={1}
            onValueChange={(value) => setSliderValue(value[0])}
          />
        </div>
        <Textarea value={token} readOnly className="h-auto" />
        <div className="flex justify-center gap-4">
          <Button onClick={() => copy()}>Copy</Button>
          <Button onClick={refreshToken}>Refresh</Button>
        </div>
      </div>
    </div>
  );
}
