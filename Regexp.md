# **나만의 정규표현식 Library**

- filter 함수의 callback 으로 넣어서 문자와 숫자만 뽑아내고 싶었다
```javascript
    const countA = [...stringA.toLocaleLowerCase()].reduce( (obj, cha) => {
        obj[cha] ? obj[cha]++ : obj[cha] = 1;
        return obj;
    }, {});

    const regex = new RegExp('[a-z\d]', 'gi');
    const keysA = Object.keys(countA).filter( cha => cha.match(regex) );
```

const regex = new Regex(____/g);
이 첫번째 파라미터에 들어갈 정규표현식
두번째 파라미터에 gi 를 넣으면 global insensitive 가 된다.

- `[A-Za-z\d\s]` : 모든 캐릭터와 숫자 공백 매칭
- `[^A-Za-z\d\s]` : 순수하게 특수문자만 매칭된다.
<br/><br/>

- `[A-Za-z\d]` : 순수하게 모든 캐릭터와 숫자 
- `[^A-Za-z\d]` : 특수문자, space bar 매칭된다. 
<br/><br/>

- `[\w]` : 캐릭터 숫자 그리고 underbar 매칭. 그렇니까 String 에서 character 개별로 매칭이 된다. 
- `[^\w]` : 특수문자, space bar 매칭된다.
- `[\w]+` : String 에서 스페이스바를 띄고 모든 단어들이 선택된다. (특수문자 구성 제외)
- `([A-Z])\w+` : 대문자로 시작하는 모든 단어들 선택
<br/><br/>

- `/^\w/` : 단어의 맨 처음 시작
- `/[\s]/g` : 공백 찾기
<br/><br/>

- `/[aeiou]/gi` : insensitve 하게 모음찾기
<br/><br/>

- `arrayOfLines = lineString.match(/[^\r\n]+/g);` : line 줄 찾기 line 으로 끊기!!!
```javascript
    const lines = string.match(/[^\r\n]+/g); // line 으로 잘라서 배열에 들어감
```
- `/[\r\n]+/` : line break 찾기

- brackets 찾기 
```javascript
    const left_regex = /\{|\[|\(/g;
    const right_regex = /\}|\]|\)/g
    const check_regex = /\(\)|\{\}|\[\]/g;
```

- Number(0-10) + any String + Not Number
```javascript
let b = "10T#3S10D*"
const matched = b.match(/\d\d?\D(#|\*)?/g);
const matched = b.match(/\d\d?(S|D|T)(#|\*)?/g); // 조건에 맞게 명시해줌
console.log(matched);
// [10T#, 3S, 10D*]
// \d : matches any digit character : 0 - 9
// \d : matches any digit character : 0 - 9
//  ? : match between 0 and 1 of the preceding token =>  10 때문에 물어봐 준다. /d 하나여도 ㅇㅋ /d/d 여도 ㅇㅋ
// \D : matches any character that is not a digit character
// (  group
    // # : matches #
    // | : or
    // \* : matches *
// )
//  ? : 옵션이 있을수도 없을수도 있으니까

```



## Useful Regular Expressions Links

- 한국어 설명 : [Kor](http://www.nextree.co.kr/p4327/) <br/>
![img](img/regexp1.png)
- Eng MDN : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) <br/>

- 바로바로 실습가능한 **매우유용!** :[Eng, 실습가능](https://regexr.com) <br/>