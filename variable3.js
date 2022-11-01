class Student {
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {

            console.log('inside egligibleForCurrentCompany', this)
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(this.name + "is ready to placements")
            } else {
                console.log(this.name + "is not ready for placements")
            }
        }
    }
}

const John = new Student('john',20,80);
const Salim = new Student('salim',13,85);

John.setPlacementAge(18)(40);