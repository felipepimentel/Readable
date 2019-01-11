import { normalize, schema } from "normalizr";

export function createUUID(){
  return Math.random().toString(24).substr(2, 9);
}

export function normalizeSimpleObjects(objects) {
  return objects.reduce((accumulator, current) => {
    accumulator[current.id] = current
    return accumulator
  }, {});
}

export function normalizePosts(data) {
  const post = new schema.Array(new schema.Entity("posts"));
  return normalize(data, post).entities.posts;
}

export function normalizeComments(data) {
  const comment = new schema.Array(new schema.Entity("comments"));
  return normalize(data, comment).entities.comments;
}

export function normalizeCategories(data) {
  const category = new schema.Array(
    new schema.Entity("categories", {}, { idAttribute: "name" })
  );
  return normalize(data, category).entities.categories;
}