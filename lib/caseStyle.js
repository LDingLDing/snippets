/**
 * doc: https://en.wikipedia.org/wiki/Letter_case
 */

// helloWorld
export const toCamelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[\s-_]+/g, "");
};

// HelloWorld
export const toPascalCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/[\s-_]+/g, "");
};

// hello_world
export const toSnakeCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return (index == 0 ? "" : "_") + word.toLowerCase();
    })
    .replace(/_+/g, "_")
    .replace(/[\s-]+/g, "")
};

// hello-world
export const toKebabCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      console.log(word);
      return (index == 0 ? "" : "-") + word.toLowerCase();
    })
    .replace(/-+/g, "-")
    .replace(/[\s_]+/g, "");
};
