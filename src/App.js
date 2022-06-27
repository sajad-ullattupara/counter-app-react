import { useSelector, useDispatch } from 'react-redux';
import { addOne, subOne, addTen, subTen, reset } from './store/Count';
import { Button , Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  return (
    <div>
      <Card className="cnt">
        <Card.Header>Counter</Card.Header>
        <Card.Body>
          <Card.Title>Count is: {count}</Card.Title>
          <button className="btn btn-success" onClick={() => dispatch(addOne())}>Add 1</button>
          <button className="btn btn-danger" onClick={() => dispatch(subOne())}>Decrease 1</button>
          <button className="btn btn-secondary" onClick={() => dispatch(addTen(10))}>Add 10</button>
          <button className="btn btn-dark" onClick={() => dispatch(subTen(10))}>Decrease 10</button>
          <button className="btn btn-primary" onClick={() => dispatch(reset())}>Reset count</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App