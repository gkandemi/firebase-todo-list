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

    var current_user = "";

    firebase.auth().onAuthStateChanged(function(user){

        if(user){

            current_user = user.uid;

            $("#logout").click(function(){

                firebase.auth().signOut()
                    .then(function(){
                        window.location.href = "login.html";
                    })
            })


            $(".sendToFireBase").click(function(){

                var description = $("#description").val();

                firebase.database().ref().child("users").child(current_user).child("todos").push(
                    {
                        description : description,
                        completed : false
                    }
                );

                $("#description").val('');


            })


        }

    })

})