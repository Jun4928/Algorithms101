# **LRU Cache Algorithms**
- KAKAO 2018 Blind Recuritment 1차 Cache 문제를 풀기 위해서 거쳐가야 할 과정<br/>
- 무엇보다도 이 알고리즘은 속도향상을 위해서 언젠가는 숙지해야 할 내용이기 때문에 지금 정리하고 넘어가자<br/>

**References**<br/>
*[interview cake](https://www.interviewcake.com/concept/java/lru-cache)* <br/>
*[Stack Overflow](https://stackoverflow.com/questions/996505/lru-cache-implementation-in-javascript)*

## **왜 쓸까?**
먼저 이 알고리즘이 왜 쓰이는지 이유를 살펴보기 전에, LRU는 Least Recently Used 의 줄임말이다. <br/>
이 알고리즘의 보다 더 정확한 이해를 위해서 덧붙이자면 (the) Least Recently Used (one) 이라고 할 수 있다. <br/> 
최근에 사용된 것인데, 가장 오래된 것을 뜻한다. 뭔 소릴까? 한 번에 와닿지는 않는다. <br/>

상황을 설정 해 보자, 내 책상위에는 책상과 수평으로 된 선반이 있다. 이 선반에는 항상 내가 애정하는 책들이 놓여있다.
이 선반에 꽂을 수 있는 책의 수를 4권이라고 가정 해 보자. 내가 좋아하는 책들은 적어도 4권은 훌쩍 넘는다. 그래서 책상위의 선반에는 가장 최근에 읽은 책들만 꽂고, 다른 책들은 내 책상으로 부터 1미터 가량 떨어진 벽에 있는 책장에 보관 해 두었다.

이 상황을 컴퓨터의 내부 구조와 *(거칠게)* 대응하면,
- 책들: data 
- 책상 위 선반: cache
- 선반에 꽂을 수 있는 책의 수 4권: cache size 
- 1미터 가량 떨어진 벽에 있는 책장: disk

만약, 책상 위 선반이 없다면, 매 번 책장에 가서 책을 찾아야 한다. 책상에 앉아서 손을 뻗으면 닿을 수 있는 위치에 있는 선반에서 책을 꺼내는 것보다 시간이 더 오래 걸린다. <br/>
그래서 우리는 선반을 사용한다. **(그래서 우리는 캐시를 사용해야 한다!)** <br/>
그리고, 선반을 무제한으로 넓고 큰것으로 설치할 수는 없는 노릇 아닌가.. **(그래서 캐시는 제한적인 사이즈를 갖는다!)** <br/>
선반에 4권밖에 꽂지 못하니까, 최근에 읽은 것들을 선반에 놓고, 최근에 읽지 않은것은 책장에 놓는다. **(LRU Cache Algorithm)**

선반에서 밀려나가는 것이 바로 the Least Recently Used one 이다. <br/>
최근에 읽긴 읽었는데, 가장 오래된 놈. 그것이 선반(cache)에서 빌려나가 책장(disk)으로 가는 놈이다. 이것이 이 알고리즘의 핵심!

## **구현**
알고리즘은 생각보다 단순하지만, 캐쉬의 속도를 높이기 위해서는 두 가지의 자료구조가 필요하다.

- **Doublely Linked List** : cache 안에 저장된 데이터들의 순서를 담당한다. 
    - he most recently used one: head 
    - the least recently used one: tail
    - 이 순서를 알고 있어야, 캐쉬에 데이터를 집어 넣을 때, 캐쉬에서를 데이터를 빼낼 때 빠르다!
- **Hash Map** : O(1) 로 데이터에 접근할 수 있다. 
    - **Key**: data, **Value**: reference in the doubly linked list
    - 이 map 안에 데이터가 있으면, **cache hit!!**
    - 없으면, **cache miss..**

```
- Hash Map 에 내가 찾고자 하는 데이터를 참조한다. 
- 있다!! => cache hit!! 
    1. Hash Map 을 이용해서 Linked List 해당하는 노드의 주소를 참조한다.
    2. the most recently used one: head 으로 만들어주기
    return data;
- 없음.. => cache miss.. 
    1. 먼저, cache 가 full 인지 확인 해 준다 => full 이다..! => 가장 오래된 놈 버리자: (LRU Algorithm)
        - the least recently used one: tail 참조하기
        - Linked List에서 제거 해 주고, Hash Map 에서도 제거 해 주자!
    2. 방금 요청한 data 를 cache 에 저장하기 위해서 새로운 노드를 만들고, the most recently used one: head 으로 만들자!
    3. Hash Map 에 Key: data, Value: reference to the recent created node 로 넣어주자
    return data
```








