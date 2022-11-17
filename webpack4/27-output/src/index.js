import { add } from './add'

console.log(add(2, 6));

import(/*webpackChunkName:'count'*/'./count').then(({ default: count }) => {
    console.log(count(3, 5));
})