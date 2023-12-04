const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 3) + 20;
        this.bottom = (Math.random() * canvas.height / 3) + 20;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'hsla(' + hue + ', 100%, 50%,1)';
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);  // Corregir aquí
    }

    update() {
        this.x -= gamespeed;
        this.draw();
    }
}
function handlesObstacles() {
    //cambiar distancai de obstaculos
    if (frame % 50 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}