if (!Array.prototype.at) {
  // eslint-disable-next-line no-extend-native, func-names
  Array.prototype.at = function (pos) {
    return this[pos >= 0 ? pos : this.length + pos];
  };
}
