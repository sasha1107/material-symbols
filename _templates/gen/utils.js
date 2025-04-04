module.exports = {
  toUnion(array) {
    return array.join(" | ");
  },
  toStringUnion(array) {
    return array.map((v) => `"${v}"`).join(" | ");
  },
};
