var particles = [];
var averageSpeed;
var orbitPoints = [];

function setup() {
	createCanvas(400, 400);
	averageSpeed = 0;
	for (var i = 0; i < 1000; i++) {
		particles.push(new Particle(random(width), random(height)));
	}
}

function draw() {
	// colorMode(RGB);
	// background(map(averageSpeed, 0, 10, 0, 255), 100, 5);
	background(0);
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		// averageSpeed += particles[i].vel.mag();
	}
	// averageSpeed /= particles.length;
	// console.log(this.frameRate());
	if (frameRate() >= 70)
		particles.push(new Particle(random(width), random(height)));
	else if (particles.length > 0)
		particles.splice(0, 1);
	// console.log(particles.length);
}

function mouseClicked() {
	createOrbitPoint();
}

function createOrbitPoint() {
	orbitPoints.push(createVector(mouseX, mouseY));
}