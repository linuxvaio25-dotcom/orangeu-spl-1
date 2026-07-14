// export const fruitsections = [
//   {
//     title: 'Fruits',
//     description: 'Fresh whole fruits to enjoy on their own or in salads, snacks, and desserts.',
//     items: [
//       {
//         label: 'Apple',
//         emoji: '🍎',
//         price: 0.99,
//         description: 'Crisp, sweet apple slices perfect for snacking, baking, or enjoying on the go.',
//       },
//       {
//         label: 'Banana',
//         emoji: '🍌',
//         price: 0.69,
//         description: 'Soft and creamy banana with a naturally sweet flavor that pairs well with cereal and smoothies.',
//       },
//       {
//         label: 'Orange',
//         emoji: '🍊',
//         price: 1.19,
//         description: 'Juicy orange with bright citrus notes—great for fresh eating and natural vitamin C.',
//       },
//       {
//         label: 'Strawberry',
//         emoji: '🍓',
//         price: 2.49,
//         description: 'Sweet strawberries with a juicy texture that are ideal for desserts and snacks.',
//       },
//       {
//         label: 'Blueberry',
//         emoji: '🫐',
//         price: 2.99,
//         description: 'Tiny bursts of berry flavor with antioxidants, perfect for topping yogurt or pancakes.',
//       },
//       {
//         label: 'Grape',
//         emoji: '🍇',
//         price: 1.89,
//         description: 'Sweet grapes that are ideal for snacking, salads, and refreshing fruit platters.',
//       },
//     ],
//   },
//   {
//     title: 'Juice',
//     description: 'Refreshing fruit juices made from real fruit, perfect for a quick boost.',
//     items: [
//       {
//         label: 'Orange Juice',
//         emoji: '🍊',
//         price: 3.49,
//         description: 'Bright and zesty orange juice with natural sweetness for a refreshing start to your day.',
//       },
//       {
//         label: 'Apple Juice',
//         emoji: '🍎',
//         price: 3.29,
//         description: 'Smooth apple juice with crisp orchard flavor, great for a light, fruity drink.',
//       },
//       {
//         label: 'Berry Blast',
//         emoji: '🍓',
//         price: 3.99,
//         description: 'A mixed berry juice full of sweet and tart flavors, made from strawberries, raspberries, and blueberries.',
//       },
//       {
//         label: 'Green Detox',
//         emoji: '🥬',
//         price: 4.29,
//         description: 'A fresh green juice blend with spinach, cucumber, and apple for a cleansing boost.',
//       },
//       {
//         label: 'Mango Tango',
//         emoji: '🥭',
//         price: 3.89,
//         description: 'Sweet tropical mango juice that feels like a mini-vacation in every sip.',
//       },
//     ],
//   },
//   {
//     title: 'Smoothies',
//     description: 'Creamy frozen fruit blends with yogurt, berries, and tropical flavors.',
//     items: [
//       {
//         label: 'Strawberry Banana',
//         emoji: '🍓🍌',
//         price: 5.29,
//         description: 'A classic smoothie with strawberries and banana for a creamy, balanced flavor.',
//       },
//       {
//         label: 'Blueberry Bliss',
//         emoji: '🫐',
//         price: 5.49,
//         description: 'A blueberry-forward smoothie with a smooth, sweet-tart taste and a velvety texture.',
//       },
//       {
//         label: 'Tropical Mango',
//         emoji: '🥭',
//         price: 5.79,
//         description: 'A tropical smoothie packed with mango, pineapple, and coconut for a vacation-style treat.',
//       },
//       {
//         label: 'Green Goddess',
//         emoji: '🥬',
//         price: 5.99,
//         description: 'A nutrient-rich green smoothie with spinach, banana, and avocado for a creamy, healthy boost.',
//       },
//       {
//         label: 'Berry Protein',
//         emoji: '🍇',
//         price: 6.29,
//         description: 'A protein-packed smoothie with mixed berries and a creamy finish for workout recovery.',
//       },
//     ],
//   },
// ];

