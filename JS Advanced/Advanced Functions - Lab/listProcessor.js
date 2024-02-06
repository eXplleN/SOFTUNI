function listProcessor(arr) {

    let result = [];

    let commands = {
        add(str) {
            result.push(str);
        },

        remove(str) {
          result = result.filter(item => item !== str);
        },

        print() {
            console.log(result.join(","));
        }
    }

    for (let step of arr) {
        let [command, str] = step.split(" ");

        switch(command) {
            case 'add': commands.add(str);
                break;
            case 'remove': commands.remove(str);
                break;
            case 'print': commands.print();
                break;        
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])