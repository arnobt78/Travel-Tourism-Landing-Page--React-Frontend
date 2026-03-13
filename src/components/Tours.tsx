import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

/** Featured tours section: title + grid of tour cards */
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
    </section>
  )
}

export default Tours
