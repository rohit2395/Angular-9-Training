//object literals 
function user(firstname,lastname) {
    return{
        firstname, //literal or shorhand prooperty
        lastname:lastname,
        fullname:firstname+" "+lastname
    }
}

//destructuring
const {firstname, lastname:lName /*annotate (alias to a variable)*/ , age} = user("Rohit","Rajbanshi");


//string/template literals
const message = `Hi, I'm ${firstname}.
Welcome to my training`;


