import type { SocialLinkItem } from '../types'

interface SocialLinkProps extends SocialLinkItem {
  itemClass: string
}

/** Single social icon link; opens in new tab with noreferrer for security */
const SocialLink = ({ itemClass, href, icon }: SocialLinkProps) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon} />
      </a>
    </li>
  )
}

export default SocialLink
