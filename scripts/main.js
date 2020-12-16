function closeWindow() { window.close(); }
function getStringDate(dt, format) {
    var str = format;
    str = str.replace('dd', dt.getDate().toString().padLeft(2, '0'));
    str = str.replace('MM', (dt.getMonth() + 1).toString().padLeft(2, '0'));
    str = str.replace('yyyy', dt.getFullYear().toString());
    str = str.replace('HH', dt.getHours().toString().padLeft(2, '0'));
    str = str.replace('mm', dt.getMinutes().toString().padLeft(2, '0'));
    str = str.replace('ss', dt.getSeconds().toString().padLeft(2, '0'));
    return str;
}
function getStringFromDateUtc(dt, format) {
    dt.setMinutes(dt.getMinutes() - new Date().getTimezoneOffset());
    return getStringDate(dt, format);
}

function setSpanDate(id) {
    var dt = new Date($(id).attr('utcdate'));
    var format = $(id).attr('formatdate');
    var str = getStringFromDateUtc(dt, format);
    $(id).html(str);
}

