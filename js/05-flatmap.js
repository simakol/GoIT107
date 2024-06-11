/**
 * Метод flatMap
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatMatrix = matrix.flat(); // перетворює багатовимірний масив на одновимірний масив

console.log(flatMatrix);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tags = tweets.map((tweet) => tweet.tags).flat();
const tags = tweets.flatMap((tweet) => tweet.tags);
console.log(tags);
