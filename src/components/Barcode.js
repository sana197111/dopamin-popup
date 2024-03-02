import React, { useState } from 'react';
import type1 from '../type/type1.png';
import type2 from '../type/type2.png';
import type3 from '../type/type3.png';
import type4 from '../type/type4.png';
import type5 from '../type/type5.png';
import type6 from '../type/type6.png';
import type7 from '../type/type7.png';
import type8 from '../type/type8.png';
import type9 from '../type/type9.png';

function Barcode() {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  // 검색어와 이미지의 매핑
  const imageMap = {
    53912932: type1,
    53914213: type2,
    53918423: type3,
    53917433: type4,
    53916488: type5,
    53919863: type6,
    53914417: type7,
    53910122: type8,
    53917680: type9,
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const image = imageMap[searchTerm.toLowerCase()];
      if (image) {
        setImageSrc(image);
      } else {
        setImageSrc(null);
      }
      setSearchTerm(''); // Enter를 누른 후 검색창 초기화
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onKeyDown={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="p-2 text-white bg-gray-800"
        />
      </div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Display"
          className="max-w-full"
          style={{ maxWidth: '280px', height: 'auto' }}
        />
      )}
    </div>
  );
}

export { Barcode };
