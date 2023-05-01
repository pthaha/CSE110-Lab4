function a() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(a, 1000)