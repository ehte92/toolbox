import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Bcrypt() {
  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-gray-800 bg-white">
      <div className="w-full max-w-xl p-6">
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

        <div className="space-y-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6">
          <h2>Hash</h2>
          {/* String Row */}
          <div className="flex items-center mb-2 px-6">
            <Label htmlFor="string" className="w-1/4">
              String:
            </Label>
            <Input
              id="string"
              placeholder="Your string to hash"
              className="w-3/4 hover:border-primary"
            />
          </div>
          {/* Salt Row */}
          <div className="flex items-center mb-2 px-6">
            <Label htmlFor="salt" className="w-1/4">
              Salt:
            </Label>
            <Input
              id="salt"
              type="number"
              max={10}
              defaultValue={10}
              className="w-3/4 hover:border-primary"
            />
          </div>
          <Input
            value={'dfksdfkkmnfdssmdfmfdm,dsfm dfm'}
            readOnly
            className="w-full hover:border-primary"
          />
          <div className="flex justify-center">
            <Button>Copy hash</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
