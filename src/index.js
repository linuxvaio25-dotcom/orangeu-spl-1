export const fruitsections = [
  {
    title: 'Fruits',
    description: 'Fresh whole fruits to enjoy on their own or in salads, snacks, and desserts.',
    items: [
      {
        label: 'Apple',
        emoji: '🍎',
        price: 0.99,
        description: 'Crisp, sweet apple slices perfect for snacking, baking, or enjoying on the go.',
      },
      {
        label: 'Banana',
        emoji: '🍌',
        price: 0.69,
        description: 'Soft and creamy banana with a naturally sweet flavor that pairs well with cereal and smoothies.',
      },
      {
        label: 'Orange',
        emoji: '🍊',
        price: 1.19,
        description: 'Juicy orange with bright citrus notes—great for fresh eating and natural vitamin C.',
      },
      {
        label: 'Strawberry',
        emoji: '🍓',
        price: 2.49,
        description: 'Sweet strawberries with a juicy texture that are ideal for desserts and snacks.',
      },
      {
        label: 'Blueberry',
        emoji: '🫐',
        price: 2.99,
        description: 'Tiny bursts of berry flavor with antioxidants, perfect for topping yogurt or pancakes.',
      },
      {
        label: 'Grape',
        emoji: '🍇',
        price: 1.89,
        description: 'Sweet grapes that are ideal for snacking, salads, and refreshing fruit platters.',
      },
    ],
  },
  {
    title: 'Juice',
    description: 'Refreshing fruit juices made from real fruit, perfect for a quick boost.',
    items: [
      {
        label: 'Orange Juice',
        emoji: '🍊',
        price: 3.49,
        description: 'Bright and zesty orange juice with natural sweetness for a refreshing start to your day.',
      },
      {
        label: 'Apple Juice',
        emoji: '🍎',
        price: 3.29,
        description: 'Smooth apple juice with crisp orchard flavor, great for a light, fruity drink.',
      },
      {
        label: 'Berry Blast',
        emoji: '🍓',
        price: 3.99,
        description: 'A mixed berry juice full of sweet and tart flavors, made from strawberries, raspberries, and blueberries.',
      },
      {
        label: 'Green Detox',
        emoji: '🥬',
        price: 4.29,
        description: 'A fresh green juice blend with spinach, cucumber, and apple for a cleansing boost.',
      },
      {
        label: 'Mango Tango',
        emoji: '🥭',
        price: 3.89,
        description: 'Sweet tropical mango juice that feels like a mini-vacation in every sip.',
      },
    ],
  },
  {
    title: 'Smoothies',
    description: 'Creamy frozen fruit blends with yogurt, berries, and tropical flavors.',
    items: [
      {
        label: 'Strawberry Banana',
        emoji: '🍓🍌',
        price: 5.29,
        description: 'A classic smoothie with strawberries and banana for a creamy, balanced flavor.',
      },
      {
        label: 'Blueberry Bliss',
        emoji: '🫐',
        price: 5.49,
        description: 'A blueberry-forward smoothie with a smooth, sweet-tart taste and a velvety texture.',
      },
      {
        label: 'Tropical Mango',
        emoji: '🥭',
        price: 5.79,
        description: 'A tropical smoothie packed with mango, pineapple, and coconut for a vacation-style treat.',
      },
      {
        label: 'Green Goddess',
        emoji: '🥬',
        price: 5.99,
        description: 'A nutrient-rich green smoothie with spinach, banana, and avocado for a creamy, healthy boost.',
      },
      {
        label: 'Berry Protein',
        emoji: '🍇',
        price: 6.29,
        description: 'A protein-packed smoothie with mixed berries and a creamy finish for workout recovery.',
      },
    ],
  },
];

export const words = ['glad', 'happy', 'excited', 'hungry', 'thirsty', 'joyful', 'cheerful', 'delighted', 'content', 'satisfied'];

// Export a default for consumers that prefer default import
export default words;

// index.js

//export const words = ["Connect", "Learn", "Share"]; // your existing export

import oranges1 from './assets/oranges-1.jpg';
import pineapple1 from './assets/pineapple-1.jpg';
import oranges2 from './assets/oranges-2.jpg';
import fruits2 from './assets/fruits-2.jpg';
import fruits3 from './assets/fruits-3.jpg';

export const cardImages1 = [
  oranges1,
  pineapple1,
  oranges2,
  fruits2,
  fruits3,
];
export const cardImages2 = [
  oranges1,
  oranges1,
  oranges1,
  oranges1,
  oranges1,
];
export const cardImages3 = [
  oranges1,
  oranges1,
  oranges1,
  oranges1,
  oranges1,
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