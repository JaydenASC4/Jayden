$.ajax({
  url: "http://api.klout.com/v2/user.json/45598950992084523?key=25wyxvfk3tt2z9f3dz6tf46u",
//   data: {
//     zipcode: 97201
//   },
  success: function( data ) {
      console.log(data);
    // $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});