import './App.css';
import Badge from './Components/Badge';

function App() {
  return (
    <div className="app">
      <div className="badges">
        <Badge color="red">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple">Badge</Badge>
      </div>

      <div className="badges">
        <Badge shape="pill" color="red">Badge</Badge>
        <Badge shape="pill" color="yellow">Badge</Badge>
        <Badge shape="pill" color="green">Badge</Badge>
        <Badge shape="pill" color="blue">Badge</Badge>
        <Badge shape="pill" color="indigo">Badge</Badge>
        <Badge shape="pill" color="purple">Badge</Badge>
      </div>
     
    </div>
  );
}

export default App;
