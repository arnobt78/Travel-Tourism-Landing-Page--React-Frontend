import { services } from '../data'
import Title from './Title'
import Service from './Service'

/** Services section: title + grid of service cards from data */
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </section>
  )
}

export default Services
