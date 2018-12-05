$("#signupbtn").on("click", function(){

    var newUser = {
        username: $("#username").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim()
    };

    //sends request to create a new user in the database
    $.post("api/new", newUser)
        .then(function(data){
            console.log(data);
        })
})