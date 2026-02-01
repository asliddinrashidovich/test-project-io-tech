'use client';

import { Select } from 'antd';
import i18n from 'i18next';
import { useEffect, useState } from 'react';

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ar', label: 'AR' },
];

const LANG_KEY = 'app_language';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem(LANG_KEY);

    const initialLang = savedLang || i18n.language || 'en';

    setLang(initialLang);
    i18n.changeLanguage(initialLang);
  }, []);

  const handleChange = (value: string) => {
    setLang(value);
    i18n.changeLanguage(value);
    localStorage.setItem(LANG_KEY, value);
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
