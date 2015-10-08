$(document).ready(function() {
  $("button#green").hover(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").hover(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").hover(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
