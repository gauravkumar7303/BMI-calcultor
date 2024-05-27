document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.getElementById('darkModeToggle');

  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      toggleSwitch.checked = true;
  } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      toggleSwitch.checked = false;
  }

  toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('darkMode', 'disabled');
      }
  });
});
const myButton = document.getElementById('mybutton');


const Weight = document.getElementById('Weight');
const Height = document.getElementById('Height');


const bmi = document.getElementById('bmi');


myButton.addEventListener('click', function() {
  
    const value1 = Weight.value;
    const value2 = Height.value;

 
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

   
    const BMI = bmicalculator(num1, num2); 

    
    bmi.value = BMI;
});
reset.addEventListener('click', function() {

  Weight.value = '';
  Height.value = '';
  bmi.value = '';
});



function bmicalculator(value1, value2) {
   
    return Math.round(value1 / (value2 * value2)); 
}

