import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import poster from './poster.png';

function Main() {
    const fullText = "나의 뇌구조를 독파하다.<br/>MZ를 위한 도파민 해독서";
    const [text, setText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        if (!typingComplete) {
          if (text.length < fullText.length) {
            setTimeout(() => {
              setText(fullText.slice(0, text.length + 1));
            }, 100);
          } else {
            setTypingComplete(true);
          }
        }
    }, [text, typingComplete]);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <>
            {!isImageLoaded && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `url(${poster}) center center / cover no-repeat, #000000`
                }}>
                    <img src={poster} onLoad={handleImageLoad} style={{ display: 'none' }} alt="poster" />
                </div>
            )}
            {isImageLoaded && (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-gif">
                        <h1 className="mb-10 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            독파민 팝업<br/>
                        </h1>
                        <h3 className="mb-8 text-center text-4xl" style={{color: "#A3CC40"}}>
                            <span dangerouslySetInnerHTML={{__html: text}}></span>
                            {typingComplete && <span className="blinking-cursor">|</span>}
                        </h3>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            묵묵한 페이지
                        </p>
                        <h5 className="mb-2 text-center text-l" style={{color: "#ffffff"}}>
                            Page 1 해킹 | Page 2 에러 <br/> Page 3 스캔 | Page 4 리셋
                        </h5>
                        <Link to="/introduction">
                            <button className="button-active mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out">
                                체험 시작하기
                            </button>
                        </Link>
                    </div>        
            )}
        </>
    );
}

export { Main };