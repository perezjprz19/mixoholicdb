import Pages from './pages/Pages';

  
const App = () => {

  return (
    <Router>
    <div className="App">
      <header>
        <h1 className = "title--app">Welcome to MixoholicDB!</h1>
        <p>The only database you will need for mixed drink recipes</p>
      </header>
           <Pages />
      </div>
      </Router>
  );
  
};

export default App;
