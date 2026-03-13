import { pageLinks } from '../data'
import PageLink from './PageLink'

interface PageLinksProps {
  parentClass: string
  itemClass: string
}

/** Renders a list of page links (used in Navbar and Footer with different classes) */
const PageLinks = ({ parentClass, itemClass }: PageLinksProps) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => (
        <PageLink key={link.id} link={link} itemClass={itemClass} />
      ))}
    </ul>
  )
}

export default PageLinks
