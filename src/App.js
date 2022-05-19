import logo from './logo.svg';
import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
    return <h2>Hello!</h2>
}

// const Field = () => {
//     const styleField = {
//       width: '300px'
//     };
//     return <input 
//             placeholder='Type here' 
//             type='text'
//             style={styleField}/>
// }

class Field extends Component {
    render() {
        const inputField = 
        <div>
            <input type='text'/>
        </div>
        return inputField;
    }
}

function Btn() {
    const text = 'Sign in';
    const logged = false;
    return <button>{logged ? 'Enter' : text}</button>
}

function App() {
    return (
        <div className="App">
            <StrictMode>
                <Header/>
            </StrictMode>
            <Field/>
            <Btn/>
        </div>
    );
}

export {Header};
export default App;
