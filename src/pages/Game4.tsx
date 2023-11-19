import {Unity, useUnityContext} from "react-unity-webgl";


function Game4() {
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Question.loader.js",
        dataUrl: "/Question.data.unityweb",
        frameworkUrl: "/Question.framework.js.unityweb",
        codeUrl: "/Question.wasm.unityweb",
    });
    function handleClickRefresh(){
        sendMessage("GameManager","ReloadScene");
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
                </div>
            </div>

        </>
    );
}


export default Game4