document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const analyzerName = urlParams.get('analyzer');
    document.querySelector('.header h1').textContent = `DSI Feedback - ${analyzerName} Risk Assessment: 10-year CHD Risk: 15%`;

    const timestampElement = document.getElementById('timestamp');
    const currentTimestamp = new Date().toLocaleString();
    timestampElement.textContent = `Logged on: ${currentTimestamp}`;

    function exportFeedback() {
        const feedback = {
            riskScore: "10-year Risk: 15%, Category: Moderate",
            riskInputs: {
                Age: 55,
                Cholesterol: "240 mg/dL",
                BP: "140 mmHg",
                Smoker: "Yes",
                HDL: "45 mg/dL"
            },
            decisionTaken: document.getElementById('decision-taken').value,
            reasonForDecision: document.getElementById('reason-for-decision').value,
            alertTriggeredBy: "Risk Threshold: >20% CHD Risk (10-year)",
            clinicianComments: document.getElementById('clinician-comments').value,
            interventionOutcome: document.getElementById('intervention-outcome').value,
            timestamp: currentTimestamp
        };
        const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(feedback));
        const link = document.createElement("a");
        link.setAttribute("href", jsonContent);
        link.setAttribute("download", "dsi_feedback.json");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function saveFeedback() {
        // Implement the save feedback functionality
        alert('Feedback saved.');
    }

    function returnToDSIActivationScreen() {
        window.location.href = 'table.html';
    }

    window.exportFeedback = exportFeedback;
    window.saveFeedback = saveFeedback;
    window.returnToDSIActivationScreen = returnToDSIActivationScreen;
});
