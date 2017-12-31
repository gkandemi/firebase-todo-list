$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyCPhE4ibN8RXy4MrfXnXUQeG5PUM0zqNfI",
        authDomain: "fir-todo-list-tutorial.firebaseapp.com",
        databaseURL: "https://fir-todo-list-tutorial.firebaseio.com",
        projectId: "fir-todo-list-tutorial",
        storageBucket: "fir-todo-list-tutorial.appspot.com",
        messagingSenderId: "535305407723"
    };

    firebase.initializeApp(config);


    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "index.html";
                    })

            }).catch(function(error){
                alert(error.message);
        })

    })


})