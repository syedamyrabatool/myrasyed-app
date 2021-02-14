import React from 'react';
import SC from './styles.js';
import UsersList from './Components/UsersList/index.js';
import {Provider} from 'react-redux';
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
       <SC.App>
        <UsersList enableSearch={true} />
      </SC.App>
    </Provider>
  );
}

export default App;
