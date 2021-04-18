// Rotation logic
window.addEventListener('load', ()=> {

    // References
    const hourRef = document.getElementById('hour');
    const minuteRef = document.getElementById('minute');
    const secondRef = document.getElementById('second');

    // Helper functions
    function setAngles() {

      let time = String(Date()).split(/\s+/g)[4].split(":");

      let hour  =  ((time[0]%12) + 6) * 30;
      let minute = (time[1]%60 + 30) * 6;
      let second = (time[2]%60 + 30) * 6;

      hour += 'deg';
      minute += 'deg';
      second += 'deg';

      // console.log(hour, minute, second);
      hourRef.style.transform = `rotate(${hour})`;
      minuteRef.style.transform = `rotate(${minute})`;
      secondRef.style.transform = `rotate(${second})`;

    }

    setInterval(setAngles, 500);

});
