  const msg1 = document.getElementById("message1");
        const msg2 = document.getElementById("message2");
        const msg3 = document.getElementById("message3");

         var answer = Math.floor(Math.random()*100)+1;
         var no_of_guesses = 0;
         var guessed_nums = [];

         function play(){
            var user_guess = document.getElementById("guess").value;
            if(user_guess < 1 || user_guess > 100){
                alert("Please enter a number between 1 to 100");
            }
            else{
                guessed_nums.push(user_guess);
                no_of_guesses+= 1;

                if(user_guess < answer){
                msg1.textContent ="Your guess is too low";
                msg2.textContent = "No. of gussess" + no_of_guesses;
                msg3.textContent = "Guessed Numbers are : " + gu
                }
                else if(user_guess >  answer){
                    msg1.textContent = "Your guess is too big";
                    msg2.textContent = "No. of gussess is : " + no_of_guesses;
                    msg3.textContent = "Guessed Numbers are : " + guessed_nums;
                 }
                 else if(user_guess == answer){
                    msg1.textContent = "You win!!!!";
                    msg2.textContent = "The number was: " + answer;
                    msg3.textContent = "You guessed it in "  + no_of_guesses + " guesses";
                    
                 } 

                    
            }            
         }
