function increasesSubmitted(){
    var number = document.getElementById("increases").value;
    //var newWindow = window.open("", "_parent");
    document.write("<form>");
    for(i = 1; i <= number; i++) {
        document.write('<input type="text" id="box' + i + '" />');
    }
    document.write("</form>");
}

$("#increases").on("input change", function() {
    // alert($(this).val()); 
    console.log($(this).val());
    $("#qlist").append("<li>&nbsp;</li>");
    $("#qlist").append("<li><input type='text' name='name[]' placeholder='Name' /></li>");
});

