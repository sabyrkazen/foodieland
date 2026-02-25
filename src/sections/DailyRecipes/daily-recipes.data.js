import mixedTropicalFruitSalad from '@assets/images/daily-recipes/1.jpg'
import wagyuBeefCheeseburgerWestern from '@assets/images/daily-recipes/2.jpg'
import japaneseFriedRiceAsparagus from '@assets/images/daily-recipes/3.jpg'
import cauliflowerWalnutTacoMeat from '@assets/images/daily-recipes/4.jpg'
import rainbowChickenSalad from '@assets/images/daily-recipes/5.jpg'
import barbequeSpicySandwiches from '@assets/images/daily-recipes/6.jpg'
import firecrackerVeganLettuceWraps from '@assets/images/daily-recipes/7.jpg'
import chickenRamenSoupMushroom from '@assets/images/daily-recipes/8.jpg'

import heartLiked from '@assets/icons/heart/heart-liked.svg'
import heartUnliked from '@assets/icons/heart/heart-unliked.svg'

const defaultCookingTime = {
  icon: 'clock',
  label: '30 Minutes',
}

const createInfo = (category) => [
  defaultCookingTime,
  {
    icon: 'cutlery',
    label: category,
  },
]

export const dailyRecipes = [
  {
    id: 1,
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
    info: createInfo('Healthy'),
    imgSrc: mixedTropicalFruitSalad,
    heartIcon: {
      label: 'Liked',
      imgSrc: heartLiked,
    },
  },
  {
    id: 2,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    info: createInfo('Western'),
    imgSrc: wagyuBeefCheeseburgerWestern,
    heartIcon: {
      label: 'Unliked',
      imgSrc: heartUnliked,
    },
  },
  {
    id: 3,
    title: 'Healthy Japanese Fried Rice with Asparagus',
    info: createInfo('Healthy'),
    imgSrc: japaneseFriedRiceAsparagus,
    heartIcon: {
      label: 'Liked',
      imgSrc: heartLiked,
    },
  },
  {
    id: 4,
    title: 'Cauliflower Walnut Vegetarian Taco Meat',
    info: createInfo('Eastern'),
    imgSrc: cauliflowerWalnutTacoMeat,
    heartIcon: {
      label: 'Unliked',
      imgSrc: heartUnliked,
    },
  },
  {
    id: 5,
    title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
    info: createInfo('Healthy'),
    imgSrc: rainbowChickenSalad,
    heartIcon: {
      label: 'Liked',
      imgSrc: heartLiked,
    },
  },
  {
    id: 6,
    title: 'Barbeque Spicy Sandwiches with Chips',
    info: createInfo('Snack'),
    imgSrc: barbequeSpicySandwiches,
    heartIcon: {
      label: 'Unliked',
      imgSrc: heartUnliked,
    },
  },
  {
    id: 7,
    title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
    info: createInfo('Seafood'),
    imgSrc: firecrackerVeganLettuceWraps,
    heartIcon: {
      label: 'Unliked',
      imgSrc: heartUnliked,
    },
  },
  {
    id: 8,
    title: 'Chicken Ramen Soup with Mushroom',
    info: createInfo('Japanese'),
    imgSrc: chickenRamenSoupMushroom,
    heartIcon: {
      label: 'Liked',
      imgSrc: heartLiked,
    },
  },
]
