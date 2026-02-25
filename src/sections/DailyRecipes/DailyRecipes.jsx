import { Section } from '@layouts/Section'
import { Grid } from '@components/Grid'
import { DailyRecipeCard } from '@components/DailyRecipeCard'

import { dailyRecipes } from './daily-recipes.data'

import './DailyRecipes.scss'

export const DailyRecipes = () => {
  return (
    <Section
      title="Try this delicious recipe to make your day"
      titleId="daily-recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      headerClassName="section__header--justify"
    >
      <Grid columns={4}>
        {dailyRecipes.map((recipe) => (
          <DailyRecipeCard {...recipe} key={recipe.id} />
        ))}
      </Grid>
    </Section>
  )
}
