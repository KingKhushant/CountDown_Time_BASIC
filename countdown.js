function countDown(){
    setInterval(function(){
        let dest = new Date("march 4, 2024, 00:22:00").getTime(); //use to get date of destination
        let cur =new Date().getTime(); // use to get current system date
        let diff = dest - cur;// we need to use 16 hr for this
//to calculate the total day hr etc.
        let day = Math.floor (diff / (1000*60*60*24));
        console.log(day);

        let hr = Math.floor(diff % (1000*60*60*24)/(1000*60*60));
        console.log(hr);
        let min = Math.floor(diff % (1000*60*60)/(1000*60));
        console.log(min);
        let sec = Math.floor(diff % (1000*60)/(1000));
        console.log(sec);
//to show this on output screen use the following
        document.getElementById("day").innerHTML= day + "<br/>" + "Day";
        document.getElementById("hr").innerHTML= hr + "<br/>" + "hr";
        document.getElementById("min").innerHTML= min + "<br/>" + "min";
        document.getElementById("sec").innerHTML= sec + "<br/>" + "sec";
    },1000)
}
countDown();

//by this project we can understand 
//1) to display the output on screen
//2) use of MATHS.FLOOR 
//3) use of NEW DATE() function 
//4) 





















// const startingMinutes = 10;
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function  updateCountdown(){
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds; 

//     countdownEl.innerHTML = '${minutes}: ${seconds}';
//     time--;
// }