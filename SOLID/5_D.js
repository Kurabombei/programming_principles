// Dependency Inversion Principle


/**
 *  D in SOLID means:
 *  ENG: "Depend upon abstractions, [not] concretions."
 *
 *  UA: Залежності всередині системи будуються на основі абстракцій,
 *  що не повинні залежати від деталей; навпаки, деталі мають залежати від абстракцій.
 *  Модулі вищих рівнів не мають залежати від модулів нижчих рівнів.
 *  **/


// without DIP

// class Fetch {
//     request(url){
//         // return fetch(url).then(r => r.json());
//         return Promise.resolve('data from fetch');
//     }
// }
//
// class LocalStorage {
//     get() {
//         const dataFromLocalStorage = 'data from localStorage';
//         return dataFromLocalStorage;
//     }
// }
//
// class Database {
//     constructor() {
//         // this.fetch = new Fetch(); needed new functionality
//         // we add this one
//         this.localStorage = new LocalStorage();
//     }
//
//     getData() {
//         // return this.fetch.request('google.com') adding a new functionality
//         return this.localStorage.get('some key');
//     }
// }

class Fetch {
    request(url, key){
        // return fetch(url).then(r => r.json());
        return Promise.resolve('data from fetch');
    }
}
class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(key) {
        return this.fetch.request('google.com', key);
    }
}

class LocalStorage {
    get() {
        return 'data from localStorage';
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key);
    }
}

class Database {
    constructor(client) {
        // added abstraction and moved those 'could-be changes to client.'
        this.client = client;
    }

    getData() {
        // then we dont use our clientGet implementations directly, but through Dependency Injection from client
        // return this.fetch.request('google.com'); not this
        // return this.localStorage.get('some key'); nor other

        return this.client.clientGet('superkey');
    }
}

// and now all we need to change is that client during init.
const db = new Database(new LocalStorageClient());
// const db = new Database(new FetchClient());

console.log(db.getData())
