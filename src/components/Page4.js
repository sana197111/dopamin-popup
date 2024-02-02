import React from 'react';
import "./style.css";

function Page4() {
    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-4">
                        
                        <h1 className="mt-32 mb-4 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            리셋<br/>
                        </h1>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            [ Reset ]
                        </p>
                        <p className="text-center mb-6" style={{color: "#ffffff"}}>
                        독파민으로 인해 손상된 뇌구조는 <br/>
                        <span style={{color: "#A3CC40"}}>자기구속 : Self-Binding 을 통해 </span><br/>
                        뇌구조를 리셋시켜 회복 할 수 있습니다. <br/><br/>
                        묵묵한 페이지에서 제공하는 <br/>
                        <span style={{color: "#A3CC40"}}>독파 System</span>을 통해<br/>
                        독파민의 <span style={{color: "#A3CC40"}}>쾌락의 늪</span>에서 즉시 벗어나세요<br/><br/>
                        [ 독파 System 1. Self-Binding 코칭제공 ] <br/>
                        [ 독파 System 2. 클라시쿠스 세미나 제공 ]
                        </p>
                    </div>        
            )}

export { Page4 };