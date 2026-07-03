'use client';

import { useTranslations } from 'next-intl';

export default function ClientComponent() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="text-gray-600">{t('description')}</p>
    </div>
  );
}
