import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector((state) => { return state.auth.isAuth; });
  console.log(isAuth);
  const mainComponent = isAuth ? <UserProfile /> : <Auth />;

  return (
    <Fragment>
      <Header />
      { mainComponent }
      <Counter />
    </Fragment>
  );
}

export default App;
