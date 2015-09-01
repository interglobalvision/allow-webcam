window.onload = function() {
  var video = document.getElementById('video'),
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

  function saveImage() {
    var canvasData = canvas.toDataURL("image/jpg"); 
    if (canvasData) {
      $.ajax({
        type: "POST",
        url: "saveImage.php",
        data: {image: canvasData},
        success: function(response) {
          console.log("filename" + response);
          //postToInsta(response);
        },
        error: function(response) {
          console.log(response);
          //getLocation();
        }
      });
    }
  }

  // Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia);

  if (navigator.getUserMedia) {
  // Request the camera.
  navigator.getUserMedia(
    // Constraints
    {
      video: true
    },

    // Success Callback
    function(stream) {

         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
           ctx.drawImage(video, 0, 0, 640, 480);
           saveImage();
         };
      },

    // Error Callback
    function(err) {
      // Log the error to the console.
      console.log('Error: ' + err);
    }
  );

} else {
  alert('Sorry, no');
}

}

