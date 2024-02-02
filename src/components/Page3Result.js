import React from 'react';
import { useParams } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import type1 from '../type/type1.png';
import type2 from '../type/type2.png';
import type3 from '../type/type3.png';
import type4 from '../type/type4.png';
import type5 from '../type/type5.png';
import type6 from '../type/type6.png';
import type7 from '../type/type7.png';
import type8 from '../type/type8.png';
import type9 from '../type/type9.png';

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

function Page3Result() {
    const { typeNumber } = useParams(); 
    
    const validTypeNumber = parseInt(typeNumber);
    if (isNaN(validTypeNumber) || validTypeNumber < 1 || validTypeNumber > 9) {
        // Handle error, e.g., redirect to a 404 page or show an error message
    }
    
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <img src={typeImages[validTypeNumber]} alt={`Type ${validTypeNumber}`} className="object-contain" />
        </div>
    );
}

export { Page3Result };
