const calendar = document.getElementById('calendar');
const yearMonth = document.getElementById('yearMonth');
const calendarBtn = document.getElementById('calendarBtn');
const prewBtn = document.getElementById('prew');
const nextBtn = document.getElementById('next');

const date = new Date();
const today = new Date();

function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];
    
    yearMonth.textContent = `${months[month]} ${year}`;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    calendar.textContent = '';
    
    
    
    for (let day= 1; day <= daysInMonth; day++) {
        const div = document.createElement('div');
        div.classList.add('day');
        div.textContent = day;
        
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){
            div.classList.add('today');
        }
        calendar.appendChild(div);
    }
    
}
function changeMonth(offset) {
    date.setMonth(date.getMonth() + offset);
    renderCalendar();
}

calendarBtn.addEventListener('click', () => {
    calendarContainer.classList.toggle('open');
    
    if (calendarContainer.classList.contains('open')) {
        renderCalendar()
    }
});

prewBtn.addEventListener('click', () => changeMonth(-1));
nextBtn.addEventListener('click', () => changeMonth(1));

