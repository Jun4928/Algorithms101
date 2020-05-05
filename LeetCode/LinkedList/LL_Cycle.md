# **Linked List Cycle**

Leetcode Link : [leetcode](https://leetcode.com/problems/linked-list-cycle/)

## **1. 좋지않은 나의 알고리즘**<br/>
- 시간복잡도 *O(n^3)* <br/>
- 공간복잡도 *O(n)* <br/>
최악의 경우에는 노드의 길이가 길어지고, 재사용하는 경우가 생기면, dummy를 만들어 주어야 하므로 시간복잡도 O(n*3), 공간복잡도  O(n) 까지 시간이 늘어난다.

한 번 접근한 노드의 값을 false 로 바꾼다.
만약 next 로 포인터를 옮기고,
value 가 false 라면 이미 들렸던 것이니까, 싸이클이 있다는 뜻.
=> 하지만 좋은 코드가 아니다. 왜냐하면, 노드의 실제 저장된 값을 바꾸기 때문에, 이 함수는 잘 작동할지 몰라도, 재사용이 불가하기 때문에 dummy를 만들어 주어야 하고 여기에 드는 추가 비용도 있다는 것. 그리고 매 번 값을 참조해서 false로 바꾸어준다는 것은,, 그 만큼 대입연산을 해야 하기 때문에 시간이 많이 걸린다.
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(head === null) return false;  
    
    while(head){
        if(head.val == false) return true;
        head.val = false;
        head = head.next;
    }
    
    return false;
};
```


## **2. Hare & Turtoise 일명 토끼와 거북이 Two Pointers**

List1: n , List2: m 
* 시간복잡도 *O(n)*
* 공간복잡도 *O(1)* 

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(head === null || head.next === null) return false;
    
    let slow = head;
    let fast = head.next;
    
    while(slow !== fast)
    {   
        if(fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
    
};
```
```javascript
var hasCycle = function(head) {
    
    if(head === null || head.next === null) return false;
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null)
    {   
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    
    return false;
    
};
```

### **문제해결과정**

위의 두 코드 모두 slow, fast 두 가지 포인터를 사용한 알고리즘이다.  leetcode 에 submit 을 해서 두 코드의 차이를 본 결과 위의 경우가 공간 복잡도가 항상 O(1)이 나왔다. 아무래도 가장 많이 참조하는 while 문이 조금 더 간단해서(?) 이지 않을까 싶은데,, 

어찌 되었건, **이 알고리즘의 중요한 포인트는!** <br/>
포인터 두개(토끼와 거북이)를 경기장에서 달리는 두 선수라고 생각 해보자. 쉬운 비교를 위해 100m 달리기를 한다면, 두 선수가 절대 만날일이 없다. 이것을 일반적인 Linked List라고 하자. 
 
하지만, Linked List 에 Cycle 이 있다면?? 이것은 원형경기장으로 비유할 수 있다. 경기의 끝을 두 선수가 만날 때라는 룰을 정해 놓는다면,, 시간이 얼마나 걸리든 빠른 선수는 언젠가 느린 선수의 꼬리를 잡는 경우가 생긴다..! <br/> 
=> 이 비유가 Linked List Cycle 에도 똑같이 적용된다. slow(거북이 선수) fast(토끼 선수) pointer 두 가지를 놓고, slow는 slow.next 로 한칸씩, fast는 fast.next.next 로 두칸씩 움직인다. 이렇게 list를 계속해서 돌게 하고, 둘이 만나는 지점에 while 문을 끝내고 true를 return하면 된다. 만약 그 전에 fast나 fast.next가 null 을 만난다면 이것은 cycle 이 아니라는 것이니까 false를 return 하면 된다.

!! *slow, fast two pointers,, hare & turtoise algorithm 을 문제에 항상 접근시켜 보자. 생각보다 두개의 포인터를 가진다는 것은 공간복잡도도 줄이고, 시간복잡도도 줄일 수 있는 근사한 방법이다. 메모리를 참조하기만 하면 되니까!*



