# **Reverse Linked List**

Leetcode Link : [leetcode](https://leetcode.com/problems/reverse-linked-list/)

두 가지 풀이 방법이 있다.

## **1. Iteratively**

- 시간복잡도 *O(n)* : 처음부터 끝까지 다 순회 해야함 <br/>
- 공간복잡도 *O(1)* : 포인터로 가리키기만 하면 되어서 <br/>

```javascript
var reverseList = function(head) {
    
    var prev = null;
    var current = head;

    while(current !== null){
        var nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}
```
- **`while`문 안의 코드**<br/>
    1. `var nextTemp = current.next` <br/>
    역순으로 만드려면, 다음 것을 가리키는 포인터 (다리) 를 끊게 되니까 미리 다음 상태를 기억해야 한다. 
    2. `current.next=prev` <br/>
    이전 상태를 가리키게 한다. *(역순완료)*

    3. `prev=current` <br/>
    이전 노드를 지금의 상태로 옮긴다.
    4. `current = nextTemp` <br/>
    포인터를 끊기 전에 저장해 놓았던 nextTemp 로 현재 노드를 이동시킨다.

## **2. Recursively**

- 시간복잡도 *O(n)* : 처음부터 끝까지 다 순회 해야한다.
- 공간복잡도 *O(n)* : 재귀로 스택을 쌓아야 해서, 연결 리스트 이외에 n개의 추가적인 공간이 필요하다.

### **시행착오**
- Recursive 사용하기 위해서 base 조건이 되는 head.next == null 과 그 때 head를 return 해 주는 아이디어 떠올림
- 중간에 여러 시행착오를 겪었는데, 
return 으로 역순이 된 노드의 head 를 주어야 한다는 것이 첫번째 포인트였다. 
- 이 Head 를 기억해주는 것 까지는 구현 했지만, 역순으로 노드를 연결시켜주는 부분에 있어서 계속 실패했었다.


### **문제해결 과정**
리스트가 1->2->3->4->null 일 때를 예를들어서 설명 해 보자.

```javascript
var reverseList = function(head) {
    if(head == null || head.next ==null){
        return head;
    }
    
    var reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversedHead;
}
```

함수가 실행되면 head 이자 첫번째 노드인 1번부터 시작.
1. `var reversedHead = reverseList(head.next)`<br/>
1번 노드가 이야기한다. 2번아 역순으로 리스트 만들어서 나한테 와
2. 2번 노드가 head 가 되어서 다시 함수로 들어간다. 2번 노드가 이야기 한다. 3번아 역순으로 리스트 만들어서 나한테 와
3. 3번 노드가 head 가 되어서 다시 함수로 들어간다. 3번 노드가 이야기 한다. 4번아 역순으로 리스트 만들어서 나한테 와
4. 4번 노드가 head 가 되어서 다시 함수로 들어간다. <br/>
    `if(head == null || head.next null){ return head;}` 조건을 만난다.
    4번 노드, 4->null 이 return 된다. 

5. 다시 3. 에서 3번 노드가 호출 했을 때로 귀환한다. `var reversedHead = 4->null`, 역순이 된 리스트의 head 가 4번 노드를 가리키고 있다. 
6. `head.next.next=head` 3->4->null 이었던 순서가 3<-4 로 바뀐다.
7. `head.next = null` null<-3<-4 인 상태가 되고 
8. `return reversedHead` 역순이 된 이 리스트의 head, 즉 4번 노드를 가리킨 채로 다시 return 해 준다.
9. 다시 2. 에서 2번 노드가 호출 했을 때로 귀환한다. 
10. `head.next.next=head` 2->3<-4 이었던 2의 포인터가 2<-3<-4 로 바뀐다.
11. `head.next = null` null<-2<-3<-4 인 상태가 된다.
12. `return reversedHead` 역순이 된 이 리스트의 head 를 return 하게 됨.
13. 다시 1. 에서 1번 노드가 호출 했을 때로 귀환한다.
14. `head.next.next=head` 1->2<-3<-4 이었던 1의 포인터가 1<-2<-3<-4 로 바뀐다.
15. `head.next = null` null<-1<-2<-3<-4 인 상태가 되고
16. `return reversedHead` 역순이 된 이 리스트의 head 를 가리킨 채로 최종 return 을 하게 된다.

따라서 결과는 4->3->2->1->null 역순이 된 리스트의 head 를 리턴하게 되는 것!

다시 정리하면 주의해야 할 점은
**reversedHead** 를 재귀함수 내에서 계속해서 return 해 주어야 하는 것.
**head.next.next=head** 역순이 되어서 온 리스트에 자기 자신을 붙여주는 것
**head.next=null** null 인 상태로 만들어 주어야 한다. 리스트의 마지막은 항상 null 이기 때문에. 

이 과정을 반복하면, 
1. 나를 제외하고 역순 리스트를 만들어 오라고 함
2. 다음 노드가 역순 리스트가 되어서 돌아오면 요청했던 노드 자신을 붙인다.
3. 요청했던 노드 자신이 마지막 노드가 된 채로 이 역순이 된 리스트의 head 를 리턴 해준다.

재귀 함수 스택 내에는 head.next 즉, 다음 노드의 정보를 알고 있기 때문에,, head.next.next=head 를 하면 거꾸로 나 자신을 가리키게 되는 것이 뽀인트!
재귀함수 스택을 거치며, 역순이 된 새로운 연결 리스트가 만들어진다고 생각하면 좋다. 
새로운 리스트에 계속해서 append 해 나가는 것.