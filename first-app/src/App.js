import logo from './logo.svg';
import './App.css';

function App() {

  const firstName = 'NARUTO';
  const lastName = 'UZUMAKI';
  const Age = '28';
  const Job = 'Team Leader';
  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`
  const inputPlaceholder = "ENTER YOUR NAME"
  const mArr = [1,5,4,6]
  

  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName,lastName)}</h3>
      <p>Age: {Age}</p>
      <p>Job: {Job}</p>
      {mArr[3]}

      <input placeholder={inputPlaceholder}
      />
    </div>
  );
}

export default App;
