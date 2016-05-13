import React from 'react'
import SyncIndexRouteComponent from './SyncIndexRouteComponent';
import SyncRouteComponent from './SyncRouteComponent';
import SyncRouteComponentChild from './SyncRouteComponentChild';
import SyncNonExportedComponent from './SyncNonExportedComponent';
import SyncReferenceModifiedComponent from './SyncReferenceModifiedComponent';
import SyncAssignedComponent from './SyncAssignedComponent';
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
          path: 'SyncReferenceModifiedComponent',
          component: SyncReferenceModifiedComponent,
        },
        {
          path: 'SyncAssignedComponent',
          component: SyncAssignedComponent,
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
