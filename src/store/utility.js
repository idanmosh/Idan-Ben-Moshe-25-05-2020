export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    };
}

export const formatDate = (date, type) => {
    const newDate = new Date(date);
    
    let dayOfMonth = newDate.getDate();
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

    const dayOfWeek = newDate.getDay();
    let dayName = '';

    switch (dayOfWeek) {
        case 0: dayName = 'Sunday'; break;
        case 1: dayName = 'Monday'; break;
        case 2: dayName = 'Tuesday'; break;
        case 3: dayName = 'Wednesday'; break;
        case 4: dayName = 'Thursday'; break;
        case 5: dayName = 'Friday'; break;
        case 6: dayName = 'Saturday'; break;
        default: dayName = '';
    }

    let month = newDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;

    const year = newDate.getFullYear();

    let hour = newDate.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minute = newDate.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;

    const formatDate = `${dayOfMonth}/${month}/${year}`;
    const formatedTime = `${hour}:${minute}`;

    switch (type) {
        case 'short-with-day': return `${dayName} ${dayOfMonth}/${month}`;
        case 'short-without-day': return `${dayOfMonth}/${month}`;
        case 'date-only': return formatDate;
        case 'time-only': return formatedTime;
        default: return `${dayName} ${formatDate} ${formatedTime}`;
    }
}