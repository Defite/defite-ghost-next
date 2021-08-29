export interface IStoryblokCover {
  id: number
  alt: string
  name: string
  focus: null
  title: string
  filename: string
  copyright: string
  fieldtype: 'asset'
}

export interface IPostItem {
  content: {
    title: string
    description?: any
    cover: IStoryblokCover
  }
  full_slug: string
}

export interface IPostList {
  items: IPostItem[]
}
