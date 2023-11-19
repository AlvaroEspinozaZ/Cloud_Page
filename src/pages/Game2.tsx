import {Unity, useUnityContext} from "react-unity-webgl";


function Game2() {
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Chiqui2.loader.js",
        dataUrl: "/Chiqui2.data.unityweb",
        frameworkUrl: "/Chiqui2.framework.js.unityweb",
        codeUrl: "/Chiqui2.wasm.unityweb",
    });
    function handleClickTrampa1(){
        sendMessage("MapController","Trampa1");
    }
    function handleClickTrampa2(){
        sendMessage("MapController","Trampa2");
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <div className="centered-content">
                    <button onClick={handleClickTrampa1}>Trampa1</button>
                    </div>
                    <div className="centered-content">
                    <button onClick={handleClickTrampa2}>Trampa2</button>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Game2