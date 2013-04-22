beforeEach(function () {
  this.addMatchers({
    toBeInside: function(element) {
      return this.actual.isInsideOf(element);
    },

    toBeOutside: function(element) {
      return this.actual.isOutsideOf(element);
    },

    toOverlap: function(element) {
      return this.actual.isOverlapping(element);
    },

    toAlignWithTopOf: function(element, tolerance) {
      return this.actual.alignsWithTopOf(element, tolerance);
    },

    toAlignWithBottomOf: function(element, tolerance) {
      return this.actual.alignsWithBottomOf(element, tolerance);
    },

    toAlignWithCenterOf: function(element) {
      return this.actual.alignsWithCenterOf(element, tolerance);
    }
  });
});