export const fruitsections = [
  {
    title: "Fruits",

    emoji: "🍎",

    color: "from-red-400 to-orange-400 to-yellow-300",

    video: "/videos/fruits-1.mp4",

    description: "Fresh fruit picked daily.",

    items: [
      {
        label: "Apple",
        emoji: "🍎",
        price: 0.99,
        description:
          "Crisp, sweet apple slices perfect for snacking."
      },
      {
        label: "Banana",
        emoji: "🍌",
        price: 0.69,
        description:
          "Soft and creamy banana."
      },
      {
        label: "Orange",
        emoji: "🍊",
        price: 1.19,
        description:
          "Juicy orange full of vitamin C."
      },
      {
        label: "Grapes",
        emoji: "🍇",
        price: 1.00,
        description:
          "Juicy grapes full of natural sweetness."
      },
      {
        label: 'Blueberry',
        emoji: '🫐',
        price: 2.99,
        description:
          "Tiny bursts of berry flavor with antioxidants, perfect for topping yogurt or pancakes.",
      },
    ]
  },
  {
    title: "Juices",

    emoji: "🥤",

    // color: "from-yellow-400 to-orange-500",

    color: "from-yellow-400 via-orange-400 to-red-400",

    video: "/videos/juice-1.mp4",

    description:
      "Cold pressed juices made from real fruit.",

    items: [
      {
        label: "Fresh Orange Juice",
        emoji: "🍊",
        price: 3.49,
        description:
          "Bright and zesty orange juice with natural sweetness for a refreshing start to your day.",
      },
      {
        label: 'Apple Juice',
        emoji: '🍎',
        price: 3.29,
        description:
          "Smooth apple juice with crisp orchard flavor, great for a light, fruity drink.",
      },
      {
        label: 'Berry Blast',
        emoji: '🍓',
        price: 3.99,
        description:
          "A mixed berry juice full of sweet and tart flavors, made from strawberries, raspberries, and blueberries.",
      },
      {
        label: 'Green Detox',
        emoji: '🥬',
        price: 4.29,
        description:
          "A fresh green juice blend with spinach, cucumber, and apple for a cleansing boost.",
      },
      {
        label: 'Mango Tango',
        emoji: '🥭',
        price: 3.89,
        description:
          "Sweet tropical mango juice that feels like a mini-vacation in every sip.",
      },
    ]
  },
  {
    title: "Smoothies",

    // emoji: "🍹"
    emoji: "🍓🍍",

    color: "from-pink-500 via-purple-400 to-indigo-400",

    video: "/videos/smoothie-1.mp4",

    description:
      'Creamy frozen fruit blends with yogurt, berries, and tropical flavors.',

    items: [
      {
        label: 'Strawberry Banana',
        emoji: '🍓🍌',
        price: 5.29,
        description:
          "A classic smoothie with strawberries and banana for a creamy, balanced flavor.",
      },
      {
        label: 'Blueberry Bliss',
        emoji: '🫐',
        price: 5.49,
        description:
          "A blueberry-forward smoothie with a smooth, sweet-tart taste and a velvety texture.",
      },
      {
        label: 'Tropical Mango',
        emoji: '🥭',
        price: 5.79,
        description:
          "A tropical smoothie packed with mango, pineapple, and coconut for a vacation-style treat.",
      },
      {
        label: 'Green Goddess',
        emoji: '🥬',
        price: 5.99,
        description:
          "A nutrient-rich green smoothie with spinach, banana, and avocado for a creamy, healthy boost.",
      },
      {
        label: 'Berry Protein',
        emoji: '🍇',
        price: 6.29,
        description:
          "A protein-packed smoothie with mixed berries and a creamy finish for workout recovery.",
      },
    ]
  },
  {
    title: "Exotics",

    emoji: "🥭",

    color: "from-emerald-500 via-lime-400 to-yellow-400",

    video: "/videos/juice-1.mp4",

    description:
      "Tropical fruits from around the world.",

    items: [
      {
        label: 'Dragon Fruit',
        emoji: '🐉',
        price: 4.99,
        description:
          "Exotic dragon fruit with a unique flavor and vibrant color.",
      },
      {
        label: 'Passion Fruit',
        emoji: '🥭',
        price: 4.99,
        description:
          "Tropical passion fruit with a sweet and tangy flavor.",
      }
    ]
  },
  {
    title: "Bakery",

    // emoji: "🥐",
    emoji: "🍰",

    color: "from-amber-700 via-orange-500 to-yellow-300",

    video: "/videos/juice-1.mp4",

    description:
      "Cold pressed juices made from real fruit.",

    items: [
      {
        label: 'Blueberry Cake',
        emoji: '🫐',
        price: 13.99,
        description:
          "Tiny bursts of berry flavor with antioxidants, .",
      },
    ]
  },
  {
    title: "Spirits",

    emoji: "🥂",

    color: "from-rose-700 via-red-500 to-orange-300",

    video: "/videos/juice-1.mp4",

    description:
      "Cold pressed juices made from real fruit.",

    items: [
      {
        label: 'Blueberry Flavored Wine',
        emoji: '🫐',
        price: 23.99,
        description:
          "Tiny bursts of berry flavor with antioxidants, .",
      },
    ]
  }
];

