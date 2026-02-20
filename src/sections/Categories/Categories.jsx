import Section from '@/layouts/Section'

import './Categories.scss'

export const Categories = () => {
  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <ul className="categories-list">
        <li className="categories-item">
          <img src="" alt="" className="categories-item-image" />
          <h3 className="categories-item-title">Category Title</h3>
        </li>
      </ul>
    </Section>
  )
}
