# **Palindrom Linked List(리스트의 회문 여부)**

Leetcode Link : [leetcode](https://leetcode.com/problems/palindrome-linked-list)

## **처음으로 성공한 나의 좋은 알고리즘**

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
var isPalindrome = function(head) {
    
    let tmp = head;
    let slow = head;
    let fast = head;
    let prev = null;
    let switched = false;
    
    if(head === null || head.next === null) return true;
    
    while(slow){ 
        if(switched === false){
            
            if(fast === null){ // node length : even
                fast = prev;    
                switched = true;
                continue;
            } 
            
            if(fast.next === null){ // node length: odd
                fast = prev;
                slow = slow.next;
                switched = true;
                continue;
            }
            
            fast = fast.next.next;       
            tmp = slow.next;
            slow.next = prev;
            prev = slow;                    
            slow = tmp;
            
        } else {            
            if(slow.val !== fast.val) return false;            
            slow = slow.next;
            fast = fast.next;
        }
    }
    
    return true;
};
```

### **문제해결과정**
- two pointer ; slow, fast 를 사용해서 중간지점을 빠르게 알아내자!
- slow pointer 는 앞으로 이동하면서 앞쪽의 반을 이동하면서 list를 역순으로 만든다.
- 중간지점에 도달했을 때는 2배 앞서나간 fast pointer 가 null 을 만났을 때이다.
- 이 때, 노드의 길이가 짝수일 때와 홀수일 때의 구분이 필요하다.
- 홀수 일 때는 slow 이전의 노드에 fast 포인터를 지정하면 되고,
- 짝수 일 때는 slow 이전의 노드에 fast 포인터 지정하고 slow 도 한 칸 앞으로 이동시킨다.
- 그 후 각각의 포인터를 한칸씩 움직이면서 value를 비교하면 된다. 하나라도 값이 다르면 false 를 리턴하고,
- 마지막까지 while 문에서 false 가 걸리지 않고 빠져나오면 true 를 리턴한다.

개선할 수 있는 사항은 switched 로 안에 넣어준 것을 빼서 while 문 2개로 처리할 수도 있다.

