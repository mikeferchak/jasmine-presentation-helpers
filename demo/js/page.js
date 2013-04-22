$(function() {
  $( ".draggable" ).draggable({
    drag: function( event, ui ) {
      evalEverything($(this));
    }
  });

  function evalEverything(element) {
    $(".inside .eval").html($("#inside_b").toBeInside($("#inside_a")).toString());
    $(".outside .eval").html($("#outside_b").toBeOutside($("#outside_a")).toString());
    $(".overlaps .eval").html($("#overlaps_b").toOverlap($("#overlaps_a")).toString());
    $(".bounds .eval").html(JSON.stringify(element.bounds()));
  }


  evalEverything();
});