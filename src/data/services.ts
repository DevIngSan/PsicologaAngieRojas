import { asset } from '../asset'

export type Service = {
  path: string
  navLabel: string
  title: string
  image: string
  imageAlt: string
  paragraphs: string[]
}

export const services: Service[] = [
  {
    path: '/terapia-individual',
    navLabel: 'Terapia individual',
    title: 'Terapia Individual',
    image: asset('imagenes/terapia individual.png'),
    imageAlt: 'Terapia Individual',
    paragraphs: [
      'La terapia individual es un espacio confidencial y seguro donde podrás explorar tus emociones, pensamientos y comportamientos con el acompañamiento de una profesional capacitada.',
      'A través de sesiones personalizadas, trabajaremos en los desafíos que afectan tu bienestar emocional, como la ansiedad, la depresión, el estrés, la baja autoestima, el duelo o las dificultades en las relaciones interpersonales.',
      'Este proceso te ayudará a comprenderte mejor, desarrollar herramientas para afrontar tus situaciones de vida y fortalecer tu crecimiento personal. El enfoque está centrado en tus necesidades particulares, respetando tu ritmo y promoviendo cambios positivos y duraderos.',
    ],
  },
  {
    path: '/terapia-para-la-ansiedad',
    navLabel: 'Terapia para la ansiedad',
    title: 'Terapia para la Ansiedad',
    image: asset('imagenes/ansiedad.jpeg'),
    imageAlt: 'Terapia para la Ansiedad',
    paragraphs: [
      '¿Te sientes preocupado, con los nervios de punta o con la mente que no se detiene? La ansiedad puede manifestarse en tu cuerpo, en tu descanso y en la forma en que vives tu día a día, pero no tiene por qué tener la última palabra.',
      'En este espacio terapéutico aprenderás a identificar cómo los pensamientos de preocupación influyen en tus emociones, en tu cuerpo (tensión, palpitaciones, insomnio, cansancio) y en tus decisiones cotidianas. Juntos exploraremos qué situaciones activan tu ansiedad y qué patrones la mantienen.',
      'Te acompañaré a desarrollar herramientas prácticas para reducir la preocupación, regular tus respuestas físicas y responder a tus pensamientos con mayor calma y claridad. El objetivo es que recuperes la sensación de control y vuelvas a ser tú quien dirige tu vida.',
      'Con una orientación profesional, cercana y respetuosa, trabajaremos a tu ritmo para que construyas una relación más tranquila contigo mismo y con lo que te rodea.',
    ],
  },
  {
    path: '/atencion-en-crisis',
    navLabel: 'Atención en crisis emocionales',
    title: 'Atención en Crisis Emocionales',
    image: asset('imagenes/Familia.jpg'),
    imageAlt: 'Atención en Crisis Emocionales',
    paragraphs: [
      'Las crisis emocionales pueden surgir de forma repentina por situaciones como pérdidas, rupturas, ansiedad intensa, ataques de pánico, estrés agudo o momentos de desbordamiento emocional. En estos momentos, contar con apoyo profesional es fundamental.',
      'La atención en crisis brinda un espacio seguro y confidencial para contener, orientar y acompañar al paciente, ayudándole a estabilizarse emocionalmente y recuperar el control. A través de técnicas terapéuticas breves y efectivas, se busca reducir el malestar inmediato y ofrecer herramientas para afrontar la situación con mayor claridad y calma.',
    ],
  },
  {
    path: '/terapia-para-la-depresion',
    navLabel: 'Terapia para la depresión',
    title: 'Terapia para la Depresión',
    image: asset('imagenes/Adicciones.jpeg'),
    imageAlt: 'Terapia para la Depresión',
    paragraphs: [
      '¿Te sientes vacío o con desesperanza? ¿Los días se te hacen difíciles por un cansancio que no te deja levantarte de la cama? ¿Sientes que ya nada te produce alegría? No tienes que atravesar esto solo.',
      'En este espacio terapéutico exploraremos juntos lo que estás viviendo: cómo la depresión afecta tu energía, tus pensamientos, tus relaciones y tu forma de ver el futuro. Comprender lo que te pasa es el primer paso para empezar a sentirte mejor.',
      'Te acompañaré en tu proceso para que recuperes poco a poco las ganas de vivir y de disfrutar, reconectes con lo que da sentido a tu vida y vuelvas a plantearte metas y objetivos propios. Paso a paso, los días dejarán de verse grises y podrás volver a encontrar lo bueno en cada día y en cada situación.',
      'Con una orientación profesional, cálida y respetuosa, trabajaremos a tu ritmo, en un espacio seguro donde puedas expresarte sin juicios.',
    ],
  },
]
