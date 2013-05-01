$(function() {
  $( ".draggable" ).draggable({
    drag: function( event, ui ) {
      evalEverything($(this));

    }
  });

  function evalEverything(element) {
    $(".inside .eval").html($("#inside_b").isInsideOf($("#inside_a")).toString());
    $(".outside .eval").html($("#outside_b").isOutsideOf($("#outside_a")).toString());
    $(".overlaps .eval").html($("#overlaps_b").isOverlapping($("#overlaps_a")).toString());
    $(".alignsWithTopOf .eval").html($("#alignsWithTopOf_b").alignsWithTopOf($("#alignsWithTopOf_a"), 10).toString());
    $(".alignsWithBottomOf .eval").html($("#alignsWithBottomOf_b").alignsWithBottomOf($("#alignsWithBottomOf_a"), 10).toString());
    $(".alignsWithCenterOf .eval").html($("#alignsWithCenterOf_b").alignsWithCenterOf($("#alignsWithCenterOf_a"), 10).toString());
    $(".bounds .eval").html(JSON.stringify(element.bounds()));
  }

  evalEverything();
});