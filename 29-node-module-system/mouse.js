function Mouse(color) {
    this.color = color;
    this.isDead = false;
}

Mouse.prototype.die = function() {
    this.isDead = true;
}
module.exports = Mouse;