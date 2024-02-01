import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import { PrivacyPolicyPopup } from './PrivacyPolicyPopup';

function Introduction() {
    const fullText = "도파민 문제 해결을 위해<br/>독파민 팝업에 참여해주셔서 감사합니다.<br/><br/>해킹된 도파민 뇌를 해독하기 위해서는<br/>의뢰인의 정보 등록이 필요합니다.";
    const [text, setText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [isAgreed, setIsAgreed] = useState(false);

    const handleAgreementChange = (event) => {
        setIsAgreed(event.target.checked);
    };

    const handleClick = () => {
        if (!isAgreed) {
            alert('개인정보 이용정책에 동의해주세요.');
        }
    };

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (!typingComplete) {
          if (text.length < fullText.length) {
            setTimeout(() => {
              setText(fullText.slice(0, text.length + 1));
            }, 60);
          } else {
            setTypingComplete(true);
            setTimeout(() => setShowPolicy(true), 500); // 타이핑이 끝난 후 0.5초 후에 개인정보 정책 표시
          }
        }
    }, [text, typingComplete]);

    return (
        <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-gif">
                <h1 className="mb-10 text-center font-DNFBitBitv2 text-4xl" style={{
                    background: "linear-gradient(#75BF42, #A3CC40)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    DOCKPAMINE<br/>
                </h1>
                <h3 className="mb-8 text-center text-lg" style={{color: "#ffffff"}}>
                    <span dangerouslySetInnerHTML={{__html: text}}></span>
                    {typingComplete && <span className="blinking-cursor-white">|</span>}
                </h3>
                {showPolicy && (
                    <div className="privacy-policy flex flex-col items-center" style={{ opacity: showPolicy ? 1 : 0, transition: 'opacity 1s ease', color: "#A3CC40", textAlign: "center" }}>
                        <div className="my-2 w-full text-center">
                            <input type="checkbox" id="privacyPolicy" name="privacyPolicy" onChange={handleAgreementChange} />
                            <label htmlFor="privacyPolicy" className="ml-2">개인정보 이용정책에 동의함</label>
                            <button style={{ textDecoration: "underline", border: "none", background: "none" }} onClick={handleShowPopup}>[보기]</button>
                        </div>
                        <Link to={isAgreed ? "/register" : "#"} className="my-2 w-full text-center">
                            <button className="font-DNFBitBitv2 button-active mt-4 mb-4 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" onClick={handleClick}>
                                체험 시작하기
                            </button>
                        </Link>
                    </div>
                )}
                {showPopup && <PrivacyPolicyPopup onClose={handleClosePopup} />}
            </div>        
    );
}

export { Introduction };
