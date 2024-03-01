import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

function Page1() {
    const navigate = useNavigate();
    const location = useLocation(); // useLocation 훅 추가
    const { name } = location.state || { name: "손님" }; // Register 컴포넌트에서 전달된 이름 받기
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
                                <div className="glitch mb-2">
                                <span className="font-DNFBitBitv2" style={{color: "#A3CC40"}}>{name}님의 뇌는<br/>해킹당했습니다<br/></span>
                                </div>

                                <div className="mb-2">
                                    <span style={{color: "#A3CC40"}}>독파민</span>은 우리의 <span style={{color: "#A3CC40"}}>뇌를 해킹</span>하여 <br/>
                                    <span style={{color: "#A3CC40"}}>쾌락</span>에 절여지게 만듭니다. <br/>
                                </div>

                                <div className="mb-2">
                                    이를 방치하면 <br/>
                                    나의 <span style={{color: "#A3CC40"}}>집중력 / 인내심 / 문해력</span>에<br/>
                                    <span style={{color: "#A3CC40"}}>치명적인 손상</span>을 입게 됩니다. <br/>
                                </div>

                                해킹 당한 뇌구조를 되찾기 위해 잃어버린 <br/>
                                <span style={{color: "#A3CC40"}}>PASSWORD</span>를
                                영상 속에서 찾아보세요.<br/>
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
                            <button onClick={checkPassword} className="font-DNFBitBitv2 button-active mt-2 mb-6 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out">
                                확인
                            </button>
                    </div>        
            )}

export { Page1 };