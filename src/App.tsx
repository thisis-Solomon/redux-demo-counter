import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

const App = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  return (
    <>
      <Header />
      {isAuth && <UserProfile />}
      {!isAuth && <Auth />}
      <Counter />
    </>
  );
};

export default App;
