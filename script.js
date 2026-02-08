var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

// Background music functionality
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
let isMusicPlaying = false;

// Set initial volume to a comfortable level
backgroundMusic.volume = 0.5;

// Unmute and try to autoplay with sound
backgroundMusic.muted = false;

// Try to autoplay music when page loads
window.addEventListener('load', () => {
  // First try with sound
  backgroundMusic.muted = false;
  backgroundMusic.play()
    .then(() => {
      musicToggle.textContent = "🔊";
      isMusicPlaying = true;
    })
    .catch(e => {
      // Browser blocked autoplay with sound, try muted
      console.log("Autoplay with sound blocked, trying muted:", e);
      backgroundMusic.muted = true;
      backgroundMusic.play()
        .then(() => {
          // Playing muted, will unmute on first interaction
          musicToggle.textContent = "🔇";
          isMusicPlaying = true;
        })
        .catch(err => {
          console.log("All autoplay attempts blocked:", err);
          musicToggle.textContent = "🔇";
        });
    });
});

// Function to toggle music
function toggleMusic() {
  if (isMusicPlaying) {
    backgroundMusic.pause();
    musicToggle.textContent = "🔇";
    isMusicPlaying = false;
  } else {
    backgroundMusic.muted = false;
    backgroundMusic.play().catch(e => console.log("Audio play failed:", e));
    musicToggle.textContent = "🔊";
    isMusicPlaying = true;
  }
}

// Add click event to music toggle button
musicToggle.addEventListener("click", toggleMusic);

// Fallback: Unmute and ensure music plays on first user interaction
let musicStarted = false;
document.body.addEventListener("click", (e) => {
  // Don't trigger if clicking the music toggle button
  if (e.target === musicToggle) return;
  
  if (!musicStarted) {
    musicStarted = true;
    
    // If music is playing but muted, unmute it
    if (backgroundMusic.muted && isMusicPlaying) {
      backgroundMusic.muted = false;
      musicToggle.textContent = "🔊";
    }
    // If music hasn't started at all, start it
    else if (!isMusicPlaying) {
      backgroundMusic.muted = false;
      backgroundMusic.play()
        .then(() => {
          musicToggle.textContent = "🔊";
          isMusicPlaying = true;
        })
        .catch(e => console.log("Audio play failed:", e));
    }
  }
}, { once: true });

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "I Love You! 💕";
    button.style.backgroundColor = "#ff69b4";
    button.style.borderColor = "#ff69b4";
    
    // Show big I Love You text
    showILoveYouText();
    
    // Create hearts animation
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createHeart();
      }, i * 100);
    }
    
    // Launch fireworks/firecrackers
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        launchFirework();
      }, i * 400);
    }
    
    // Bloom flowers
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        bloomFlower();
      }, i * 300);
    }
  }
});

// Function to show big "I Love You" text
function showILoveYouText() {
  const loveText = document.createElement('div');
  loveText.id = 'bigLoveText';
  loveText.innerHTML = 'I LOVE YOU';
  document.body.appendChild(loveText);
  
  // Trigger animation after a brief delay
  setTimeout(() => {
    loveText.classList.add('show');
  }, 100);
}

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '❤';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.style.color = `hsl(${Math.random() * 60 + 300}, 100%, ${Math.random() * 30 + 50}%)`;
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '999';
  heart.style.transition = 'all 3s ease-out';
  document.body.appendChild(heart);
  
  // Animate heart upward
  setTimeout(() => {
    heart.style.top = '-100px';
    heart.style.opacity = '0';
    heart.style.transform = `translateX(${(Math.random() - 0.5) * 200}px)`;
  }, 50);
  
  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 3500);
}

// Function to create firework explosions
function launchFirework() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * (window.innerHeight * 0.6);
  const colors = ['#ff0066', '#ff6600', '#ffff00', '#00ff00', '#0066ff', '#9900ff', '#ff0099', '#00ffff'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // Create explosion particles
  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.textContent = '✨';
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.fontSize = '20px';
    particle.style.color = color;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    particle.style.textShadow = `0 0 10px ${color}`;
    document.body.appendChild(particle);
    
    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 100 + Math.random() * 100;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let posX = x;
    let posY = y;
    let opacity = 1;
    const startTime = Date.now();
    
    function animateParticle() {
      const elapsed = (Date.now() - startTime) / 1000;
      posX += vx * 0.016;
      posY += vy * 0.016 + (elapsed * 100);
      opacity = Math.max(0, 1 - elapsed);
      
      particle.style.left = posX + 'px';
      particle.style.top = posY + 'px';
      particle.style.opacity = opacity;
      
      if (opacity > 0 && elapsed < 2) {
        requestAnimationFrame(animateParticle);
      } else {
        particle.remove();
      }
    }
    animateParticle();
  }
}

// Function to bloom flowers
function bloomFlower() {
  const flowerEmojis = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🏵️', '🌼'];
  const flower = document.createElement('div');
  flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
  flower.style.position = 'fixed';
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flower.style.bottom = '-50px';
  flower.style.fontSize = '0px';
  flower.style.pointerEvents = 'none';
  flower.style.zIndex = '998';
  flower.style.transition = 'all 10s ease-out';
  flower.style.transformOrigin = 'bottom center';
  document.body.appendChild(flower);
  
  // Bloom animation
  setTimeout(() => {
    flower.style.bottom = (Math.random() * 100 + 50) + 'px';
    flower.style.fontSize = (Math.random() * 30 + 30) + 'px';
    flower.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(1)`;
  }, 50);
  
  // Fade out and remove
  setTimeout(() => {
    flower.style.opacity = '0';
    flower.style.transform = `rotate(${Math.random() * 40 - 20}deg) scale(1.5)`;
  }, 8000);
  
  setTimeout(() => {
    flower.remove();
  }, 10000);
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am...🥹", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am...🥹", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years...✨"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years...✨", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years...✨"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years...✨", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you...💕🫂", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you...💕🫂", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely...🙈", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely...🙈", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you...😍"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you...😍", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you...😍"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you...😍", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love You So Much Dear Love❤️, more than", "all the time and space in the universe can contain"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I love You So  Much Dear Love❤️, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and I can't wait to spend all the time in 🥺", "the world to share that love with you! 🤩"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("and I can't wait to spend all the time in the world to share that love with you!🥺🤩", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
