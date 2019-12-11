// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyA6eWGlbu_lb7z8zMYHlVd_y-xs1XBIdps',
    authDomain: 'jvsports-a7dad.firebaseapp.com',
    projectId: 'jvsports-a7dad'
});

var db = firebase.firestore();

function ingresarDatos() {

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono= document.getElementById("telefono").value;


    db.collection("usuarios").add({
        nombre: nombre,
        telefono: telefono,
        edad: edad
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

