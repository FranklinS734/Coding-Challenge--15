//Task 1: Creating the Base Structure
document.addEventListener('DOMContentLoaded', function (){
    console.log("Risk Dashboard Loaded");
})


//Task 2 Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) { // Ensure the user provides valid inputs before proceeding


    if(!(riskName != null && riskName.trim() != '')){ // Check if the risk name is provided
        alert('Risk name cannot be empty.');
        return;
    }
    
    //Check if the risk level is provided and valid (must be High, Medium, or Low)
    if(!(riskLevel != null && riskLevel.trim() != '')){
        alert('Risk Level cannot be empty.');
        return;
    }
    else if(riskLevel.toLowerCase() != 'high' 
        && riskLevel.toLowerCase() != 'medium'
        && riskLevel.toLowerCase() != 'low'){
        alert('Risk Level has to be High, Medium or Low.');
        return;
    }
    
    
    if(!(department != null && department.trim() != '')){ // / Check if the department is provided 
        alert('Department cannot be empty.');
        return;
    }
    
    //Selecting the container where risk cards will be added
    let divRiskDashboard = document.getElementById('riskCards');
    
    const riskCard = document.createElement('div'); //Create a container for the risk card
    riskCard.setAttribute('class','risk-card');
    
    const rName = document.createElement('h2');// Create and append the risk name element
    rName.setAttribute('class', 'risk-name');
    rName.textContent = riskName;
    riskCard.append(rName);
    
    const rLevel = document.createElement('p');// Create and append the risk level element
    rLevel.setAttribute('class', 'risk-level');
    rLevel.textContent = riskLevel;
    riskCard.append(rLevel);

    
    const dept = document.createElement('p'); //Creating and append the department label
    dept.setAttribute('class', 'department');
    dept.textContent = `Department: ${department}`;
    riskCard.append(dept);

    //Task 4:  Categorizing Risks by Level

    if (riskLevel.toLowerCase() == 'high') {// Assign a background color based on the risk level 
        riskCard.classList.add('high-risk')
    }
    else if (riskLevel.toLowerCase() == 'medium') {
        riskCard.classList.add('medium-risk')
    }
    else if (riskLevel.toLowerCase() == 'low') {
        riskCard.classList.add('low-risk')
    }

//Task 3: Removing Risk Items
    
const resolveBtn = document.createElement('button');//Create a "Resolve" button to allow removal of the risk card
resolveBtn.setAttribute('class', 'resolve-btn');
resolveBtn.textContent = 'Resolve';
riskCard.append(resolveBtn); 


resolveBtn.addEventListener('click', (event) => {// Add an event listener to remove the risk card when the button is clicked
    
    riskCard.remove();
    console.log(`Resolved risk: ${riskName}`);
        
    
    event.stopPropagation();
});

divRiskDashboard.appendChild(riskCard);

    //Task 2 - Adding Risk Items
document.addEventListener('DOMContentLoaded', function (){
    //Test cases for Tasks 2-5
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
    addRiskItem("Market Fluctuations", "High", "Finance");
    addRiskItem("Cybersecurity Threat", "High", "IT");
    addRiskItem("HR Compliance Issue", "Low", "Human Resources");
    addRiskItem("Employee Retention", "Low", "HR");
})

document.getElementById('newRiskBtn').addEventListener('click', () => {
    let riskNameInput = document.getElementById("riskName");
    let riskLevelInput = document.getElementById("riskLevel");
    let departmentInput = document.getElementById("department");

    let newRisk = addRiskItem(
        riskNameInput.value, 
        riskLevelInput.value, 
        departmentInput.value
    );

    if (newRisk) { 
        riskNameInput.value = "";
        riskLevelInput.value = "";
        departmentInput.value = "";
    }
})
//Task 5: Implementing Bulk Updates

document.getElementById('increaseRiskBtn').addEventListener('click', () => { // Increase risk levels when the "Increase Risk Level" button is clicked
    const allRiskCards = document.querySelectorAll('.risk-card');
    const arrRiskCards = Array.from(allRiskCards);
    arrRiskCards.forEach((card ) => {
        const cardRiskLevel = card.querySelector('.risk-level');
        
        // Upgrade risk level from Low to Medium and then Mediuim to High
        if(cardRiskLevel.textContent.toLowerCase() == 'low'){
            cardRiskLevel.textContent = 'Medium';
            styleSingleCard(card);
        }
        else if(cardRiskLevel.textContent.toLowerCase() == 'medium'){
            cardRiskLevel.textContent = 'High';
            styleSingleCard(card);
        }
    })
})

//Task 4:  Categorizing Risks by Level
function styleSingleCard(currentCard){ // Function to update the styling of a single risk card based on its risk level
    const riskLevel = currentCard.querySelector('.risk-level');
        
    //Checks if the priority is "High" and updates the styling
    if(riskLevel.textContent.toLowerCase() === 'high'){
       
        removeCurrentRiskStyle(currentCard);
        
        currentCard.classList.add('high-risk');
    }
    else if(riskLevel.textContent.toLowerCase() === 'medium'){
    
        removeCurrentRiskStyle(currentCard);
        
        currentCard.classList.add('medium-risk');
    }
    else if(riskLevel.textContent.toLowerCase() === 'low'){
        removeCurrentRiskStyle(currentCard);
        
        currentCard.classList.add('low-risk');
    }
}

function removeCurrentRiskStyle(currentCard){
    currentCard.classList.remove('high-risk', 'medium-risk', 'low-risk');
}

