function askName() {
    var name = prompt("What is your name");
    document.getElementById("myName").innerText = name;
}
function showTime() {
    const clock = document.getElementById('myClock');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    
    const dayOfWeek = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const time = `${dayOfWeek}, Saat ${hours}:${minutes}:${seconds}`;
    clock.innerText = time;
}

askName();
showTime();