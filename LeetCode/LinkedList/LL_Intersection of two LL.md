# **Intersection of two linked lists**

Leetcode Link : [leetcode](https://leetcode.com/problems/intersection-of-two-linked-lists/)

## **1. 좋지않은 나의 알고리즘**<br/>

List1 : n, List2: m
- 시간복잡도 *O(nm)* <br/>
- 공간복잡도 *O(1)* <br/>

다음과 같은 코드는 while 문의 중첩으로 인해서 속도가 매우 느리다. n개의 노드가 있는 리스트를 m번 검사해야 하니까 O(nm)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let pA = headA;
    let pB = headB;
    
    // if one of each is null, return null
    if(pA=== null || pB === null){
        return null;
    }
    
    // intersected node
    while(pA){
        while(pB){
            if(pA === pB && pA.val === pB.val){
                return pA;
            }
            pB = pB.next;
        }
        pB = headB; 
        pA = pA.next;
    }
};
```



## **2. 두 연결 리스트의 길이의 차 이용하기**

List1: n , List2: m 
* 시간복잡도 *O(n+m)*
* 공간복잡도 *O(1)* 

```javascript
var getIntersectionNode = function(headA, headB) {
    
    // if one of each is null, return null
    if(headA === null || headB === null){
        return null;
    }
    
    const firstA = headA;
    const firstB = headB;
    let lengthA = 0;
    let lengthB = 0;
    
    while(headA){
        lengthA++;
        headA = headA.next;
    }
    
    while(headB){
        lengthB++;
        headB = headB.next;
    }
    
    const diff = lengthA < lengthB ? (lengthB - lengthA) : (lengthA - lengthB)
    
    let pA = firstA;
    let pB = firstB;
    
    if(lengthA < lengthB){
        for(let i=1; i<=diff; i++){
            pB = pB.next;
        }
        
    } else {
        for(let i=1; i<=diff; i++){
            pA = pA.next; 
        }
    }
    
    while(pA) {
        if(pA === pB){
            return pA;
        }
        pA = pA.next;
        pB = pB.next;
    }
    
    return null;
};
```

## **좋은 풀이**

```python
class Solution:
    # @param two ListNodes
    # @return the intersected ListNode
    def getIntersectionNode(self, headA, headB):
        if headA is None or headB is None:
            return None

        pa = headA # 2 pointers
        pb = headB

        while pa is not pb:
            # if either pointer hits the end, switch head and continue the second traversal, 
            # if not hit the end, just move on to next
            pa = headB if pa is None else pa.next
            pb = headA if pb is None else pb.next

        return pa # only 2 ways to get out of the loop, they meet or the both hit the end=None

# the idea is if you switch head, the possible difference between length would be countered. 
# On the second traversal, they either hit or miss. 
# if they meet, pa or pb would be the node we are looking for, 
# if they didn't meet, they will hit the end at the same iteration, pa == pb == None, return either one of them is the same,None

```

### **문제해결과정**

상단에 내가 한 풀이는 legnth 의 차이를 구한 것이고,
두번째 python 코드는 두 포인터가 같을 때 까지 찾은것이 포인트. 못찾는다면 null 에 다다르고 null return 하는 것이고
찾는다면, 찾는 지점을 return 하게 된다.

이 때 두 리스트 사이의 길이가 다른 점을 이용하는데, 길이가 짧은 포인터가 먼저 null 에 다다르면 길이가 긴 리스트의 헤드로 포인터를 이동시킨다. 이게 두번 반복되면 같은 자리에서.. 그래서 두 리스트의 포인터가 모두 null 에 다다르면, 같은 지점에서 리스트를 순회할 수 있게 된다.  => *이것이 길이의 차를 이용한 것*<br/>
**null 에 다다랐을 때, head 를 바꾸는 idea 가 핵심이다.** => 이것이 length 를 따로 구하지 않아도 두 리스트의 차를 이용한 알고리즘이 된다. 

*밑에 JavaScript 코드는 좋은 풀이의 Python 코드를 그대로 옮긴 것*

```javascript
var getIntersectionNode = function(headA, headB) {
    // if one of each is null, return null
    if(headA === null || headB === null){
        return null;
    }
    
    let pA = headA;
    let pB = headB;
    
    while(pA !== pB){
       pA === null ? pA = headB : pA = pA.next 
       pB === null ? pB = headA : pB = pB.next 
    } 
    
    return pA;
};
```