export const words = ['glad', 'happy', 'excited', 'hungry', 'thirsty', 'joyful', 'cheerful', 'delighted', 'content', 'satisfied'];

// Export a default for consumers that prefer default import
export default words;

// index.js

//export const words = ["Connect", "Learn", "Share"]; // your existing export

//cards1
import oranges1 from './assets/oranges-1.jpg';
import oranges3 from './assets/oranges-3b.jpg';
import pineapple1 from './assets/pineapple-2b.jpg';
import lemons2 from './assets/lemons-2b.jpg';
import fruits2 from './assets/fruits-2b.jpg';
import fruits3 from './assets/fruits-3b.jpg';

//cards2
import cake1 from './assets/cake-1b.jpg';
import pouring1 from './assets/pouring-1b.jpg';
import icecream2 from './assets/icecream-2b.jpg';
import smoothies1 from './assets/smoothies-1b.jpg';
import wine1 from './assets/wine-1b.jpg';

//cards3
import occasion1 from './assets/occasion-1.jpg';
import occasion2 from './assets/occasion-2.jpg';
import occasion3 from './assets/occasion-3.jpg';
import occasion4 from './assets/occasion-4.jpg';
import occasion5 from './assets/occasion-6.jpg';


export const cardImages1 = [
  oranges3,
  pineapple1,
  lemons2,
  fruits2,
  fruits3,

  // pineapple1,
  // oranges2,
  // fruits2,
  // fruits3,
];
export const cardImages2 = [
  cake1,
  icecream2,
  pouring1,
  smoothies1,
  wine1,

  // oranges1,
  // oranges1,
  // oranges1,
  // oranges1,
  // oranges1,

  // cake1,
  // pouring1,
  // icecream2,
  // smoothies1,
  // wine1,
];
export const cardImages3 = [
  occasion1,
  occasion2,
  occasion3,
  occasion4,
  occasion5,
];

// export const cardImages1 = [
//   img1 from './assets/oranges-1.jpg',
//   ".assets/oranges-1.jpg",
//   "/images/section1-card3.jpg",
//   "/images/section1-card4.jpg",
//   "/images/section1-card5.jpg",
// ];

// export const cardImages2 = [
//   "/images/section2-card1.jpg",
//   "/images/section2-card2.jpg",
//   "/images/section2-card3.jpg",
//   "/images/section2-card4.jpg",
//   "/images/section2-card5.jpg",
// ];

// export const cardImages3 = [
//   "/images/section3-card1.jpg",
//   "/images/section3-card2.jpg",
//   "/images/section3-card3.jpg",
//   "/images/section3-card4.jpg",
//   "/images/section3-card5.jpg",
// ];

//export default {cardsImages1, cardImages2, cardImages3, words};