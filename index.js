function increasesSubmitted(){
    var number = document.getElementById("increases").value;
    //var newWindow = window.open("", "_parent");
    document.write("<form>");
    for(i = 1; i <= number; i++) {
        document.write('<input type="text" id="box' + i + '" />');
    }
    document.write("</form>");
}
