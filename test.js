let timeLeft = 1800;
let timerInterval;
let currentQuestion = 0;
let currentQuestions = [];
let currentSubject = "";
let score = 0;

  //randomize the order of questions in the question bank
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const questionBank = {
  "Science": [
    {
      question: "1.A piece of iron rusts when it comes into contact with",
      options: ["air only.","moisture only.","oil only.","air and moisture only."],
      answer: "air and moisture only."
    },
    {
      question: "2.Vegetative propagation method is commonly used in the cultivation of",
      options: ["banana.","cocoa.","cowpea.","pawpaw."],
      answer: "banana."
    },
    {
        question: "3.Which of the following devices alters an alternating current?",

        options: ["Diode","Dynamo","Rectifier","Transformer"],
        answer: "Transformer"
      },
      {
        question: "4.It is obligatory to wear goggles in the laboratory when handling substances that are ",
        options: ["corrosive","are highly flammable.","are poisonous.","emit sparks."],
        answer: "corrosive"
      },
      {
        question: "5.The function of the pinna of the human ear is to",
        options: ["receive and transmit sound waves.","receive and refract sound waves.","change sound waves into electrical impulses.","change sound waves into radiations."],
        answer: "receive and transmit sound waves."
      },
      {
        question: "6.An atom of an element X has 23 protons and 26 neutrons. Determine the number of electrons.",
        options: ["3","23","26","49"],
        answer: "23"
      },
      {
        question: "7.Diseases that are easily transmitted from one organism to another through a vector are said to be",
        options: ["contagious.","endemic","infectious.","viral."],
        answer: "infectious."
      },
      {
        question: "8.An effort of 100.0 N is applied to a machine to raise a load of 400.0 N. Determine the mechanical advantage of the machine.",
        options: ["0.25","4.00","300.00","500.00"],
        answer: "4.00"
      },
      {
        question: "9.Which of the following characteristic features in leaves of flowering plants ensure efficient photosynthesis? Narrow leaves with small surface area Presence of veins Presence of stomata Thick leaves with large surface area ",
           

        options: ["I and II only"," II and III only","I, II and III only","I, III and IV only"],
        answer: "II and III only"
      },
      {
        question: "10.The vacuum between the two silvered surfaces of a thermos flask prevents heat loss by",
        options: ["conduction only.","convection only.","conduction and convection only.","convection and radiation only."],
        answer: "conduction and convection only."
      },
      {
        question: "11.A soil may lose its fertility through",
        options: ["leaching.","overcooling.","shifting cultivation.","ridging."],
        answer: "leaching."
      },
      {
        question: "12.The function of the solar thermal collector in a solar panel is to",
        options: ["trap heat from the solar radiations.","use radiant energy.","store solar energy.","convert photons into electrical energy."],
        answer: "trap heat from the solar radiations."
      },
      {
        question: "13. Which of the following factors affect the rate of evaporation from the skin of humans? I. Humidity II. Pressure,III. Temperature ,IV. Wind speed",
        options: ["I and II only"," III and IV only","I, II and III only","I, III and IV only"],
        answer: "I, III and IV only"
      },
      {
        question: "14.Blood vessels in the mammalian skin constrict during",
        options: ["hot weather","humid weather.","dry humid weather."," cold weather."],
        answer: "cold weather."
      },
      {
        question: "15. An example of a root tuber is",
        options: ["cassava.","groundnut.","onion.","yam."],
        answer: "cassava."
      },
      {
        question: "16.A total eclipse of the sun is seen when the observer is in the",
        options: ["umbra region of the sun's shadow.","penumbra region of the moon's shadow.","umbra region of the moon's shadow.","umbra region of the earth's shadow."],
        answer: "umbra region of the moon's shadow."
      },
      {
        question: "17.A solution contains 18.0 g of glucose per dm³. Determine its molarity.[Molar mass of glucose, C6H12O6 = 180]",
        options: ["0.01 M"," 0.02 M","0.10 M","0.20 M"],
        answer: "0.10 M"
      },
      {
        question: "18.Which of the following methods could be used to demagnetize a strong magnet?",
        options: ["Leaving it in water for few days","Heating it to red-hot","Placing it in a deep freezer overnight","Putting it in a solenoid with a direct current."],
        answer: "Heating it to red-hot"
      },
      { 
        question: "19.The diagram below illustrates a farm equipment. Use the diagram to answer Questions 19 and 20. 19.The diagram illustrates a",
        image:"./Assets/images/Watering-can.png",
        options: [" dibber."," sickle.","knapsack sprayer.","watering can."],
        answer: "watering can."
      },
      {
        question: "20. The equipment illustrated is used to ",
        options: ["harvest cereal crops.","transplant seedlings.","spread liquid pesticides in tiny droplets.","sprinkle water on plants."],
        answer: "sprinkle water on plants."
      },
      {
        question: "21.Which of the following pollutants is produced by petrol driven vehicles?",
        options: ["Carbon (II) oxide","Carbon (IV) oxide","Nitrogen (II) oxide","Sulphur (VI) oxide"],
        answer: "Carbon (II) oxide"
      },
      {
        question: "22. The presence of villi in the ileum of the digestive system of a mammal is to",
        options: [" secrete digestive enzymes.","speed up the process of digestion.","keep food in the ileum for longer time.","increase the surface area of the ileum for absorption."],
        answer: "increase the surface area of the ileum for absorption."
      },
      {
        question: "23.Which of the following characteristics are associated with sound waves? DiffractionInterference Polarization Reflection",
        options: [" I and II only","III and IV only","I, II and III only"," I, II and IV only"],
        answer: "I, II and IV only"
      },
      {
        question: "24.Long exposure of the human body to X-rays may cause",
        options: ["skin burns.","sickle cell anaemia.","high blood pressure.","fungal growth on the skin."],
        answer: "skin burns."
      },
      {
        question: "25. Which of the following characteristic features in flowering plants favours cross-pollination most?",
        options: [" Flowers are bisexual.","Male and female parts mature at same time.","Male and female parts are on separate plants.","Flowers remain closed until pollination has taken place."],
        answer: "Male and female parts are on separate plants."
      },
      {
        question: "26. In poultry production, temperature is an important factor during brooding because the chicks",
        options: [" have to overcome stress of transportation.","need adequate ventilation.","have no access to natural vegetation.","have not developed feathers."],
        answer: "have not developed feathers."
      },
      {
        question: "27.An electrical circuit has a voltage supply of 8 V. If a current of 2 A flows through the circuit, determine its total resistance.",

        options: ["0.25 Ω","4.00 Ω","10.00 Ω","16.00 Ω"],
        answer: "4.00 Ω"
      },
      {
        question: "28.Which of the following industries is operated as a small-scale industry in Ghana?",
        options: ["Aluminium production"," Computer production","Soap production","Petrol production"],
        answer: "Soap production"
      },
      {
        question: "29.One major advantage of crop rotation is the",
        options: ["control of insect pests and diseases of crops.","increase in the amounts of seeds in the seed bank.","faster absorption of nutrients by the soil.","emergence of weeds."],
        answer: "control of insect pests and diseases of crops."
      },
      {
        question: "30.Comma-shaped bacteria are known as",
        options: ["bacilli.","cocci.","spirilla.","vibros."],
        answer: "vibros."
      },
  ],




  "Mathematics": [
    {
      question: "2 + 5 = ?",
      options: ["5", "7", "6", "10"],
      answer: "7"
    },
   
  ],
  "English Language": [
    {
      question: "She _____ to school.",
      options: ["go", "goes", "gone", "going"],
      answer: "goes"
    },
    
  ]
};




