
export const  formattedDateTime =()=> {
    let date = new Date();
    return {
        date: date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        time: date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    }
};

