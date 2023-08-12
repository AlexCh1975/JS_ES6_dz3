/**
     * Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
    Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

    const student = new Student();
    student.setName('Питер Паркер);
    student.setAge(20);
    student.setAverageGrade(85);
    student.displayInfo();
 */

class Student{
    #name;
    #age;
    #averageGrade;

    set name(name){
        this.#name = name;
    }
    
    get name(){
        return this.#name;
    }

    set age(age){
        this.#age = age;
    }

    get age(){
        return this.#age;
    }

    set averageGrade(averageGrade){
        this.#averageGrade = averageGrade;
    }

    get averageGrade(){
        return this.#averageGrade;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, age: ${this.age}, averageGrade: ${this.averageGrade}`);
    }
}

const student = new Student();
student.name = 'Питер Паркер';
student.age = 20;
student.averageGrade = 85;
student.displayInfo();


