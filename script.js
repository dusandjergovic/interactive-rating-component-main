$(document).ready(function() {

    let userSelection = [];

    $("li").click(function() {
        $(this).css({
            'background-color': 'hsl(217, 12%, 63%)'
        })

       userSelection.push($(this).attr('data-number'))

       if(userSelection.length < 2) {
        $("#btn").click(function () {
            $("div.star, div.heading, div.text, div.list, .attribution, #btn").hide();
            $("#thankYou").show();
            $("#ratedVote").show();
            let rate = $(".rate")
            rate.text(`You selected ${userSelection.slice(0, 1)} out of 5`);
            $("#container").css({
                'display': 'grid',
                'place-items': 'center',
                'gap': '1rem'
            })
        })
       }
       
       
    })

})