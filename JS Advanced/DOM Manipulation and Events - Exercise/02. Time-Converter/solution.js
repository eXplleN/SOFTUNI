function attachEventsListeners() {

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    let buttonDays = document.getElementById('daysBtn');
    let buttonHours = document.getElementById('hoursBtn');
    let buttonMinutes = document.getElementById('minutesBtn');
    let buttonSeconds = document.getElementById('secondsBtn');

    buttonDays.addEventListener('click', function () {
        let daysValue = inputDays.value;
        inputHours.value = daysValue * 24;
        inputMinutes.value = daysValue * 1440;
        inputSeconds.value = daysValue * 86400;
    });

    buttonHours.addEventListener('click', function () {
        let haursValue = inputHours.value;
        inputDays.value = haursValue / 24;
        inputMinutes.value = haursValue * 60;
        inputSeconds.value = haursValue * 60 * 60;
    });

    buttonMinutes.addEventListener('click', function () {
        let minutesValue = inputMinutes.value;
        inputDays.value = minutesValue / 60 / 24;
        inputHours.value = minutesValue / 60;
        inputSeconds.value = minutesValue * 60;
    });

    buttonSeconds.addEventListener('click', function () {
        let secondsValue = inputSeconds.value;
        inputDays.value = secondsValue / 60 / 60 / 24;
        inputHours.value = secondsValue / 60 / 60;
        inputMinutes.value = secondsValue / 60;
    });
}