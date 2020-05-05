# **Merge Two Sorted List**

Leetcode Link : [leetcode](https://leetcode.com/problems/merge-two-sorted-lists/)

## **1. 오답**

```javascript
var mergeTwoLists = function(l1, l2) {
       
    
    if(l1 === null && l2 === null) return null;
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    
    if(l1.val <= l2.val){
        var mergedListHead = l1;
    } else {
        var mergedListHead = l2;
    }
    
    var l1Index = l1;
    var l2Index = l2;
    
  
    while(l1Index || l2Index){  
        
        var tmp1 = l1Index.next;
        var tmp2 = l2Index.next;
        
        if(l1.val <= l2.val) {
            l1.next = l2;
            l2.next = tmp1;
            l1 = l1.next.next;
            l2 = tmp2;    
        } else {
            l2.next = l1;
            l1.next = tmp2;
            l2 = l2.next.next;
            l1 = tmp1;
        }
        
        l1Index = tmp1;
        l2Index = tmp2;
        
        if(l1Index ===null || l2Index === null) break ;
    }
    
    return mergedListHead;
   
};
```
예외처리도 엉망이었고, 애초에 문제 자체를 잘못 이해했다. <br/>
List1 :[5] <br/>
List2 :[1, 2, 4]<br/>
[1, 2, 4, 5] 인 List 가 return 되어야 하는데 
위의 코드는 [1, 5, 2, 4] 가 return 된다. 

알고리즘을 다시 생각 해내야 한다. 


## **2. Recursively**

List1: n , List2: m 
* 시간복잡도 *O(n+m)*
* 공간복잡도 *O(n+m)* 

```javascript
/*
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {
    
    if(l1 === null) return l2;
    if(l2 === null) return l1;

    if(l1.val <= l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```

### **문제해결과정**

일단 두번째로 연결리스트 문제를 재귀함수를 통해 해결하고자 했다. 
리스트를 역순으로 바꿀 때 처럼, 나를 제외하고 다음노드에게 역순이 된 리스트를 가지고 오라고 함수를 다시 호출한다. 

그러니까, 이 문제에서도 나를 제외한 내 다음 노드에게 정렬되어서 합병된 리스트를 가지고 오라고 시킨다. 이것을 재귀로 구현한 것.
내가 보낸 다음노드가 일을 마치고 return 되어서 돌아오면 나 자신을 붙이고, 나를 return 한다. 

들어온 두 리스트의 head 값 l1.val 과 l2.val 을 비교해서 작은것이 앞쪽에 나와야 한다. 따라서, l1.val 이 작다고 치면, 자신을 나의 다음노드가 정렬되어 합병된 리스트에 연결시켜 주는 의미가 `l1.next = mergeTwoLists(l1.next, l2)` 라는 코드로 치환된다. 이 때 파라미터로 l2 가 들어가는 이유는, l2 의 head 가 더 크기 때문에 나의 다음 노드와 큰지 작은지 또 비교해 봐야 하기 때문이다. 

그리고 함수를 호출한 나 자신이 작은 놈이었으므로 나 자신을 return 한다.
`return l1;`

l1.val > l2.val 일 경우에는 반대로 해 주면 된다. 



