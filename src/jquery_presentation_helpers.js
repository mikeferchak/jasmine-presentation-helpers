(function( $ ){
  $.fn.isInsideOf = function(element) {
  var a = $(this).bounds(),
      b = element.bounds();

    return(
      (a.left >= b.left) &&
      (a.right <= b.right) &&
      (a.top >= b.top) &&
      (a.bottom <= b.bottom)
    );
  };

  $.fn.isOutsideOf = function(element) {
    var a = $(this).bounds(),
        b = element.bounds();

    return(
      (a.bottom < b.top) ||
      (a.top > b.bottom) ||
      (a.right < b.left) ||
      (a.left > b.right)
    );
  };

  $.fn.isOverlapping = function(element) {
    var a = $(this).bounds(),
        b = element.bounds();

    return( !(
        (a.bottom < b.top) ||
        (a.top > b.bottom) ||
        (a.right < b.left) ||
        (a.left > b.right)
      )
    );
  };

  $.fn.alignsWithTopOf = function(element, tolerance) {
    var a = $(this).bounds(),
        b = element.bounds();

    if(typeof(tolerance)==='undefined') tolerance = 0;

    return(
     Math.abs( a.top - b.top ) <= Math.abs(tolerance)
    );
  };

  $.fn.alignsWithBottomOf = function(element, tolerance) {
    var a = $(this).bounds(),
        b = element.bounds();

    if(typeof(tolerance)==='undefined') tolerance = 0;

    return (
      ( a.bottom - b.bottom ) <= Math.abs(tolerance)
    );
  };

  $.fn.alignsWithCenterOf = function(element, tolerance) {
    var a = $(this).bounds(),
        b = element.bounds();

    if(typeof(tolerance)==='undefined') tolerance = 0;

    return(
      ((a.top + a.bottom) / 2 ) - (b.top + b.bottom / 2) <= Math.abs(tolerance)
    );
  };

  $.fn.bounds = function() {
    var element = this;
    try {
      return({ top: element.offset().top,
               right: (element.offset().left + element.outerWidth()),
               bottom: (element.offset().top + element.outerHeight()),
               left: element.offset().left});
    } catch(error) {
      console.log(error + " => One of the matchers probably isn't matching anything.");
      return({ top: undefined,
               right: undefined,
               bottom: undefined,
               left: undefined});
    }
  };
})( jQuery );