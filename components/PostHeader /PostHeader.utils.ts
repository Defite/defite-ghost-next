import type { Post } from '../../types/post'

const formatReadingDate = (date: Post['published_at']) => {
  const dateString = new Date(date)
  const monthName = dateString.toLocaleString('en-US', { month: 'short' })

  return `${dateString.getDate()} ${monthName} ${dateString.getFullYear()}`
}

const formatDateTime = (date: Post['published_at']) => {
  const dateString = new Date(date)
  const day = String(dateString.getDate()).padStart(2, '0')
  const month = String(dateString.getMonth() + 1).padStart(2, '0')
  const year = dateString.getFullYear()

  return `${year}-${month}-${day}`
}

export function usePostMeta(post: Post) {
  const { reading_time, published_at } = post
  const date = formatReadingDate(published_at)
  const dateTime = formatDateTime(published_at)

  return {
    date,
    reading_time,
    dateTime,
  }
}
