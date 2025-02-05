function navigateToDSIFeedback() {
    window.location.href = 'dsi_feedback.html';
}

function navigateToRiskManagementSummary() {
    window.location.href = 'risk_management_summary.html';
}

function calculateBMI() {
    const heightInches = parseFloat(document.getElementById('height').value);
    const weightLbs = parseFloat(document.getElementById('weight').value);
    if (!isNaN(heightInches) && !isNaN(weightLbs) && heightInches > 0) {
        const heightMeters = heightInches * 0.0254;
        const weightKg = weightLbs * 0.453592;
        const bmi = (weightKg / (heightMeters * heightMeters)).toFixed(2);
        document.getElementById('bmi').textContent = bmi;
    } else {
        document.getElementById('bmi').textContent = 'Invalid input';
    }
}

function updateSexLabel() {
    const sexCheckbox = document.getElementById('sex');
    const sexLabel = document.getElementById('sex-label');
    sexLabel.textContent = sexCheckbox.checked ? 'Male' : 'Female';
}

function updateDiabetesLabel() {
    const checkbox = document.getElementById('diabetes');
    const label = document.getElementById('diabetes-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateHypertensionMedicationsLabel() {
    const checkbox = document.getElementById('hypertension-medications');
    const label = document.getElementById('hypertension-medications-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateSignificantMurmurLabel() {
    const checkbox = document.getElementById('significant-murmur');
    const label = document.getElementById('significant-murmur-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateHeartFailureLabel() {
    const checkbox = document.getElementById('heart-failure');
    const label = document.getElementById('heart-failure-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateCardiovascularDiseaseLabel() {
    const checkbox = document.getElementById('cardiovascular-disease');
    const label = document.getElementById('cardiovascular-disease-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateAtrialFibrillationLabel() {
    const checkbox = document.getElementById('atrial-fibrillation');
    const label = document.getElementById('atrial-fibrillation-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateVentricularHypertrophyLabel() {
    const checkbox = document.getElementById('ventricular-hypertrophy');
    const label = document.getElementById('ventricular-hypertrophy-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function updateStrokeIschemicAttackLabel() {
    const checkbox = document.getElementById('stroke-ischemic-attack');
    const label = document.getElementById('stroke-ischemic-attack-label');
    label.textContent = checkbox.checked ? 'Yes' : 'No';
}

function displayActivatedAnalyzers() {
    const analyzersContainer = document.getElementById('analyzers-container');
    analyzersContainer.innerHTML = ''; // Clear existing content
    const analyzers = JSON.parse(window.localStorage.getItem('analyzers-container')) || [];
    analyzers.forEach(analyzer => {
        const analyzerDiv = document.createElement('div');
        analyzerDiv.className = 'analyzer';
        analyzerDiv.innerHTML = `<p>${analyzer.name}: ${analyzer.score}</p>`;
        analyzersContainer.appendChild(analyzerDiv);
    });
}

// Initialize the sex label and display activated analyzers on page load
document.addEventListener('DOMContentLoaded', function() {
    updateSexLabel();
    updateDiabetesLabel();
    updateHypertensionMedicationsLabel();
    updateSignificantMurmurLabel();
    updateHeartFailureLabel();
    updateCardiovascularDiseaseLabel();
    updateAtrialFibrillationLabel();
    updateVentricularHypertrophyLabel();
    updateStrokeIschemicAttackLabel();
    displayActivatedAnalyzers();

    document.getElementById('diabetes').addEventListener('change', updateDiabetesLabel);
    document.getElementById('hypertension-medications').addEventListener('change', updateHypertensionMedicationsLabel);
    document.getElementById('significant-murmur').addEventListener('change', updateSignificantMurmurLabel);
    document.getElementById('heart-failure').addEventListener('change', updateHeartFailureLabel);
    document.getElementById('cardiovascular-disease').addEventListener('change', updateCardiovascularDiseaseLabel);
    document.getElementById('atrial-fibrillation').addEventListener('change', updateAtrialFibrillationLabel);
    document.getElementById('ventricular-hypertrophy').addEventListener('change', updateVentricularHypertrophyLabel);
    document.getElementById('stroke-ischemic-attack').addEventListener('change', updateStrokeIschemicAttackLabel);
});
