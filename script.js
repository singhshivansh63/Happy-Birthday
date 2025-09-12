const btn = document.querySelector('.birthday-btn');
const cardInner = document.querySelector('.card-inner');
const typedTextEl = document.getElementById('typedText');
const dateTimeEl = document.getElementById('dateTimeDisplay');
const tithiEl = document.getElementById('tithiDisplay');
const audio = document.getElementById('birthdaySong');

// Play song and start animations
function playSong() {
    audio.play().catch(err => console.warn('Audio play blocked:', err));

    btn.disabled = true;  // Prevent multiple clicks
    btn.innerText = '🎶 Enjoy the Celebration!';
    
    showDateTime();
    startTypingEffect();

    // Keep updating date & time every second
    setInterval(showDateTime, 1000);
}

// Toggle birthday card flip
function flipCard() {
    cardInner.classList.toggle('open');
}

// Toggle music (pause/play)
function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Display date, time, and tithi
function showDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();

    dateTimeEl.innerText = `📅 Today: ${formattedDate} | ⏰ Time: ${time}`;
    tithiEl.innerText = `🔱 Tithi (Approx.): Pratipada (1st Lunar Phase)`;  // Approximation
}

// Animated typing effect
function startTypingEffect() {
    const message = "🎉 Happy Birthday Ankuuu🥳❤️! May all your dreams come true and happiness always surround you! 🥳🎂";
    let i = 0;
    typedTextEl.innerText = '';

    const interval = setInterval(() => {
        typedTextEl.innerText += message.charAt(i);
        i++;
        if (i >= message.length) clearInterval(interval);
    }, 50);
}
