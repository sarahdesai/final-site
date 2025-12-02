const gifDisplay = document.getElementById('gifDisplay');
const gif1Src = 'gifs/scroll-mukbang.gif';
const gif2Src = 'gifs/watch-mukbang.gif';
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

const gifDisplay2 = document.getElementById('gifDisplay2');
const gif3Src = 'gifs/scroll-news.gif';
const gif4Src = 'gifs/watch-news.gif';
const displayDuration2 = 900; // Time in milliseconds (1 seconds)

setTimeout(switchGif2, displayDuration2);

function switchGif2() {
    console.log("switch gif");
    // Check the current source and switch to the other
    if (gifDisplay2.src.includes(gif3Src)) {
        gifDisplay2.src = gif4Src;
    } else {
        gifDisplay2.src = gif3Src;
    }
}

const gifDisplay3 = document.getElementById('gifDisplay3');
const gif5Src = 'gifs/scroll-cats.gif';
const gif6Src = 'gifs/watch-cats.gif';
const displayDuration3 = 900; // Time in milliseconds (1 seconds)

setTimeout(switchGif3, displayDuration3);

function switchGif3() {
    console.log("switch gif");
    // Check the current source and switch to the other
    if (gifDisplay3.src.includes(gif5Src)) {
        gifDisplay3.src = gif6Src;
    } else {
        gifDisplay3.src = gif5Src;
    }
}

const gifDisplay4 = document.getElementById('gifDisplay4');
const gif7Src = 'gifs/scroll-fire.gif';
const gif8Src = 'gifs/watch-fire.gif';
const displayDuration4 = 900; // Time in milliseconds (1 seconds)

setTimeout(switchGif4, displayDuration4);

function switchGif4() {
    console.log("switch gif");
    // Check the current source and switch to the other
    if (gifDisplay4.src.includes(gif7Src)) {
        gifDisplay4.src = gif8Src;
    } else {
        gifDisplay4.src = gif7Src;
    }
}

const gifDisplay5 = document.getElementById('gifDisplay5');
const gif9Src = 'gifs/scroll-meme.gif';
const gif10Src = 'gifs/watch-meme.gif';
const displayDuration5 = 900; // Time in milliseconds (1 seconds)

setTimeout(switchGif5, displayDuration5);

function switchGif5() {
    console.log("switch gif");
    // Check the current source and switch to the other
    if (gifDisplay5.src.includes(gif9Src)) {
        gifDisplay5.src = gif10Src;
    } else {
        gifDisplay5.src = gif9Src;
    }
}

const gifDisplay6 = document.getElementById('gifDisplay6');
const gif11Src = 'gifs/scroll-news2.gif';
const gif12Src = 'gifs/watch-news2.gif';
const displayDuration6 = 900; // Time in milliseconds (1 seconds)

setTimeout(switchGif6, displayDuration6);

function switchGif6() {
    console.log("switch gif");
    // Check the current source and switch to the other
    if (gifDisplay6.src.includes(gif11Src)) {
        gifDisplay6.src = gif12Src;
    } else {
        gifDisplay6.src = gif11Src;
    }
}