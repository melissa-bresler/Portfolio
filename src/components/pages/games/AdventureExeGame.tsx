import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const AdventureExeGame: React.FC = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "unityBuild/Build/TestMiniGame.loader.js",
    dataUrl: "unityBuild/Build/TestMiniGame.data",
    frameworkUrl: "unityBuild/Build/TestMiniGame.framework.js",
    codeUrl: "unityBuild/Build/TestMiniGame.wasm",
  });

  return (
    <div style={{ width: "100%", height: "90%", paddingLeft: "5%" }}>
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default AdventureExeGame;
