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


    firebase.auth().onAuthStateChanged(function(user){

        if(user){

            $("#logout").click(function(){

                firebase.auth().signOut()
                    .then(function(){
                        window.location.href = "login.html";
                    })
            })


        }

    })

})