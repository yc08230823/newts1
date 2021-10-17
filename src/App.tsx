import React from "react";
import { useAuth } from "context/auth-context";
import AnauthenticatedApp from "anauthenticated-app";
import UnauthenticatedApp from "unauthenticated-app";
const App = () => {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListenScreen /> */}
      {user ? <AnauthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
};

export default App;
