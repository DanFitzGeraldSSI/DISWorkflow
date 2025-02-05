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
        checkbox.checked = false; // Ensure the activate fields are by default unselected
        checkbox.addEventListener('change', function() {
            const timestamp = new Date().toLocaleString();
            const riskAnalyzerName = checkbox.closest('tr').querySelector('td:nth-child(3)').textContent;
            auditLog.push({ riskAnalyzerName, timestamp, status: checkbox.checked ? 'Activated' : 'Deactivated' });
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

    function navigateToRiskManagementSummary(riskAnalyzerName) {
        window.location.href = `risk_management_summary.html?analyzer=${encodeURIComponent(riskAnalyzerName)}`;
    }

    window.showAuditLog = showAuditLog;
    window.exportActiveDSIs = exportActiveDSIs;
    window.manageAttributes = manageAttributes;
    window.returnToPatientRecord = returnToPatientRecord;
    window.navigateToDSIFeedback = navigateToDSIFeedback;
    window.navigateToMonitoring = navigateToMonitoring;
    window.navigateToRiskManagementSummary = navigateToRiskManagementSummary;
});
