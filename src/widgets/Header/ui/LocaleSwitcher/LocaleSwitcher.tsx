import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/config';
import { LocaleSwitcherSelect } from '@/widgets/Header/ui/LocaleSwitcherSelect';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur} data-testid={`locale-${cur}`}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
