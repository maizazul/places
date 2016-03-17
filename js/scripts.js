function Location (place, location, landmark, time, fun, notes) {
  this.place = place;
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.fun = fun;
  this.notes = notes;
}

Location.prototype.fullDetails = function() {
  return this.place + ", " + this.location + ", " + this.landmark + ", " + this.time + ", " + this.fun + ", " + this.notes;
}



$(document).ready(function()  {
  $("form#new-location").submit(function(event)  {
    event.preventDefault();

    var inputPlace = $(this).find("input#new-place").val();
    var inputLocation = $(this).find("input#place-location").val();
    var inputLandmarks = $(this).find("input#place-landmarks").val();
    var inputTime = $(this).find("input#place-time").val();
    var inputFun = $(this).find("input#place-fun").val();
    var inputNotes = $(this).find("input#place-notes").val();
    var newPlace = new Location(inputPlace);
    var newDetails = new Location(inputLocation, inputLandmarks, inputTime, inputFun, inputNotes);
    // inputPlace.push(newDetails);

    $("ul#list").append("<li><span class='listplace'>" + newPlace.place + "</span></li");
    $(".listplace").last().click(function() {

      $("#show-details").show();
      $("#show-details h2").text(newPlace.place);
      $(".place").text(inputPlace);
      $(".location").text(inputLocation);
      $(".landmarks").text(inputLandmarks);
      $(".time").text(inputTime);
      $(".fun").text(inputFun);
      $(".notes").text(inputNotes);
        console.log("click");

      // $("ul#info").text("");
      //   $("ul#addresses").append("<li>" + fullDetails() + "</li>");


    });
  });
});
