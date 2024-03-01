import React from 'react';
import { useLocation } from 'react-router-dom';
import { resultData } from './resultData';

// 이미지 임포트
import type1 from '../type/type1.png';
import type2 from '../type/type2.png';
import type3 from '../type/type3.png';
import type4 from '../type/type4.png';
import type5 from '../type/type5.png';
import type6 from '../type/type6.png';
import type7 from '../type/type7.png';
import type8 from '../type/type8.png';
import type9 from '../type/type9.png';

// 바코드 임포트
import barcode1 from '../barcode/barcode1.png';
import barcode2 from '../barcode/barcode2.png';
import barcode3 from '../barcode/barcode3.png';
import barcode4 from '../barcode/barcode4.png';
import barcode5 from '../barcode/barcode5.png';
import barcode6 from '../barcode/barcode6.png';
import barcode7 from '../barcode/barcode7.png';
import barcode8 from '../barcode/barcode8.png';
import barcode9 from '../barcode/barcode9.png';

const typeImages = {
  1: type1,
  2: type2,
  3: type3,
  4: type4,
  5: type5,
  6: type6,
  7: type7,
  8: type8,
  9: type9
};

const barcodeImages = {
    1: barcode1,
    2: barcode2,
    3: barcode3,
    4: barcode4,
    5: barcode5,
    6: barcode6,
    7: barcode7,
    8: barcode8,
    9: barcode9
  };

function Page4Result() {
    const { state } = useLocation();
  
    const scoreSums = state?.scoreSums || resultData.scoreSums;
    const nicknameKey = resultData.nickname;
    const name = resultData.name;
  
    // nickname 값에 해당하는 텍스트를 매핑하는 객체
    const nicknameMappings = {
      "owner": "도파민을 다스리는 현신",
      "slave": "도파민 초월자",
      "baemin-vip": "배민 1억 VIP 이용객",
      "spicy-killer": "엽떡 스파이시 킬러",
      "dopamine-kid": "도파민 키드"
    };
  
    const sortedScores = Object.entries(scoreSums).sort((a, b) => b[1] - a[1]);
    const maxScoreType = sortedScores[0][0];
  
    // nicknameMappings 객체를 사용하여 nickname 텍스트를 얻음
    const nicknameText = nicknameMappings[nicknameKey] || nicknameKey; // 매핑되는 값이 없을 경우 key를 그대로 사용
  
    return (
      <div className="min-h-screen flex flex-col font-lab-digital items-center justify-center  bg-black text-white p-4">
        <h1 
            className="text-l mt-6 font-DNFBitBitv2 font-bold mb-4"  
            style={{
                background: "linear-gradient(#75BF42, #A3CC40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>{nicknameText}</h1>
        <h2 
            className="text-3xl font-DNFBitBitv2 font-bold mb-6"
            style={{
                background: "linear-gradient(#75BF42, #A3CC40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>{name}</h2>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg mb-6">
          <div className="grid grid-cols-3 gap-4">
            {sortedScores.map(([typeNumber, score]) => (
              <div key={typeNumber} className="score-entry bg-gray-800 p-3 rounded-lg shadow">
                <span className="type-number font-bold">{typeNumber}번</span> ({score}점)
              </div>
            ))}
          </div>
        </div>
        <img className="w-48 mb-6 h-auto object-contain rounded-lg shadow-lg" src={barcodeImages[maxScoreType]} alt={`Barcode ${maxScoreType}`} />
        <img className="w-80 h-auto object-contain rounded-lg shadow-lg" src={typeImages[maxScoreType]} alt={`Type ${maxScoreType}`} />
      </div>
    );
  }
  
export { Page4Result };
