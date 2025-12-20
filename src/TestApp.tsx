import React from 'react';

export default function TestApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>루시드라이프 테스트</h1>
      <p>React 앱이 정상적으로 로드되었습니다!</p>
      <div style={{ 
        background: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>테스트 성공 ✅</h2>
        <p>이제 메인 앱을 로드할 준비가 되었습니다.</p>
      </div>
    </div>
  );
}
