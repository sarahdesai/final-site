const gifDisplay = document.getElementById('gifDisplay');
const gif1Src = 'gifs/scroll.gif';
const gif2Src = 'gifs/watch.gif';
const displayDuration = 900; // Time in milliseconds (1 seconds)

setTimeout(switchGif, displayDuration);

function switchGif() {
    console.log("switch gif");
    // Check the current source and switch to the other
    if (gifDisplay.src.includes(gif1Src)) {
        gifDisplay.src = gif2Src;
    } else {
        gifDisplay.src = gif1Src;
    }
}
