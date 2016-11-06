import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App';

class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default TestComponent;
