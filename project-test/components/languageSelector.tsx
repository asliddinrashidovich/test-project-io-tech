'use client';

import { Select } from 'antd';
import i18n from 'i18next';
import { useEffect, useState } from 'react';

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ar', label: 'AR' },
];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    setLang(i18n.language || 'en');
  }, []);

  const handleChange = (value: string) => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <Select
      value={lang}
      options={options}
      onChange={handleChange}
      style={{ width: 100 }}
    />
  );
}
