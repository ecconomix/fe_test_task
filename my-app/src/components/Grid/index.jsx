import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import theme from './grid.module.css';

function formatValue(item) {
  return `${item.value} $`;
}

class Grid extends React.Component {
  state = {
    columnDefs: [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price', type: 'numberColumn' },
    ],
    defaultColDef: { resizable: false, sortable: true },
    columnTypes: {
      numberColumn: {
        valueFormatter: formatValue
      },
    }
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '100%',
          width: '100%',
          position: 'relative'
        }}
      >
        {this.props.loading && (
          <div className={theme.loader}>
            <span theme={theme.loaderMessage}>Loading...</span>
          </div>
        )}
        {this.props.errorMessage ? (
          <div className={theme.errorContainer}>
            <span>{this.props.errorMessage}</span>
          </div>
        ) : (
          <AgGridReact
            rowData={this.props.rowData}
            onGridReady={this.onGridReady}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            columnTypes={this.state.columnTypes}
          />
        )}
      </div>
    );
  }
}

export default Grid;