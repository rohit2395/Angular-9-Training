class Demo{
    constructor(){
        console.log("constructor called");
    }

    func1(){
        console.log("function 1");
    }

    func2(){
        this.func1();
        console.log("function 2");
    }

}

const d = new Demo();
d.func2();