import { GoogleSpreadsheet } from 'google-spreadsheet';

// Google Sheets API 서비스 계정 인증 정보
const creds = {
    client_email: 'YOUR_SERVICE_ACCOUNT_EMAIL',
    private_key: 'YOUR_PRIVATE_KEY',
};

// 스프레드시트 ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendDataToSheet = async (name, scores) => {
    try {
        // 서비스 계정으로 인증
        await doc.useServiceAccountAuth(creds);

        // 문서 정보 로드
        await doc.loadInfo();

        // 첫 번째 시트 로드
        const sheet = doc.sheetsByIndex[0]; // 일반적으로 0, 필요에 따라 변경 가능

        // 스프레드시트에 행 추가
        await sheet.addRow({
            'Name': name,
            'Scores': scores.join(', '), // 점수 배열을 문자열로 변환
        });

        console.log('Data appended successfully');
    } catch (e) {
        console.error('Error: ', e);
    }
};
