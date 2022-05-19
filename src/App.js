import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello!</h2>
}

const Field = () => {
  const styleField = {
    width: '300px'
  };
  return <input 
          placeholder='Type here' 
          type='text'
          style={styleField}/>
}

function Btn() {
  const text = 'Sign in';
  const logged = false;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
