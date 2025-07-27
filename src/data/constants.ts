export const heroImages = [
  {
    src: '/Maasai mara.jpg',
    alt: 'A herd of elephants walking across the savanna at sunset',
  },
  {
    src: '/Maasai mara (2).jpg',
    alt: 'A majestic giraffe standing tall in the African bush',
  },
  {
    src: '/Maasai mara (3).jpg',
    alt: 'A lion resting on a rock in the Maasai Mara',
  },
  {
    src: '/Maasai Mara (4).jpg',
    alt: 'A stunning view of Mount Kilimanjaro from Amboseli National Park',
  },
];

export const destinations = (t: (key: string) => string) => [
  {
    name: t('maasaiMara'),
    description: t('maasaiMaraDesc'),
    image: '/Maasai mara.jpg',
    link: '/destinations/maasai-mara'
  },
  {
    name: t('amboseli'),
    description: t('amboseliDesc'),
    image: '/Maasai mara (2).jpg',
    link: '/destinations/amboseli'
  },
  {
    name: t('dianiBeach'),
    description: t('dianiBeachDesc'),
    image: '/Diani Beach.jpg',
    link: '/destinations/diani-beach'
  }
];