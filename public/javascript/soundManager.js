SoundManager = function() {
  this.currentProgression = [];
  this.iterator;

  this.files = {  'G':'./resources/sound-files/gMajor.wav',
                  'Am':'./resources/sound-files/aMinor.wav'};
};


SoundManager.prototype.doSetTimeout = function (iterator, progression) {
  setTimeout(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', files[progression[iterator]]);
    audioElement.play();
    console.log(files[progression[iterator]]);
  },iterator*3000);
};

SoundManager.prototype.PlaySound = function (progression) {
    for (iterator=0; iterator < progression.length; iterator++) {
      doSetTimeout(iterator, progression);
    }
};

soundManager = new SoundManager();
