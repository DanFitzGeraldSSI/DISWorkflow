document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to handle button functionality
    const statusButton = document.getElementById('statusButton');
    if (statusButton) {
        statusButton.addEventListener('click', function() {
            alert('Status button clicked');
        });
    }

    const auditLog = [];
    const activeDSICountElement = document.getElementById('active-dsi-count');

    function updateActiveDSICount() {
        const activeCount = document.querySelectorAll('tbody input[name="activation"]:checked').length;
        activeDSICountElement.textContent = activeCount;
    }

    document.querySelectorAll('tbody input[name="activation"]').forEach((checkbox, index) => {
        const riskAnalyzerName = checkbox.closest('tr').querySelector('td:nth-child(3)').textContent;
        const isActive = localStorage.getItem(`activation-${riskAnalyzerName}`) === 'true';
        checkbox.checked = isActive;
        if (isActive) {
            toggleActivation(checkbox, riskAnalyzerName, checkbox.closest('tr').querySelector('td:nth-child(5)').textContent);
        }

        checkbox.addEventListener('change', function() {
            const timestamp = new Date().toLocaleString();
            const riskAnalyzerName = checkbox.closest('tr').querySelector('td:nth-child(3)').textContent;
            auditLog.push({ riskAnalyzerName, timestamp, status: checkbox.checked ? 'Activated' : 'Deactivated' });
            localStorage.setItem(`activation-${riskAnalyzerName}`, checkbox.checked);
            toggleActivation(checkbox, riskAnalyzerName, checkbox.closest('tr').querySelector('td:nth-child(5)').textContent);
            updateActiveDSICount();
        });
    });

    // Initial count update
    updateActiveDSICount();

    function showAuditLog(riskAnalyzerName) {
        let logContent = `<h2>Audit Log for ${riskAnalyzerName}</h2><ul>`;
        auditLog.filter(entry => entry.riskAnalyzerName === riskAnalyzerName).forEach(entry => {
            logContent += `<li>${entry.status} at ${entry.timestamp}</li>`;
        });
        logContent += '</ul>';
        const logWindow = window.open('', 'Audit Log', 'width=400,height=400');
        logWindow.document.write(logContent);
    }

    function exportActiveDSIs() {
        const activeDSIs = [];
        document.querySelectorAll('tbody input[name="activation"]:checked').forEach(checkbox => {
            const row = checkbox.closest('tr');
            const riskAnalyzerName = row.querySelector('td:nth-child(3)').textContent;
            activeDSIs.push(riskAnalyzerName);
        });
        const csvContent = "data:text/csv;charset=utf-8," + activeDSIs.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "active_dsis.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function manageAttributes(riskAnalyzerName) {
        window.location.href = `attributes_management.html?analyzer=${encodeURIComponent(riskAnalyzerName)}`;
    }

    function returnToPatientRecord() {
        window.location.href = 'index.html';
    }

    function navigateToDSIFeedback(riskAnalyzerName) {
        window.location.href = `dsi_feedback.html?analyzer=${encodeURIComponent(riskAnalyzerName)}`;
    }

    function navigateToMonitoring(riskAnalyzerName) {
        window.location.href = `monitoring.html?analyzer=${encodeURIComponent(riskAnalyzerName)}`;
    }

    function toggleActivation(checkbox, analyzerName, riskScore) {
        const riskStatusCell = checkbox.closest('tr').querySelector('.risk-status');
        const analyzersContainer = JSON.parse(window.localStorage.getItem('analyzers-container')) || [];

        if (checkbox.checked) {
            riskStatusCell.textContent = 'Active';
            const analyzerDiv = { name: analyzerName, score: riskScore };
            analyzersContainer.push(analyzerDiv);
        } else {
            riskStatusCell.textContent = 'Inactive';
            const index = analyzersContainer.findIndex(analyzer => analyzer.name === analyzerName);
            if (index !== -1) {
                analyzersContainer.splice(index, 1);
            }
        }
        window.localStorage.setItem('analyzers-container', JSON.stringify(analyzersContainer));
        displayActivatedAnalyzers();
    }

    window.showAuditLog = showAuditLog;
    window.exportActiveDSIs = exportActiveDSIs;
    window.manageAttributes = manageAttributes;
    window.returnToPatientRecord = returnToPatientRecord;
    window.navigateToDSIFeedback = navigateToDSIFeedback;
    window.navigateToMonitoring = navigateToMonitoring;
    window.toggleActivation = toggleActivation;
});
