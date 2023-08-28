let Student = {
    rohan: 23,
    raj: 64,
    tom: 99
}
for (let i = 0; i < Object.keys(Student).length; i++) {
    console.log(`the marks of `, Object.keys(Student)[i], ` are`, Student[Object.keys(Student)[i]]);
}