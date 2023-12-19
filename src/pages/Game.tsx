import {Unity, useUnityContext} from "react-unity-webgl";
import './Letras.css'

function Game() {
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Chiqui1.loader.js",
        dataUrl: "/Chiqui1.data.unityweb",
        frameworkUrl: "/Chiqui1.framework.js.unityweb",
        codeUrl: "/Chiqui1.wasm.unityweb",
    });
    function handleClickRefresh(){
        sendMessage("GameController","ReloadScene");
    }
    function handleClickPress(){
        sendMessage("SpawMeteoritos","Press");
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
                    <button onClick={handleClickPress}>Don´tPushMe</button>
                </div>
            </div>

        </>
    );
}


export default Game