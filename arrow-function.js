const person = {
    name:"test",
    age:12,
    greeting:function(){
        console.log("OUTSIDE:",this);
        setTimeout(() => {
            console.log("INSIDE:",this);
            console.log(`hello from ${this.name}`);
        },2000);
    }
}

person.greeting();