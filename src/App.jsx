import Player from './components/Player.jsx';
import TimerComponent from './components/TimerComponent.jsx'
import Result from './components/Result.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerComponent title={"Easy"} targetTime={1}></TimerComponent>
        <TimerComponent title={"Medium"} targetTime={5}></TimerComponent>
        <TimerComponent title={"Hard"} targetTime={10}></TimerComponent>
        <TimerComponent title={"Pro"} targetTime={15}></TimerComponent>
        <Result />
      </div>
    </>
  );
}

export default App;
