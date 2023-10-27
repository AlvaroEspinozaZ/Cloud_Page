import {Unity, useUnityContext} from "react-unity-webgl";


function Game() {
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/MIo.loader.js",
        dataUrl: "/MIo.data.unityweb",
        frameworkUrl: "/MIo.framework.js.unityweb",
        codeUrl: "/MIo.wasm.unityweb",
    });
    function handleClickRefresh(){
        sendMessage("GameController","ReloadScene");
    }
    function handleClickQuit(){
        sendMessage("GameController","ReloadScene");
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <div className="centered-content">
                    <button onClick={handleClickRefresh}>Actualizar</button>
                    </div>
                    <button onClick={handleClickQuit}>Quit</button>
                </div>
            </div>

        </>
    );
}


export default Game