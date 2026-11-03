export interface BurgerItem {
  id: string;
  name: string;
  price: number;
  image: string;
  prepTime: string;
  bun: string;
  patty: string;
  spice: string;
  calories: number;
  protein: string;
  category: 'ALL' | 'BEEF' | 'SPICY' | 'VEGGIE';
}

export const BURGERS: BurgerItem[] = [
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    price: 16,
    image: 'https://www.cravburgers.shop/burgers/1b.png',
    prepTime: '10–12 min',
    bun: 'Brioche',
    patty: 'Beef',
    spice: 'Mild',
    calories: 720,
    protein: '32g',
    category: 'BEEF',
  },
  {
    id: 'spicy-jalapeno-burger',
    name: 'Spicy Jalapeño Burger',
    price: 18,
    image: 'https://www.cravburgers.shop/burgers/2b.png',
    prepTime: '12–14 min',
    bun: 'Brioche',
    patty: 'Beef',
    spice: 'Hot',
    calories: 810,
    protein: '34g',
    category: 'SPICY',
  },
  {
    id: 'bacon-cheese-burger',
    name: 'Bacon Cheese Burger',
    price: 21,
    image: 'https://www.cravburgers.shop/burgers/3b.png',
    prepTime: '12–15 min',
    bun: 'Brioche',
    patty: 'Beef',
    spice: 'Mild',
    calories: 900,
    protein: '37g',
    category: 'BEEF',
  },
  {
    id: 'veggie-delight-burger',
    name: 'Veggie Delight Burger',
    price: 15,
    image: 'https://www.cravburgers.shop/burgers/4b.png',
    prepTime: '10–12 min',
    bun: 'Sesame',
    patty: 'Veggie',
    spice: 'Mild',
    calories: 620,
    protein: '17g',
    category: 'VEGGIE',
  },
  {
    id: 'bbq-ranch-burger',
    name: 'BBQ Ranch Burger',
    price: 19,
    image: 'https://www.cravburgers.shop/burgers/5b.png',
    prepTime: '12–14 min',
    bun: 'Brioche',
    patty: 'Beef',
    spice: 'Medium',
    calories: 870,
    protein: '36g',
    category: 'BEEF',
  },
  {
    id: 'mushroom-swiss-burger',
    name: 'Mushroom Swiss Burger',
    price: 20,
    image: 'https://www.cravburgers.shop/burgers/6b.png',
    prepTime: '12–14 min',
    bun: 'Brioche',
    patty: 'Beef',
    spice: 'Mild',
    calories: 830,
    protein: '33g',
    category: 'BEEF',
  },
];

export interface SpiceStoryStep {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  rotation: string;
}

export const SPICE_STORY_STEPS: SpiceStoryStep[] = [
  {
    id: 'lettuce',
    label: 'The Crunch',
    title: 'Crisp Green Lettuce',
    description:
      'Hand-picked every morning for maximum crunch. Washed in ice-cold water so every leaf stays crisp against the heat of our smashed patty.',
    image: 'https://www.cravburgers.shop/img-webp/lettuceimg.webp',
    rotation: 'rotate-6',
  },
  {
    id: 'tomato',
    label: 'The Juiciness',
    title: 'Vine-Ripened Tomatoes',
    description:
      'Thick-cut, sun-ripened heirloom tomatoes seasoned with flaky sea salt and cracked black pepper right before assembly.',
    image: 'https://www.cravburgers.shop/img-webp/tomatoimg.webp',
    rotation: '-rotate-6',
  },
  {
    id: 'cheese',
    label: 'The Melt',
    title: 'Double Aged Cheddar',
    description:
      'Melted directly over the seared crust under a steam dome for 18 seconds until gooey, sharp, and velvety.',
    image: 'https://www.cravburgers.shop/img-webp/cheeseimg.webp',
    rotation: 'rotate-8',
  },
  {
    id: 'patty',
    label: 'The Sear',
    title: 'Spiced Smashed Patty',
    description:
      '100% grass-fed chuck & brisket smashed hard on a 450°F steel griddle with our signature 9-spice Navarra rub for caramelized lacy edges.',
    image: 'https://www.cravburgers.shop/img-webp/tikki.webp',
    rotation: '-rotate-8',
  },
  {
    id: 'bun',
    label: 'The Crown',
    title: 'Toasted Brioche Bun',
    description:
      'Baked fresh daily, brushed with brown butter, and griddled golden-brown so it holds every drop of sauce without ever getting soggy.',
    image: 'https://www.cravburgers.shop/img-webp/bun.webp',
    rotation: 'rotate-4',
  },
];

export interface CityPin {
  id: string;
  city: string;
  country: string;
  address: string;
  hours: string;
  image: string;
  positionClass: string;
  rotation: string;
}

export const CITY_PINS: CityPin[] = [
  {
    id: 'berlin',
    city: 'BERLIN',
    country: 'GERMANY',
    address: 'Oranienstraße 142, Kreuzberg',
    hours: 'Daily 11:30 – 23:30',
    image: 'https://www.cravburgers.shop/img-webp/berlin.webp',
    positionClass: 'top-[40%] left-[8%]',
    rotation: '-rotate-8',
  },
  {
    id: 'london',
    city: 'LONDON',
    country: 'UNITED KINGDOM',
    address: '48 Brewer St, Soho',
    hours: 'Daily 11:30 – 00:00',
    image: 'https://www.cravburgers.shop/img-webp/london.webp',
    positionClass: 'top-[22%] left-[25%]',
    rotation: 'rotate-10',
  },
  {
    id: 'newyork',
    city: 'NEW YORK',
    country: 'UNITED STATES',
    address: '214 Bleecker St, Greenwich Village',
    hours: 'Daily 11:00 – 01:00',
    image: 'https://www.cravburgers.shop/img-webp/newyork.webp',
    positionClass: 'top-[33%] left-[42%]',
    rotation: '-rotate-8',
  },
  {
    id: 'sydney',
    city: 'SYDNEY',
    country: 'AUSTRALIA',
    address: '312 Crown St, Surry Hills',
    hours: 'Daily 11:30 – 22:30',
    image: 'https://www.cravburgers.shop/img-webp/sydney.webp',
    positionClass: 'top-[18%] right-[25%]',
    rotation: 'rotate-10',
  },
  {
    id: 'tokyo',
    city: 'TOKYO',
    country: 'JAPAN',
    address: '5-7-21 Jingumae, Shibuya-ku',
    hours: 'Daily 11:00 – 23:00',
    image: 'https://www.cravburgers.shop/img-webp/tokyo.webp',
    positionClass: 'top-[40%] right-[8%]',
    rotation: 'rotate-14',
  },
];
