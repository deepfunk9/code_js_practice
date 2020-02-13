const characters = {
    'age': 42,
    'name': 'barney'
    };
    const findKey = (option, predicate) => {
    for (let x in option) {
        let value = x;
        let predicateReturnValue = value[predicate];
        if (predicateReturnValue) {
            return x;
        }
    //console.log(option);
    //return 
    // {"age": 42, "name": "barney"}
    // {"age": 42, "name": "barney"}
    //console.log(x);
    //"age"
    //"name"
    //console.log(option[x]);
    //42
    //"barney"
    }
    return undefined;
    }
    findKey(characters,42);


