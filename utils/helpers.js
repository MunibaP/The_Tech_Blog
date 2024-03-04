module.exports = {
    format_date: (data) => {
        const date = new Date(date);
        const formatDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const formatTime = `${hours}:${minutes}`;
    
        return `${formatDate} at ${formatTime}`;
    }, 
};