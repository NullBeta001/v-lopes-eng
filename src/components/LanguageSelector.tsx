import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'pt', name: 'Português', flag: '/flags/brazil-.png' },
  { code: 'en', name: 'English', flag: '/flags/united-kingdom.png' },
  { code: 'es', name: 'Español', flag: '/flags/spain.png' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-foreground/80 hover:text-primary"
        >
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            className="w-5 h-5 object-cover rounded-sm"
          />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer flex items-center gap-2 ${i18n.language === lang.code ? 'bg-primary/10 text-primary' : ''
              }`}
          >
            <img
              src={lang.flag}
              alt={lang.name}
              className="w-5 h-5 object-cover rounded-sm"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

