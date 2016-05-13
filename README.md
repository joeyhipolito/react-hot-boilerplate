react-hot-boilerplate
=====================

## Fork details
This fork's purpose is to checks how well react-hot-loader works with react-router and different kinds of components. It contains examples of most types of routes and components react-router has.

## Compatibility Tables

All tested components use `export default connect(..)(Component)`, except for the `SyncReferenceModifiedComponent`.

Legend:
- ✓ = Keeps state after hot-load
- ✗ = Loses state after hot-load
- — = Ignores update completely

Component Types:
- **Sync***: A component included in the initial bundle
- **Async***: A component loaded asynchronously (through `require.ensure`)


### `react-hot-loader/babel`
Current compatibility table for hot-loading with `react-hot-loader/babel`:

Component | Hot Loading
--- | :---:
**Sync** |
SyncIndexRouteComponent | ✓
SyncRouteComponent | ✓
SyncRouteComponentChild | ✓
SyncNonExportedComponent | ✓
SyncReferenceModifiedComponent | ✗
SyncAssignedComponent | ✓
**Aync** |
AsyncIndexRouteComponent | —
AsyncRouteComponent | —
AsyncRouteComponentChild | —

After manually remounting the components by changing routes back and forth all hot-updates were applied to components which ignored updates initially (marked with —).

### `react-hot-loader/webpack`
Not tested.

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

## Related Issues
- It won't work for HoC-wrapped components https://github.com/gaearon/react-hot-boilerplate/pull/61#issuecomment-211107433
- Only exported components get re-rendered https://github.com/gaearon/react-hot-boilerplate/pull/61#issuecomment-212559353
