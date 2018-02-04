class Snowflake {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.size = random(5);
        this.speed = random(2,5);
        this.sway = random(3, 10);
        this.offset = random(1000);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);

        this.pos.y += this.speed;
        this.pos.x += ((noise(this.offset) * 2) - 1) * this.sway;
        this.offset += 0.01;
        this.draw();
    }

    draw() {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}