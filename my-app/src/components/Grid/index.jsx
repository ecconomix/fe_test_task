import React from 'react';
import { AgGridReact } from 'ag-grid-react';

class Grid extends React.Component {
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '100%',
          width: '100%' 
        }}
      >
        <AgGridReact
          rowData={[]} 
        />
      </div>
    );
  }
}

export default Grid;