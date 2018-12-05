function signUp () {
    
    event.preventDefault();
    var newUser = {
        username: $("#username").val().trim(),
        email: $("#email").val().trim(),
        password: $("#psw").val().trim(),
        stock1: "",
        stock2: "",
        stock3: ""
    };
    console.log(newUser);

    //sends request to create a new user in the database
    $.post("/api/new", newUser)
        .then(function(data){
            console.log(data);
            $("<caption>").html(data.username + "'s Watchlist")
        })

}