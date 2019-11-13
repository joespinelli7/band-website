import React from 'react';

// Creates a Context object. When React renders a component that subscribes to this Context object it will read
// the current context value from the closest matching Provider above it in the tree.
const Context = React.createContext();

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
export class Provider extends React.Component {
  // want this musicList to change based off what page user is viewing.
  state={
    musicList: [
      { track: { track_name: 'abc'} },
      { track: { track_name: 'lets go'} },
      { track: { track_name: 'yah yeet'} }
    ],
    title: ''
  }

  render() {
    {/* value is state that is passed to components */}
    return (
      <Context.Provider value={this.state}>
        {/* b/c Provider wraps around every other component so all other components (children) will be able to access state. */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

// import Consumer into a component (will then become a component that subscribes to context changes (i.e. state changes).)
// to allow it to access the state from the Context.
export const Consumer = Context.Consumer;
