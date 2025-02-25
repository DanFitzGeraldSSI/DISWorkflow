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

    function saveMonitoring() {
        const rows = document.querySelectorAll('#monitoring-tbody tr');
        const riskCategories = Array.from(rows).map(row => ({
            category: row.cells[0].textContent,
            value: row.cells[1].querySelector('input').value,
            editable: row.cells[2].querySelector('input').checked,
            lastUpdated: new Date().toLocaleString()
        }));

        const urlParams = new URLSearchParams(window.location.search);
        const index = urlParams.get('index');
        const riskAnalyzers = JSON.parse(localStorage.getItem('riskAnalyzers'));
        riskAnalyzers[index].riskCategories = riskCategories;
        localStorage.setItem('riskAnalyzers', JSON.stringify(riskAnalyzers));
        document.getElementById('save-message').style.display = 'block';
        setTimeout(() => {
            document.getElementById('save-message').style.display = 'none';
        }, 3000);
    }

    function loadMonitoring() {
        const urlParams = new URLSearchParams(window.location.search);
        const index = urlParams.get('index');
        const riskAnalyzers = JSON.parse(localStorage.getItem('riskAnalyzers'));
        const analyzer = riskAnalyzers[index];
        document.getElementById('analyzer-name').textContent = analyzer.name;
        const riskCategories = analyzer.riskCategories || [
            { category: 'Low', value: '0-9', editable: false, lastUpdated: '' },
            { category: 'Medium', value: '10-19', editable: false, lastUpdated: '' },
            { category: 'High', value: '>20', editable: false, lastUpdated: '' }
        ];
        const tbody = document.getElementById('monitoring-tbody');
        tbody.innerHTML = '';
        riskCategories.forEach(category => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${category.category}</td>
                <td><input type="text" value="${category.value}" /></td>
                <td><input type="checkbox" ${category.editable ? 'checked' : ''} /></td>
                <td>${category.lastUpdated}</td>
            `;
            tbody.appendChild(row);
        });
    }

    function resetMonitoring() {
        loadMonitoring();
    }

    function goBack() {
        window.location.href = 'table.html';
    }

    window.showMaintenanceHistory = showMaintenanceHistory;
    window.adjustRiskThresholds = adjustRiskThresholds;
    window.addMonitoringMetrics = addMonitoringMetrics;
    window.exportMaintenanceReport = exportMaintenanceReport;
    window.saveUpdates = saveUpdates;
    window.revertChanges = revertChanges;
    window.returnToDSIActivationScreen = returnToDSIActivationScreen;
    window.saveMonitoring = saveMonitoring;
    window.resetMonitoring = resetMonitoring;
    window.goBack = goBack;

    window.onload = loadMonitoring;
});
