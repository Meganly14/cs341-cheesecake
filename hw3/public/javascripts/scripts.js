//Megan Ly

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

$(".dropdown-content a").on('click', function() {
    var month_button = docuement.getElementById("month_button")
    $(month_button).text($(this).text());
});

//helper function to issue post request 
function postOrder(month){
    $.post("/orders", {month: month}, function(data) {
        var orders = JSON/parseFloat(data);
        $("#cherryOrders").text(orders[0].quantity + " " + orders[0].topping);
        $("#chocolateOrders").text(orders[1].quantity + " " + orders[1].topping);
        $("#plainOrders").text(orders[2].quantity + " " + orders[2].topping);
    });
}

function switchMonth(month){
    $("dropdown").text(month);
    postOrder(month);
}

//update the mnonth to what the user selected from the dropdown menu 
$('#Jan').on('click', (function(){switchMonth("Jan");}));
$('#Feb').on('click', (function(){switchMonth("Feb");}));
$('#Mar').on('click', (function(){switchMonth("Mar");}));
$('#Apr').on('click', (function(){switchMonth("Apr");}));
$('#May').on('click', (function(){switchMonth("May");}));
$('#Jun').on('click', (function(){switchMonth("Jun");}));
$('#Jul').on('click', (function(){switchMonth("Jul");}));
$('#Aug').on('click', (function(){switchMonth("Aug");}));
$('#Sep').on('click', (function(){switchMonth("Sep");}));
$('#Oct').on('click', (function(){switchMonth("Oct");}));
$('#Nov').on('click', (function(){switchMonth("Nov");}));
$('#Dec').on('click', (function(){switchMonth("Dec");}));