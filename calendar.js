const calendarElement = document.getElementById('calendar');

function renderCalendar() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let html = '<table>';

    // 테이블 헤더
    html += '<thead><tr>';
    html += '<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>';
    html += '</tr></thead>';

    // 테이블 바디
    html += '<tbody><tr>';

    let dayCount = 1;
    // 첫째 주의 공백 채우기
    for (let i = 0; i < firstDayOfMonth; i++) {
        html += '<td></td>';
    }

    // 날짜 채우기
    for (let i = firstDayOfMonth; i < 7; i++) {
        html += `<td>${dayCount}</td>`;
        dayCount++;
    }
    html += '</tr>';

    // 나머지 주 채우기
    while (dayCount <= daysInMonth) {
        html += '<tr>';
        for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
            html += `<td>${dayCount}</td>`;
            dayCount++;
        }
        html += '</tr>';
    }

    html += '</tbody></table>';

    calendarElement.innerHTML = html;
}

renderCalendar();

