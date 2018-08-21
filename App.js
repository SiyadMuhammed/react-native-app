import React from 'react';
import { StyleSheet } from 'react-native';
import Main from './app/components/main/main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app/reducers';
import { initialState } from './app/mocks/init-store'

const store = createStore(rootReducer, initialState);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main style={styles.container} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
