import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  function incrementHandler() {
    dispatch(counterAction.increment());
  }

  function increaseHandler() {
    dispatch(counterAction.increase(10));
  }

  function decrementHandler() {
    dispatch(counterAction.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
