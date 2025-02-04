document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const analyzerName = urlParams.get('analyzer');
    document.querySelector('.header h1').textContent = `Source Attributes Management - ${analyzerName}`;

    function showAuditLog() {
        // Implement the audit log functionality
        alert('Showing audit log...');
    }

    function addNewAttribute() {
        // Implement the add new attribute functionality
        alert('Adding new attribute...');
    }

    function saveChanges() {
        // Implement the save changes functionality
        alert('Saving changes...');
    }

    function resetChanges() {
        // Implement the reset changes functionality
        alert('Resetting changes...');
    }

    function exportAttributes() {
        // Implement the export attributes functionality
        alert('Exporting attributes...');
    }

    function goBack() {
        window.location.href = 'table.html';
    }

    window.showAuditLog = showAuditLog;
    window.addNewAttribute = addNewAttribute;
    window.saveChanges = saveChanges;
    window.resetChanges = resetChanges;
    window.exportAttributes = exportAttributes;
    window.goBack = goBack;
});
