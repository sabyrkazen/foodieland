import Section from '@/layouts/Section'
import { Grid } from '@/components/Grid'
import { CategoryCard } from '@/components/CategoryCard'

import './Categories.scss'

export const Categories = () => {
  const categories = [
    { title: 'Breakfast', imageUrl: '' },
    { title: 'Vegan', imageUrl: '' },
    { title: 'Meat', imageUrl: '' },
    { title: 'Dessert', imageUrl: '' },
    { title: 'Lunch', imageUrl: '' },
    { title: 'Chocolate', imageUrl: '' },
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
