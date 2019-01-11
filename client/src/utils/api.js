import {
  normalizePosts,
  normalizeCategories,
  normalizeComments
} from "./helpers";

const api = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: 'Pimentel.Felipe'
};

//Posts

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(res => normalizePosts(res));

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

export function getPostDetails(id) {
  return Promise.all([getPost(id), getCommentsByPost(id)]).then(
    ([post, comments]) => ({
      post,
      comments
    })
  );
}

export const getPostsByCetegory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(res => normalizePosts(res));

export const savePost = post =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const updatePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const savePostVote = ({ id, vote }) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vote)
  }).then(res => res.json());

//End Posts

// Comments

export const getCommentsByPost = id =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(res => normalizeComments(res));

export const saveComment = comment =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const updateComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const saveCommentVote = ({ id, vote }) =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vote)
  }).then(res => res.json());

// End Comments

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(res => normalizeCategories(res.categories));

export const getInitialData = () =>
  Promise.all([
    getCategories(),
    getPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts,
  }))

