import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListenScreen } from "screens/project-list";
function AnauthenticatedApp() {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListenScreen />
    </div>
  );
}

export default AnauthenticatedApp;
