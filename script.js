let intervalId;
let seconds = 0;
let running = false;

const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const stopwatchDisplay = document.getElementById('stopwatch');

// Function to format the time as HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to update the stopwatch display
function updateDisplay() {
    stopwatchDisplay.textContent = formatTime(seconds);
}

// Start or stop the stopwatch
startStopButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        startStopButton.textContent = 'Stop';
        
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    } else {
        running = false;
        startStopButton.textContent = 'Start';
        clearInterval(intervalId);
    }
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
    running = false;
    clearInterval(intervalId);
    seconds = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
});

// Initialize the display
updateDisplay();
