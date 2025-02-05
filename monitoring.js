document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const analyzerName = urlParams.get('analyzer');
    document.querySelector('.header h1').textContent = `Monitoring and Maintenance - ${analyzerName}`;

    function validateThresholds() {
        const highRiskLow = parseFloat(document.getElementById('high-risk-low').value);
        const highRiskHigh = parseFloat(document.getElementById('high-risk-high').value);
        const mediumRiskLow = parseFloat(document.getElementById('medium-risk-low').value);
        const mediumRiskHigh = parseFloat(document.getElementById('medium-risk-high').value);
        const lowRiskLow = parseFloat(document.getElementById('low-risk-low').value);
        const lowRiskHigh = parseFloat(document.getElementById('low-risk-high').value);

        if (lowRiskHigh >= mediumRiskLow || mediumRiskHigh >= highRiskLow) {
            alert('Thresholds cannot overlap. Please adjust the values.');
            return false;
        }
        return true;
    }

    function showMaintenanceHistory() {
        // Implement the maintenance history log functionality
        alert('Showing maintenance history log...');
    }

    function adjustRiskThresholds() {
        if (validateThresholds()) {
            // Implement the adjust risk thresholds functionality
            alert('Adjusting risk thresholds...');
        }
    }

    function addMonitoringMetrics() {
        // Implement the add monitoring metrics functionality
        alert('Adding monitoring metrics...');
    }

    function exportMaintenanceReport() {
        // Implement the export maintenance report functionality
        alert('Exporting maintenance report...');
    }

    function saveUpdates() {
        if (validateThresholds()) {
            // Implement the save updates functionality
            alert('Updates saved.');
        }
    }

    function revertChanges() {
        // Implement the revert changes functionality
        alert('Changes reverted.');
    }

    function returnToDSIActivationScreen() {
        window.location.href = 'table.html';
    }

    window.showMaintenanceHistory = showMaintenanceHistory;
    window.adjustRiskThresholds = adjustRiskThresholds;
    window.addMonitoringMetrics = addMonitoringMetrics;
    window.exportMaintenanceReport = exportMaintenanceReport;
    window.saveUpdates = saveUpdates;
    window.revertChanges = revertChanges;
    window.returnToDSIActivationScreen = returnToDSIActivationScreen;
});
