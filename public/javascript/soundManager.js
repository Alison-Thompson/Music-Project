SoundManager = function(progression) {
  var iterator;

  var files = {'G':'./resources/sound-files/gMajor.wav',
               'Am':'./resources/sound-files/aMinor.wav'};

  PlaySound(iterator, progression, files);
};

function doSetTimeout(iterator, progression, files) {
    setTimeout(function() {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', files[progression[iterator]]);
      audioElement.play();
      console.log(files[progression[iterator]]);
    },iterator*3000);
}
function PlaySound(iterator, progression, files) {
    for (iterator=0; iterator < progression.length; iterator++) {
      doSetTimeout(iterator, progression, files);
    }
}
