function NumObj(val) {
  this.val = val;
}

NumObj.prototype = {
  times: function(multiplicand) {
    return new NumObj(this.val * multiplicand);
  },

  toString: function() {
    return "This super cool Number Object is... " + this.val + "!";
  }
};
