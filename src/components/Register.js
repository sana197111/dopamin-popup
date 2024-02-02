import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const fullText = "의뢰인의 칭호와 아이디를 지정해주세요. <br/> 별명과 이름, 어떤 것이든 상관 없습니다.";
    const [text, setText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!typingComplete) {
            if (text.length < fullText.length) {
                setTimeout(() => {
                    setText(fullText.slice(0, text.length + 1));
                }, 60);
            } else {
                setTypingComplete(true);
            }
        }
    }, [text, typingComplete]);

    const handleSubmit = () => {
        if (title !== '' && name.length >= 2) {
            navigate('/submit', { state: { name: name } }); // 'name'을 Submit 컴포넌트로 전달
        } else {
            setShowWarning(true);
        }
    };
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
            {typingComplete && (
                <div className="flex flex-col items-center">
                    <p className="text-center mb-2 font-DNFBitBitv2 text-xl" style={{color: "#A3CC40"}}>칭호 선택</p>
                    <select className="w-full mb-8 max-w-xs border border-gray-300 hover:border-gray-400 focus:border-A3CC40 text-white bg-black px-4 py-2 mb-4 rounded transition duration-300 ease-in-out" value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option value="" disabled>칭호 선택하기</option>
                        <option value="owner">도파민을 다스리는 현신</option>
                        <option value="slave">도파민 초월자</option>
                        <option value="baemin-vip">배민 1억 VIP 이용객</option>
                        <option value="spicy-killer">엽떡 스파이시 킬러</option>
                        <option value="dopamine-kid">도파민 키드</option>
                    </select>
                    <p className="text-center mb-2 font-DNFBitBitv2 text-xl" style={{color: "#A3CC40"}}>아이디(이름) 입력</p>
                    <input type="text" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)} className="w-full max-w-xs border border-gray-300 hover:border-gray-400 focus:border-A3CC40 text-white bg-black px-4 py-2 mb-4 rounded transition duration-300 ease-in-out" />
                    {showWarning && <p className="text-red-500">칭호를 선택하고, 이름을 두 글자 이상 입력해주세요.</p>}
                    <button onClick={handleSubmit} className="font-DNFBitBitv2 button-active mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out">
                        페이지1으로 이동
                    </button>
                </div>
            )}
        </div>
    );
}

export { Register };