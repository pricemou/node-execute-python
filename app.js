const express = require('express');
const { spawn } = require('child_process');

const app = express();

// app.get('/', (req, res) => {
//    console.log('Hello world');
// });

// navigator

app.get('/', (req, res) => {
    const childPython = spawn('python', ['hello.py']);
    childPython.stdout.on('data', (data) => {
        dataToSend = data.toString();
        console.log(`stdout: ${dataToSend}`)

    });
 
    childPython.stderr.on('data', (data) => {
       console.error(`stderr: ${data}`);
    });
 
    childPython.on('close', (code) => {
       console.log(`child process exited with code ${code}`);
    });

 });

//  fonction 

// const childPython = spawn('python', ['hello.py']);

// childPython.stdout.on('data', (data) => {
//     console.log(`The new random number is: ${data}`)
// });

// childPython.stderr.on('data', (data) => {
//     console.error(`There was an error: ${data}`);
// });

// childPython.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });


app.listen(4000, console.log('Server started on port 4000'));