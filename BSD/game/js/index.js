var gameObject = {
  isRunning: true,
  generate: function() {
    var x = Math.floor(Math.random() * 20);
    var y = Math.floor(Math.random() * 20);
    var numsign = Math.floor(Math.random() * 20); //This will be used to determine the var sign
    if (numsign > 0 && numsign < 6) { // +
      var sign = x + " + " + y + " =";
      var ans = x + y;
    } else if (numsign > 5 && numsign < 12) {
      var sign = x + " - " + y + " =";
      var ans = x - y;
    } else if (numsign > 11 && numsign < 16) {
      var sign = x + " x " + y + " =";
      var ans = x * y;
    } else if (numsign > 15 && numsign < 20 && y < 4 && y >= 0) {
      var sign = x + " ^ " + y + " =";
      var ans = Math.pow(x, y);
    } else if (numsign > 15 && numsign < 18) {
      var sign = x + " + " + y + " =";
      var ans = x + y;
    } else if (numsign > 17 && numsign < 20) {
      var sign = x + " - " + y + " =";
      var ans = x - y;
    }

    this.ans = ans;
    return sign;
  },
  userAns: "",

  checkAns: function() {
    this.userAns = parseInt(document.getElementById("respond").value);
    if (this.ans == this.userAns) {
      this.isRunning = true;
      return true;
    } else {
      document.getElementById("write").innerHTML = "GAME OVER";
      var delay = 100000;
      setTimeout(function() {
        this.isRunning = false;
        return false;
      }, delay);
      
    }
  },
}

while (gameObject.isRunning) {
  gameObject.isRunning = false;
  var question = gameObject.generate();
  document.getElementById("write").innerHTML = question;

}