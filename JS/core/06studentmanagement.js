let students = [
    {
        id : 101,
        name : "Gopala",
        age : 22,
        course : "MCA",
        sem : 3,
        marks : {
            java : 85,
            dbms : 75,
            dsa : 77
        }
    }, 

    {
        id : 102,
        name : "Deepanshu",
        age : 20,
        course : "MCA",
        sem : 3,
        marks : {
            java : 88,
            dbms : 79,
            dsa : 99
        }
    },
];


function addStudents(student){
    const exists = students.some(s => s.id === student.id);

    if(exists){
        console.log("Student with this id already exists");
        return;
    }

    students.push(student);
    console.log("Student added successfully");
}

function displayStudents(){
    console.log("Student Details:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}, Semester: ${student.sem}`);
        console.log(`Marks: Java - ${student.marks.java}, DBMS - ${student.marks.dbms}, DSA - ${student.marks.dsa}`);
        console.log('-----------------------------');
    });
}

// Example usage

addStudents({
    id : 103,
    name : "Rohit",
    age : 21,
    course : "MCA",
    sem : 3,
    marks : {
        java : 90,
        dbms : 80,
        dsa : 85
    }
});

addStudents({
    id : 101,
    name : "Ankit",
    age : 23,
    course : "MCA",
    sem : 3,
    marks : {
        java : 70,
        dbms : 60,
        dsa : 75
    }
});

addStudents({
    id : 104,
    name : "Ankit",
    age : 23,
    course : "MCA",
    sem : 3,
    marks : {
        java : 70,
        dbms : 60,
        dsa : 75
    }
});

displayStudents();