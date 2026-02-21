import { Section } from '@/layouts/Section'
import { Grid } from '@/components/Grid'
import { CategoryCard } from '@/components/CategoryCard'
import breakfast from '@/assets/images/categories/breakfast.png'
import vegan from '@/assets/images/categories/vegan.png'
import meat from '@/assets/images/categories/meat.png'
import dessert from '@/assets/images/categories/dessert.png'
import lunch from '@/assets/images/categories/lunch.png'
import chocolate from '@/assets/images/categories/chocolate.png'

export const Categories = () => {
  const categories = [
    {
      id: 'breakfast',
      title: 'Breakfast',
      imgSrc: breakfast,
      color: 'rgb(112,130,70)',
    },
    {
      id: 'vegan',
      title: 'Vegan',
      imgSrc: vegan,
      color: 'rgb(108,198,63)',
    },
    {
      id: 'meat',
      title: 'Meat',
      imgSrc: meat,
      color: 'rgb(204,38,27)',
    },
    {
      id: 'dessert',
      title: 'Dessert',
      imgSrc: dessert,
      color: 'rgb(240,158,0)',
    },
    {
      id: 'lunch',
      title: 'Lunch',
      imgSrc: lunch,
      color: 'rgb(0,0,0)',
    },
    {
      id: 'chocolate',
      title: 'Chocolate',
      imgSrc: chocolate,
      color: 'rgb(0,0,0)',
    },
  ]

  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid className="categories__list" columns={6}>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </Grid>
    </Section>
  )
}
