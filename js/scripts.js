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

    var newPlace = new Location(inputPlace, inputLocation, inputLandmarks, inputTime, inputFun, inputNotes);
    // var newDetails = new Location(inputLocation, inputLandmarks, inputTime, inputFun, inputNotes);
    // inputPlace.push(newDetails);

    $("ul#list").append("<li><span class='listplace'>" + newPlace.place + "</span></li");

    $(".listplace").last().click(function() {
      $("#show-details").show();
      $("#show-details h2").text(newPlace.place);
      $(".location").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".time").text(newPlace.time);
      $(".fun").text(newPlace.fun);
      $(".notes").text(newPlace.notes);


    //     console.log("click");

      // $("ul#info").text("");
      //   $("ul#addresses").append("<li>" + fullDetails() + "</li>");


    });

    $("input#new-place").val("");
    $("input#place-location").val("");
    $("input#place-landmarks").val("");
    $("input#place-time").val("");
    $("input#place-fun").val("");
    $("input#place-notes").val("");


  });
});
