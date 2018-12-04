$("#login-submit").on("click", function(){
    event.preventDefault();

    var user = {
        username: $("login-username").val().trim(),
        password: $("login-password").val().trim()
    };
    console.log(user);

    $.get("api/" + user, function(data){
        console.log(data);
        $("caption").empty();
        if(!data){
            $("caption").html(data.name + "'s Watchlist")
        }
    })

})