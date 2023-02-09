src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

function myFunction(){
    var textarea = document.getElementById('textbox');
    var word = 'vegan';
    var word2 = 'Vegan';
    var textVal = textarea.value;
    if(textVal.indexOf(word || word2)!=-1) {
        window.alert("WARNING: UNFORTUNATELY ALL OUR CHEESECAKES CONTAIN DAIRY. NO SPECIAL REQUESTS AVAILABLE. goodbye :/")
    }
    else{
        $("p").hide();
        $("p1").hide();
        $("p2").hide();
        $("p3").hide();
        
        $("#orderDetails").append("THANK YOU! YOUR ORDER HAS BEEN PLACED!  <br>");
        if($("#Plain").is(":checked")){
            $("#orderDetails").append("Your Order Details: " + quantityCheesecake.value + " Plain Cheesecakes. <br>");
        }
        else if($("#Cherry").is(":checked")){
            $("#orderDetails").append("Your Order Details: " + quantityCheesecake.value + " Cherry Cheesecakes. <br>");
        }
        else if($("#Chocolate").is(":checked")){
            $("#orderDetails").append("Your Order Details: " + quantityCheesecake.value + " Chocolate Cheesecakes. <br>");
        }
        $(orderDetails).append("Extra Notes: " + textVal);
        $(orderDetails).show();
    }
}

$(".dropdown-content a").click(function(){
    var monthID = docuement.getElementById("monthID")
    $(monthID).text($(this).text());
})


