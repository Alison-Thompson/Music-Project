SoundManager = function(progression) {
  var iterator;

  var files = {'A':'./resources/sound-files/Amaj.wav',
               'Am':'./resources/sound-files/Amin.wav',
               'Adim':'./resources/sound-files/Adim.wav',
               'B':'./resources/sound-files/Bmaj.wav',
               'Bm':'./resources/sound-files/Bmin.wav',
               'Bdim':'./resources/sound-files/Bdim.wav',
               'C':'./resources/sound-files/Cmaj.wav',
               'Cm':'./resources/sound-files/Cmin.wav',
               'Cdim':'./resources/sound-files/Cdim.wav',
               'D':'./resources/sound-files/Dmaj.wav',
               'Dm':'./resources/sound-files/Dmin.wav',
               'Ddim':'./resources/sound-files/Ddim.wav',
               'E':'./resources/sound-files/Emaj.wav',
               'Em':'./resources/sound-files/Emin.wav',
               'Edim':'./resources/sound-files/Edim.wav',
               'F':'./resources/sound-files/Fmaj.wav',
               'Fm':'./resources/sound-files/Fmin.wav',
               'Fdim':'./resources/sound-files/Fdim.wav',
               'G':'./resources/sound-files/Gmaj.wav',
               'Gm':'./resources/sound-files/Gmin.wav',
               'Gdim':'./resources/sound-files/Gdim.wav'};

  PlaySound(iterator, progression, files);
};

function doSetTimeout(iterator, progression, files) {
    setTimeout(function() {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', files[progression[iterator]]);
      audioElement.play();
      console.log(files[progression[iterator]]);
    },iterator*1100);
}
function PlaySound(iterator, progression, files) {
    for (iterator=0; iterator < progression.length; iterator++) {
      doSetTimeout(iterator, progression, files);
    }
}
