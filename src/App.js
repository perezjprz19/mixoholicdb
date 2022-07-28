import Pages from './pages/Pages';

  
const App = () => {

  return (
    
    <div className="App">
      <header>
        <h1 className = "title--app">Welcome to MixoholicDB!</h1>
        <p>The only database you will need for mixed drink recipes</p>
      </header>
           <Pages />
      </div>

  );
  
};

export default App;
