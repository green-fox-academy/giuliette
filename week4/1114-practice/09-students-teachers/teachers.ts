// Teacher Student
// Create Student and Teacher classes

// Student 
// learn()
// question(teacher) -> calls the teachers answer method

// Teacher
// teach(student) -> calls the students learn method
// answer()

class Teacher {
  answer(){};
  teach(student: Student){
    student.learn();
  }
}

class Student {
  learn(){};
  question(teacher: Teacher){
    teacher.answer();
  };
}