

import(/* webpackChunkName: 'a' */'./a')
    .then(({ add }) => {
        console.log(add(1, 2));
    })