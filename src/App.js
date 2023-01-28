import QuestionStart from "./components/QuestionStart/QuestionStart";
import "./App.css"
import QuestionList from "./components/QuestionList/QuestionList";

function App() {
  return (
    <div className="app__ctn">
      {/* <QuestionStart/> */}
      <QuestionList/>
    </div>
  );
}

export default App;
