const deviceScreen = document.getElementById('device-screen');

function slideRight() {
    const onePage = deviceScreen.clientWidth;
    deviceScreen.scrollTo({ left: deviceScreen.scrollLeft + onePage, behavior: 'smooth' });
}

function slideLeft() {
    const onePage = deviceScreen.clientWidth;
    deviceScreen.scrollTo({ left: deviceScreen.scrollLeft - onePage, behavior: 'smooth' });
}