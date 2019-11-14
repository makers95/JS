function DateSelector(selYear, selMonth, selDay) {//�w�q�禡
this.selYear = selYear;
this.selMonth = selMonth;
this.selDay = selDay;
this.selYear.Group = this;
this.selMonth.Group = this;
// ���~���B����U�Կ��s�W�B�zonchange�ƥ󪺨禡
if (window.document.all != null) // IE
{
this.selYear.attachEvent("onchange", DateSelector.Onchange);
this.selMonth.attachEvent("onchange", DateSelector.Onchange);
}
else // Firefox
{
this.selYear.addEventListener("change", DateSelector.Onchange, false);
this.selMonth.addEventListener("change", DateSelector.Onchange, false);
}
if (arguments.length == 4) // �p�G�ǤJ�޼ƭӼƬ�4,�̫�@�Ӥ޼ƥ�����Date����
this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate());
else if (arguments.length == 6) // �p�G�ǤJ�޼ƭӼƬ�6,�̫�T�Ӥ޼ƥ�������l���~���ƭ�
this.InitSelector(arguments[3], arguments[4], arguments[5]);
else // �w�]�ϥη�e���
{
var dt = new Date();
this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
}
}
// �W�[�@�ӳ̤p�~�����ݩ�--�̦Ѧ~��
DateSelector.prototype.MinYear = 1960;
// �W�[�@�ӳ̤j�~�����ݩ�--�̷s�~��,�Y��e�ɴ�getFullYear()
DateSelector.prototype.MaxYear = (new Date()).getFullYear();
// ��l�Ʀ~��
DateSelector.prototype.InitYearSelect = function () {
// �j��s�WOPION������~��select����
for (var i = this.MaxYear; i >= this.MinYear; i--) {
// �s�ؤ@��OPTION����
var op = window.document.createElement("OPTION");
// �]�wOPTION���󪺭�
op.value = i;
// �]�wOPTION���󪺤��e
op.innerHTML = i;
// �s�W��~��select����
this.selYear.appendChild(op);
}
}
// ��l�Ƥ��
DateSelector.prototype.InitMonthSelect = function () {
// �j��s�WOPION��������select����
for (var i = 1; i < 13; i++) {
// �s�ؤ@��OPTION����
var op = window.document.createElement("OPTION");
// �]�wOPTION���󪺭�
op.value = i;
// �]�wOPTION���󪺤��e
op.innerHTML = i;
// �s�W����select����
this.selMonth.appendChild(op);
}
}
// �ھڦ~���P��������몺�Ѽ�
DateSelector.DaysInMonth = function (year, month) {
var date = new Date(year, month, 0);
return date.getDate();
}
// ��l�ƤѼ�
DateSelector.prototype.InitDaySelect = function () {
// �ϥ�parseInt�禡�����e���~���M���
var year = parseInt(this.selYear.value);
var month = parseInt(this.selMonth.value);
// �����몺�Ѽ�
var daysInMonth = DateSelector.DaysInMonth(year, month);
// �M�ŭ즳���ﶵ
this.selDay.options.length = 0;
// �j��s�WOPION������Ѽ�select����
for (var i = 1; i <= daysInMonth; i++) {
// �s�ؤ@��OPTION����
var op = window.document.createElement("OPTION");
// �]�wOPTION���󪺭�
op.value = i;
// �]�wOPTION���󪺤��e
op.innerHTML = i;
// �s�W��Ѽ�select����
this.selDay.appendChild(op);
}
}
// �B�z�~���M���onchange�ƥ󪺤�k,������ƥ�ӷ�����(�YselYear��selMonth)
// �éI�s����Group����(�YDateSelector�Ҷ�,�Ш��غc�禡)���Ѫ�InitDaySelect��k���s��l�ƤѼ�
// �޼�e��event����
DateSelector.Onchange = function (e) {
var selector = window.document.all != null ? e.srcElement : e.target;
selector.Group.InitDaySelect();
}
// �ھڤ޼ƪ�l�ƤU�Կ��ﶵ
DateSelector.prototype.InitSelector = function (year, month, day) {
// �ѩ�~���O�i�H�I�s�o�Ӥ�k,�]���ڭ̦b�o�̤]�n�NselYear�MselMonth���ﶵ�M�ű�
// �t�~�]��InitDaySelect��k�w�g���M�ŤѼƤU�Կ��,�]���o�̴N���έ��Ƥu�@�F
this.selYear.options.length = 0;
this.selMonth.options.length = 0;
// ��l�Ʀ~�B��
this.InitYearSelect();
this.InitMonthSelect();
// �]�w�~�B���l��
this.selYear.selectedIndex = this.MaxYear - year;
this.selMonth.selectedIndex = month - 1;
// ��l�ƤѼ�
this.InitDaySelect();
// �]�w�Ѽƪ�l��
this.selDay.selectedIndex = day - 1;
} 