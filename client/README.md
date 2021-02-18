## Redux

All redux related files are stored within `src/context/`.

### Redux Folder Structure Overview

The context directory is structured as follows:

```
├── _actions
│   ├── alert.actions.js
│   └── user.action.js
├── _constants
│   ├── alert.constants.js
│   └── user.constants.js
├── _helpers
│   ├── auth-header.js
│   ├── history.js
│   ├── mock-backend.js
│   └── store.js
├── _reducers
│   ├── alert.reducer.js
│   ├── authentication.reducer.js
│   ├── registration.reducer.js
│   └── user.reducer.js
└── _services
    └── user.service.js
```

- `_actions`folder
  - contains all the _action creators_ for the project
    - more information on _action creators_ can be found in the official [redux documentation](https://redux.js.org/basics/actions)
  - each file is named with the `[NAME].action.js` (e.g. `alert.action.js` contains action creators related to alerts)
    - `alert.action.js` contains _action creators_ associated with toast notifications
    - `user.action.js` contains _action creators_ associated with registering, login, and logout functionality
- `_constants` folder
  - contains all of the redux action type constants used by redux _action creators_ and _reducers_.
  - each file is named with the `[NAME].constants.js` (e.g. `alert.constant.js` contains constants related to alerts)
- `_helpers`
  - contains pieces that don't fit into other folders but don't justify having a folder of their own
- `_reducers` folder
  - contains all the Redux reducers for the project
  - each reducer updates a different part of the application state in response to dispatched redux actions.
- `_services` folder
  - encapsulates all http communication with backend apis for the application


