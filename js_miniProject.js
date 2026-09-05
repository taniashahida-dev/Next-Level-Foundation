let students = [
    {
        id : 101,
        name : "Tania",
        age: 22,
        dept : "CST"
    },
    {
        id : 102,
        name : "Sania",
        age: 21,
        dept : "EEE"
    }
]

function addStudent(name,age,dept) {
    let newId = students.length>0 ? students[students.length-1].id+1:101
    let newStudent = {
        id: newId,
        name,
        age,
        dept
    }

    students.push(newStudent)
    console.log(`Student added successfuly !!!! ${newStudent.name}`)
    
}

addStudent("Faria",23,"ENVt")
// console.log(students)

function getAll() {
    for (const student of students) {
        console.log(student)
    }
}
getAll()

function findStudent(id) {
    let foundStd = null
    for (const student of students) {
        if(student.id==id){
foundStd = student
break
        }
    }
    if (foundStd) {
        console.log("Student data is Found :",foundStd )
    } else {
        console.log("404 not found")
    }
}

findStudent(108)

function deleteStudent(id) {
    let targetStd = -1

    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            targetStd = i
            break
        };
        
    }
    if (targetStd != -1) {
        let deletedStr = students.splice(targetStd, 1)
        console.log(`Deleted  ${deletedStr[0].name} id: ${deletedStr[0].id} deleted`)
    } else {
        console.log("404 not found")
    }
}
deleteStudent(102)
getAll()