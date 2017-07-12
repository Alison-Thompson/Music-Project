createProgression = function (progression) {
  var newProgression = [];
  var currentChord;

  for (var i = 0; i < progression.length; i++) {
    // fetch to create chord
    currentChord = new Chord(progression[i], 1) // id will be the created chords id
    newProgression.push(currentChord)
  }

  // fetch to create new progression
  return newProgression;
};
