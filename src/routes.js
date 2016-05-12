import React from 'react'
import SyncIndexRouteComponent from './SyncIndexRouteComponent';
import SyncRouteComponent from './SyncRouteComponent';
import SyncRouteComponentChild from './SyncRouteComponentChild';
import SyncNonExportedComponent from './SyncNonExportedComponent';
import SyncReassignedComponent from './SyncReassignedComponent';
import Layout from './Layout'

export default {
  component: Layout,
  path: '/',
  childRoutes: [
    {
      path: 'sync',
      childRoutes: [
        {
          indexRoute: {
            component: SyncIndexRouteComponent,
          }
        },
        {
          path: 'SyncRouteComponent',
          component: SyncRouteComponent,
        },
        {
          path: 'SyncRouteComponentChild',
          component: SyncRouteComponentChild,
        },
        {
          path: 'SyncNonExportedComponent',
          component: SyncNonExportedComponent,
        },
        {
          path: 'SyncReassignedComponent',
          component: SyncReassignedComponent,
        },
      ],
    },
    {
      path: 'async',
      getIndexRoute (location, cb) {
        require.ensure([], require =>
          cb(null, { component: require('./AsyncIndexRouteComponent').default })
        )
      },
      getChildRoutes (location, cb) {
        require.ensure([], require => {
          cb(null, [
            {
              path: 'AsyncRouteComponent',
              component: require('./AsyncRouteComponent').default,
            },
            {
              path: 'AsyncRouteComponent',
              component: 'div',
            },
            {
              path: 'AsyncRouteComponentChild',
              component: require('./AsyncRouteComponentChild').default,
            }
          ])
        })
      }
    }
  ]
}
