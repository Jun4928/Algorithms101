class LRU {
    constructor(size = 0) {
        this.size = size;
        this.cache = new Map();
    }

    has(key) { // check if it has got the key
        return this.cache.has(key); // return true or false
    }

    hit(key) { // cache hit: 해당하는 키만 지우고, 가장 최근으로 옮김 set
        this.cache.delete(key);
        this.cache.set(key, 1); // 문제에서는 도시이름만 참조하므로, value를 모두 1로 Map 에 넣어준다.
        // 실제 사용에서는 value 에 JSON 객체가 들어가서 도시 이름에 해당하는 내용들이 저장될 수 있다.
        return this.cache.get(key);
    }

    miss(key) { // cache miss, LRU Algorithm
        if(this.cache.size === this.size) { // if cache size is full
            this.cache.delete(this._getLeastUsed()); // delete the least used one
        }
        this.cache.set(key, 1); // 뒤에 push
    }

    _getLeastUsed() { // Map 의 set 은 array 의 push 처럼 작용하니까
        return Array.from(this.cache.keys())[0]; // cache 에 있는 것중 가장 오래된 것은 맨 앞에 있다.
    }
}

function solution(cacheSize, cities) {
    const cache = new LRU(cacheSize);
    cities = cities.map(city => city.toLowerCase()); // 모든 배열 인자 toLowerCase() 소문자로

    if(cacheSize === 0) return cities.length * 5; // cache size = 0 일 때, 예외처리

    let excuteTime = 0;
    cities.forEach(city => {
        if(cache.has(city)) { // cache hit
            cache.hit(city); // cache 에서 가져오기 hit(key)
            excuteTime += 1;
        } else { // cache miss
            cache.miss(city); // cache 에 데이터 저장하기 miss(key)
            excuteTime += 5;
        }
    });

    return excuteTime;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));