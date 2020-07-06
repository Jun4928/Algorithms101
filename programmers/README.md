# **Programmers**
한국어 코딩테스트 준비하기 위한 웹사이트 문제풀이 저장소

## **Files**
### **LEVEL1**
프로그래밍 입문자를 위한 쉬운 수준이라고 명시되어 있지만, 카카오에서 출제 된 문제들은 쉽지많은 않다. <br/>
문제를 잘 이해하고, 필요한 자료구조를 사용해야 한다. <br/>
어려운 자료구조나 알고리즘(ex. 트리, 이분탐색트리, DFS, BFS, 동적 계획법등..) 나오지는 않지만, 기본적으로 배열, 스택, 큐에 대한 이해와 적절한 사용이 필요한 문제들이 있다.

**2020.05.04-2020.05.07**
- budget.js : 예산 (정렬, Greedy 알고리즘)
- crainDolls.js : 크레인 인형뽑기 게임 (2019 카카오 개발자 겨울 인턴쉽)
- dartResult.js : 다트 게임 (2018 KAKAO BLIND RECRUITMENT)
- **failureRate.js : 실패율 (2019 KAKAO BLIND RECURITMENT) : sort 함수 정확하게 사용해야 함!**
    - JavaScript Array.sort() method
    - reference : [MDN Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    ```javascript
    function compare(a, b) { // 오름차순
        if (a is less than b by some ordering criterion) {
            return -1; // return value < 0, a comes first
        }
        if (a is greater than b by the ordering criterion) {
            return 1; // return value > 0, b comes first
        }
        // 같을 때 처리
        return 0;
    }

    function compare(a, b) { // 내림차순 
        if (a is less than b by some ordering criterion) {
            return 1; // return value > 0, b comes first
        }
        if (a is greater than b by the ordering criterion) {
            return -1; // return value < 0, a comes first
        }

        // 같을 때 처리
        return 0;
    }
    ```
    ```javascript
    const list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

    // temporary array holds objects with position and sort-value
    const mapped = list.map( (el, i) => {
    return { index: i, value: el.toLowerCase() };
    });

    // sorting the mapped array containing the reduced values
    // 이 경우에, list 오름차순
    mapped.sort((a, b) => {
        if (a.value < b.value) { // a comes first
            return -1;
        }

        if (a.value > b.value) { // b comes first
            return 1;
        }

        return 0; //  leave a and b unchanged
    });

    // container for the resulting order
    const result = mapped.map((el) => {
        return list[el.index];
    });
    ```
- findKimSeoBang.js : 서울에서 김서방 찾기
- hateSameNumbers.js : 같은 숫자는 싫어
- inbetweens.js : 두 정수 사이의 합
- knumber.js : K번째수
- marathons.js : 완주하지 못한 선수
- mockTests.js : 모의고사
- passwords.js : 시저암호
- pys.js : 문자열 내 p와 y의 개수
- secretMap.js : 비밀지도 (2018 KAKAO BLIND RECRUITMENT)
- sortSrtings.js : 문자열 내 마음대로 정렬하기
- squareStars.js : 직사각형 별찍기
- stringBasics.js : 문자열 다루기 기본
- stringToInt.js : 문자열을 정수로 바꾸기
- stringUptoDown.js : 문자열 내림차순으로 배치하기
- trainingClothes.js : 체육복
- wiedStrings.js : 이상한 문자 만들기


### **LEVEL2**
**2020.05.06-**
- LRUCache.js : 캐시 (2018 KAKAO BLIND RECRUITMENT)
    - JavaScript Map 사용해서 LRU Cache 구현 
- LRUCache.md : LRU Cache Algorithm 정리한 마크다운 문서
- baseball.js : 숫자야구
    - Recursion, Permutatation(순열) Algorithm
- candidateKeys.js : 후보키 (2019 KAKAO BLIND RECRUITMENT)
    - DFS Algorithm(완전탐색), 심화된 Array 처리
- development.js : 기능개발 
    - Stack, Queue + *성능주의!*
- joystick.js : 조이스틱
    - Greedy Algorithm: Locally Optimal Decision, 결국 선택을 하는데 있어서 그 순간에 좋은 선택을 하기 때문에 전체적으로 보았을 때에는 최적의 솔루션이 아닐수도 있다. 실제로 테스트 케이스에서 그런 경우가 발생한 문제.
- makebignumber.js : 큰 수 만들기
    - Greedy Algorithm 으로 푸는 문제. 모든 테스트 케이스는 통과했으나 10번 테스트 케이스는 시간초과로 통과하지 못 했음. 최대 효율을 내기 위해서 할 수 있는 만큼 성능 개선을 시켜봤으나..(array method 사용X, O(n) 이 걸리는 배열 복사 등..) 결국 10번 테스트케이스 시간초과를 통과하지 못 한 문제.
- newsClustering.js : 뉴스 클러스터링 (2018 KAKAO BLIND RECRUITMENT)
    - JavaScript Array Methods, Object, Regular Expressions
- openchat.js : 오픈채팅방 (2019 KAKAO BLIND RECRUITMENT)
    - Javascript Map 자료구조, array functional methods
- parenthesis.js: 괄호변환 (2020 KAKAO BLIND RECRUITMENT)
    - 재귀(Recursion), 문제 요구사항 구현
- printer.js : 프린터 
    - 우선순위 Queue JavaScript 배열로 구현
- squares.js : 멀쩡한 사각형
    - 유클리드 호제법으로 최대공약수 구하는 알고리즘
- sticks.js : 쇠막대기
	- JavaScript Array Methods, Stack, Queue
- stringCompression.js : 문자열 압축 (2020 KAKAO BLIND RECRUITMENT)
    - JavaScript Array Methods, Regular Expressions 
- targetNumber.js : 타겟넘버
    - JavaScript, Recursive, Binary Search Tree, Depth First Search
- thesong.js: 방금그곡 (2018 KAKAO BLIND RECRUITMENT)
    - 정규표현식 문자열처리 + 주어진 조건이 많은 문제 => 세세하게 예외처리 필요
- top.js : 탑
    - Stack, Queue
- trucks.js : 다리를 지나는 트럭
    - Stack, Queue
- tuple.js : 튜플 (2019 카카오 개발자 겨울 인턴십)
    - JavaScript Array Methods, Regular Expressions

### **Trials and Errors**
알고리즘 문제해결을 하며 시행착오를 겪은 코드를 기록 ex) 성능저하, 불필요한 자료구조 사용, 메소드 사용 등..