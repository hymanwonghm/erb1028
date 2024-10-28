//Task1. Please use TypeScript to write a Student class that includes the following properties and methods.
//Private attributes: name, studentId, and age
//Constructor: takes name, student ID, and age as parameters and verifies age (age cannot be less than 0)
//Common methods: getName() (return name), getStudentId() (return student ID), getAge() (return age), displayInfo() (output all student information on the console)
// Write your code here

//Task2. Create a student object student1 using the aforementioned Student class and call the displayInfo() method to display the student's information. Then try to create a student object with an age of -5 and handle any possible errors.
// Write your code here

class Student {
    protected name: string;
    protected studentId: number;
    protected age: number;

    constructor(name: string, studentId: number, age: number){
        this.name = name
        this.studentId = studentId
        if (age < 0){
            throw new Error("Age cannot be smaller than 0")
        }
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getStudentId(): number {
        return this.studentId
    }

    getAge(): number {
        return this.age
    }

    displayInfo(): void{
        console.log("Name: " + this.name  + " , studentId: " + this.studentId + " , age: " + this.age)
    }
}

class highSchoolStudent extends Student {
    subjects: string[]

    constructor(name: string, studentId: number, age: number, subjects:string[]){
        super(name, studentId, age)
        this.subjects = subjects
    }

    getSubjects() :string[] {
        return this.subjects
    }

    displayInfo(): void{
        console.log("Name: " + this.name  + " , studentId: " + this.studentId + " , age: " + this.age + " , subjects: " + this.subjects)

    }
}



let highSchoolStu: highSchoolStudent = new highSchoolStudent("Peter", 100002, 25, ["Physics", "Chemistry"])
console.log(highSchoolStu.getSubjects())
highSchoolStu.displayInfo()