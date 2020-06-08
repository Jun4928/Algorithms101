# Trials and Errors
### openchat_trial.js
테스트 케이스는 통과했지만, 코드에 엄청난 오류가 있었다. 자료형을 배열 하나만으로 처리하려고 하니까 극심한 성능저하를 겪었다.

create, change를 할 때, 같은 id의 이름을 갱신하는 것이 이 문제의 핵심인데, 배열 하나에 모든 정보를 담는다고 치면, 같은 id를 찾으려고 최악의 경우에 O(n)으로 이름을 갱신할 수 있다. 

이 단점을 보완하기 위해서 message와 id를 담는 배열과, 유저의 정보를 따로 보관하는 Map 자료형을 사용해서 이름을 갱신할 때 O(1)로 처리 하도록 하고, 메세지를 마지막에 뿌려줄 때에는 id를 통해 이름만 가져오도록 하면 내가 범했던 오류를 고칠 수 있었다.