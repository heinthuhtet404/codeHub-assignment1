import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [userInfo,setUserInfo] = useState([]);

  const swiftInfo = (infos) => {
    setUserInfo([...userInfo,infos]);
  }

  return (
    <>
      <div>
        <Form swiftInfo={swiftInfo}/>
        <List userInfo={userInfo}/>
      </div>
    </>
  );
}

export default App;
