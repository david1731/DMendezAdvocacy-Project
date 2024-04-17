// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
}

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");
let count = 4;
const addSignature = (person) => {
    // Write your code to manipulate the DOM here
    const { name, hometown } = person;
    const newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;

    const signaturesDiv = document.querySelector('.signatures');
    signaturesDiv.appendChild(newSignature);

    count += 1;

    // Update the counter element directly without removing it
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
    } else {
        // In case the counter element does not exist for some reason, create it and append
        const newCounter = document.createElement('p');
        newCounter.id = 'counter';
        newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
        const signaturesDiv = document.querySelector('.signatures');
        signaturesDiv.appendChild(newCounter);
  }
};

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  const emailInput = petitionInputs[2];
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: emailInput.value
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++){
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    } 
  }
  
  if(containsErrors == false){
    addSignature(person); 
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++){
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
 
  if (!person.email.includes('.com')){
    containsErrors = true;
    emailInput.classList.add('error');
  }else{
    emailInput.classList.add('error');
  }
}

const toggleModal = (person) =>{
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name} from ${person.hometown}!`;

  let intervalId = setInterval(scaleImage, 1000);
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
};

// Variables defined outside any function to maintain their values across function calls
let scaleFactor = 1;
let modalImage = document.getElementById("modal-image"); // Ensure your modal has an <img> with id="modal-image"

// Function to scale the image
function scaleImage() {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1
    // Apply the scaling transform to the image
    modalImage.style.transform = `scale(${scaleFactor})`;
}

let closeModalBtn = document.getElementById("close-modal");
const closeModal = () =>{
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}
// Interval to continuously toggle the scale, creating a "heartbeat" effect
setInterval(scaleImage, 500); // Adjust time as needed for effect speed
signNowButton.addEventListener('click', validateForm);
closeModalBtn.addEventListener('click', closeModal);




