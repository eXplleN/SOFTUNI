function cars(arr) {

    let result = {};
    let inh = [];

    let commands = {
        create(name) {
            result[name] = {};
        },

        createAndInherit(name1, name2) {
            let newObj = {};
            for (let key in result[name2]){
                newObj[key] = result[name2][key];
            }
            result[name1] = newObj;
        },

        set(name, key, value){
           result[name][key] = value;
        },

        print(name) {
            inh.forEach()
            let entries = Object.entries(result[name]);
            let final = [];
            for (let index of entries) {
                final.push(`${index[0]}:${index[1]}`);
            }
            console.log(final.join(","));
        }
    }

    for (let step of arr) {
        let splited = step.split(" ");

        if (splited.length == 2) {

            if (splited[0] === 'create') {
                commands.create(splited[1]);
            }
            else {
               commands.print(splited[1]);
            }
        }
        else {
            if (splited[2] === 'inherit') {
                commands.createAndInherit(splited[1], splited[3]);
                inh.push(`${splited[1]} ${splited[3]}`)
            }
            else {
                commands.set(splited[1], splited[2], splited[3]);
            }
        }
    }
}

cars(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])