function startTest(subject) {



  currentSubject = subject;
  currentQuestions = shuffleArray([...questionBank[subject]]);
  currentQuestion = 0;
  timeLeft = 1800; // reset timer (30 mins)

  document.getElementById('testSelection').style.display = 'none';
  document.getElementById('testInterface').style.display = 'block';
  document.getElementById('testSubject').textContent = subject + " Test";

  startTimer();
  loadQuestion();
}

function startTimer() {
  clearInterval(timerInterval); // avoid double timer
  timerInterval = setInterval(() => {
    timeLeft--;
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const secs = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('time').textContent = `${mins}:${secs}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting test...");
      endTest();
    }
  }, 1000);
}

function loadQuestion() {
  const questionData = currentQuestions[currentQuestion];
  if (!questionData) {
    endTest();
    return;
  }

  // Show the question text
  document.getElementById('questionText').textContent = questionData.question;

  // Show image if it exists
  const imageBox = document.getElementById('questionImage');
  if (questionData.image) {
    imageBox.src = questionData.image;
    imageBox.style.display = 'block';
  } else {
    imageBox.style.display = 'none';
  }

  // ✅ Shuffle options
  const shuffledOptions = shuffleArray([...questionData.options]);

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = "";

  shuffledOptions.forEach(option => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="radio" name="option" value="${option}">
      ${option}
    `;

    optionsContainer.appendChild(label);
  });

  // ✅ Store correct answer (unchanged) for later checking
  optionsContainer.dataset.correct = questionData.answer;
}


function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer before continuing.");
    return;
  }
 
  const selectedValue = selected.value;
  const correctAnswer = document.getElementById('optionsContainer').dataset.correct;

  if (selectedValue === correctAnswer) {
    score++; // ✅ increment score
  }

  currentQuestion++;

  if (currentQuestion >= currentQuestions.length) {
    endTest(); // ✅ show final result
  } else {
    loadQuestion(); // Load next question
  }
}
  


function endTest() {
  clearInterval(timerInterval);
  alert(`Test for ${currentSubject} completed!`);
  // You could redirect or show results here
  const testBox = document.querySelector('.test-interface'); // Your main quiz wrapper
  testBox.innerHTML = `
    <div class="end-screen">
      <h2>🎉 Test Complete</h2>
      <p><strong>${currentSubject}</strong> test has been submitted.</p>
      <p class="score">You scored <span>${score}</span> out of <span>${currentQuestions.length}</span>.</p>
      <div class="end-actions">
        <button onclick="goToDashboard()">🏠 Dashboard</button>
      </div>
    </div>
  `;
}

//unlock test cards based on release dates
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  // Define subject release dates
  const releaseDates = {
    "Mathematics": new Date("2025-04-26"),
    "English Language": new Date("2025-04-30")
  };

  // Loop through each locked test card
  document.querySelectorAll('.test-card.locked').forEach(card => {
    const subject = card.dataset.subject;
    const releaseDate = releaseDates[subject];

    // If today's date is on or after release date, unlock the card
    if (today >= releaseDate) {
      card.classList.remove("locked");
      card.style.cursor = "pointer";
      card.style.pointerEvents = "auto";
      card.setAttribute("onclick", `startTest('${subject}')`);

      // Update due-date label
      const dateLabel = card.querySelector(".due-date");
      dateLabel.textContent = "Available Now";
      dateLabel.classList.add("available");
    }
  });
});

// GO TO DASHBOARD FUNCTION
function goToDashboard() {
  window.location.href = "index.html"; // Replace with your actual dashboard page
}