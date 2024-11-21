import Login from "./components/Login";
import Profile from "./components/Profile";
import ContextProvider from "./context/useContextProvider"; 

function App() {
  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
