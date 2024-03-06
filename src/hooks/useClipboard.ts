import { useCallback, useState } from 'react';

interface UseClipboardOptions {
  copiedDuring?: number;
  legacy?: boolean;
}

interface UseClipboardReturn {
  isSupported: boolean;
  text: string;
  copied: boolean;
  copy: (text: string) => Promise<void>;
}

export function useClipboard(
  options: UseClipboardOptions = {}
): UseClipboardReturn {
  const { copiedDuring = 1500, legacy = false } = options;
  const [text, setText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Check if the Clipboard API is supported
  const isSupported = (navigator && 'clipboard' in navigator) || legacy;

  // Timeout function to reset 'copied' state
  const resetCopied = useCallback(() => {
    const timeout = setTimeout(() => setCopied(false), copiedDuring);
    return () => clearTimeout(timeout);
  }, [copiedDuring]);

  const copy = useCallback(
    async (value: string): Promise<void> => {
      if (!isSupported) {
        console.error('Clipboard API not supported');
        return;
      }

      try {
        if (navigator.clipboard && !legacy) {
          await navigator.clipboard.writeText(value);
        } else {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = value;
          textarea.style.position = 'absolute';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        setText(value);
        setCopied(true);
        resetCopied();
      } catch (error) {
        console.error('Failed to copy', error);
      }
    },
    [legacy, resetCopied]
  );

  return { isSupported, text, copied, copy };
}
