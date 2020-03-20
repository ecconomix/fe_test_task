import React from 'react';
import Grid from './Grid/index.jsx';
import theme from './app.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={theme.appContainer}>
        <header className={theme.header}>
          Simple Ag-grid table
        </header> 
        <section className={theme.buttonContainer}>
        <button className={theme.button}>Fetch data</button>
        <button className={theme.button}>Clear data</button>
        </section>
        <section className={theme.gridContainer}>
          <Grid />
        </section>

        <section className={theme.taskContainer}>
          <h1 className={theme.taskHeader}>You should implement following:</h1>
          <ol>
            <li>Fetch rows data by clicking on `Fetch data` button using axios and saga (saga and axios are already added to package.json and configured)</li>
            <li>Store the data into redux store (redux is already added and configured)</li>
            <li>Pass data to Grid component through container</li>
            <li>Configure Ag grid table and render fetched data into it</li>
            <li>Create new branch and push the code to github repository when you finished the work</li> 
          </ol>

          <h2>Requirements</h2>
          <ul>
            <li>Columns must be sortable</li>
            <li>Columns with type number must be formatted with `$` (e.g 72000 $)</li>
            <li>Columns should stretch for all width of the table</li>
            <li>You should be able to clear data from table by clicking on `Clear data` button</li>
          </ul>

          <h2>API</h2>
          <ul>
            <li>https://api.myjson.com/bins/15psn9</li>
          </ul>

          <h2>Documentation</h2>
          <ul>
            <li><a rel="noopener noreferrer" href="https://www.ag-grid.com/documentation-main/documentation.php" target="_blank">Ag-grid docs</a></li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
