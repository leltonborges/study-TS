import axios from 'axios';

// Callback

function esperarTresSegundos(call: (dado: string) => void) {
    setTimeout(() => {
        call('3s depois');
    }, 3000);
}


esperarTresSegundos((result: string) => {
    console.log(result);
})

// Promise

function esperarPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois em promise');
        }, 3000);
    })
}

esperarPromise().then(console.log);

const API = 'https://swapi.dev/api';

axios.get(`${API}/people/1`)
.then(res => res.data)
.then(res => res?.['films'])
.then(console.log);