import {categorieWidgetKaas} from '../config'
// const MAXIMUM_POSTS = 10000000

const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategory = source =>  {
  return Object.values(categorieWidgetKaas)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategory(source, categoryId)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}