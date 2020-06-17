const solution = function (m, musicInfos) {

  const chordSimplify = function (chord) { // #이 붙어있는 코드를 소문자화 시켜서 대문자 코드와 차별화 시킨다.
    return chord.replace(/C#/g, 'c')
                .replace(/D#/g, 'd')
                .replace(/F#/g, 'f')
                .replace(/G#/g, 'g')
                .replace(/A#/g, 'a');

  }
    
  const getPlayedChords = function(playedLength, chords) { // 연주된 시간에 따라 연주된 코드를 구하는 함수
    const repeated = Math.floor(playedLength / chords.length); // 반복된 횟수
    const restLength = playedLength % chords.length; // 나머지 부분

    let playedChords = '';
    for (let i = 1; i <= repeated; i++) playedChords += chords;

    return playedChords + chords.slice(0, restLength); // 반복된 부분 + 나머지 부분
  }

  const simplifiedM = chordSimplify(m);
  const playedSongs = musicInfos.map((musicInfo) => {
    const [start, end, title, chords] = musicInfo.split(',');
    const [startHour, startMiniute] = start.split(':');
    const [endHour, endMinitue] = end.split(':');

    const playedMinitues = (endHour - startHour) * 60 + (endMinitue - startMiniute); // 연주된 시간
    const simplifiedChords = chordSimplify(chords); // # 붙여진 코드를 간단화 하고

    const playedChords = getPlayedChords(playedMinitues, simplifiedChords); // 실제 연주된 코드를 구한다.
    return {title, playedChords, length: playedChords.length}; // filtering 거칠 때, 필요한 정보만 객체에 담아서 리턴한다.
  });

  const filteredSongs = playedSongs.filter((playedSong) => { // filtering 거치기
    const { playedChords } = playedSong;
    if (playedChords.includes(simplifiedM)) return true; // 연주된 곡에 기억된 코드가 있으면 true
    return false;
  });

  if (filteredSongs.length === 0) return "(None)"; // 없으면 none
  if (filteredSongs.length === 1) return filteredSongs[0].title; // 첫번째 title return

  // 필터링된 노래가 많을 경우에
  // 1. 재생시간 긴 음악 제목 return
  // 2. 재생시간도 같을 경우 먼저 입력된 음악 제목 return
  filteredSongs.sort((a, b) => { // 연주된 길이에 따라 내림차순으로 정렬한다.
    if (a.length < b.length) return 1;
    if (a.length > b.length) return -1;
    return 0;
  });

  return filteredSongs[0].title; // 첫번째 title return
};


// solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]);
// const expected1 = "HELLO";

// const result2 = solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]);
// console.log(result2);
// const expected2 = "FOO";

const result3 = solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "12:14,12:29,HELLO2,CDEFGAB","13:00,13:05,WORLD,ABCDEF"]);
console.log(result3);
const expected3 = "WORLD";
