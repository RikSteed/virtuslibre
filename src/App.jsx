import { useContext } from "react";
import { StoreContext } from "./provider/StoreProvider";

const App = () => {
  const { I18N } = useContext(StoreContext);
  return <div>{I18N.APP.TEST}</div>;
};

export default App;
