class Car {

    //CAB

    //Constructor

    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    //Attribute
    //  this.name became a attribute & can be use in anywhere
    //Behavior
    drive() {

        console.log("I am driving :", this.name);

    }

}

const tesla = new Car("Model S");
tesla.drive();


const i10 = new Car("grand is10");
i10.drive();