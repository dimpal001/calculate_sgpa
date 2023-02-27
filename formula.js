$(function(){
    $("#submit-btn").click(function(){
        let input = $("#input-sub").val();
        if(input == ""){
        }
        else{
            alert("hi");
            $('#subjects').prepend("<div class='col-6'></div>");
        }
    });
});