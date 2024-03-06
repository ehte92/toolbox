import { useToast } from '@/components/ui/use-toast';
import { useClipboard } from '@/hooks/useClipboard';

export function useCopy({
  source,
  text = 'Copied to clipboard',
  createToast = true,
}: { source?: string; text?: string; createToast?: boolean } = {}) {
  const { copy, copied, ...rest } = useClipboard({
    legacy: true,
  });

  const { toast } = useToast();

  return {
    ...rest,
    isJustCopied: copied,
    async copy(
      content: string = '',
      { notificationMessage }: { notificationMessage?: string } = {}
    ) {
      if (source) {
        await copy(source);
      } else {
        await copy(content);
      }

      if (createToast) {
        toast({
          title: 'Copied',
          description: notificationMessage || text,
        });
      }
    },
  };
}
