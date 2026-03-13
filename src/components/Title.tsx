/** Props for section title: main title word + highlighted subTitle (e.g. "about" + "us") */
interface TitleProps {
  title: string
  subTitle: string
}

/** Reusable section heading with two parts; subTitle is styled as accent (span) */
const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}

export default Title
