import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import "./style.css";

function Page2Test() {
    // 각 문제에 대한 선택 상태를 별도로 관리
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [remainingTime, setRemainingTime] = useState(150); // 2분 = 120초
    const [progressWidth, setProgressWidth] = useState(100); // 진행 바의 초기 너비는 100%
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer); // 타이머 정지
                    navigate('/page3'); // 시간이 다 되면 자동으로 다음 페이지로 이동
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, [navigate]);

    useEffect(() => {
        // 남은 시간에 따라 진행 바의 너비를 업데이트
        setProgressWidth((remainingTime / 150) * 100);
    }, [remainingTime]);

    // 각 문제에 대한 선택 처리 함수
    const handleOptionSelect1 = (option) => {
        setSelectedOption1(selectedOption1 === option ? null : option);
    };

    const handleOptionSelect2 = (option) => {
        setSelectedOption2(selectedOption2 === option ? null : option);
    };

    const handleSubmit = () => {
        if (!selectedOption1 || !selectedOption2) {
            alert("모든 옵션을 선택해주세요.");
        } else if (!isSubmitted) {
            alert("정답이 아닙니다.");
            setIsSubmitted(true);
        } else {
            navigate('/page3'); // '/page3'로 페이지 이동
        }
    };

    // 남은 시간을 분:초 형식으로 변환하는 함수
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // 남은 시간에 따라 텍스트 색상 및 애니메이션 클래스를 결정하는 함수
    const getTimeStyle = () => {
        if (remainingTime <= 30) {
            return "timer-text-alert animate-pulse"; // Tailwind CSS의 애니메이션 효과 사용
        }
        return "timer-text-normal";
    };

    return (
        <div className="p-12 md:p-12 min-h-screen overflow-y-auto max-h-screen flex flex-col items-center bg-black background-2">
            <div style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
                <div className={`font-lab-digital flex justify-center items-center ${getTimeStyle()} w-24`} style={{ padding: '2px 4px', backgroundColor: '#fff', borderRadius: '10px'}}>
                    {formatTime(remainingTime)}
                </div>
            </div>
            <div className="timer-bar-container" style={{ position: 'fixed', bottom: '5px', left: '50%', transform: 'translateX(-50%)', width: '320px', zIndex: '1000'}}>
                <div style={{ width: `${progressWidth}%`, height: '20px', backgroundColor: '#8ff90e', borderRadius: '5px', transition: 'width 1s ease-in-out'}}></div>
            </div>
            <div className="image-container pl-4 pr-4 pt-2 mt-2">
                <p className="mt-28">1. 다음은 근로기준법 규정 중 일부이다. ( ) 안에 들어갈 말로 가장 적절한 것은?</p>
                <div className="question-box">
                    <strong>제 60조(연차 유급휴가)<br/></strong>
                    1) 사용자는 1년간 80퍼센트 이상 출근한 근로자에게 10일의 유급휴가를 주어야 한다.<br/>
                    2) 사용자는 3년 이상 계속하여 근로한 근로자에게는 제 1항에 따른 휴가에 최초 1년을 
                    초과하는 계속 근로 연수 매 2년에 대하여 1일을 가산한 유급휴가를 주어야 한다.
                </div>
                <div className="question-box">
                    <p>나는 올해 입사 만 13년차니까 이번 해에는 급여 산정에 포함되는 연차를 최대 (___)일 쓸 수 있겠군</p>
                </div>
                <div className="mb-8">
                    <div onClick={() => handleOptionSelect1('A')} className={`option mt-4 mb-1 text-left ${selectedOption1 === 'A' ? 'text-red-500' : 'text-black'}`}>① 10일</div>
                    <div onClick={() => handleOptionSelect1('B')} className={`option mb-1 text-left ${selectedOption1 === 'B' ? 'text-red-500' : 'text-black'}`}>② 11일</div>
                    <div onClick={() => handleOptionSelect1('C')} className={`option mb-1 text-left ${selectedOption1 === 'C' ? 'text-red-500' : 'text-black'}`}>③ 12일</div>
                    <div onClick={() => handleOptionSelect1('D')} className={`option text-left ${selectedOption1 === 'D' ? 'text-red-500' : 'text-black'}`}>④ 13일</div>
                </div>
                {isSubmitted && selectedOption1 === 'A' && (
                    <div className="text-red-500 mb-12">
                        <p>틀렸습니다! 정답은 16일입니다. <br/> 만약 현실이였다면 독파민 때문에 6일의 연차를 잃어버렸습니다!</p>
                    </div>
                )}
                {isSubmitted && selectedOption1 === 'B' && (
                    <div className="text-red-500 mb-12">
                        <p>틀렸습니다! 정답은 16일입니다. <br/> 만약 현실이였다면 독파민 때문에 5일의 연차를 잃어버렸습니다!</p>
                    </div>
                )}
                {isSubmitted && selectedOption1 === 'C' && (
                    <div className="text-red-500 mb-12">
                        <p>틀렸습니다! 정답은 16일입니다. <br/> 만약 현실이였다면 독파민 때문에 4일의 연차를 잃어버렸습니다!</p>
                    </div>
                )}
                {isSubmitted && selectedOption1 === 'D' && (
                    <div className="text-red-500 mb-12">
                        <p>틀렸습니다! 정답은 16일입니다. <br/> 만약 현실이였다면 독파민 때문에 3일의 연차를 잃어버렸습니다!</p>
                    </div>
                )}
                <p>2. 다음은 근로기준법 규정 중 일부이다. ( ) 안에 들어갈 말로 가장 적절한 것은?</p>
                <div className="question-box">
                    <strong>제 56조(연장 · 야간 및 휴일 근로)<br/></strong>
                    (1) 사용자는 연장근로에 대하여는 통상임금의 100분의 50 이상을 가산하여 근로자에게 
                    지급하여야 한다.<br/>
                    (2) 제 1항에도 불구하고 사용자는 휴일근로에 대하여는 다음 각 호의 기준에 따른 금액 이상을 
                    가산하여 근로자에게 지급하여야 한다.<br/>
                      ㄱ. 8시간 이내의 휴일근로: 통산임금의 100분의 50<br/>
                      ㄴ. 8시간을 초과한 휴일근로: 통상임금의 100분의 100<br/>
                    (3) 사용자는 야간근로(오후 10시부터 다음 날 오전 6시 사이의 근로)에 대하여는 통상임금의 100분의 50 이상을 가산하여 근로자에게 지급하여야 한다.
                </div>
                <div className="question-box">
                    <p>나는 원래 9-18시까지 일하는데, 올해 10번 야근으로 새벽 1시까지 일을 했으니, 올해에 (___)원 만큼의 수당을 추가로 받을 수 있겠군<br/> (통상임금은 시간 당 1만원임)</p>
                </div>
                <div className="mb-4">
                    <div onClick={() => handleOptionSelect2('A')} className={`option mt-4 mb-1 text-left ${selectedOption2 === 'A' ? 'text-red-500' : 'text-black'}`}>① 70만원</div>
                    <div onClick={() => handleOptionSelect2('B')} className={`option mb-1 text-left ${selectedOption2 === 'B' ? 'text-red-500' : 'text-black'}`}>② 90만원</div>
                    <div onClick={() => handleOptionSelect2('C')} className={`option mb-1 text-left ${selectedOption2 === 'C' ? 'text-red-500' : 'text-black'}`}>③ 105만원</div>
                    <div onClick={() => handleOptionSelect2('D')} className={`option text-left ${selectedOption2 === 'D' ? 'text-red-500' : 'text-black'}`}>④ 120만원</div>
                </div>
                {isSubmitted && selectedOption2 === 'A' && (
                    <div className="text-red-500 mt-4 mb-4">
                        <p>틀렸습니다! 정답은 130만원입니다. <br/> 만약 현실이였다면 독파민 때문에 60만원을 잃어버렸습니다!</p>
                    </div>
                )}
                {isSubmitted && selectedOption2 === 'B' && (
                    <div className="text-red-500 mt-4 mb-4">
                        <p>틀렸습니다! 정답은 130만원입니다. <br/> 만약 현실이였다면 독파민 때문에 40만원을 잃어버렸습니다!</p>
                    </div>
                )}
                {isSubmitted && selectedOption2 === 'C' && (
                    <div className="text-red-500 mt-4 mb-4">
                        <p>틀렸습니다! 정답은 130만원입니다. <br/> 만약 현실이였다면 독파민 때문에 25만원을 잃어버렸습니다!</p>
                    </div>
                )}
                {isSubmitted && selectedOption2 === 'D' && (
                    <div className="text-red-500 mt-4 mb-4">
                        <p>틀렸습니다! 정답은 130만원입니다. <br/> 만약 현실이였다면 독파민 때문에 10만원을 잃어버렸습니다!</p>
                    </div>
                )}
                <button onClick={handleSubmit} className="font-DNFBitBitv2 button mt-5 mb-16 px-4 py-2 border rounded" style={{background: "linear-gradient(#75BF42, #A3CC40)", width: "fit-content", color: "white"}}>{isSubmitted ? "다음 페이지로 이동하기" : "체점하기"}</button>
            </div>
        </div>
    );
}

export { Page2Test };
