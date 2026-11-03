import React, { useState, useEffect, useRef } from 'react';

export interface BarProduct {
  id: string;
  slug: string;
  name: string;
  trademark?: boolean;
  subtitle: string;
  category: 'hero' | 'dark' | 'limited' | 'gifting';
  wrapper: string;
  miniWrapper: string;
  bgColor: string;
  accentColor: string;
  isLightBg: boolean;
  badgeTitle: string;
  storyCopy: string;
  fillingHeadline: string;
  chocolateFinish: string;
  roastProfile: string;
  weight: string;
  cutImage: string;
}

export const BARS: BarProduct[] = [
  {
    id: 'kunafa',
    slug: 'cant-get-knafeh-of-it',
    name: "CAN'T GET KNAFEH OF ESPRESSO",
    trademark: true,
    subtitle: 'Crispy Toasted Knafeh, Pistachio & Double Espresso Cream',
    category: 'hero',
    wrapper: '/images/wrappers_new/kunafa.webp',
    miniWrapper: '/images/mini/knafeh.webp',
    bgColor: '#1b4877',
    accentColor: '#f3b23a',
    isLightBg: false,
    badgeTitle: 'THE OG',
    storyCopy:
      "More than just a chocolate bar, Can't Get Knafeh of Espresso is our signature creation and the heartbeat of KAFÉ. The OG that started a global coffee-chocolate movement, blending artisanal Dubai knafeh pastry with velvety pistachio tahini and freshly pulled Arabica espresso crema.",
    fillingHeadline:
      'Golden, toasted knafeh meets our signature espresso, pistachio and tahini cream',
    chocolateFinish: 'signature milk chocolate & roasted arabica blend',
    roastProfile: 'Medium-Dark Ethiopian & Colombian Espresso Infusion',
    weight: '200g',
    cutImage: '/uploads/kunafa_details.webp',
  },
  {
    id: 'pecan',
    slug: 'catch-me-if-pecan',
    name: 'CATCH ME IF PECAN ROAST',
    subtitle: 'Caramelized Pecan Praline, Toasted Brioche & Cortado Ganache',
    category: 'hero',
    wrapper: '/images/wrappers_new/pecan.webp',
    miniWrapper: '/images/mini/pecan.webp',
    bgColor: '#ecdab5',
    accentColor: '#c95219',
    isLightBg: true,
    badgeTitle: 'THE ROASTED PECAN',
    storyCopy:
      'Inspired by slow mornings in specialty coffee roasteries, Catch Me If Pecan Roast pairs crunchy caramelized pecans and speculoos biscuit crumbs with a silky blond caramel & cortado espresso core.',
    fillingHeadline:
      'Crunchy roasted pecans and caramelized biscuit folded into velvety cortado caramel',
    chocolateFinish: 'golden caramelized blond & milk espresso chocolate',
    roastProfile: 'Caramelized Brazilian Bourbon Roast Notes',
    weight: '180g',
    cutImage: '/uploads/c_kunafa_s.webp',
  },
  {
    id: 'butter',
    slug: 'butter-to-be-safe-than-salty',
    name: 'COLD BREW & SALTED BUTTER',
    subtitle: 'Brown Butter Toffee, Roasted Filo & Sea-Salt Cold Brew Fudge',
    category: 'hero',
    wrapper: '/images/wrappers_new/butter.webp',
    miniWrapper: '/images/mini/pecan.webp',
    bgColor: '#d9893c',
    accentColor: '#3B1707',
    isLightBg: false,
    badgeTitle: 'VELVET COLD BREW',
    storyCopy:
      'Rich brown-butter toffee and delicate layers of baked pastry meet an 18-hour cold-brewed coffee ganache finished with flaky Maldon sea salt.',
    fillingHeadline:
      'Whipped brown-butter caramel and crispy filo ribbons infused with sea-salt cold brew',
    chocolateFinish: 'smooth 42% single-origin milk chocolate shell',
    roastProfile: '18-Hour Slow-Steeped Guatemalan Cold Brew',
    weight: '195g',
    cutImage: '/uploads/kunafa_details.webp',
  },
  {
    id: 'pretzel',
    slug: 'pick-up-a-pretzel',
    name: 'MOCHA PRETZEL CRUNCH',
    subtitle: 'Salted Pretzel Croquant, Toffee Swirl & Rich Mocha Truffle',
    category: 'hero',
    wrapper: '/images/wrappers_new/pretzel.webp',
    miniWrapper: '/images/mini/pretzel.webp',
    bgColor: '#c04152',
    accentColor: '#f5d38c',
    isLightBg: false,
    badgeTitle: 'SWEET & SALTY MOCHA',
    storyCopy:
      'A bold collision of bakery crunch and barista craft. Hand-crushed salted pretzels and buttery toffee ribbons suspended in a lush mocha fudge center.',
    fillingHeadline:
      'Crispy salted pretzel twists and salted toffee drenched in rich espresso mocha cream',
    chocolateFinish: 'signature swiss-style milk chocolate & cocoa nibs',
    roastProfile: 'Full-City Italian Espresso & Dark Cocoa Blend',
    weight: '190g',
    cutImage: '/uploads/c_kunafa_dark_s.webp',
  },
  {
    id: 'cereal',
    slug: 'cereously-chewsy',
    name: 'CEREOUSLY LATTE CHEWSY',
    subtitle: 'Cereal Milk Latte Cream, Marshmallow Fudge & Crunchy Cornflakes',
    category: 'gifting',
    wrapper: '/images/wrappers_new/cereal.webp',
    miniWrapper: '/images/mini/biscuit.webp',
    bgColor: '#b1dffa',
    accentColor: '#d64550',
    isLightBg: true,
    badgeTitle: 'MORNING LATTE',
    storyCopy:
      'Nostalgic Saturday-morning cereal steeped in steamed oat-latte cream, layered with chewy fudge brownie bites and toasted gold cornflake clusters.',
    fillingHeadline:
      'Toasted cereal crunch and chewy fudge swirled into sweetカフェ latte cream',
    chocolateFinish: 'creamy milk chocolate with roasted coffee dust',
    roastProfile: 'Sweet Honey-Processed Costa Rican Arabica',
    weight: '185g',
    cutImage: '/uploads/kunafa_details.webp',
  },
  {
    id: 'baklawa',
    slug: 'baklawa-2-the-future',
    name: 'BAKLAWA ARABICA FUTURE',
    subtitle: 'Layered Walnut & Pistachio Baklawa with Cardamom Turkish Coffee',
    category: 'hero',
    wrapper: '/images/wrappers_new/baklawa.webp',
    miniWrapper: '/images/mini/knafeh.webp',
    bgColor: '#beddf2',
    accentColor: '#24527a',
    isLightBg: true,
    badgeTitle: 'LEVANTINE ROAST',
    storyCopy:
      'A futuristic tribute to Middle Eastern coffee ceremonies: flaky honey-kissed baklawa, crushed walnuts and green pistachios elevated with aromatic cardamom coffee.',
    fillingHeadline:
      'Forty layers of crisp filo, roasted nuts and aromatic cardamom-spiced coffee syrup',
    chocolateFinish: 'signature milk & dark marbled chocolate',
    roastProfile: 'Finely Ground Arabic & Turkish Cardamom Roast',
    weight: '195g',
    cutImage: '/uploads/c_kunafa_s.webp',
  },
  {
    id: 'biscuit',
    slug: 'mind-your-own-buiscoff',
    name: 'MIND YOUR OWN BISCOTTI',
    subtitle: 'Spiced Speculoos Cookie Butter, Crispy Feuilletine & Macchiato',
    category: 'gifting',
    wrapper: '/images/wrappers_new/biscuit.webp',
    miniWrapper: '/images/mini/biscuit.webp',
    bgColor: '#d3a9f7',
    accentColor: '#5c2d91',
    isLightBg: true,
    badgeTitle: 'BARISTA BISCOTTI',
    storyCopy:
      'Every great espresso deserves a caramelized biscuit on the saucer. We turned that ritual into a bar packed with spiced cookie butter and macchiato white chocolate.',
    fillingHeadline:
      'Whipped cinnamon-spiced biscuit butter and roasted macchiato crunch',
    chocolateFinish: 'velvety white & milk espresso swirl shell',
    roastProfile: 'Velvety Milanese Macchiato Roast',
    weight: '190g',
    cutImage: '/uploads/kunafa_details.webp',
  },
  {
    id: 'jam',
    slug: 'jam-or-go-nuts',
    name: 'ESPRESSO JAM OR GO NUTS',
    subtitle: 'Roasted Peanut Butter, Raspberry Berry Compote & Mocha Ganache',
    category: 'limited',
    wrapper: '/images/wrappers_new/jam.webp',
    miniWrapper: '/images/mini/jam.webp',
    bgColor: '#dd4f65',
    accentColor: '#ffe066',
    isLightBg: false,
    badgeTitle: 'BERRY ROAST',
    storyCopy:
      'Highlighting the natural red-berry notes of washed Kenyan coffee alongside creamy roasted peanut praline and house-made raspberry jam.',
    fillingHeadline:
      'Smooth roasted peanut praline and tangy raspberry jam with fruity Kenyan espresso',
    chocolateFinish: 'signature milk chocolate with ruby & gold flecks',
    roastProfile: 'Bright Berry-Forward Kenyan AA Espresso',
    weight: '195g',
    cutImage: '/uploads/c_kunafa_s.webp',
  },
  {
    id: 'honey',
    slug: 'onyour-comb',
    name: 'HONEY MACCHIATO COMB',
    subtitle: 'Golden Honeycomb Cinder Toffee, Wild Sidr Honey & Affogato Cream',
    category: 'limited',
    wrapper: '/images/wrappers_new/honey.webp',
    miniWrapper: '/images/mini/honey.webp',
    bgColor: '#caadf2',
    accentColor: '#f5a623',
    isLightBg: true,
    badgeTitle: 'GOLDEN AFFOGATO',
    storyCopy:
      'Shatteringly crisp golden honeycomb nuggets and Yemeni Sidr honey folded into a vanilla-bean affogato cream center.',
    fillingHeadline:
      'Crispy golden honeycomb shards and wildflower honey in vanilla affogato ganache',
    chocolateFinish: 'amber-kissed milk chocolate & espresso glaze',
    roastProfile: 'Yemeni Mocha Matari & Vanilla Affogato',
    weight: '185g',
    cutImage: '/uploads/kunafa_details.webp',
  },
  {
    id: 'kunafa_white',
    slug: 'white-knafeh',
    name: 'WHITE BREW KNAFEH',
    trademark: true,
    subtitle: 'Caramelized White Chocolate, Pistachio Knafeh & Blonde Espresso',
    category: 'limited',
    wrapper: '/images/wrappers_new/kunafa_white.webp',
    miniWrapper: '/images/mini/knafeh.webp',
    bgColor: '#9ec9e3',
    accentColor: '#1b4877',
    isLightBg: true,
    badgeTitle: 'BLONDE ROAST OG',
    storyCopy:
      'Our iconic pistachio & knafeh filling reimagined inside a creamy, lightly roasted blonde-espresso white chocolate shell.',
    fillingHeadline:
      'Signature toasted knafeh and pistachio cream wrapped in blonde-roast white chocolate',
    chocolateFinish: 'silky Madagascar vanilla & blonde espresso white chocolate',
    roastProfile: 'Light-Roast Artisan Blonde Arabica',
    weight: '200g',
    cutImage: '/uploads/c_kunafa_s.webp',
  },
  {
    id: 'kunafa_dark',
    slug: 'dark-knafeh',
    name: 'MIDNIGHT ESPRESSO KNAFEH',
    trademark: true,
    subtitle: '72% Single-Origin Dark Chocolate, Toasted Knafeh & Ristretto',
    category: 'dark',
    wrapper: '/images/wrappers_new/kunafa_dark.webp',
    miniWrapper: '/images/mini/dark_knafeh.webp',
    bgColor: '#22755d',
    accentColor: '#e9c46a',
    isLightBg: false,
    badgeTitle: '72% DARK ROAST',
    storyCopy:
      'For true dark-chocolate and double-ristretto purists: intense 72% dark couverture balances the sweet, nutty crunch of toasted pistachio knafeh.',
    fillingHeadline:
      'Toasted pistachio knafeh and tahini infused with bold double-ristretto dark cocoa',
    chocolateFinish: '72% single-origin dark chocolate & espresso bean crust',
    roastProfile: 'Double Ristretto Dark Roast',
    weight: '200g',
    cutImage: '/uploads/c_kunafa_dark_s.webp',
  },
  {
    id: 'mahalabi',
    slug: 'mahalabi-roast',
    name: 'CARDAMOM MAHALABI ROAST',
    subtitle: 'Rosewater Milk Pudding, Pistachio Crumble & Arabic Qahwa',
    category: 'dark',
    wrapper: '/images/wrappers_new/mahalabi.webp',
    miniWrapper: '/images/mini/dark_knafeh.webp',
    bgColor: '#3f8f5d',
    accentColor: '#f4a261',
    isLightBg: false,
    badgeTitle: 'QAHWA RESERVE',
    storyCopy:
      'Silky Middle Eastern mahalabi milk pudding delicately perfumed with saffron, rosewater and freshly roasted Arabic qahwa coffee.',
    fillingHeadline:
      'Velvety mahalabi cream, crushed pistachios and golden saffron-cardamom qahwa',
    chocolateFinish: 'aromatic dark & milk blend chocolate shell',
    roastProfile: 'Traditional Saffron & Cardamom Arabic Qahwa',
    weight: '195g',
    cutImage: '/uploads/kunafa_details.webp',
  },
];

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2021',
    title: 'LATE-NIGHT ESPRESSO & KNAFEH',
    subtitle: 'The Home Kitchen Roastery',
    description:
      'Born from a pregnancy craving and an obsession with specialty coffee in Dubai, Sarah & Yezen began tempering small batches of espresso-infused knafeh chocolate bars on their kitchen counter.',
    image: '/uploads/Milestone_Early_Days.webp',
  },
  {
    year: '2022',
    title: 'CRAFTING THE SIGNATURE BAR',
    subtitle: 'Hand-Painted & Freshly Pulled',
    description:
      'Months of perfecting the exact crunch-to-crema ratio: crispy kataifi pastry, roasted Sicilian & Iranian pistachios, organic tahini, and freshly pulled Arabica espresso.',
    image: '/uploads/Our_Milestones_Through_Time.webp',
  },
  {
    year: '2023',
    title: 'THAT VIRAL UNWRAP MOMENT',
    subtitle: '120+ Million Views Worldwide',
    description:
      'One ASMR crack of our thick espresso-chocolate shell revealing the molten pistachio-knafeh core ignited a global frenzy across TikTok and Instagram.',
    image: '/uploads/MS_That_Video.webp',
  },
  {
    year: '2024',
    title: '2 PM & 5 PM DAILY DROPS',
    subtitle: 'Selling Out in Under 60 Seconds',
    description:
      'Partnering exclusively with Careem in Dubai and Abu Dhabi, our daily freshly handmade drops became the most sought-after culinary souvenir on earth.',
    image: '/uploads/medium_MS_MOTF.webp',
  },
  {
    year: '2025',
    title: 'LONDON HARRODS POP-UP',
    subtitle: 'Taking Dubai Coffee Chocolate Global',
    description:
      'Queues wrapped around Knightsbridge as KAFÉ brought its interactive espresso-chocolate bar experience to Harrods London.',
    image: '/uploads/medium_Harrods.webp',
  },
  {
    year: '2026',
    title: 'THE LIMITED RESERVE BOXES',
    subtitle: 'The Future of Dessert & Coffee',
    description:
      'Expanding our atelier with Midnight Roast 72% dark bars, mini tasting flights, and bespoke gifting editions while keeping every bar 100% handmade.',
    image: '/uploads/medium_FIX_Ramadan_Boxes_2026.webp',
  },
];

