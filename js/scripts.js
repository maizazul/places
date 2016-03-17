function Location (place, location, landmark, time, fun, notes) {
  this.place = place;
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.fun = fun;
  this.notes = notes;
}



$(document).ready(function()  {
  $("form#new-location").submit(function(event)  {
    event.preventDefault();
    var inputPlace = $("input#new-place").val();
    var inputLocation = $("input#place-location").val();
    var inputDetails = $("input#place-details").val();
    var inputTime = $("input#place-time").val();
    var inputFun = $("input#place-fun").val();
    var inputNotes = $("input#place-notes").val();

    $("ul#list").append("<li><span class='listplace'>" + inputPlace + "</span></li");
    $(".listplace").last().click(function() {
      $("show-details").show();
      $("show-details").text(inputPlace);
    });
  });
});
