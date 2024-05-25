
import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function HandleButton(){
    function Output({linkData , linkSC}){
        return(
            <div className="grid mx-4 text-center" >
                <NavLink to={linkData}>
                <button className="my-2 p-1 rounded-sm hover:bg-gray-800 w-full hover:text-gray-300 " > 
                 Data Visualization </button>
                </NavLink>
                <a href={linkSC}>
            <button className="my-2 p-1 rounded-sm hover:bg-gray-800 w-[97.5%] hover:text-gray-300">
            Source Code
                </button>
                </a>
            </div>
        )
    };

    const [stateButton, useStateButton] = useState({
        state1 : false,
        state2 : false,
        state3 : false,
        state4 : false,
        state5 : false,
        state6 : false,
        state7 : false,
        state8 : false,
        state9 : false,
        state10 : false,
        state11 : false,
        state12 : false,
    });
 return {Output, stateButton}
}

function Contents(){
    const stateBtn = HandleButton().stateButton;
    const OutputState = HandleButton().Output

    const [Menu, setMenu] = useState({
        W1 : null,
        W2 : null,
        W3 : null,
        W4 : null,
        W5 : null,
        MP1 : null,
        MP2 : null,
        MP3 : null, 
        MP4 : null,
        MP5 : null,
        UAP1 : null,
        UAP2 : null,

    });

    const Button = ({handleButton, Title}) => {
        return (
        <div className=" text-center content-center h-10 px-6 font-semibold rounded-md text-gray-300 m-3 bg-gray-500 hover:bg-gray-800 hover:text-gray-400">
            <button className="h-full w-full" type="button" onClick={handleButton}>{Title}</button>
        </div>
        )
    }
 
    function Wave1(){
        function handleButtonW1(){
            stateBtn.state1 = !stateBtn.state1;
            if(stateBtn.state1 === true){
                setMenu({
                    ...Menu,
                    W1 : <OutputState linkData={'wave-1'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/W1'}/>
                })
            } else {
                setMenu({
                    ...Menu,
                    W1 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonW1} Title={"Wave 1"}/>}
                {Menu.W1}
            </div>
        )
    }
    
    function Wave2(){
        function handleButtonW2(){
            stateBtn.state2 = !stateBtn.state2;
            if(stateBtn.state2 === true){
              setMenu({
                ...Menu,
                W2 : <OutputState linkData={'wave-2'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/W2'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  W2 : null
                })
            }
        }
        return(
            <div>
                <Button handleButton={handleButtonW2} Title={"Wave 2"}/>
                {Menu.W2}
            </div>
        )
    }
    
    function Wave3(){
        function handleButtonW3(){
            stateBtn.state3 = !stateBtn.state3;
            if(stateBtn.state3 === true){
              setMenu({
                ...Menu,
                W3 : <OutputState linkData={'wave-3'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/W3'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  W3 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonW3} Title={"Wave 3"}/>}
                {Menu.W3}
            </div>
        )
    }
    
    function Wave4(){
        function handleButtonW4(){
            stateBtn.state4 = !stateBtn.state4;
            if(stateBtn.state4 === true){
              setMenu({
                ...Menu,
                W4 : <OutputState linkData={'wave-4'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/W4'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  W4 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonW4} Title={"Wave 4"}/>}
                {Menu.W4}
            </div>
        )
    }
 
    function Wave5(){
        function handleButtonW5(){
            stateBtn.state5 = !stateBtn.state5;
            if(stateBtn.state5 === true){
              setMenu({
                ...Menu,
                W5 : <OutputState linkData={'wave-5'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/W5'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  W5 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonW5} Title={"Wave 5"}/>}
                {Menu.W5}
            </div>
        )
    }

    function ModernPhysics1(){
        function handleButtonMP1(){
            stateBtn.state6 = !stateBtn.state6;
            if(stateBtn.state6 === true){
              setMenu({
                ...Menu,
                MP1 : <OutputState linkData={'modern-physics-1'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/MP1'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  MP1 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonMP1} Title={"Modern Physics 1"}/>}
                {Menu.MP1}
            </div>
        )
    }

    function ModernPhysics2(){
        function handleButtonMP2(){
            stateBtn.state7 = !stateBtn.state7;
            if(stateBtn.state7 === true){
              setMenu({
                ...Menu,
                MP2 : <OutputState linkData={'modern-physics-2'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/MP2'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  MP2 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonMP2} Title={"Modern Physics 2"}/>}
                {Menu.MP2}
            </div>
        )
    }

    function ModernPhysics3(){
        function handleButtonMP3(){
            stateBtn.state8 = !stateBtn.state8;
            if(stateBtn.state8 === true){
              setMenu({
                ...Menu,
                MP3 : <OutputState linkData={'modern-physics-3'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/MP3'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  MP3 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonMP3} Title={"Modern Physics 3"}/>}
                {Menu.MP3}
            </div>
        )
    }

    function ModernPhysics4(){
        function handleButtonMP4(){
            stateBtn.state9 = !stateBtn.state9;
            if(stateBtn.state9 === true){
              setMenu({
                ...Menu,
                MP4 : <OutputState linkData={'modern-physics-4'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/MP4'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  MP4 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonMP4} Title={"Modern Physics 4"}/>}
                {Menu.MP4}
            </div>
        )
    }

    function ModernPhysics5(){
        function handleButtonMP5(){
            stateBtn.state10 = !stateBtn.state10;
            if(stateBtn.state10 === true){
              setMenu({
                ...Menu,
                MP5 : <OutputState linkData={'modern-physics-5'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/MP5'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  MP5 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonMP5} Title={"Modern Physics 5"}/>}
                {Menu.MP5}
            </div>
        )
    }
    function UAPSnell(){
        function handleButtonSnell(){
            stateBtn.state11 = !stateBtn.state11;
            if(stateBtn.state11 === true){
              setMenu({
                ...Menu,
                UAP1 : <OutputState linkData={'UAP-Snellius'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/UAP/Snellius'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  UAP1 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonSnell} Title={"UAP 1"}/>}
                {Menu.UAP1}
            </div>
        )
    }
    function UAPMilikan(){
        function handleButtonMilikan(){
            stateBtn.state12 = !stateBtn.state12;
            if(stateBtn.state12 === true){
              setMenu({
                ...Menu,
                UAP2 : <OutputState linkData={'UAP-Milikan'} linkSC={'https://github.com/Bagus135/fislab-II/tree/main/src/fislab/UAP/Milikan'}/>
              })
            } else {
                setMenu({
                  ...Menu,
                  UAP2 : null
                })
            }
        }
        return(
            <div>
                {<Button handleButton={handleButtonMilikan} Title={"UAP 2"}/>}
                {Menu.UAP2}
            </div>
        )
    }
 
    return (
        <div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <Wave1/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <Wave2/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <Wave3/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <Wave4/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <Wave5/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <ModernPhysics1/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <ModernPhysics2/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <ModernPhysics3/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <ModernPhysics4/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <ModernPhysics5/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <UAPSnell/>
            </div>
            <div className="bg-gray-600 rounded-md p-1 mx-10 mt-3 ">
            <UAPMilikan/>
            </div>
        </div>
    )
}

function Home(){
    return(
    <div className="tracking-wide font-roboto min-h-screen grid content-start dark box-border bg-gray-900 scrollbar-hide">
        <div className="grid">
            <h1 className="text-center text-50 text-5xl mt-5 font-bold text-slate-300">FISLAB II</h1>
            <h2 className="text-center text-gray-300 text-xl">WAVE AND MODERN PHYSICS</h2>
            <h3 className="text-center text-gray-300 font-mono italic text-xl">"2 SKS yang setara dengan Tugas Akhir"</h3>
        </div>
        <div className="flex flex-col justify-center m-2 pb-10">
        <h3 className="text-center text-gray-300 text-xl mt-10">Content</h3>
        <Contents/>
        </div>
        <h2 className="text-center flex justify-center self-center items-center  text-gray-300 text-xl mb-5">Created by<h3 className="text-gray-500 font-bold ml-2"> Bagus Mustaqim</h3></h2>
    </div>
    )
}

export default Home