const tf = require('@tensorflow/tfjs');

/*
** First block
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
*/

const v2 = [1, 2, 3, 4, 5, 6];
const shape2 = [2,3];

const ts2 = tf.tensor(v2, shape2, 'int32');
const ts2_2 = tf.tensor(v2, shape2, 'int32');

ts2.print()

console.log(tf.memory().numTensors);

ts2.dispose(); // This fixes the memory leak

console.log(tf.memory().numTensors);

ts2_2.dispose();

console.log(tf.memory().numTensors); // now there are no tensors stored in GPU memory, hence avoiding GPU memory leack.

// tidy is very useful when I want to free up the memory when I'm done
tf.tidy(myStuff);

function myStuff(){
    const a = tf.tensor2d(v2, shape2, 'int32');
    const b = tf.tensor2d(v2, shape2, 'int32');
    const c = a.add(b);
    console.log("********* printing test");
    console.log(tf.memory().numTensors);
    c.print();
}
console.log(tf.memory().numTensors); // memory is now free from the tensors created in the "myStuff".



