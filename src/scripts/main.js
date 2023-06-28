AOS.init();

const eventDate = new Date("Sep 10, 2023 20:00:00");
const eventTimeStamp = eventDate.getTime();

const contHours = setInterval(function() {
    const now = new Date();
    const atualTimeStamp = now.getTime();

    const forEvent = eventTimeStamp - atualTimeStamp;

    const daysForEvent = Math.floor(forEvent / (1000 * 60 * 60 * 24));
    const hoursForEvent = Math.floor((forEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesForEvent = Math.floor((forEvent % (1000 * 60 * 60)) / (1000 * 60))
    const secondsForEvent = Math.floor((forEvent % (1000 * 60) / 1000))

    document.getElementById('cont').innerHTML = `${daysForEvent}d ${hoursForEvent}h ${minutesForEvent}m ${secondsForEvent}s`

    if (forEvent < 0){
        clearInterval(contHours);
        document.getElementById('cont').innerHTML = `Evento Expirado.`
    }
}, 1000);