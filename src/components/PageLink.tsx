import type { PageLinkItem } from '../types'

interface PageLinkProps {
  link: PageLinkItem
  itemClass: string
}

/** Renders a single nav/footer link (anchor with optional CSS class) */
const PageLink = ({ link, itemClass }: PageLinkProps) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  )
}

export default PageLink
