import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";

function Page1() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(['', '', '', '']);

    const updateInput = (index, value) => {
        let newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        // Automatically move focus to next input if not the last one
        if (index < 3 && value) {
            document.getElementById(`input-${index + 1}`).focus();
        }
    };

    const checkPassword = () => {
        if (inputs.join('').toLowerCase() === 'read') {
            alert('정답입니다! Page2로 이동해주세요...');
            navigate('/page2');
        } else {
            alert('잘못된 패스워드입니다. 다시 시도해주세요!');
            setInputs(['', '', '', '']); // Reset inputs
        }
    };

    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-1">
                        <h1 className="mt-32 mb-6 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            해킹<br/>
                        </h1>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            [ Hacking ]
                        </p>
                            <p className="text-center mb-6" style={{color: "#ffffff"}}>
                                <div className="glitch">
                                    <span className="font-DNFBitBitv2" style={{color: "#A3CC40"}}>00님의 뇌는<br/>해킹당했습니다<br/><br/></span>
                                </div>
                                독이 되는 <span style={{color: "#A3CC40"}}>독파민</span>은<br/>
                                우리의 <span style={{color: "#A3CC40"}}>뇌구조에 침투</span>하여 <br/>
                                오직 <span style={{color: "#A3CC40"}}>쾌락</span>만을 <span style={{color: "#A3CC40"}}>추구</span>하게 만듭니다. <br/>
                                <span style={{color: "#A3CC40"}}>쾌락</span>을 통해 <span style={{color: "#A3CC40"}}>잠깐</span>은 즐거울 수 있으나, <br/>
                                이는 결국 우리에게 더욱 큰 <span style={{color: "#A3CC40"}}>고통</span>으로 돌아옵니다 <br/>
                                해킹 당한 뇌구조를 되찾기 위해서 <br/>
                                <span style={{color: "#A3CC40"}}>PASSWORD</span>를 찾아보세요.<br/>
                            </p>
                            <div className="password-container">
                                {inputs.map((input, index) => (
                                    <input
                                        key={index}
                                        id={`input-${index}`}
                                        type="text"
                                        placeholder="•"
                                        value={input}
                                        onChange={(e) => updateInput(index, e.target.value)}
                                        maxLength="1"
                                        className="password-input"
                                        onKeyUp={(e) => e.key === 'Enter' && checkPassword()}
                                    />
                                ))}
                            </div>
                            <button onClick={checkPassword} className="font-DNFBitBitv2 button-active mt-2 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out">
                                확인
                            </button>
                    </div>        
            )}

export { Page1 };