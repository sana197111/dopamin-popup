function PrivacyPolicyPopup({ onClose }) {
    return (
        <div className="privacy-popup">
            <button className="close-button" onClick={onClose}>닫기</button>
            <div style={{ color: "white" }}>
                <h3 style={{ color: "#A3CC40" }}><strong>개인정보 수집·이용·제공 동의서</strong></h3>
                <p className="text-sm">
                    본인은 이벤트와 관련하여, 본인의 개인정보를 묵묵한 페이지가 독파민 팝업스토어 서비스 제공을 위해 이름, MBTI, 번호 등을 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
                </p>
                <p className="text-base">
                    <strong><br/>개인정보 수집·이용에 관한 사항</strong><br/>
                    <li>
                        <span className="text-sm text-gray-500">수집하는 개인정보 항목: 이름, MBTI, 번호 및 서비스 내 기재내용 일체</span><br/>
                    </li>
                    <li>
                        <span className="text-sm text-gray-500">개인정보의 이용 목적: 수집된 개인정보를 활용하여 독파민 팝업스토어 서비스를 제공하기 위한 용도 이외의 용도로는 사용하지 않습니다.</span>
                    </li>
                </p>
                <p className="text-base">
                    <strong><br/>개인정보의 보관 및 이용 기간</strong><br/>
                    <li>
                    <span className="text-sm text-gray-500">수집한 개인 정보는 24년 12월 31일까지 보관될 예정입니다.</span><br/>
                    </li>
                    <li>
                    <span className="text-sm text-gray-500">귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 [개인정보 보호법] 제21조에 따라 처리합니다.</span>
                    </li>
                </p>
                    <p className="text-base">
                        <strong><br/>본인은 개인정보 수집 및 이용에 대하여 동의합니다.</strong>
                    </p>
                <p className="text-sm text-gray-500">
                    위의 개인정보 제공에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 묵묵한 페이지에서 제공하는 독파민 팝업스토어 서비스 이용에 제한을 받을 수 있습니다.
                </p>
                <p className="text-base">
                    <strong><br/>묵묵한 페이지 귀중</strong>
                </p>
            </div>
        </div>
    );
}

export { PrivacyPolicyPopup };
