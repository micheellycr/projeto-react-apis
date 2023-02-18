import GlobalState from "./Contexts/GlobalState";
import Router from "./Routes/Router";

function App() {
  
  return (

      <GlobalState>
         <Router />
      </GlobalState>
     
    
  );
}

export default App;
