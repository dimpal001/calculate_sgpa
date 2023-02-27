$(function(){
    $("#submit-btn").click(function(){
        let input = $("#input-sub").val();
        if(input == ""){
        }
        else if(input > 7){

        }
        else{
            $("#subjects").removeClass("d-none");
            $("#input-sub").css("pointer-events","none");
            for(let i = 1; i < input; i++){
                $("#subjects").clone().prependTo("#incoming-row");
                let a = "m"+i;
                $(".marks").removeClass("m0");
                $(".marks").addClass(a);
            }
            $("#submit-btn").addClass("d-none");
            $("#reset").removeClass("d-none");
        }
    });
    $("#reset").click(function(){
        $("#input-sub").css("pointer-events","auto");
        let input = $("#input-sub").val();
        for(let i = 1; i < input; i++){
            $("#subjects").remove();
        }
        $("#subjects").addClass("d-none");
        $("#input-sub").val("");
        $("#submit-btn").removeClass("d-none");
        $("#reset").addClass("d-none");
    });
});