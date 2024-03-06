'use client';

import React from 'react';

import { CopyIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useCopy } from '@/services/copy';

import { Button } from './button';
import { Input } from './input';

type InputCopyProps = {
  value: string;
  [key: string]: any;
};

const InputCopy = ({ value, ...props }: InputCopyProps) => {
  const { copy } = useCopy({ source: value, createToast: true });

  return (
    <>
      <Input
        value={value}
        className={cn(
          'w-full p-4 pl-24 flex-grow rounded-l-md',
          props.className
        )}
      />
      <Button
        onClick={() => copy()}
        variant="outline"
        size="icon"
        className="absolute end-0"
      >
        <CopyIcon className="h-4 w-4" />
      </Button>
    </>
  );
};

export default InputCopy;
