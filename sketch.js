const tf = require('@tensorflow/tfjs');

function setup(){
    //const data = tf.tensor([1, 2, 3, 4, 5, 6, 8 ,5, 2,4,8,9], [3,2,2]);
    //data.print();
    //console.log(data.toString());
    //console.log(data);
}

// setup(); 

const v = [];
for(i = 0; i < 30; i++){
    v[i] = Math.random() * 100;
}

const shape = [2, 5, 3];

// Note: "v" containing the array is store in the computer memory, and when passing the v to tensor32 -> the array is then stored
// in the comnputer's GPU.
const ts = tf.tensor3d(v, shape, 'int32'); // the value of "ts" is immutable.

const vts = tf.variable(ts); // converting a tensor to a variable to mutate it("vts" is mutable)
console.log(vts);

// console.log(ts.toString());
 //ts.print();
//  data returns a promise, because of data being retrieved from GPU.
// console.log(ts.dataSync());


