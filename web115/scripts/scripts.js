function displayMessage() {
    var name = document.getElementById('nameInput').value;
    var number = parseInt(document.getElementById('numberInput').value);
    var output = document.getElementById('output');
  
    if (name === '' || isNaN(number)) {
      output.textContent = 'Please enter both your name and a valid number.';
    } else {
      var message = 'Welcome, ' + name + '! ';
      for (var i = 0; i < number; i++) {
        message += 'Stand message ';
      }
      output.textContent = message;
    }
  }