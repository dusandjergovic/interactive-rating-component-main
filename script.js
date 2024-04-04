$(document).ready(function() {

    let userSelection = [];
    let selectedRate = null;

    $("li").click(function() {
        
        if(selectedRate !== null) {
            selectedRate.removeClass('clickedRate');
        }
        $(this).addClass('clickedRate');
        selectedRate = $(this);

       userSelection.push($(this).attr('data-number'))

       if(userSelection.length < 2) {
        $("#btn").click(function () {
            $("div.star, div.heading, div.text, div.list, .attribution, #btn").hide();
            $("#thankYou").show();
            $("#ratedVote").show();
            let rate = $(".rate")
            rate.text(`You selected ${userSelection.slice(-1)} out of 5`);
            $("#container").css({
                'display': 'grid',
                'place-items': 'center',
                'gap': '1rem'
            })
        })
       }
       
       
    })

})