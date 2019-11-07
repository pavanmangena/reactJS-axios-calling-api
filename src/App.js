import React from 'react';
import './App.css';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com';
class App extends React.Component {
  state = {
    values  : []
  }
  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(res => res.data)
    .then((data) => {
      this.setState({ values  : data })
      console.log(this.state.values)
     })
  }
  render() {
    return (
      <div>
        <div>
          <h1>React Axios Example</h1>
          {this.state.values.map((keys) => (
            <div>
              <div>
                <h3>{keys.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
