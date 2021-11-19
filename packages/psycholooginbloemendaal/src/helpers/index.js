import {categorieWidgetKaas, categorieWidgetBlog, categorieWidgetTC, categorieWidgetReviews} from '../config'
const MAXIMUM_POSTS = 1

const getPostsFromCategoryKaas = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategoryKaas = source =>  {
  return Object.values(categorieWidgetKaas)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategoryKaas(source, categoryId).sort((a, b) => a.date < b.date ? 1 : -1)
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
      const posts = getPostsFromCategoryBlog(source, categoryId).sort((a, b) => a.date < b.date ? 1 : -1)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}

const getPostsFromCategoryTC = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategoryTC = source =>  {
  return Object.values(categorieWidgetTC)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategoryTC(source, categoryId)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}

const getPostsFromCategoryReviews = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) )

export const getPostsGroupedByCategoryReviews = source =>  {
  return Object.values(categorieWidgetReviews)
    .reduce((acc, categoryId) => {
      const posts = getPostsFromCategoryReviews(source, categoryId).sort((a, b) => a.date < b.date ? 1 : -1).slice(0,MAXIMUM_POSTS)
      const category = source.category[categoryId] 
      return [...acc, {posts, category}]
    }, [])
}