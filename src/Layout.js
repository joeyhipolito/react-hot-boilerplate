import React from 'react';
import { Link } from 'react-router';

console.log('Layout evaluated')
function Layout({ children }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Try editing some of these components to see if they can be hot-loaded.</p>
      <p>Hot-loading works if component updates, but the counter of the component doesn't reset after the change.</p>
      <ul>
        <li>
          Sync
          <ul>
            <li><Link to="/sync" activeStyle={{ color: 'red' }}>SyncIndexRouteComponent</Link></li>
            <li><Link to="/sync/SyncRouteComponent" activeStyle={{ color: 'red' }}>SyncRouteComponent</Link></li>
            <li><Link to="/sync/SyncRouteComponentChild" activeStyle={{ color: 'red' }}>SyncRouteComponentChild</Link></li>
            <li><Link to="/sync/SyncNonExportedComponent" activeStyle={{ color: 'red' }}>SyncNonExportedComponent</Link></li>
            <li><Link to="/sync/SyncReferenceModifiedComponent" activeStyle={{ color: 'red' }}>SyncReferenceModifiedComponent</Link></li>
            <li><Link to="/sync/SyncAssignedComponent" activeStyle={{ color: 'red' }}>SyncAssignedComponent</Link></li>
          </ul>
        </li>
        <li>
          Async
          <ul>
            <li><Link to="/async" activeStyle={{ color: 'red' }}>AsyncIndexRouteComponent</Link></li>
            <li><Link to="/async/AsyncRouteComponent" activeStyle={{ color: 'red' }}>AsyncRouteComponent</Link></li>
            <li><Link to="/async/AsyncRouteComponentChild" activeStyle={{ color: 'red' }}>AsyncRouteComponentChild</Link></li>
          </ul>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Layout
