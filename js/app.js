function userName(){
    var userName=prompt("Tell Us your name !!");
    if (userName !== '' || null) {
        document.getElementById("welcome").innerHTML ='Welcome '+userName;
    
    } else {
        var userName = prompt("Tell Us Your Name");
        document.getElementById("welcome").innerHTML ='Welcome '+userName+'<hr>';
    }

}
// userName();