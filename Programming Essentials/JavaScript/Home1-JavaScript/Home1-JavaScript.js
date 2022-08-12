let userName=prompt("Enter your username");

while(userName===null||userName===""||!isNaN(userName)){

    userName=prompt("Enter your username");
}

let age=+prompt("Enter your age");
while(isNaN(age)||age===""||age===0||age===null){

    age=+prompt("Enter your age");
}

if(age<18){

    alert("You are not allowed to visit this website");

}
else if(age>=18&&age<=22){

    let confirmation=confirm("Are you sure you want to continue?");

    if(confirmation===true){

        alert(`Welcome, ${userName}`); //не был уверен, надо ли было вот так, как написано или же alert("Welcome, " + userName);
        //но тем не менее, работает правильно :)
    }
    else{

        alert("You are not allowed to visit this website");
    }

}
else if(age>22){

    alert(`Welcome, ${userName}`);

}