/**
 * Exact Melted Chocolate Emblem from fixchocolatier.com
 * Rebranded with gold-foil "kafé · ROAST CHOCOLATIER"
 */
function MeltedKafeBadge({
  className = 'w-24 h-auto',
  idSuffix = 'main',
  onClick,
}: {
  className?: string;
  idSuffix?: string;
  onClick?: () => void;
}) {
  const gradId = `melted-grad-${idSuffix}`;
  const goldGradId = `gold-grad-${idSuffix}`;
  return (
    <svg
      viewBox="0 0 97 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <defs>
        <radialGradient
          id={gradId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(35.3315 80.175 -77.1292 33.9893 48.2039 39.2998)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8E442C" />
          <stop offset="0.39" stopColor="#8A4229" />
          <stop offset="0.72" stopColor="#803D23" />
          <stop offset="1" stopColor="#69331A" />
        </radialGradient>
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0B8" />
          <stop offset="35%" stopColor="#DEB253" />
          <stop offset="68%" stopColor="#B88328" />
          <stop offset="100%" stopColor="#FBE59B" />
        </linearGradient>
      </defs>
      {/* Main Melted Espresso-Chocolate Blob */}
      <path
        d="M95.5819 37.9598C92.0493 15.6198 73.1756 -0.825198 48.8673 0.0398022C21.2248 1.0198 -0.806578 21.8498 0.0218144 48.6248C0.241488 55.6998 2.2535 61.9798 4.46521 66.8548C7.07633 72.6098 8.39937 78.8398 8.39937 85.1598V117.71C8.39937 119.365 9.81726 120.735 11.4698 120.49C12.8178 120.29 13.8063 119.045 13.8063 117.68V94.6498C13.8063 87.3198 13.0924 79.9998 14.056 72.7348C14.3755 70.3148 17.5758 69.8548 18.6142 72.0698C21.6297 78.5048 22.8679 85.4498 22.1789 92.5498C21.9742 94.6348 21.6098 96.7198 21.6098 98.8148C21.6098 100.28 23.0926 101.345 24.4955 100.78C25.5689 100.345 26.2529 99.1398 26.0681 97.9948C24.7301 89.7048 26.158 80.5848 31.3353 79.7798C36.6824 78.9498 39.2985 88.2448 37.9056 96.8198C36.6075 104.825 36.1282 113.025 37.7558 120.995C37.9505 121.955 38.4947 122.97 39.4683 123.065C40.7613 123.19 41.7898 122.17 41.7898 120.9C41.7898 120.73 41.7698 120.565 41.7349 120.41C40.1323 113.04 40.9161 105.425 41.4803 97.9248C41.8098 93.5548 41.2007 88.9048 42.339 84.6648C42.8482 82.7698 44.366 80.2248 46.6725 80.7698C48.7744 81.2648 49.6831 83.9948 50.0026 85.8998C50.7165 90.1648 49.4934 94.5598 49.9427 98.8598C50.1074 100.435 51.6002 101.665 53.1779 101.21C54.2762 100.89 55.0201 99.7848 55.0201 98.6398V87.7148C55.0201 80.2148 59.3587 72.1048 63.4826 70.9348C68.0957 69.6298 72.1597 75.8798 70.5171 84.3398C69.4387 89.8998 68.7497 95.6298 69.9679 101.16C70.1976 102.2 70.7917 103.32 71.8551 103.42C73.2431 103.545 74.3664 102.455 74.3664 101.095C74.3664 100.9 74.3414 100.705 74.2965 100.525C72.8137 94.5048 73.9221 88.3548 74.3864 82.1898C74.7309 77.6148 72.9086 68.6298 78.2856 66.8548C82.4344 65.4848 84.6062 71.1598 83.5578 76.2848C82.8937 79.5248 82.3446 82.8498 82.9037 86.1048C83.1284 87.4198 84.1019 88.7898 85.435 88.7698C86.7231 88.7498 87.6417 87.6748 87.6417 86.4248C87.6417 86.2448 87.6167 86.0598 87.5818 85.8848C86.7231 81.6198 87.7415 77.3098 88.0161 72.9748C88.2957 68.5548 87.7815 62.9448 90.6922 59.5698C95.3602 54.1548 96.7681 45.4698 95.5819 37.9598Z"
        fill={`url(#${gradId})`}
      />
      {/* Bottom Melted Droplet */}
      <path
        d="M52.3886 108.665C55.4441 108.665 56.1131 116.465 56.1131 122.415C56.1131 125.99 54.4456 127.675 52.3886 127.675C50.3317 127.675 48.6641 125.99 48.6641 122.415C48.6641 116.465 49.3331 108.665 52.3886 108.665Z"
        fill="#69331A"
      />
      {/* Specular Gloss Highlights */}
      <path
        d="M2.28848 53.7549C2.56806 53.6899 2.75278 54.0299 2.86262 54.2949C3.92105 56.8349 4.59505 59.5199 5.51867 62.1149C6.13276 63.8399 6.67196 65.5899 7.28105 67.3149C7.39089 67.6249 7.5207 68.0299 7.26608 68.2349C7.01645 68.4349 6.66697 68.1899 6.5072 67.9099C5.53365 66.2099 4.8297 64.3499 4.10078 62.5299C3.22209 60.3349 2.34839 58.1099 1.98892 55.7699C1.90904 55.2499 1.65442 53.8949 2.28848 53.7549Z"
        fill="white"
        fillOpacity="0.65"
      />
      <path
        d="M7.95981 71.1199C8.26436 71.1549 8.33425 71.5649 8.3692 71.8699C8.65378 74.3849 8.13954 76.9599 7.36569 79.3749C7.32575 79.4949 7.26085 79.6449 7.13603 79.6449C7.0212 79.6449 6.95131 79.5249 6.93134 79.4099C6.64177 77.7749 6.9563 76.0599 7.11606 74.4149C7.2259 73.2899 7.23589 72.1049 7.75511 71.0949L7.95981 71.1199Z"
        fill="white"
        fillOpacity="0.65"
      />
      <path
        d="M19.8624 72.155C21.8445 75.565 23.0926 79.355 23.9563 83.205C24.0112 83.445 24.0512 83.73 23.8914 83.915C23.6218 84.225 23.2274 83.64 23.1375 83.3C22.2938 80.13 21.1405 77.055 19.8524 74.045C19.458 73.12 18.8938 72.185 18.9238 71.18C18.9388 70.69 19.6177 71.74 19.8624 72.155Z"
        fill="white"
        fillOpacity="0.65"
      />
      <path
        d="M36.3429 81.2948C37.651 82.8998 38.6894 84.7498 39.2486 86.7448C39.658 88.2098 39.8277 89.7948 39.3235 91.2298C39.2785 91.3598 39.1737 91.5298 39.0389 91.4848C38.944 91.4548 38.9041 91.3398 38.8891 91.2398C38.6595 89.6248 38.5496 87.9598 37.9805 86.4298C37.4163 84.9148 36.4627 83.5798 35.6989 82.1548C35.5691 81.9148 35.3444 81.4748 35.5691 81.3148C35.8037 81.1498 36.1781 81.0948 36.3429 81.2948Z"
        fill="white"
        fillOpacity="0.65"
      />
      <path
        d="M71.3609 73.7999C71.6255 73.8099 71.7553 74.1299 71.8152 74.3899C72.609 77.7999 72.3744 81.3649 71.955 84.8399C71.93 85.0599 71.8102 85.3749 71.5905 85.3499C71.4058 85.3299 71.3359 85.0999 71.3209 84.9149C71.0962 82.1449 71.4856 79.3549 71.3758 76.5799C71.3359 75.6099 70.9315 74.6649 71.1911 73.7249L71.3609 73.7999Z"
        fill="white"
        fillOpacity="0.65"
      />
      {/* Gold Foil KAFÉ Typography inside the Melted Chocolate Badge */}
      <g transform="rotate(-11 48 44)">
        <text
          x="48"
          y="46"
          textAnchor="middle"
          fill={`url(#${goldGradId})`}
          style={{
            fontFamily: 'var(--font-sydney), cursive',
            fontSize: '34px',
            fontWeight: 400,
            letterSpacing: '0.5px',
          }}
        >
          kafé
        </text>
        <text
          x="49"
          y="58"
          textAnchor="middle"
          fill={`url(#${goldGradId})`}
          style={{
            fontFamily: 'var(--font-sharpsans), sans-serif',
            fontSize: '6.2px',
            fontWeight: 800,
            letterSpacing: '1.6px',
          }}
        >
          ROAST &amp; DESSERT
        </text>
        <text
          x="49"
          y="66"
          textAnchor="middle"
          fill={`url(#${goldGradId})`}
          style={{
            fontFamily: 'var(--font-sharpsans), sans-serif',
            fontSize: '6.6px',
            fontWeight: 800,
            letterSpacing: '1.8px',
          }}
        >
          CHOCOLATIER
        </text>
      </g>
    </svg>
  );
}

export function BodyContent() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'home' | 'story' | 'collections'>('home');
  const [collectionFilter, setCollectionFilter] = useState<'all' | 'hero' | 'dark' | 'limited' | 'gifting'>('all');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [collectionsAccordionOpen, setCollectionsAccordionOpen] = useState<boolean>(true);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
  const [introStage, setIntroStage] = useState<'curtain' | 'open'>('open');
  const [unwrapped, setUnwrapped] = useState<boolean>(false);
  const [bagOpen, setBagOpen] = useState<boolean>(true);
  const [milestoneIndex, setMilestoneIndex] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const detailRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const activeBar = BARS[activeIndex];

  // Keyboard navigation for 3D carousel
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'home') return;
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % BARS.length);
        setUnwrapped(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + BARS.length) % BARS.length);
        setUnwrapped(false);
      } else if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [viewMode]);

  const handlePrevBar = () => {
    setActiveIndex((prev) => (prev - 1 + BARS.length) % BARS.length);
    setUnwrapped(false);
  };

  const handleNextBar = () => {
    setActiveIndex((prev) => (prev + 1) % BARS.length);
    setUnwrapped(false);
  };

  const triggerLiquidCurtain = (callback?: () => void) => {
    setIntroStage('curtain');
    setTimeout(() => {
      if (callback) callback();
    }, 550);
    setTimeout(() => {
      setIntroStage('open');
    }, 1550);
  };

  const handleSelectBar = (index: number, scrollToDetails = false) => {
    setActiveIndex(index);
    setUnwrapped(false);
    if (viewMode !== 'home') {
      setViewMode('home');
    }
    if (scrollToDetails && detailRef.current) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (delta < -45) handleNextBar();
    else if (delta > 45) handlePrevBar();
    dragStartX.current = null;
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -ny * 22, y: nx * 26 });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  const textPrimaryClass = activeBar.isLightBg ? 'text-[#3B1707]' : 'text-[#FFF5D6]';
  const borderPrimaryClass = activeBar.isLightBg ? 'border-[#3B1707]' : 'border-[#FFF5D6]';

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden transition-colors duration-700"
      style={{
        backgroundColor:
          viewMode === 'story'
            ? '#69331A'
            : viewMode === 'collections'
            ? '#3B1707'
            : activeBar.bgColor,
      }}
    >
      {/* Subtle Noise Texture Overlay matching fixchocolatier.com */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url(/uploads/raw_noise_grey.png)',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* =====================================================================
          LIQUID ESPRESSO-CHOCOLATE DRIP CURTAIN ("The ORIGINAL COFFEE CHOCOLATE")
         ===================================================================== */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-transform duration-1000 ease-in-out ${
          introStage === 'curtain' ? 'translate-y-0' : '-translate-y-[115%]'
        }`}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#3B1707] via-[#592711] to-[#69331A] flex flex-col items-center justify-center relative shadow-2xl">
          {/* Glossy Liquid Specular Lines */}
          <div className="text-center px-6 select-none">
            <div
              className="font-script text-5xl md:text-7xl gold-foil-text mb-1"
              style={{ transform: 'rotate(-6deg)' }}
            >
              The
            </div>
            <div className="font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] gold-foil-text">
              ORIGINAL
              <br />
              COFFEE
              <br />
              CHOCOLATE
            </div>
          </div>

          {/* Dripping Chocolate Wave Bottom Skirt */}
          <svg
            viewBox="0 0 1440 320"
            className="absolute -bottom-44 left-0 w-full h-48 text-[#69331A] fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L1440,0 L1440,96 C1360,210 1310,60 1240,180 C1170,300 1110,80 1030,140 C950,200 890,310 810,190 C730,70 680,260 600,220 C520,180 460,40 380,170 C300,300 240,90 160,150 C80,210 40,120 0,96 Z" />
          </svg>
        </div>
      </div>

      {/* =====================================================================
          TOP HEADER BAR (HAMBURGER + MELTED CHOCOLATE BADGE + QUICK ACTIONS)
         ===================================================================== */}
      <header className="fixed top-0 left-0 w-full z-40 px-4 sm:px-8 pt-4 flex items-start justify-between pointer-events-none">
        {/* Top-Left Hamburger Menu Button (Exact replica of fixchocolatier.com) */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="group relative flex flex-col items-center justify-center gap-1.5 cursor-pointer w-12 h-12 rounded-full bg-black/15 backdrop-blur-sm border border-white/15 hover:bg-black/30 transition-all"
          >
            <span
              className={`block w-6 h-[2.5px] rounded-full transition-transform duration-300 ${
                menuOpen
                  ? 'bg-[#3B1707] translate-y-[8px] rotate-45'
                  : 'bg-[#FFF5D6]'
              }`}
            />
            <span
              className={`block w-6 h-[2.5px] rounded-full transition-opacity duration-300 ${
                menuOpen ? 'opacity-0 bg-[#3B1707]' : 'opacity-100 bg-[#FFF5D6]'
              }`}
            />
            <span
              className={`block w-6 h-[2.5px] rounded-full transition-transform duration-300 ${
                menuOpen
                  ? 'bg-[#3B1707] -translate-y-[8px] -rotate-45'
                  : 'bg-[#FFF5D6]'
              }`}
            />
          </button>

          {/* Quick view switcher pills on desktop */}
          <div className="hidden md:flex items-center gap-2 bg-black/15 backdrop-blur-md rounded-full p-1 border border-white/15">
            <button
              type="button"
              onClick={() => triggerLiquidCurtain(() => setViewMode('home'))}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-all ${
                viewMode === 'home'
                  ? 'bg-[#DFD3C3] text-[#3B1707]'
                  : 'text-[#FFF5D6] hover:bg-white/10'
              }`}
            >
              3D Espresso Bars
            </button>
            <button
              type="button"
              onClick={() => triggerLiquidCurtain(() => setViewMode('collections'))}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-all ${
                viewMode === 'collections'
                  ? 'bg-[#DFD3C3] text-[#3B1707]'
                  : 'text-[#FFF5D6] hover:bg-white/10'
              }`}
            >
              All 12 Flavors
            </button>
            <button
              type="button"
              onClick={() => triggerLiquidCurtain(() => setViewMode('story'))}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-all ${
                viewMode === 'story'
                  ? 'bg-[#DFD3C3] text-[#3B1707]'
                  : 'text-[#FFF5D6] hover:bg-white/10'
              }`}
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Center Melted Chocolate KAFÉ Emblem */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-2">
          <div
            onClick={() => triggerLiquidCurtain(() => setViewMode('home'))}
            className="cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
            title="KAFÉ Roast & Dessert Chocolatier — Home"
          >
            <MeltedKafeBadge className="w-20 sm:w-24 h-auto" idSuffix="header" />
          </div>
        </div>

        {/* Top-Right Drip Replay & Careem Order Pill */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => triggerLiquidCurtain()}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#3B1707]/80 hover:bg-[#3B1707] text-[#FFF5D6] border border-[#D3A84C]/40 text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-all shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#D3A84C] animate-ping" />
            Drip Transition
          </button>
          <a
            href="#order-careem"
            onClick={(e) => {
              e.preventDefault();
              if (viewMode !== 'home') setViewMode('home');
              setTimeout(() => {
                detailRef.current?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-4 py-2 rounded-full bg-[#DFD3C3] hover:bg-[#FFF5D6] text-[#3B1707] text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg"
          >
            Order on Careem
          </a>
        </div>
      </header>

      {/* =====================================================================
          ROUNDED BEIGE NAVIGATION DRAWER (Exact replica of home_menu_open.png)
         ===================================================================== */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto bg-black/45 backdrop-blur-xs'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-[#DFD3C3] text-[#3B1707] rounded-[2.75rem] p-8 sm:p-11 fixed top-3 bottom-3 left-3 w-[calc(100vw-1.5rem)] md:w-[27rem] flex flex-col justify-between shadow-2xl transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : '-translate-x-[110%]'
          }`}
        >
          {/* Close button inside drawer */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-[#3B1707]/20 flex items-center justify-center text-[#3B1707] font-extrabold cursor-pointer hover:bg-[#3B1707] hover:text-[#FFF5D6] transition-colors"
            >
              ✕
            </button>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#69331A]">
              DUBAI · SPECIALTY COFFEE CHOCOLATE
            </span>
          </div>

          <nav className="my-auto overflow-y-auto py-6">
            <ul className="space-y-3 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    setCollectionsAccordionOpen((prev) => !prev)
                  }
                  className="flex items-center gap-2 uppercase cursor-pointer hover:text-[#69331A] transition-colors"
                >
                  <span>COLLECTIONS</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      collectionsAccordionOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {collectionsAccordionOpen && (
                  <ul className="mt-2.5 ml-3 space-y-2 text-base sm:text-lg font-semibold capitalize text-[#69331A]">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setCollectionFilter('hero');
                          setViewMode('collections');
                          setMenuOpen(false);
                        }}
                        className="hover:text-[#3B1707] cursor-pointer"
                      >
                        Hero Espresso Bars
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setCollectionFilter('dark');
                          setViewMode('collections');
                          setMenuOpen(false);
                        }}
                        className="hover:text-[#3B1707] cursor-pointer"
                      >
                        Midnight 72% Roast Bars
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setCollectionFilter('gifting');
                          setViewMode('collections');
                          setMenuOpen(false);
                        }}
                        className="hover:text-[#3B1707] cursor-pointer"
                      >
                        Gifting &amp; Sharing Boxes
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setCollectionFilter('limited');
                          setViewMode('collections');
                          setMenuOpen(false);
                        }}
                        className="hover:text-[#3B1707] cursor-pointer"
                      >
                        Limited Reserve Bars
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => {
                    setViewMode('story');
                    setMenuOpen(false);
                  }}
                  className="uppercase cursor-pointer hover:text-[#69331A] transition-colors"
                >
                  OUR STORY
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setViewMode('collections');
                    setCollectionFilter('all');
                    setMenuOpen(false);
                  }}
                  className="uppercase cursor-pointer hover:text-[#69331A] transition-colors"
                >
                  ALL 12 BARS
                </button>
              </li>
              <li>
                <a
                  href="#footer-socials"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[#69331A] transition-colors"
                >
                  SOCIALS
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setViewMode('story');
                    setMenuOpen(false);
                  }}
                  className="uppercase cursor-pointer hover:text-[#69331A] transition-colors"
                >
                  PRESS &amp; EVENTS
                </button>
              </li>
              <li>
                <a
                  href="#footer-socials"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[#69331A] transition-colors"
                >
                  LOCATIONS &amp; FAQS
                </a>
              </li>
            </ul>
          </nav>

          {/* Bottom Legal Links inside Drawer */}
          <div className="border-t border-[#3B1707]/15 pt-4 flex flex-wrap gap-4 text-xs font-semibold text-[#69331A]">
            <span>Terms &amp; Conditions</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Cookies Policy</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          VIEW 1: HOME — 3D INTERACTIVE BAR CAROUSEL + PRODUCT DETAIL SECTION
         ===================================================================== */}
      {viewMode === 'home' && (
        <>
          {/* HERO 3D VIEWPORT */}
          <section
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden select-none"
          >
            {/* Dynamic Radial Glow Behind Active 3D Bar */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[110px] opacity-45 transition-all duration-700"
              style={{ backgroundColor: activeBar.accentColor }}
            />

            {/* Floating Background Typography Watermark */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-10">
              <span
                className={`font-extrabold uppercase text-[13vw] leading-none tracking-tighter text-center ${textPrimaryClass}`}
              >
                {activeBar.badgeTitle}
              </span>
            </div>

            {/* Top Spacer + Roast Tag */}
            <div className="pt-28 px-6 text-center z-20 pointer-events-none">
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${borderPrimaryClass}/25 bg-black/10 backdrop-blur-xs text-xs font-extrabold uppercase tracking-widest ${textPrimaryClass}`}
              >
                <span>☕ {activeBar.roastProfile}</span>
                <span>·</span>
                <span>
                  BAR {String(activeIndex + 1).padStart(2, '0')} / {BARS.length}
                </span>
              </div>
            </div>

            {/* CENTER 3D PERSPECTIVE FAN CAROUSEL OF WRAPPED BARS */}
            <div
              className="relative flex-1 flex items-center justify-center w-full z-20"
              style={{ perspective: '1500px' }}
            >
              <div
                className="relative w-full max-w-6xl h-[420px] sm:h-[470px] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {BARS.map((bar, idx) => {
                  // Circular shortest distance from activeIndex
                  let offset = idx - activeIndex;
                  if (offset > BARS.length / 2) offset -= BARS.length;
                  if (offset < -BARS.length / 2) offset += BARS.length;

                  const absOffset = Math.abs(offset);
                  const isVisible = absOffset <= 3;
                  if (!isVisible) return null;

                  const isActive = offset === 0;
                  const translateX = offset * 215;
                  const translateY = absOffset * absOffset * 16 + (bagOpen ? 0 : 120);
                  const translateZ = isActive ? 90 : -absOffset * 110;
                  const rotateZ = offset * 8.5;
                  const rotateY = offset * -18 + (isActive ? tilt.y : 0);
                  const rotateX = isActive ? tilt.x : 6;
                  const scale = isActive ? 1.06 : Math.max(0.68, 0.92 - absOffset * 0.1);

                  return (
                    <div
                      key={bar.id}
                      onClick={() => {
                        if (isActive) {
                          detailRef.current?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          handleSelectBar(idx, false);
                        }
                      }}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseMove={isActive ? handleCardMouseMove : undefined}
                      onMouseLeave={isActive ? handleCardMouseLeave : undefined}
                      className="bar-card-3d absolute cursor-pointer"
                      style={{
                        zIndex: 30 - absOffset * 5,
                        opacity: absOffset > 2 ? 0.45 : 1,
                        transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                      }}
                    >
                      {/* 3D Chocolate Bar Wrapper Mesh */}
                      <div className="relative w-[220px] sm:w-[255px] h-[340px] sm:h-[395px] rounded-[18px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] group">
                        {/* Top Gold Foil Crimped Edge */}
                        <div
                          className="absolute -top-2.5 left-2 right-2 h-4 rounded-t-md shadow-inner"
                          style={{
                            backgroundImage: 'url(/images/gold_foil.webp)',
                            backgroundSize: 'cover',
                          }}
                        />

                        {/* 3D Side Depth Extrusion */}
                        <div className="absolute top-2 bottom-2 -right-3 w-3.5 rounded-r-lg bg-[#281005]/80 transform skew-y-6" />
                        <div className="absolute top-2 bottom-2 -left-2.5 w-3 rounded-l-lg bg-white/20 transform -skew-y-6" />

                        {/* Main Printed Wrapper Surface (Cropped to Front Face of Wrapper Texture) */}
                        <div
                          className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/25 bg-[#3B1707]"
                          style={{
                            backgroundImage: `url(${bar.wrapper})`,
                            backgroundSize: '104% 158%',
                            backgroundPosition: 'center top',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          {/* Custom KAFÉ Melted Chocolate Badge Overlaid Seamless Over Wrapper Center */}
                          <div
                            className="absolute left-[45.5%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 w-[57%] pointer-events-none"
                            style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.28))' }}
                          >
                            <MeltedKafeBadge
                              className="w-full h-auto"
                              idSuffix={`bar-${bar.id}`}
                            />
                          </div>

                          {/* Foil Roughness & Specular Glare Overlay */}
                          <div
                            className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-35"
                            style={{
                              backgroundImage: 'url(/images/wrappers_new/rough.webp)',
                              backgroundSize: 'cover',
                            }}
                          />
                          <div
                            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                            style={{
                              opacity: isActive && hoveredCard === idx ? 0.55 : 0.2,
                              background: `radial-gradient(circle at ${
                                50 + tilt.y * 1.8
                              }% ${
                                40 - tilt.x * 1.8
                              }%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 62%)`,
                            }}
                          />

                          {/* Active Bar Interactive Callout Pill */}
                          {isActive && (
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#3B1707]/85 backdrop-blur-md text-[#FFF5D6] text-[10px] font-extrabold uppercase tracking-wider border border-[#D3A84C]/50">
                              <span>{bar.weight} · ESPRESSO INFUSED</span>
                              <span className="text-[#FDE08D]">UNWRAP ↓</span>
                            </div>
                          )}
                        </div>

                        {/* Bottom Gold Foil Crimped Edge */}
                        <div
                          className="absolute -bottom-2.5 left-2 right-2 h-4 rounded-b-md shadow-inner"
                          style={{
                            backgroundImage: 'url(/images/gold_foil.webp)',
                            backgroundSize: 'cover',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3D GIFT BAG BASE AT BOTTOM OF HERO (Matches shot_3.png / home_hover_center.png) */}
              <div
                onClick={() => setBagOpen((prev) => !prev)}
                title="Click to toggle 3D KAFÉ Gift Bag"
                className="cursor-pointer absolute -bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center group"
              >
                <div className="relative w-[290px] sm:w-[350px] h-[95px] rounded-t-3xl bg-gradient-to-b from-[#4E200B] to-[#2C1004] border-t-2 border-x border-[#D3A84C]/55 shadow-[0_-18px_45px_rgba(0,0,0,0.45)] flex items-center justify-between px-6 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  {/* Gold Ribbon Handles */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-10 rounded-full border-4 border-[#D3A84C] opacity-80" />
                  <div className="flex flex-col">
                    <span className="font-script text-2xl gold-foil-text leading-none">
                      kafé
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DFD3C3]/80">
                      DUBAI ROAST &amp; CHOCOLATIER BAG
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {BARS.slice(0, 4).map((b) => (
                      <img
                        key={b.id}
                        src={b.miniWrapper}
                        alt={b.name}
                        className="w-6 h-12 object-cover rounded-xs border border-white/30 transform -rotate-6"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM BAR TICKER & CONTROLS (Exact replica of shot_4.png & shot_5.png) */}
            <div className="relative z-30 pb-6 pt-2 px-4 sm:px-10 flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 sm:gap-6 max-w-5xl w-full">
                {/* Left Arrow Button */}
                <button
                  type="button"
                  aria-label="Previous chocolate bar"
                  onClick={handlePrevBar}
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#DFD3C3] hover:bg-[#FFF5D6] text-[#3B1707] flex items-center justify-center shadow-xl cursor-pointer transition-transform active:scale-95 shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Active Bar Title & Subtitle */}
                <div
                  onClick={() =>
                    detailRef.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-center cursor-pointer group px-2"
                >
                  <div className="flex items-start justify-center gap-1">
                    <h1
                      className={`font-extrabold uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight leading-none transition-colors ${textPrimaryClass}`}
                    >
                      {activeBar.name}
                    </h1>
                    {activeBar.trademark && (
                      <span
                        className={`text-sm sm:text-lg font-extrabold ${textPrimaryClass}`}
                      >
                        ™
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-1.5 text-xs sm:text-sm font-semibold opacity-90 ${textPrimaryClass}`}
                  >
                    {activeBar.subtitle} ·{' '}
                    <span className="underline font-extrabold">
                      SCROLL OR CLICK TO UNWRAP ↓
                    </span>
                  </p>
                </div>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  aria-label="Next chocolate bar"
                  onClick={handleNextBar}
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#DFD3C3] hover:bg-[#FFF5D6] text-[#3B1707] flex items-center justify-center shadow-xl cursor-pointer transition-transform active:scale-95 shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* 12-Bar Dot & Thumbnail Selector Strip */}
              <div className="mt-4 flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full px-2 py-1">
                {BARS.map((b, i) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => handleSelectBar(i, false)}
                    title={b.name}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      i === activeIndex
                        ? 'w-8 bg-[#DFD3C3]'
                        : 'w-2.5 bg-white/35 hover:bg-white/65'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================================
              PRODUCT DETAIL SECTION (Exact replica of /hero-bars/cant-get-knafeh-of-it)
             ===================================================================== */}
          <div ref={detailRef} className={`relative z-20 ${textPrimaryClass}`}>
            {/* TWO-COLUMNS EDITORIAL CONTENT (`real_product_scroll_1.png`) */}
            <section className="two-columns-content pt-20 pb-10">
              <div className="container mx-auto px-5 md:px-10">
                <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-start">
                  <div className="col-span-12 md:col-span-5">
                    <div className="inline-block px-3 py-1 rounded-full border border-current/30 text-xs font-extrabold uppercase tracking-widest mb-3">
                      {activeBar.roastProfile}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.92]">
                      {activeBar.badgeTitle}
                    </h2>
                    <p className="mt-4 text-base md:text-xl leading-relaxed opacity-90">
                      {activeBar.storyCopy}
                    </p>

                    {/* Flavor Switcher Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {BARS.slice(0, 6).map((bar, idx) => (
                        <button
                          key={bar.id}
                          type="button"
                          onClick={() => handleSelectBar(idx, false)}
                          className={`px-3 py-1.5 rounded-full text-xs font-extrabold uppercase cursor-pointer transition-all border ${
                            idx === activeIndex
                              ? 'bg-[#DFD3C3] text-[#3B1707] border-[#DFD3C3]'
                              : 'border-current/30 hover:bg-white/10'
                          }`}
                        >
                          {bar.name.split(' ').slice(0, 3).join(' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-center">
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.94] tracking-tight">
                      {activeBar.fillingHeadline}
                    </h3>
                  </div>
                </div>
              </div>
            </section>

            {/* CURVED SVG ARC TICKER (`real_product_scroll_2.png`) */}
            <div className="curved-text-banner w-screen overflow-hidden relative my-4">
              <svg
                viewBox="0 0 1898 466"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full overflow-visible select-none"
              >
                <path
                  id="kafe-product-arc"
                  d="M-76 416.683C619.442 -136.433 1277.67 -136.229 1974 416.683"
                  stroke="none"
                />
                <text
                  fill="currentColor"
                  className="font-extrabold uppercase"
                  style={{
                    fontSize: '74px',
                    letterSpacing: '2px',
                  }}
                >
                  <textPath href="#kafe-product-arc" startOffset="0%">
                    {`${activeBar.name} · ${activeBar.name} · ${activeBar.name} · `}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* BROKEN BAR FILLING SHOWCASE + SPINNING CAREEM QR + "ENVELOPED IN OUR" (`real_product_scroll_3.png`) */}
            <section
              id="order-careem"
              className="product-hero-section pb-24 md:pb-32 relative"
            >
              <div className="container mx-auto px-5 md:px-10 relative">
                {/* Interactive Broken-Open Chocolate Bar Image */}
                <div className="relative mx-auto max-w-4xl flex flex-col items-center">
                  <div
                    onClick={() => setUnwrapped((prev) => !prev)}
                    className="relative cursor-pointer group"
                    title="Click to toggle wrapped / broken-open bar view"
                  >
                    <div className="relative mx-auto w-full max-w-[680px]">
                      <img
                        src={unwrapped ? activeBar.wrapper : activeBar.cutImage}
                        alt={activeBar.name}
                        className="w-full h-auto object-contain mx-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-103 rounded-3xl"
                      />
                      {!unwrapped && (
                        <div
                          className="pointer-events-none absolute left-[56.2%] top-[62.5%] w-[21%] -translate-x-1/2 -translate-y-1/2"
                          style={{ transform: 'translate(-50%, -50%) rotate(43deg)' }}
                        >
                          <MeltedKafeBadge
                            className="w-full h-auto"
                            idSuffix="detail-cut-bar"
                          />
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUnwrapped((prev) => !prev);
                        }}
                        className="px-5 py-2 rounded-full bg-[#DFD3C3] text-[#3B1707] text-xs font-extrabold uppercase tracking-wider shadow-lg cursor-pointer hover:scale-105 transition-transform"
                      >
                        {unwrapped
                          ? 'View Broken-Open Pistachio & Espresso Filling'
                          : 'View Full Printed Wrapper Artwork'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Spinning Careem QR Badge + Handwritten "Enveloped In Our" Headline */}
                <div className="grid grid-cols-12 gap-8 items-end mt-12">
                  {/* Left: Rotating Circular Badge ("ORDER WITH CAREEM") */}
                  <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start">
                    <a
                      href="https://www.careem.com"
                      target="_blank"
                      rel="noreferrer"
                      className="relative w-44 h-44 flex items-center justify-center rounded-full bg-black/15 backdrop-blur-md border border-current/20 hover:scale-105 transition-transform"
                    >
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full p-2 animate-spin-slow"
                      >
                        <defs>
                          <path
                            id="careemCirclePath"
                            d="M 100, 100 m -76, 0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
                          />
                        </defs>
                        <text
                          fill="currentColor"
                          className="font-extrabold uppercase"
                          style={{ fontSize: '13.5px', letterSpacing: '3.2px' }}
                        >
                          <textPath href="#careemCirclePath">
                            ORDER WITH CAREEM · ORDER WITH CAREEM ·
                          </textPath>
                        </text>
                      </svg>
                      {/* Center QR Code Icon */}
                      <div className="absolute inset-11 rounded-2xl bg-[#FFF5D6] text-[#3B1707] p-2.5 flex flex-col items-center justify-center shadow-inner">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-12 h-12"
                        >
                          <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm3 3h3v2h-3v-2zm-3 3h2v2h-2v-2zm3 0h3v2h-3v-2z" />
                        </svg>
                        <span className="text-[8px] font-extrabold uppercase tracking-tighter mt-0.5">
                          SCAN CAREEM
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Right: "Enveloped In Our" Handwritten Script + Bold Uppercase */}
                  <div className="col-span-12 md:col-span-6 md:col-start-6 text-center md:text-left">
                    <img
                      src="/uploads/enveloped_in_our.svg"
                      alt="Enveloped In Our"
                      className={`h-14 sm:h-20 w-auto mx-auto md:mx-0 mb-2 ${
                        activeBar.isLightBg ? 'invert brightness-25' : ''
                      }`}
                    />
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.92]">
                      {activeBar.chocolateFinish}
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}

      {/* =====================================================================
          VIEW 2: ALL 12 BARS COLLECTION GRID (`/hero-bars` replica)
         ===================================================================== */}
      {viewMode === 'collections' && (
        <section className="relative z-20 pt-32 pb-24 px-5 sm:px-10 container mx-auto text-[#FFF5D6]">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#D3A84C]">
              HOME &gt; COLLECTIONS
            </p>
            <h1 className="mt-2 text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-none">
              THE ESPRESSO &amp; KNAFEH COLLECTION
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#DFD3C3]">
              Every KAFÉ bar is handmade daily in Dubai, pairing freshly roasted
              specialty coffee with signature Middle Eastern pastry fillings.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All 12 Bars' },
                { id: 'hero', label: 'Hero Espresso Bars' },
                { id: 'dark', label: 'Midnight 72% Roast' },
                { id: 'gifting', label: 'Gifting & Sharing' },
                { id: 'limited', label: 'Limited Reserve' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCollectionFilter(tab.id as typeof collectionFilter)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-all ${
                    collectionFilter === tab.id
                      ? 'bg-[#DFD3C3] text-[#3B1707]'
                      : 'bg-white/10 text-[#FFF5D6] hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {BARS.filter(
              (b) => collectionFilter === 'all' || b.category === collectionFilter
            ).map((bar) => {
              const realIdx = BARS.findIndex((item) => item.id === bar.id);
              return (
                <div
                  key={bar.id}
                  onClick={() => handleSelectBar(realIdx, true)}
                  className="group cursor-pointer rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between border border-white/15"
                  style={{ backgroundColor: bar.bgColor }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                        bar.isLightBg
                          ? 'border-[#3B1707]/30 text-[#3B1707]'
                          : 'border-[#FFF5D6]/30 text-[#FFF5D6]'
                      }`}
                    >
                      {bar.badgeTitle}
                    </span>
                    <span
                      className={`text-xs font-extrabold ${
                        bar.isLightBg ? 'text-[#3B1707]' : 'text-[#FFF5D6]'
                      }`}
                    >
                      {bar.weight}
                    </span>
                  </div>

                  {/* Bar Wrapper Preview with KAFÉ Badge */}
                  <div className="relative my-6 mx-auto w-44 h-68 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${bar.wrapper})`,
                        backgroundSize: '104% 158%',
                        backgroundPosition: 'center top',
                      }}
                    />
                    <div className="absolute left-[45.5%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 w-[57%] pointer-events-none">
                      <MeltedKafeBadge
                        className="w-full h-auto"
                        idSuffix={`grid-${bar.id}`}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      bar.isLightBg ? 'text-[#3B1707]' : 'text-[#FFF5D6]'
                    }
                  >
                    <h3 className="font-extrabold uppercase text-xl leading-tight">
                      {bar.name}
                    </h3>
                    <p className="mt-1 text-xs opacity-85 line-clamp-2">
                      {bar.subtitle}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase underline">
                      <span>Explore in 3D</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =====================================================================
          VIEW 3: OUR STORY (`/our-story` exact replica: story_top.png -> story_scroll_4.png)
         ===================================================================== */}
      {viewMode === 'story' && (
        <div className="relative z-20 text-[#FFF5D6] pt-32 pb-20">
          {/* Breadcrumb & Title */}
          <div className="container mx-auto px-5 md:px-10 text-center">
            <div className="text-xs font-extrabold uppercase tracking-widest opacity-80">
              <button
                type="button"
                onClick={() => setViewMode('home')}
                className="hover:underline cursor-pointer"
              >
                HOME
              </button>{' '}
              &gt; <span>OUR STORY</span>
            </div>
            <h1 className="mt-3 text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase leading-none">
              OUR STORY
            </h1>

            {/* Founders Hero Image (`large_our_story.webp`) */}
            <div className="mt-10 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-5xl mx-auto border border-white/15">
              <img
                src="/uploads/large_our_story.webp"
                alt="KAFÉ Founders & Craft"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* "It All Started With A Craving..." + Two-Column Story (`story_scroll_1.png`) */}
          <section className="container mx-auto px-5 md:px-10 mt-20">
            <div className="grid grid-cols-12 gap-y-8 md:gap-10 items-start">
              <div className="col-span-12 md:col-span-5">
                <img
                  src="/uploads/it_all_started_with_a_craving.svg"
                  alt="It All Started With A Craving..."
                  className="w-64 sm:w-80 h-auto mb-3"
                />
                <h2 className="text-4xl sm:text-6xl font-extrabold uppercase leading-[0.92]">
                  THE ORIGINAL COFFEE CHOCOLATE!
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-5 text-base sm:text-xl leading-relaxed text-[#DFD3C3]">
                <p>
                  KAFÉ Roast &amp; Dessert Chocolatier began in Dubai with a
                  simple obsession: uniting the ritual of specialty Arabica
                  espresso with the nostalgic crunch of traditional Middle
                  Eastern desserts.
                </p>
                <p>
                  Every bar is hand-painted, tempered in small batches, and
                  filled to the brim with freshly toasted knafeh, house-ground
                  pistachio praline, and signature espresso infusions. What
                  started on a home kitchen counter quickly turned into a
                  worldwide sensation.
                </p>
              </div>
            </div>

            {/* Full-Width Broken Pistachio & Espresso Bar Showcase (`raw_our_story_long.png`) */}
            <div className="mt-16 max-w-5xl mx-auto">
              <img
                src="/uploads/raw_our_story_long.png"
                alt="Broken open Dubai Knafeh & Espresso Chocolate Bar"
                className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </section>

          {/* ROUNDED BEIGE TIMELINE SECTION: "The Journey — OUR MILESTONES THROUGH TIME" (`story_scroll_3.png`) */}
          <section className="container mx-auto px-4 sm:px-8 mt-20">
            <div className="bg-[#DFD3C3] text-[#3B1707] rounded-[3rem] p-8 sm:p-14 md:p-20 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <img
                    src="/uploads/the_journey.svg"
                    alt="The Journey"
                    className="h-12 sm:h-16 w-auto mb-2"
                  />
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.92]">
                    OUR MILESTONES
                    <br />
                    THROUGH TIME
                  </h2>
                </div>

                {/* Year Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {MILESTONES.map((ms, i) => (
                    <button
                      key={ms.year}
                      type="button"
                      onClick={() => setMilestoneIndex(i)}
                      className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase cursor-pointer transition-all ${
                        i === milestoneIndex
                          ? 'bg-[#3B1707] text-[#FFF5D6]'
                          : 'bg-[#3B1707]/10 text-[#3B1707] hover:bg-[#3B1707]/20'
                      }`}
                    >
                      {ms.year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Milestone Highlight + Horizontal Cards */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl bg-[#3B1707]">
                  <img
                    src={MILESTONES[milestoneIndex].image}
                    alt={MILESTONES[milestoneIndex].title}
                    className="w-full h-[320px] sm:h-[400px] object-cover"
                  />
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#69331A] text-[#FFF5D6] text-sm font-extrabold">
                    {MILESTONES[milestoneIndex].year} ·{' '}
                    {MILESTONES[milestoneIndex].subtitle}
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-extrabold uppercase leading-none">
                    {MILESTONES[milestoneIndex].title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#69331A] leading-relaxed">
                    {MILESTONES[milestoneIndex].description}
                  </p>
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setMilestoneIndex(
                          (prev) =>
                            (prev - 1 + MILESTONES.length) % MILESTONES.length
                        )
                      }
                      className="w-12 h-12 rounded-full bg-[#3B1707] text-[#FFF5D6] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setMilestoneIndex(
                          (prev) => (prev + 1) % MILESTONES.length
                        )
                      }
                      className="w-12 h-12 rounded-full bg-[#3B1707] text-[#FFF5D6] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =====================================================================
          FLOATING COOKIES PREFERENCE CARD (Exact replica of shot_4.png bottom-right)
         ===================================================================== */}
      {!cookiesAccepted && (
        <div className="fixed bottom-4 right-4 z-40 w-64 sm:w-72 rounded-3xl bg-[#DFD3C3] p-5 text-[#3B1707] shadow-2xl border border-[#3B1707]/10">
          <div className="text-sm font-extrabold uppercase tracking-wide mb-3">
            COOKIES PREFERENCE
          </div>
          <div className="space-y-2 text-xs font-extrabold">
            <button
              type="button"
              onClick={() => setCookiesAccepted(true)}
              className="w-full flex items-center justify-between py-1.5 border-b border-[#3B1707]/15 cursor-pointer group"
            >
              <span>ALLOW ALL</span>
              <span className="w-6 h-6 rounded-full bg-[#3B1707] text-[#DFD3C3] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCookiesAccepted(true)}
              className="w-full flex items-center justify-between py-1.5 cursor-pointer group"
            >
              <span>CUSTOMIZE</span>
              <span className="w-6 h-6 rounded-full bg-[#3B1707] text-[#DFD3C3] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          MAIN FOOTER + INFINITE BOTTOM MARQUEE (Exact replica of real_product_scroll_4.png)
         ===================================================================== */}
      <footer
        id="footer-socials"
        className={`main-footer relative z-20 pt-10 ${
          viewMode === 'home' ? textPrimaryClass : 'text-[#FFF5D6]'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          {/* Top Horizontal Footer Navigation */}
          <ul className="flex flex-wrap items-center justify-between gap-4 border-t border-current/15 pt-8 text-sm md:text-base font-extrabold uppercase">
            <li>
              <button
                type="button"
                onClick={() => setViewMode('collections')}
                className="uppercase cursor-pointer hover:opacity-75"
              >
                COLLECTIONS
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setViewMode('story')}
                className="uppercase cursor-pointer hover:opacity-75"
              >
                OUR STORY
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setViewMode('home')}
                className="uppercase cursor-pointer hover:opacity-75"
              >
                3D BAR EXPERIENCE
              </button>
            </li>
            <li>
              <a href="#footer-socials" className="hover:opacity-75">
                PRESS &amp; EVENTS
              </a>
            </li>
            <li>
              <a href="#footer-socials" className="hover:opacity-75">
                LOCATIONS
              </a>
            </li>
            <li>
              <a href="#footer-socials" className="hover:opacity-75">
                CAREERS
              </a>
            </li>
            <li>
              <a href="#footer-socials" className="hover:opacity-75">
                FAQS
              </a>
            </li>
            <li>
              <a href="#footer-socials" className="hover:opacity-75">
                CONTACT US
              </a>
            </li>
          </ul>

          {/* Rounded Social Media Card (`real_product_scroll_4.png`) */}
          <div className="bg-black/15 backdrop-blur-xs rounded-[2.5rem] px-6 py-10 md:p-14 mt-8">
            <div className="grid grid-cols-12 gap-y-8 items-center">
              <div className="col-span-12 md:col-span-6">
                <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-none">
                  OUR SOCIAL MEDIA
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#DFD3C3] text-[#3B1707] font-extrabold uppercase text-sm hover:scale-105 transition-transform"
                  >
                    <span>TIKTOK</span>
                    <span className="w-6 h-6 rounded-full bg-[#3B1707] text-[#DFD3C3] flex items-center justify-center text-xs">
                      ↗
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#DFD3C3] text-[#3B1707] font-extrabold uppercase text-sm hover:scale-105 transition-transform"
                  >
                    <span>INSTAGRAM</span>
                    <span className="w-6 h-6 rounded-full bg-[#3B1707] text-[#DFD3C3] flex items-center justify-center text-xs">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-center">
                <img
                  src="/uploads/freakin_incredible_xperience.svg"
                  alt="freakin' INCREDIBLE Xperience"
                  className={`h-20 sm:h-28 w-auto ${
                    viewMode === 'home' && activeBar.isLightBg
                      ? 'invert brightness-25'
                      : ''
                  }`}
                />
              </div>
            </div>

            <div className="border-t border-current/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-80">
              <div>
                © 2026 KAFÉ Roast &amp; Dessert Chocolatier LLC · All Rights
                Reserved
              </div>
              <div className="flex flex-wrap gap-5">
                <span>Terms &amp; Conditions</span>
                <span>Privacy Policy</span>
                <span>Cookies Policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Infinite Scrolling Marquee Warning Bar */}
        <div className="mt-8 bg-black/25 py-3 overflow-hidden border-t border-current/10">
          <div className="animate-marquee-track text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            {Array.from({ length: 8 }).map((_, idx) => (
              <span key={idx} className="mx-6 shrink-0">
                BEWARE OF FAKE SITES! WE ONLY SELL ONLINE EXCLUSIVELY ON CAREEM
                IN DUBAI &amp; ABU DHABI! ☕🍫
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BodyContent;
