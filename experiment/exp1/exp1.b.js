const EventEmitter= require('events');
const app=new EventEmitter();
app.on('login',(user)=>{
    console.log(`${user} logged in`);
});
app.on('massage',(msg)=>{
    console.log(`Massage: ${msg}`);
});
app.emit('login','siddhartha');
app.emit('massage','Welcome to Node.js');