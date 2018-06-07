const pb = []

  function setupFireBase(){
    var config = {
        apiKey: "AIzaSyA7vJ8LyMYrmbD6ODmGW76RrWAermMBXfA",
        authDomain: "heeyeon-eb1c9.firebaseapp.com",
        databaseURL: "https://heeyeon-eb1c9.firebaseio.com",
        projectId: "heeyeon-eb1c9",
        storageBucket: "",
        messagingSenderId: "762306470545"
       
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();

    var ref = firebase.database().ref("employees");
    
}

window.onload = function(){
    
    //alert("ok");
    setupFireBase();
}
    function clickBtn(){
        var id = document.getElementById("id").value;
        var lastname = document.getElementById("lastname").value;
        var firstname = document.getElementById("firstname").value;
        var birthday = document.getElementById("birthday").value;
        var position = document.getElementById("position").value;
    
        console.log(id,lastname,firstname,birthday,position)

        var list = document.getElementById('list')

        var p = new Object();
        p.id = id;
        p.lastname = lastname;
        p.firstname = firstname;
        p.birthday = birthday;
        p.position = position;
        pb.push(p);
        updateTable(p);
        function updateTable(p){

            document.getElementById
        }

        const today = new Date()
        const birth = new Date(birthday)
        const age = today.getFullYear() - birth.getFullYear()

       list.innerHTML += 
            `<tr>
                <td>${id}</td>
                <td>${lastname}</td>
                <td>${firstname}</td>
                <td>${birthday}</td>
                <td>${age}</td>
                <td>${position}</td>
                <td class="del" onclick="deleteRow(this)">delete</td>
            </tr>`

 
        firebase.database().ref().child("employees").push().set(
            {
                id:id,
                lastname:lastname,
                firstname:firstname,
                birthday:birthday,
                position:position
         
            }
            
        );

    };
    function deleteRow(r){
        var i = r.parentNode.rowIndex;
        document.getElementById("list").deleteRow(i);}
