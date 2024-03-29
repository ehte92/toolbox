'use client';

import { useEffect, useState } from 'react';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/layout/subnav-accordion';
import { buttonVariants } from '@/components/ui/button';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const path = usePathname();
  const { isOpen } = useSidebar();

  return (
    <nav className="space-y-2">
      {items.map((item) =>
        item.isChidren ? (
          <Accordion
            type="multiple"
            className="space-y-2"
            key={item.title}
            defaultValue={[
              item.title,
              ...(item.children?.map((child) => child.title) || []),
            ]}
          >
            <AccordionItem value={item.title} className="border-none ">
              <AccordionTrigger
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'group relative flex h-10 justify-between px-4 py-2 text-base duration-200 hover:bg-muted hover:no-underline'
                )}
              >
                <div>
                  <item.icon className={cn('h-4 w-4', item.color)} />
                </div>
                <div
                  className={cn(
                    'absolute left-12 text-base duration-200 ',
                    !isOpen && className
                  )}
                >
                  {item.title}
                </div>

                {isOpen && (
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                )}
              </AccordionTrigger>
              <AccordionContent className="mt-2  pb-1">
                {item.children?.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'group relative flex h-10 justify-start gap-x-3',
                      path === child.href && 'bg-muted font-bold hover:bg-muted'
                    )}
                  >
                    <child.icon className={cn('h-4 w-4', child.color)} />
                    <div
                      className={cn(
                        'absolute left-12 text-base duration-200',
                        !isOpen && className
                      )}
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => {
              if (setOpen) setOpen(false);
            }}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'group relative flex h-10 justify-start',
              path === item.href && 'bg-muted font-bold hover:bg-muted'
            )}
          >
            <item.icon className={cn('h-4 w-4', item.color)} />
            <span
              className={cn(
                'absolute left-12 text-base duration-200',
                !isOpen && className
              )}
            >
              {item.title}
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
