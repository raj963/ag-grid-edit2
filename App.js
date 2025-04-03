import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";
import CustomButton from "./CustomButton";



const data = [
  { id: 1, incident: "INC490_", date: "2025-03-30 19:35", assignee: "Hector Arturo C", config: "WSIT-CS-DIOS", summary: "HSBCnet Availability", assignment: "HTSE-HSBCNet-Global", recommendation: "HTSE-HSBC-CONN" },
  { id: 2, incident: "INC491_", date: "2025-03-30 19:36", assignee: "John Doe", config: "WSIT-CS-XYZ", summary: "Network Issue", assignment: "HTSE-HSBCNet-Global", recommendation: "dios-admin-ui" },
];

const columns = [
  { headerName: "Incident", field: "incident", sortable: true, filter: true },
  { headerName: "Open Date", field: "date", sortable: true, filter: "agDateColumnFilter" },
  { headerName: "Assignee", field: "assignee", filter: true },
  { headerName: "Configuration Item", field: "config", filter: true },
  { headerName: "Summary", field: "summary", filter: true },
  { headerName: "Current Assignment", field: "assignment", filter: true },
  { headerName: "STAAR Recommendation", field: "recommendation", filter: true },
];


const App = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="container">
      <div className="header">STAAR Recommended Group Incident</div>
      <div className="tabs">
        <button className={activeTab === "tab1" ? "active" : ""} onClick={() => setActiveTab("tab1")}>Incident Open More Than 24 Hrs</button>
        <button className={activeTab === "tab2" ? "active" : ""} onClick={() => setActiveTab("tab2")}>Unassigned Incident</button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
      <CustomButton label="Showing 4 of 60174 rows" color="green" onClose={() => console.log("Closed: Showing 4 of 60174 rows")} />
      <CustomButton label='Configuration Item "WSIT-CS-DIOS"' color="red" onClose={() => console.log('Closed: Configuration Item "WSIT-CS-DIOS"')} />
      <CustomButton label="Status : New" color="red" onClose={() => console.log("Closed: Status : New")} />
    </div>

      <div className="tab-content">
        {activeTab === "tab1" && (
          <div className="ag-theme-alpine grid-container">
            <AgGridReact
  rowData={data}
  columnDefs={columns}
  pagination={true}
  paginationPageSize={10}
  defaultColDef={{ flex: 1, filter: true }} // Enables filtering for all columns
/>
          </div>
        )}
        {activeTab === "tab2" && <div className="empty-state">No unassigned incidents</div>}
      </div>
    </div>
  );
};

export default App;