var RecentCounter = function() {
    this.queue = [];
};


// Any ping with time in [t - 3000, t] will count, including the current ping
// It is guaranteed that every call to ping uses a strictly larger value of t than before.
RecentCounter.prototype.ping = function(t){
    let peek = this.queue[0]; 

    this.queue.push(t);

    while(peek < t-3000) {
        this.queue.shift();
        peek = this.queue[0];
    }

    return this.queue.length;

}

var obj = new RecentCounter();

// var param_1 = obj.ping(1);
// var param_2 = obj.ping(100);
// var param_3 = obj.ping(3001);
// var param_4 = obj.ping(3002);

// console.log(param_1);
// console.log(param_2);
// console.log(param_3);
// console.log(param_4);

console.log('-----------------');

// var param_1 = obj.ping(642);
// var param_2 = obj.ping(1849);
// var param_3 = obj.ping(4921);
// var param_4 = obj.ping(5936);
// var param_5 = obj.ping(5957);

// console.log(param_1);
// console.log(param_2);
// console.log(param_3);
// console.log(param_4);
// console.log(param_5);

console.log('-----------------');

var param_1 = obj.ping(1123);
var param_2 = obj.ping(1785);
var param_3 = obj.ping(2338);
var param_4 = obj.ping(3576);
var param_5 = obj.ping(5881);

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
