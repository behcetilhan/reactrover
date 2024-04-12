import { useTranslation } from 'react-i18next'
import { useLanguageSelect } from '@/utils/hooks/useLanguageSelect'
import { MenuItem, Select } from '@mui/material'

export const LanguageToggler = () => {
  const { currentLanguage, handleLanguageSelect } = useLanguageSelect()
  const { t } = useTranslation()

  return (
    <Select
      size={'small'}
      value={currentLanguage}
      onChange={(e) => handleLanguageSelect(e.target.value)}
    >
      <MenuItem value={'en'}>{t('languages.english')}</MenuItem>
      <MenuItem value={'de'}>{t('languages.german')}</MenuItem>
    </Select>
  )
}
