function displayLogin () {
    
    event.preventDefault();

    var user = {
        username: $("#username").val().trim(),
        password: $("#password").val().trim()
    };
    console.log(user);

    $.get("api/" + user, function(data){
        console.log(data);
        $("caption").empty();
        if(!data){
            $("caption").html(data.name + "'s Watchlist");
        } else {
            alert("Invalid username or password");
        }
    })

}
