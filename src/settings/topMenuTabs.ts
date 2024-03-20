import type { MenuOption } from '@/types/menus'

export const topMenuTabs: MenuOption[] = [
  {
    path: '/',
    label: 'Главная'
  },
  {
    path: '/art-therapy-group',
    label: 'Гештальт-подход'
  },
  {
    path: '/course',
    label: 'Курс "Океан Эмоций"',
    disabled: true
  },
  {
    path: '/consultations',
    label: 'Консультации'
  },
  {
    path: '/documents',
    label: 'Образование'
  }
]
