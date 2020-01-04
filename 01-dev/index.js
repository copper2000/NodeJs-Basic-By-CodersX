function Cat(name, weight) {
    this.name = name;
    this.weight = weight;
}

var tom = new Cat("Tom", 2);
Cat.prototype.eat = (food) => {
    return "I'm eating..." + food;
}

tom.eat("chicken");
console.log(tom);
