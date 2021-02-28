function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const buttonDays = document.getElementById('daysBtn');
    const buttonHours = document.getElementById('hoursBtn');
    const buttonMinutes = document.getElementById('minutesBtn');
    const buttonSeconds = document.getElementById('secondsBtn');


    buttonDays.addEventListener('click', function () {
        let dni = days.value;
        hours.value = dni * 24;
        minutes.value = dni * 1440;
        seconds.value = dni * 86400;
    });



    buttonHours.addEventListener('click', function () {
        let chasove = hours.value;
        days.value = chasove / 24;
        minutes.value = chasove * 60;
        seconds.value = chasove * 60 * 60;
    });


    buttonMinutes.addEventListener('click', function () {
        let minuti = minutes.value;
        days.value = minuti / 60 / 24;
        hours.value = minuti / 60;
        seconds.value = minuti * 60;
    });


    buttonSeconds.addEventListener('click', function () {
        let sekundi = seconds.value;
        days.value = sekundi / 60 / 60 / 24;
        hours.value = sekundi / 60 / 60;
        minutes.value = sekundi / 60;
    });


}