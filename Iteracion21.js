const runTimeOut=async () =>{
     await setTimeout(function () {
               console.log('Time out!')
           }, 2000);
           console.log("Test")
       };
   
   runTimeOut();