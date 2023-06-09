const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thank's for the info: ${answer1}`);
  
  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`Thank's for the info: ${answer2}`);
    
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer3) => {
      console.log(`Thank's for the info: ${answer3}`);
      
      rl.question("What's your favourite thing to eat for that meal? ", (answer4) => {
        console.log(`Thank's for the info: ${answer4}`);

        rl.question("Which sport is your absolute favourite? ", (answer5) => {
         console.log(`Thank's for the info: ${answer5}`);

          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer6) => {
            console.log(`Thank's for the info: ${answer6}`);
          

          console.log(`Thank you for your time: \n 
          1. What do you think of Node.js?: ${answer1}\n
          2. What's an activity you like doing?: ${answer2}\n  
          3. Which meal is your favourite?: ${answer3}\n  
          4. What's your favourite thing to eat for that meal?: ${answer4}\n   
          5. Which sport is your absolute favourite?: ${answer5}\n  
          6. What is your superpower?: ${answer6}\n  `);


          rl.close();
          
          });
        });
      });
    });
  });
});


