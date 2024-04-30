'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import styles from '@/widgets/Header/ui/LocaleSwitcherSelect/LocaleSwitcherSelect.module.scss';

export type LocaleSwitcherSelectPropType = {
  children: ReactNode;
  defaultValue: string;
};

export function LocaleSwitcherSelect({ children, defaultValue }: LocaleSwitcherSelectPropType) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <label>
      <select
        className={styles.localeSwitcher}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
