//Task1. Please use TypeScript to write a Student class that includes the following properties and methods.
//Private attributes: name, studentId, and age
//Constructor: takes name, student ID, and age as parameters and verifies age (age cannot be less than 0)
//Common methods: getName() (return name), getStudentId() (return student ID), getAge() (return age), displayInfo() (output all student information on the console)
// Write your code here
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Task2. Create a student object student1 using the aforementioned Student class and call the displayInfo() method to display the student's information. Then try to create a student object with an age of -5 and handle any possible errors.
// Write your code here
var Student = /** @class */ (function () {
    function Student(name, studentId, age) {
        this.name = name;
        this.studentId = studentId;
        if (age < 0) {
            throw new Error("Age cannot be smaller than 0");
        }
        this.age = age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.displayInfo = function () {
        console.log("Name: " + this.name + " , studentId: " + this.studentId + " , age: " + this.age);
    };
    return Student;
}());
var highSchoolStudent = /** @class */ (function (_super) {
    __extends(highSchoolStudent, _super);
    function highSchoolStudent(name, studentId, age, subjects) {
        var _this = _super.call(this, name, studentId, age) || this;
        _this.subjects = subjects;
        return _this;
    }
    highSchoolStudent.prototype.getSubjects = function () {
        return this.subjects;
    };
    highSchoolStudent.prototype.displayInfo = function () {
        console.log("Name: " + this.name + " , studentId: " + this.studentId + " , age: " + this.age + " , subjects: " + this.subjects);
    };
    return highSchoolStudent;
}(Student));
var highSchoolStu = new highSchoolStudent("Peter", 100002, 25, ["Physics", "Chemistry"]);
console.log(highSchoolStu.getSubjects());
highSchoolStu.displayInfo();
