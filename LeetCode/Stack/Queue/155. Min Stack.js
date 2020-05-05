var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    let prevMin = this.stack.length === 0? x : this.stack[this.stack.length-1].min
    this.stack.push({val: x, min: Math.min(prevMin, x)});
};

MinStack.prototype.pop = function() {
    return this.stack.pop(); 
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;

};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length -1].min;
};


var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
var param_3 = obj.getMin();
obj.pop();
var param_5 = obj.top();
var param_6 = obj.getMin();


console.log(param_3);
console.log(param_5);
console.log(param_6);