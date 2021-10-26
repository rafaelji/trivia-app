import Router from "./Router";
import ProvideData from "./providers/data";

function App() {
  return (
    <ProvideData>
      <Router />
    </ProvideData>
  );
}

export default App;
