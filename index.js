var number = document.getElementById("increases").value;
var newWindow = window.open("", "_parent");
newWindow.document.write("<form>");
for(i = 1; i <= number; i++) {
    newWindow.document.write('<input type="text" id="box' + i + '" />');
}
newWindow.document.write("</form>");
