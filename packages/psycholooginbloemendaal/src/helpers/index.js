import {categorieWidgetKaas, categorieWidgetBlog} from '../config'
// const MAXIMUM_POSTS = 10000000

const getPostsFromCategoryKaas = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategoryKaas = source =>  {
  return Object.values(categorieWidgetKaas)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategoryKaas(source, categoryId)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}

const getPostsFromCategoryBlog = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategoryBlog = source =>  {
  return Object.values(categorieWidgetBlog)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategoryBlog(source, categoryId)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}
