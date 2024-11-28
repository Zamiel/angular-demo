## TableErrors
### Component
Container to manage an ag-grid

- We uses an Observable with the async pipe for a more reactive flow Data side.
- We uses a Subscribe for the dependencies since it's a value to format all the value inside the response.
- We uses an ag-grid, since we receive only the id for status and priority inside the data. We need to uses an override of cellRenderer to return the name and not the id.  
  see (https://www.ag-grid.com/angular-data-grid/component-cell-renderer/)
