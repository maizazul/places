function Location (place, location, landmark, time, fun, notes) {
  this.place = place;
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.fun = fun;
  this.notes = notes;
}



$(document).ready(function()  {
  $("form#new-location").submit(function(event) {
    event.preventDefault();
    var inputPlace = $("input#new-place").val();

    var inputPlace = $("input#place-location").val();
    var inputPlace = $("input#place-details").val();
    var inputPlace = $("input#place-time").val();
    var inputPlace = $("input#place-fun").val();
    var inputPlace = $("input#place-notes").val();

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li");
