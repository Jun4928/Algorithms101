const solution = (record) => {
  const info = [];
  const users = new Map(); 

  record.forEach( each => {
    const [command, id, name] = each.split(' ');
    if (command === 'Enter') {
      users.set(id, name);
      info.push({id, message: '님이 들어왔습니다.'});
    }

    if (command === 'Leave') info.push({id, message: '님이 나갔습니다.' });

    if (command === 'Change') users.set(id, name);
  });

  return info.map((each) => {
    return `${users.get(each.id)}${each.message}`;
  });
};

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);
const expected = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."];
console.log(expected);