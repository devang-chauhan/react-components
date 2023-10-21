import './App.css';
import Badge from './Components/Badge';

function App() {
  return (
    <div className="app">
      <div className="badges">
        <Badge color="red" title="Badge"/>
        <Badge color="yellow" title="Badge"/>
        <Badge color="green" title="Badge"/>
        <Badge color="blue" title="Badge"/>
        <Badge color="indigo" title="Badge"/>
        <Badge color="purple" title="Badge"/>
      </div>

      <div className="badges">
        <Badge shape="pill" color="red" title="Badge"/>
        <Badge shape="pill" color="yellow" title="Badge"/>
        <Badge shape="pill" color="green" title="Badge"/>
        <Badge shape="pill" color="blue" title="Badge"/>
        <Badge shape="pill" color="indigo" title="Badge"/>
        <Badge shape="pill" color="purple" title="Badge"/>
      </div>
     
    </div>
  );
}

export default App;
