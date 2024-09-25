// Select lightbulbs.

const lightbulbs = document.querySelector('.lightbulb');

// Create count variable. Assign value to 0.

let count = 0;

// Select subtitle to update count.

const subtitle = document.querySelector('.subtitle');


// Add click event listener to all lightbulbs
lightbulbs.addEventListener('click', function() {
      
      lightbulbs.classList.toggle('active');

    //Increase count

    count++;

// If statement to display singular or plural.
    if (count === 1) {
        subtitle.innerHTML = `You've clicked the lights 1 time`;
      } else {
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
      }
});


