
 const wait = (time) => {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(true);
     }, time);
   });
 };
 
 const helloWorld = async () => {
   await wait(500);
   alert("Hello World ! ");
 };
 
 helloWorld();