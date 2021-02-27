// helper functions
export function featuredProduct(arr) {
  return arr.filter((item) => {
    return item.featured === true;
  });
}
