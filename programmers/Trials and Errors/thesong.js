const solution = function(m, musicinfos) {
  const songToArray = function (song) {
    return [...song].reduce((songArray, chord) => {
      if (chord === '#') {
        songArray[songArray.length - 1] = songArray[songArray.length - 1] + chord;
        return songArray;
      }

      songArray.push(chord);
      return songArray;
    }, []);
  }

  const getPlayedChords = function (playedMinitues, songArray) {
    const songLength = songArray.length;
    const diff = playedMinitues - songLength;

    if (diff < 0) {
      const songIndex = (songLength - 1) + diff;
      return songArray.filter((chord, index) => {
        return index <= songIndex ? true : false;
      });
    }     

    if (diff > 0) {
      const repeated = Math.floor(playedMinitues/ songLength);
      const restSongIndex = playedMinitues % songLength - 1; 

      const played = [];
      for (let i = 1; i <= repeated; i++) {
        played.push(...songArray); 
      }

      const rest = songArray.filter((chord, index) => {
        return index <= restSongIndex ? true : false;
      });
      played.push(...rest);

      return played;
    }

    if (diff === 0) return songArray;
  }

  const playedSongs = musicinfos.map((musicinfo) => {
    const [start, end, title, song] = musicinfo.split(',');
    const [startHour, startMiniute] = start.split(':');
    const [endHour, endMinitue] = end.split(':');

    const playedMinitues = (endHour - startHour) * 60 + (endMinitue - startMiniute);
    const songArray = songToArray(song);

    const playedChords = getPlayedChords(playedMinitues, songArray);
    return {title, playedChords};

  });

  const isMatched = function (memorisedChord, playedChords)  {
    for (let i = 0; i < playedChords.length; i++) {
      const comparedChords = playedChords.slice(i, i + memorisedChord.length); 
      if (memorisedChord === comparedChords.join('')) return true;
    };

    return false;
  }

  const filteredSongs = playedSongs.filter((playedSong) => { // filtering
    const { playedChords } = playedSong;
    if (isMatched(m, playedChords)) return true;

    return false;
  });


  console.log(filteredSongs);

  if (filteredSongs.length === 0) return "(None)";
  if (filteredSongs.length === 1) return filteredSongs[0].title;

  filteredSongs.sort((a, b) => {
    if (a.playedChords.length < b.playedChords.length) return 1;
    if (a.playedChords.length > b.playedChords.length) return -1;
    return 0;
  });  

  return filteredSongs[0].title;
}


// solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]);
// const expected1 = "HELLO";

const result2 = solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]);
console.log(result2);
const expected2 = "FOO";

// const result3 = solution("ABC", ["12:00,12:14,HELLO,CDEFGAB", "12:14,12:29,HELLO2,CDEFGAB","13:00,13:05,WORLD,ABCDEF"]);
// console.log(result3);
// const expected3 = "WORLD";
