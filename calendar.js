const calendarElement = document.getElementById('calendar');

function renderCalendar() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let html = '<table>';

    // 테이블 헤더
    html += `<thead><tr><th colspan="7">${currentMonth + 1}월</th></tr><tr>`;
    html += '<th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th>';
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
        if (i === 0) {
            html += `<td class="sunday">${dayCount}</td>`;
        } else if (i === 6) {
            html += `<td class="saturday">${dayCount}</td>`;
        } else {
            html += `<td>${dayCount}</td>`;
        }
        dayCount++;
    }
    html += '</tr>';

    // 나머지 주 채우기
    while (dayCount <= daysInMonth) {
        html += '<tr>';
        for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
            if (i === 0) {
                html += `<td class="sunday">${dayCount}</td>`;
            } else if (i === 6) {
                html += `<td class="saturday">${dayCount}</td>`;
            } else {
                html += `<td>${dayCount}</td>`;
            }
            dayCount++;
        }
        html += '</tr>';
    }

    html += '</tbody></table>';

    calendarElement.innerHTML = html;
}

renderCalendar();
