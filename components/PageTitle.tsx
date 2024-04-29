import React, { FC } from 'react'
import { Post } from '../types/post'

type Props = Partial<Post> & {
  className?: string
  type?: 'primary' | 'secondary'
}

export const PageTitle: FC<Props> = ({
  className,
  title,
  custom_excerpt,
  type = 'primary',
}) => {
  const isPrimary = type === 'primary'
  const Title = isPrimary ? 'h1' : 'h2'
  const titleSize = isPrimary ? 'text-5xl' : 'text-2xl sm:text-4xl'

  return (
    <div className={`container mx-auto ${className ?? ''}`}>
      {title && (
        <Title className={`font-serif font-bold ${titleSize}`}>{title}</Title>
      )}
      {custom_excerpt && (
        <p className="text-xl tracking-wider leading-relaxed mt-2 font-300">
          {custom_excerpt}
        </p>
      )}
    </div>
  )
}
