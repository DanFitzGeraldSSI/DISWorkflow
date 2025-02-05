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
    displayActivatedAnalyzers();
});
