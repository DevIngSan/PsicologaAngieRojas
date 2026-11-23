import { asset } from '../asset'

export const site = {
  name: 'Psicoterapia',
  title: 'Psicologa Angie Rojas Forigua',
  logo: asset('imagenes/Logo.png'),
  favicon: asset('imagenes/favicon.png'),
  whatsappUrl:
    'https://api.whatsapp.com/send/?phone=573502956109&text&type=phone_number&app_absent=0',
  phoneDisplay: '350 2956109',
  email: 'psico.angie.rojas@gmail.com',
  hours: 'Segun disponibilidad de agenda',
  instagram: 'https://www.instagram.com/psico.angierojas/',
  tiktok: 'https://www.tiktok.com/@psicloga.angie.ro?_t=ZS-8weowePPGV8&_r=1',
  yearLabel: '2025 Todos los Derechos Reservados',
} as const
