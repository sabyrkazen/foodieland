import Section from '@/layouts/Section'
import { Grid } from '@/components/Grid'
import { CategoryCard } from '@/components/CategoryCard'

import './Categories.scss'

export const Categories = () => {
  const categories = [
    {
      title: 'Breakfast',
      imgSrc: '/src/assets/images/categories/breakfast.png',
      color: 'rgb(112, 130, 70)',
    },
    {
      title: 'Vegan',
      imgSrc: '/src/assets/images/categories/vegan.png',
      color: 'rgb(108, 198, 63)',
    },
    {
      title: 'Meat',
      imgSrc: '/src/assets/images/categories/meat.png',
      color: 'rgb(204, 38, 27)',
    },
    {
      title: 'Dessert',
      imgSrc: '/src/assets/images/categories/dessert.png',
      color: 'rgb(240, 158, 0)',
    },
    {
      title: 'Lunch',
      imgSrc: '/src/assets/images/categories/lunch.png',
      color: 'rgb(0, 0, 0)',
    },
    {
      title: 'Chocolate',
      imgSrc: '/src/assets/images/categories/chocolate.png',
      color: 'rgb(0, 0, 0)',
    },
  ]

  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid className="categories__list" columns={6}>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </Grid>
    </Section>
  )
}
