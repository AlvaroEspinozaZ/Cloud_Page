import {Unity, useUnityContext} from "react-unity-webgl";


function Game3() {
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Memor.loader.js",
        dataUrl: "/Memor.data.unityweb",
        frameworkUrl: "/Memor.framework.js.unityweb",
        codeUrl: "/Memor.wasm.unityweb",
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


export default Game3