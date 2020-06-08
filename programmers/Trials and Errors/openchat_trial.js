const solution = (record) => {
  const records = record.map((each) => each.split(' '));
  let info = [];

  records.forEach( (record) => {
    const [command, id, name] = record;
    if (command === 'Enter') {
      info = info.map( (each) => {
        if (each.id === id) return {...each, name};
        if (each.id !== id) return each;
      });
      info.push({message: '님이 들어왔습니다.', id, name});
    }

    if (command === 'Leave') {
      info.push({message: '님이 나갔습니다.', id, name});
    }

    if (command === 'Change') {
      info = info.map( (each) => {
        if (each.id === id) return {...each, name};
        if (each.id !== id) return each;
      });
    }
  });

  console.log(info);
  const messages = info.map( (each) => {
    return `${each.name}${each.message}`;
  });

  return messages;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);
const expected = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."];
console.log(expected);