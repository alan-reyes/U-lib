function greeting() {
    var today = new Date();
    var hrs = today.getHours();
    document.writeln("<center>");
    if ((hrs >= 6) && (hrs <= 18)) {
        var aux1 = Math.floor(hrs / 10);
        var aux2 = Math.floor(hrs % 10);
        var src = "<img src='daypix/day" + aux1 + aux2 + "00.gif'>";
        document.writeln(src);
    } else {
        document.write("<img src='daypix/night1.gif'>");
        document.writeln("<br/>");
        document.write("<h1>Good");
    }
    if (hrs < 6) {
        document.write("(Early) Morning");
    } else if (hrs < 12) {
        document.write("Morning");
    } else if (hrs <= 18) {
        document.write("Afternoon");
    } else {
        document.write("Evening");
    }
    document.writeln("!</h1>");
    document.write("Entraste a esta página en: ");
    var dayStr = today.toLocaleString();
    i = dayStr.indexOf(' ');
    n = dayStr.length;
    document.write(dayStr.substring(i + 1, n));
    document.writeln("</center>");
}

function montharr (m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
    this[0] = m0; this[1] = m1; this[2] = m2; this[3] = m3;
    this[4] = m4; this[5] = m5;
    this[6] = m6; this[7] = m7; this[8] = m8; this[9] = m9;
    this[10] = m10; this[11] = m11;
}

function calendar () {
    var monthNames = "EneFebMarAbrMayJunJulAgoSepOctNovDic";
    var today = new Date();
    var thisDay = today.getDate();
    var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var year = today.getFullYear();
    // do the classic leap year calculation
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        monthDays[1] = 29;
    }
    // figure out how many days this month will have
    var nDays = monthDays[today.getMonth()];
    // and go back to the first day of the month
    var firstDay = today;
    firstDay.setDate(1);
    // and figure out which day of the week it hits
    var startDay = firstDay.getDay();
    document.writeln("<center>");
    document.write("<table border='1'>");
    document.write("<tr><th colspan = '7'>");
    document.write(monthNames.substring(today.getMonth() * 3, (today.getMonth() + 1) * 3));
    document.write(". ");
    document.write(year + "</th>");
    document.write("<tr><th>Dom<th>Lun<th>Mar<th>Mié<th>Jue<th>Vie<th>Sáb");
    // now write the blanks at the beggining of the calendar
    document.write("<tr>");
    column = 0;
    for (i = 0; i < startDay; i++) {
        document.write("<td>");
        column++;
    }
    for (i = 1; i <= nDays; i++) {
        document.write("<td>");
        if (i == thisDay) {
            document.write("<font color='#FF0000'>");
        }
        document.write(i);
        if (i == thisDay) {
            document.write("</font>");
        }
        column++;
        if (column == 7) {
            document.write("<tr>"); //start a new row
            column = 0;
        }
    }
    document.write("</table>");
    document.writeln("</center>");
}

greeting();
document.write("<hr>");
calendar();
document.write("<hr>");