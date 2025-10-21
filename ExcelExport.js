import React from 'react';
import * as XLSX from 'xlsx';

const ExcelExport = () => {
  const handleExport = async () => {
    const res = await fetch('/api/diagnostics');
    const diagnostics = await res.json();

    const worksheet = XLSX.utils.json_to_sheet(diagnostics);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Diagnostics');
    XLSX.writeFile(workbook, 'hydrogrid_report.xlsx');
  };

  return (
    <div className="excel-export">
      <button onClick={handleExport}>📤 Export Diagnostics to Excel</button>
    </div>
  );
};

export default ExcelExport;
