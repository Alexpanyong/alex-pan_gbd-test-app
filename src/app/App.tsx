import React from 'react';
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./store/actions/actions";
import NavBar from './components/NavBar/NavBar';
import Home from './modules/Home/Home';
import Footer from './components/Footer/Footer';

interface Props {
  
}

const App = (props: Props): any => {
  const dispatch = useDispatch();
  const app = useSelector((state: any) => state.app);

  React.useEffect(() => {
    /* * Initialization - fetch data from api * */
    dispatch(actions.requestBooksData());
    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar {...app} />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
