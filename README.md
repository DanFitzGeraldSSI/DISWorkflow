# DISWorkflow

## Overview
DISWorkflow is a web-based application designed to manage and analyze risk models for patients. It provides a dashboard for activating and managing various risk analyzers, as well as a detailed attributes management interface.

## Features
- **Risk Analyzer Dashboard**: View and manage different risk analyzers.
- **Attributes Management**: Manage source attributes for selected risk models.
- **Patient Record**: Simulate patient data and update risk analyzers accordingly.
- **Local Storage**: Save and load state using local storage to maintain data persistence.

## File Structure
- `index.html`: Main dashboard for patient records.
- `table.html`: Risk analyzer dashboard.
- `attributes_management.html`: Interface for managing source attributes.
- `styles.css`: Stylesheet for the application.
- `script.js`: JavaScript file for risk analyzer dashboard functionality.
- `attributes_management.js`: JavaScript file for attributes management functionality.

## Getting Started
1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to start the application.

## Usage
- **Patient Dashboard**: Update patient information and navigate to the risk analyzer dashboard.
- **Risk Analyzer Dashboard**: View, add, edit, and manage risk analyzers.
- **Attributes Management**: Select and manage source attributes for risk analyzers.

## Risk Analyzer Attributes
Each risk analyzer in the table includes the following attributes:
- **Risk Analyzer Name**: The name of the risk analyzer.
- **Age Range**: The age range for which the risk analyzer is applicable.
- **Sex**: The sex for which the risk analyzer is applicable.
- **Exclude Criteria**: Criteria to exclude certain patients from the risk analysis.
- **Intervention Description**: Description of the intervention.
- **Risk Category**: The risk category (e.g., Low, Medium, High).
- **Attributes to Calculate**: The attributes used to calculate the risk.
- **DSI Feedback**: Feedback from the DSI.
- **Audit**: Audit log for the risk analyzer.
- **Risk Management**: Risk management details.
- **Monitoring**: Monitoring details.
- **Edit**: Option to edit the risk analyzer.
- **Last Updated**: The last updated date and time.

## Local Storage
The application uses local storage to save and load the state of risk analyzers and patient data. This ensures that data persists across sessions.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
