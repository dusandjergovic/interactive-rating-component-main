$(document).ready(function() {


    $("li").click(function() {
        $(this).css({
            'background-color': 'hsl(217, 12%, 63%)'
        })
       let userSelection = $(this).attr('data-number');
       
       $("#btn").click(function () {
            $("div.star, div.heading, div.text, div.list, #btn").hide();
            $("#thankYou").show();
            let para = $('<p>');
            para.text(`You selected ${userSelection} out of 5`);
            $("#container").append(para)
        })
    })

})