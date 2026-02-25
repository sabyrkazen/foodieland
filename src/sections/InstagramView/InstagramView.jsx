import { Grid } from '@components/Grid'
import { Section } from '@layouts/Section'
import { Button } from '@components/Button'
import { Icon } from '@components/Icon'

import './InstagramView.scss'

export const InstagramView = () => {
  return (
    <Section
      className="instagram-view"
      title="Check out @foodieland on Instagram"
      titleId="instagram-view"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      isHeaderVertical
    >
      <div className="instagram-view__body">
        <Grid columns={4}>
          {Array.from({ length: 4 }, (_, index) => (
            <img
              key={index}
              src={`/src/assets/images/instagram-posts/${index + 1}.jpg`}
              alt="Instagram post"
              width={290}
              height={446}
              loading="lazy"
            />
          ))}
        </Grid>
        <Button href="/">
          Visit Our Instagram
          <Icon name="instagram" hasFill />
        </Button>
      </div>
    </Section>
  )
}
