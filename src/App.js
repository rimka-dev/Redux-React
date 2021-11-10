import './App.css';
import PhoneContainer from './components/PhoneContainer';
import store from './redux/store';
import {Provider} from 'react-redux'; // pour connecter redux à react on installe (npm i react-redux)
import TvContainer from './components/TvContainer';
import CommentsContainer from './components/CommentsContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <h1 className="text-center bg-light m-1">Redux</h1>
      <div className="row">
        <div className="col-6"><PhoneContainer/></div>
        <div className="col-6"> <TvContainer/></div>
        <CommentsContainer/>
      </div>
      
     
    </div>
    </Provider>
  );
}

export default App;
