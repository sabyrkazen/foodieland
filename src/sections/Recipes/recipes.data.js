import wagyuBeefCheeseburger from '@/assets/images/recipes/1.jpg'
import limeRoastedSalmon from '@/assets/images/recipes/2.jpg'
import strawberryOatmealPancake from '@/assets/images/recipes/3.jpg'
import mixedMayonnaiseSalad from '@/assets/images/recipes/4.jpg'
import chickenMeatballsCreamCheese from '@/assets/images/recipes/5.jpg'
import orangeBlueberryPancake from '@/assets/images/recipes/7.jpg'
import onePotChickenRice from '@/assets/images/recipes/8.jpg'
import chickenBaconPasta from '@/assets/images/recipes/9.jpg'

const defaultCookingTime = {
  icon: 'clock',
  label: '30 Minutes',
}

const createInfo = (category) => ({
  cookingTime: defaultCookingTime,
  category: {
    icon: 'cutlery',
    label: category,
  },
})

export const recipes = [
  {
    id: 1,
    type: 'recipe',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    info: createInfo('Snack'),
    imgSrc: wagyuBeefCheeseburger,
  },
  {
    id: 2,
    type: 'recipe',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    info: createInfo('Fish'),
    imgSrc: limeRoastedSalmon,
  },
  {
    id: 3,
    type: 'recipe',
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    info: createInfo('Breakfast'),
    imgSrc: strawberryOatmealPancake,
  },
  {
    id: 4,
    type: 'recipe',
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    info: createInfo('Healthy'),
    imgSrc: mixedMayonnaiseSalad,
  },
  {
    id: 5,
    type: 'recipe',
    title: 'Chicken Meatballs with Cream Cheese',
    info: createInfo('Meat'),
    imgSrc: chickenMeatballsCreamCheese,
  },
  {
    id: 6,
    type: 'banner',
  },
  {
    id: 7,
    type: 'recipe',
    title: 'Fruity Pancake with Orange & Blueberry',
    info: createInfo('Sweet'),
    imgSrc: orangeBlueberryPancake,
  },
  {
    id: 8,
    type: 'recipe',
    title: 'The Best Easy One Pot Chicken and Rice',
    info: createInfo('Snack'),
    imgSrc: onePotChickenRice,
  },
  {
    id: 9,
    type: 'recipe',
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    info: createInfo('Noodles'),
    imgSrc: chickenBaconPasta,
  },
]
