//Task 1: Creating the Base Structure
document.addEventListener('DOMContentLoaded', function (){
    console.log("Risk Dashboard Loaded");
})


//Task 2: Task 2: Adding Risk Items Dynamically
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

    //Task 2 - Adding Risk Items
document.addEventListener('DOMContentLoaded', function (){
    //Test cases for Tasks 2-5
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
   
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
}