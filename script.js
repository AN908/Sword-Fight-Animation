var cnv = document.getElementById("Sword-Fight");
var ctx = cnv.getContext("2d");
cnv.height = 600;
cnv.width = 800;

let cloud1X = 275;
let cloud2X = 500;
let cloud3X = 150;

let cloud1y = 60;
let cloud2y = 40;
let cloud3y = 20;

let stickManArmX1 = 250;
let stickManArmX2 = 180;

let stickManArmY1 = 330;
let stickManArmY2 = 350;

let stickMan2ArmX1 = 540;
let stickMan2ArmX2 = 480;

let stickMan2ArmY1 = 260;
let stickMan2ArmY2 = 340;

let spearX = 460;
let swordY = 300;

let birdX = 100;
let birdY = 50;

let frame = 0;

requestAnimationFrame(draw);

function draw() {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, 800, 600);

  //Mountain
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(550, 450);
  ctx.lineTo(750, 450);
  ctx.lineTo(650, 300);
  ctx.lineTo(550, 450);
  ctx.fill();

  //Snow
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(615, 350);
  ctx.lineTo(685, 350);
  ctx.lineTo(650, 300);
  ctx.lineTo(615, 350);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.fillRect(0, 400, 800, 600);

  //Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(100, 50, 30, 0, 2 * Math.PI);
  ctx.fill();

  //clouds

  let cloud = document.getElementById("clouds");
  ctx.drawImage(cloud, cloud1X, cloud1y, 90, 80);
  ctx.drawImage(cloud, cloud2X, cloud2y, 90, 80);
  ctx.drawImage(cloud, cloud3X, cloud3y, 90, 80);

  let flyingBirds = document.getElementById("Bird");
  ctx.drawImage(flyingBirds, birdX, birdY, 50, 50);

  //Stick man 1

  //Torso
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(200, 380);
  ctx.stroke();

  //Arms
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(stickManArmX1, stickManArmY1);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(stickManArmX2, stickManArmY2);
  ctx.stroke();

  //Head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(200, 280, 20, 0, 2 * Math.PI);
  ctx.stroke();

  //Legs
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(200, 380);
  ctx.lineTo(220, 420);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(200, 380);
  ctx.lineTo(180, 420);
  ctx.stroke();

  //Sword
  let sword = document.getElementById("Weapon1");
  ctx.drawImage(sword, 240, swordY, 50, 50);

  //Stickman  2
  //Torso
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(500, 300);
  ctx.lineTo(500, 380);
  ctx.stroke();

  //Arms
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(500, 300);
  ctx.lineTo(stickMan2ArmX1, stickMan2ArmY1);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(500, 300);
  ctx.lineTo(stickMan2ArmX2, stickMan2ArmY2);
  ctx.stroke();

  //Head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(500, 280, 20, 0, 2 * Math.PI);
  ctx.stroke();

  //Legs
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(500, 380);
  ctx.lineTo(520, 420);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(500, 380);
  ctx.lineTo(480, 420);
  ctx.stroke();

  //spear
  let spear1 = document.getElementById("Weapon2");
  ctx.drawImage(spear1, spearX, 210, 120, 100);

  //Title
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Sword Fight", 20, 20);

  //Animation

  cloud1X = cloud1X + 1;
  cloud2X = cloud2X + 0.5;
  cloud3X += 1.25;
  birdX += 1.5;

  stickMan2ArmX1 -= 4;
  stickManArmY1 -= 2.2;
  spearX -= 4.5;
  swordY -= 2.2;

  //Cloud reappears on left side

  if (cloud1X >= 900) {
    cloud1X = -100;
    cloud1y = Math.random() * 150;
  }

  if (cloud2X >= 900) {
    cloud2X = -100;
    cloud2y = Math.random() * 150;
  }

  if (cloud3X >= 900) {
    cloud3X = -100;
    cloud3y = Math.random() * 200;
  }

  //Stickmen
  if (stickMan2ArmX1 <= 440) {
    stickMan2ArmX1 = 540;
  }

  // if (spearX <= 270) {
  //   spearX = 460;
  // }

  if (stickManArmY1 <= 250) {
    stickManArmY1 = 330;
  }

  if (swordY <= 220) {
    swordY = 300;
  }

  if (birdX >= 900) {
    birdX = -100;
    birdY = Math.floor(Math.random() * 200);
  }

  frame++;

  if (frame >= 25 && frame < 30) {
    stickMan2ArmX1 = 540;
  } else if (frame <= 50) {
    spearX = 460;
  } else if (frame >= 100) {
    spearX = 280;
  } else if (frame == 120) {
    frame = 0;
  }

  requestAnimationFrame(draw);
}
