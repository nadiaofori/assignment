import Signup from './components/signup/signup'
import { useContextStore } from './components/store/context'



function App() {
  const { value } = useContextStore();
  return (
    <div className="App">
    
     <Signup/>
    </div>
  );
}

export default App;
