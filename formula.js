$(function(){
    $("#submit-btn").click(function(){
        let input = $("#input-sub").val();
        if(input == ""){
        }
        else if(input > 7){

        }
        else{
            $("#submit-btn").addClass("d-none");
            $("#reset").removeClass("d-none");
            $("#result-section").removeClass("d-none");
            $("#subjects").removeClass("d-none");
            $("#input-sub").css("pointer-events","none");
            for(let i = 1; i < input; i++){
                $("#subjects").clone().prependTo("#incoming-row");
            }
        }
    });

    $("#reset").click(function(){
        $(".marks").val("");
        $(".credit").val("");
        $("#result-section").addClass("d-none");
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

    $("#calculate").click(function(){
        let input = $("#input-sub").val();
        let sum;
        $(".marks input[type=number]").each(function(){
            alert("this.value");
        });
    })
});