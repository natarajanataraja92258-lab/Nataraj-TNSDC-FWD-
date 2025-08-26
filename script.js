document.getElementById("bookingForm").addEventListener("submit", function(event){

  event.preventDefault();

  let name = document.getElementById("name").value;

  let date = document.getElementById("date").value;

  let time = document.getElementById("time").value;

  let people = document.getElementById("people").value;

  if(name && date && time && people){

    alert(`✅ Thank you, ${name}! Your table for ${people} people on ${date} at ${time} is booked.`);

    document.getElementById("bookingForm").reset();

  } else {

    alert("⚠️ Please fill in all details.");

  }

});