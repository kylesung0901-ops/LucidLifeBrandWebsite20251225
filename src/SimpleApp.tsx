import React from 'react'

function SimpleApp() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '40px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '10px'
      }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>
          🎉 루시드라이프 웹사이트
        </h1>
        <p style={{ color: '#7f8c8d', fontSize: '18px' }}>
          React 앱이 성공적으로 로드되었습니다!
        </p>
      </header>

      <main>
        <div style={{
          background: '#e8f5e8',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '2px solid #27ae60'
        }}>
          <h2 style={{ color: '#27ae60', marginTop: '0' }}>✅ 테스트 성공!</h2>
          <p>Vite + React 개발 환경이 정상적으로 작동하고 있습니다.</p>
        </div>

        <div style={{
          background: '#fff3cd',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '2px solid #ffc107'
        }}>
          <h3 style={{ color: '#856404', marginTop: '0' }}>🚀 다음 단계</h3>
          <p>이제 메인 루시드라이프 앱을 로드할 준비가 되었습니다.</p>
        </div>

        <div style={{
          background: '#d1ecf1',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #17a2b8'
        }}>
          <h3 style={{ color: '#0c5460', marginTop: '0' }}>📋 기술 스택</h3>
          <ul style={{ margin: '10px 0' }}>
            <li>⚡ Vite (빌드 도구)</li>
            <li>⚛️ React 18 (UI 라이브러리)</li>
            <li>🎨 TypeScript (타입 안전성)</li>
            <li>💨 Tailwind CSS (스타일링)</li>
          </ul>
        </div>
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        color: '#6c757d',
        borderTop: '1px solid #dee2e6'
      }}>
        <p>현재 시간: {new Date().toLocaleString('ko-KR')}</p>
      </footer>
    </div>
  )
}

export default SimpleApp
