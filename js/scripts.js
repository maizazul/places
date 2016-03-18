function Location (place, location, landmarks, time, fun, notes) {
  this.place = place;
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.fun = fun;
  this.notes = notes;
}

// Location.prototype.fullDetails = function() {
//   return this.place + ", " + this.location + ", " + this.landmark + ", " + this.time + ", " + this.fun + ", " + this.notes;
// }



$(document).ready(function()  {
  $("form#new-location").submit(function(event)  {
    event.preventDefault();

    var inputPlace = $("input#new-place").val();
    var inputLocation = $("input#place-location").val();
    var inputLandmarks = $("input#place-landmarks").val();
    var inputTime = $("input#place-time").val();
    var inputFun = $("input#place-fun").val();
    var inputNotes = $("input#place-notes").val();

    var newPlace = new Location(inputPlace, inputLocation, inputLandmarks);
    // var newDetails = new Location(inputLocation, inputLandmarks, inputTime, inputFun, inputNotes);
    // inputPlace.push(newDetails);

    $("ul#list").append("<li><span class='listplace'>" + newPlace.place + "</span></li");

    $("input#new-place").val("");

    $(".listplace").last().click(function() {
      $("#show-details").show();
      $("#show-details h2").text(newPlace.place);
      // $(".place").text(;
      $(".location").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
    //   $(".time").text(inputTime);
    //   $(".fun").text(inputFun);
    //   $(".notes").text(inputNotes);
    //     console.log("click");

      // $("ul#info").text("");
      //   $("ul#addresses").append("<li>" + fullDetails() + "</li>");


    });
  });
});
