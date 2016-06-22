function test() {
  alert("You have to get all correct to clear this test! (DO NOT PUT IN COMMAS)")
  var point = 0;
  var q1 = prompt("What is an integer bigger than 'e', smaller than 'pi'?");

  if (q1 === "3") {
    var point = point + 1;
    alert("You have 1 point!")
    var q2 = prompt("What is 17+45?")

    if (q2 === "62") {
      var point = point + 2;
      alert("You have " + point + " points!")
      var q3 = prompt("What is 13+(-29)?")

      if (q3 === "-16") {
        var point = point + 2;
        alert("You have " + point + " points!")
        var q4 = prompt("What is 63-17?")

        if (q4 === "46") {
          var point = point + 3;
          alert("You have " + point + " points!")
          var q5 = prompt("What is 45-(146-198)?")

          if (q5 === "97") {
            var point = point + 3;
            alert("You have " + point + " points!")
            var q6 = prompt("What is 13*17?")

            if (q6 === "221") {
              var point = point + 4;
              alert("You have " + point + " points!")
              var q7 = prompt("What is -65*(3/5)?")

              if (q7 === "-39") {
                var point = point + 4;
                alert("You have " + point + " points!")
                var q8 = prompt("What is 348÷6?")

                if (q8 === "58") {
                  var point = point + 5;
                  alert("You have " + point + " points!")
                  var q9 = prompt("What is -252÷12?")

                  if (q9 === "-21") {
                    var point = point + 5;
                    alert("You have " + point + " points!")
                    var q10 = prompt("What is 1161m/81s in improper fraction (simplify)? (answer like this: 48m/13s)")

                    if (q10 === "43m/3s") {
                      var point = point + 6;
                      alert("You have " + point + " points!")
                      var q11 = prompt("What is 1221/59 in decimal (nearest tenth)?")

                      if (q11 === "20.7") {
                        var point = point + 6;
                        alert("You have " + point + " points!")
                        var q12 = prompt("What is 7^5 (7 to the power of 5)?")

                        if (q12 === "16807") {
                          var point = point + 7;
                          alert("You have " + point + " points!")
                          var q13 = prompt("What is (9/4)^-4 (nearest hundredth)?")

                          if (q13 === "0.04") {
                            var point = point + 7;
                            alert("You have " + point + " points!")
                            var q14 = prompt("What is 12! (factorial)?")

                            if (q14 === "479001600") {
                              var point = point + 8;
                              alert("You have " + point + " points!")
                              var q15 = prompt("What is 9!/(7!/5!)?")

                              if (q15 === "8640") {
                                var point = point + 8;
                                alert("You have " + point + " points!")
                                var q16 = prompt("Solve for 'y': 9x/(y^2)=x? (answer like this: y=13.5)").toLowerCase()

                                if (q16 === "y=3") {
                                  var point = point + 9;
                                  alert("Nearly Done!")
                                  var q17 = prompt("Solve for 'a': 15/2.5+4*5-√a^-1=3^3-9/8").toLowerCase()

                                  if (q17 === "a=64") {
                                    var point = point + 9;
                                    alert("Almost Done!")
                                    var q18 = prompt("What is the pen-root of 14,348,907? (hint: what does 'pen' mean?)")

                                    if (q18 = "27") {
                                      var point = point + 10;
                                      alert("Last Question!")
                                      var q19 = prompt("How many points do you have currenly? (only type in number)")

                                      if (q19 === "99") {
                                        alert("You got everything right! Great job!")
                                        alert("Thank you for playing this game!")
                                      } //q19
                                      else {
                                        alert("Gameover! Try next time!")
                                      } //g19

                                    } //q18
                                    else {
                                      alert("Gameover! Try next time!")
                                    } //g18

                                  } //q17
                                  else {
                                    alert("Gameover! Try next time!")
                                  } //g17

                                } //q16
                                else {
                                  alert("Gameover! Try next time!")
                                } //g16

                              } //q15
                              else {
                                alert("Gameover! Try next time!")
                              } //g15

                            } //q14
                            else {
                              alert("Gameover! Try next time!")
                            } //g14

                          } //q13
                          else {
                            alert("Gameover! Try next time!")
                          } //g13

                        } //q12
                        else {
                          alert("Gameover! Try next time!")
                        } //g12

                      } //q11
                      else {
                        alert("Gameover! Try next time!")
                      } //g11

                    } //q10
                    else {
                      alert("Gameover! Try next time!")
                    } //g10

                  } //q9
                  else {
                    alert("Gameover! Try next time!")
                  } //g9

                } //q8
                else {
                  alert("Gameover! Try next time!")
                } //g8

              } //q7
              else {
                alert("Gameover! Try next time!")
              } //g7

            } //q6
            else {
              alert("Gameover! Try next time!")
            } //g6

          } //q5
          else {
            alert("Gameover! Try next time!")
          } //g5

        } //q4
        else {
          alert("Gameover! Try next time!")
        } //g4

      } //q3
      else {
        alert("Gameover! Try next time!")
      } //g3

    } //q2
    else {
      alert("Gameover! Try next time!")
    } //g2          
  
  }//q1        
  
 else {
    alert("Gameover! Try next time!")
  } //g1
    
} //close quiz