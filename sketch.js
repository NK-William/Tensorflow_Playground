const tf = require('@tensorflow/tfjs');

function setup(){
    //const data = tf.tensor([1, 2, 3, 4, 5, 6, 8 ,5, 2,4,8,9], [3,2,2]);
    //data.print();
    //console.log(data.toString());
    //console.log(data);
    

    const values = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6];

const shape = [5, 3];
const data = tf.tensor(values, shape);
console.log(data.toString()); 
}

setup(); 