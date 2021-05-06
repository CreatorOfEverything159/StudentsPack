import {Student} from "./People/Student"
import {Teacher} from "./People/Teacher"
import {TeacherConst} from "./People/TeacherConst";
import {Lesson} from "./Events/Lesson"
import {Parent} from "./People/Parent";
import {Meeting} from "./Events/Meeting";
import {Grandma} from "./People/Grandma";

let s1 = new Student("s1")
let s2 = new Student("s2")
let s3 = new Student("s3")
let s4 = new Student("s4")
let s5 = new Student("s5")
let s6 = new Student("s6")
let s7 = new Student("s7")
let s8 = new Student("s8")
let s9 = new Student("s9")
let s10 = new Student("s10")
let s11 = new Student("s11")
let s12 = new Student("s12")
let s13 = new Student("s13")
let s14 = new Student("s14")
let s15 = new Student("s15")

let parent1 = new Parent("parent1", [s1, s9])
let parent2 = new Grandma("parent2", [s2, s4])
let parent3 = new Parent("parent3", [s3])
let parent4 = new Parent("parent4", [s5, s6, s7])
let parent5 = new Parent("parent5", [s10])
let parent6 = new Grandma("parent6", [s12])
let parent7 = new Parent("parent7", [s15])
let parent8 = new Parent("parent8", [s14, s8])
let parent9 = new Grandma("parent9", [s13, s11])

let Class1 = [s1, s4, s5, s8]
let Class2 = [s2, s3, s6, s12]
let Class3 = [s7, s9, s15, s8, s10]
let Class4 = [s10, s11, s13, s14]

let teacher1 = new Teacher("teacher1")
let teacher2 = new Teacher("teacher2", 5)
let teacher3 = new TeacherConst("teacher3")
let teacher4 = new Teacher("teacher4", 10)
let teacher5 = new TeacherConst("teacher5")
let teacher6 = new Teacher("teacher6", 15)

let lesson1 = new Lesson("Math", teacher1, Class1)
let lesson2 = new Lesson("Geography", teacher5, Class2)
let lesson3 = new Lesson("Music", teacher6, Class3)
let lesson4 = new Lesson("Physic", teacher2, Class4)
let lesson5 = new Lesson("Russian language", teacher3, Class2)
let lesson6 = new Lesson("English language", teacher4, Class1)
let lesson7 = new Lesson("Biology", teacher2, Class3)

let meeting1 = new Meeting([teacher1, teacher2], [parent2, parent7, parent8, parent9], [lesson1, lesson4])
let meeting2 = new Meeting([teacher2, teacher4, teacher5], [parent1, parent3, parent5], [lesson2, lesson6, lesson7])
let meeting3 = new Meeting([teacher3], [parent4, parent5, parent6, parent9], [lesson3, lesson5])


// ====================================================================================================================

lesson1.grading()
lesson3.grading()
lesson5.grading()
lesson4.grading()
lesson2.grading()
lesson7.grading()
lesson6.grading()
lesson2.grading()
lesson4.grading()
lesson5.grading()
lesson1.grading()
lesson3.grading()
lesson7.grading()
lesson6.grading()
lesson2.grading()
lesson3.grading()
lesson4.grading()
lesson5.grading()

lesson1.info()
lesson2.info()
lesson3.info()
lesson4.info()
lesson5.info()
lesson6.info()
lesson7.info()

console.log(meeting1.meetingRun());
console.log(meeting2.meetingRun());
console.log(meeting3.meetingRun());


// ====================================================================================================================
