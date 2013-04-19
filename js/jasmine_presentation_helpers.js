jQuery.fn.isInside = function(element) {
  var a = $(this).bounds(),
      b = element.bounds();

  return(
    (a.left >= b.left) &&
    (a.right <= b.right) &&
    (a.top >= b.top) &&
    (a.bottom <= b.bottom)
  );
};

jQuery.fn.isOutside = function(element) {
  var a = $(this).bounds(),
      b = element.bounds();

  return(
    (a.bottom < b.top) ||
    (a.top > b.bottom) ||
    (a.right < b.left) ||
    (a.left > b.right)
  );
};

jQuery.fn.overlaps = function(element) {
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

jQuery.fn.alignsWithTopOf = function(element) {
  var a = $(this).bounds(),
      b = element.bounds();

  return( a.top == b.top );
};

jQuery.fn.alignsWithBottomOf = function(element) {
  var a = $(this).bounds(),
      b = element.bounds();

  return( a.bottom == b.bottom );
};

jQuery.fn.alignsWithCenterOf = function(element) {
  var a = $(this).bounds(),
      b = element.bounds();

  return(
    ((a.top + a.bottom) / 2 ) == (b.top + b.bottom / 2)
  );
};

jQuery.fn.bounds = function() {
  var e = this;

  return({ top: e.offset().top,
           right: (e.offset().left + e.outerWidth()),
           bottom: (e.offset().top + e.outerHeight()),
           left: e.offset().left});
};

$(function() {
  $( ".draggable" ).draggable({
    drag: function( event, ui ) {
      evalEverything($(this));
    }
  });

  function evalEverything(element) {
    $(".inside .eval").html($("#inside_b").isInside($("#inside_a")).toString());
    $(".outside .eval").html($("#outside_b").isOutside($("#outside_a")).toString());
    $(".overlaps .eval").html($("#overlaps_b").overlaps($("#overlaps_a")).toString());
    $(".bounds .eval").html(JSON.stringify(element.bounds()));
  }


  evalEverything();
});

