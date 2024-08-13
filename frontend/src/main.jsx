import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import {Provider} from "react-redux";
import { store } from './appRedux/store.js';
import {disableReactDevTools} from "@fvilers/disable-react-devtools"

// enable in dev mode and remove in production
// if (process.env.NODE_ENV === 'production') {
//   disableReactDevTools();
// }

// disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
