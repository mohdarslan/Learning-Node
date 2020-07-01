//using references
let author = {
    name: 'Mosh'
}

let course = {
    author:'id'
}

//using embedded
let course = {
    author: {
        name: 'Mosh'
    }
}

//Hybrid
let author = {
    name: 'Mosh'
    //50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}