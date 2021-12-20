import {
  categorieWidgetKaas,
  categorieWidgetBlog,
  categorieWidgetTC,
  categorieWidgetReviews,
  categorieWidgetOver,
  categorieWidgetWerkwijze,
  categorieWidgetProducties,
} from "../config";

const MAXIMUM_POSTS = 1;

const getPostsFromCategoryKaas = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryKaas = (source) => {
  return Object.values(categorieWidgetKaas).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryKaas(source, categoryId).sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryBlog = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryBlog = (source) => {
  return Object.values(categorieWidgetBlog).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryBlog(source, categoryId).sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryTC = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryTC = (source) => {
  return Object.values(categorieWidgetTC).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryTC(source, categoryId);
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryReviews = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryReviews = (source) => {
  return Object.values(categorieWidgetReviews).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryReviews(source, categoryId)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, MAXIMUM_POSTS);
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryReviewsPage = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryReviewsPage = (source) => {
  return Object.values(categorieWidgetReviews).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryReviewsPage(source, categoryId).sort(
      (a, b) => (a.date < b.date ? 1 : -1)
    );
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryOver = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryOver = (source) => {
  return Object.values(categorieWidgetOver).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryOver(source, categoryId)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, MAXIMUM_POSTS);
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryWerkwijze = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryWerkwijze = (source) => {
  return Object.values(categorieWidgetWerkwijze).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryWerkwijze(source, categoryId)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, MAXIMUM_POSTS);
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

const getPostsFromCategoryProducties = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategoryProducties = (source) => {
  return Object.values(categorieWidgetProducties).reduce((acc, categoryId) => {
    const posts = getPostsFromCategoryProducties(source, categoryId).sort(
      (a, b) => (a.date < b.date ? 1 : -1)
    );
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

// function getPostsFromCat(nameCat, catWidg) {
//   const nameCat = ({ post }, categoryId) =>
//     Object.keys(post)
//       .map(postID => post[postID])
//       .filter(({categories}) => categories.includes(parseInt(categoryId)) )

//   const nameCat = source =>  {
//     return Object.values(catWidg)
//       .reduce((acc, categoryId) => {
//         const posts = nameCat (source, categoryId).sort((a, b) => a.date < b.date ? 1 : -1).slice(0,MAXIMUM_POSTS)
//         const category = source.category[categoryId]
//         return [...acc, {posts, category}]
//       }, [])
//   }
// }

// export default getPostsFromCat
