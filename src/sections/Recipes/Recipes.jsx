import { Section } from '../../layouts/Section'
import { Grid } from '../../components/Grid'
import { RecipeCard } from '../../components/RecipeCard'
import { recipes } from './recipe.data'

import './Recipes.scss'

export const Recipes = () => {
  return (
    <Section
      title="Simple and tasty recipes"
      titleId="recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
    >
      <Grid columns={3}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard {...recipe} />
          </li>
        ))}
      </Grid>
    </Section>
  )
}
