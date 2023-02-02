
const fs = require('fs');

fs.readFile('user-data.json', (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);

    // jsonData.forEach((element) => {
    //     if (element.age > 18)
    //         console.log('name : ', element.username, ",age : ", element.age);
    // });

    const Adults = jsonData.filter(person => person.age > 18);
    console.log(Adults)

});