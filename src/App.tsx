import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Phone, MessageSquare, Heart, Flower2, MapPin, BookOpen, User, FileText, Edit3, Youtube, Instagram } from 'lucide-react';
// import logoImage from './assets/ed9c4979525d1d92a2e2ee261a14686c632bc8de.png';
const logoImage = '/logo.png';
const ceoImage = '/KakaoTalk_20251225_191332983.png';

type Language = 'ko' | 'en';

const translations = {
  ko: {
    nav: {
      login: '로그인',
      signup: '회원가입',
      lucidlife: '루시드라이프',
      services: '함께하는 방식',
      process: '사흘동안',
      resting: '마지막 안식처',
      stories: '이별 이야기',
      ceo: '도원 소개',
      together: '지금, 함께하기',
    },
    hero: {
      brand: '루시드라이프',
      title: '모든 이별은 서툴다',
      titleLine2: '우리는 그 곁에 선다',
      subtitle: '말하지 않아도 되는 시간까지',
      signature: 'your life lucid life',
      cta: '자세히 보기',
    },
    accompany: {
      subtitle: 'Continuum Care',
      title: '절차가 아니라, 의식으로. 장례는 3일로 끝나지 않습니다.',
      titleLine2: '생전부터 장례 이후까지,',
      titleLine3: '한 사람을 기억하는 전 과정을 함께합니다.',
      before: {
        title: '임종 전',
        desc: '서로가 아직 전하지 못한 것이 남아 있을 때',
        period: '[임종 전]',
      },
      during: {
        title: '장례 중',
        desc: '고인이 되심에 조문과 입관의 작별의 시간',
        period: '[장례 중]',
      },
      after: {
        title: '이별 이후',
        desc: '탈상, 제사, 천도제를 지나며 다시 일상으로 돌아갈 때',
        period: '[이별 이후]',
      },
      link: '이별은 하루로 끝나지 않습니다',
    },
    pillars: {
      title: '세 가지 축',
      tradition: {
        title: '전통의 재해석',
        desc: '고종황제 입관 의식을 재현한 격조.\n전통을 넘어, 의전으로.',
      },
      modern: {
        title: '시대의 요구',
        desc: '국내 최초, 미국식 메모리얼 장례.\n장례식장이 아닌, 원하는 곳에서.',
      },
      soul: {
        title: '영혼의 보살핌',
        desc: '죽음학과 심리상담을\n통합한 의식 케어.\n이별 앞에서, 깨어 있도록.',
      },
    },
    why: {
      title: 'Why Lucid Life?',
      q1: {
        question: '왜 그렇게 해왔을까요?',
        answer: '형식이 아닌, 의미를 복원합니다.',
      },
      q2: {
        question: '꼭 장례식장이어야 하나요?',
        answer: '원하는 곳에서, 원하는 방식으로.',
      },
      q3: {
        question: '보낸 후, 당신은요?',
        answer: '이별 후에도, 곁에 있습니다.',
      },
    },
    difference: {
      title: '우리가 다른 이유',
      responsibility: {
        title: '하나의 책임선',
        desc: '임종 전·중·후, 끊기지 않습니다.',
      },
      minimal: {
        title: '설명의 최소화',
        desc: '필요한 시점에, 필요한 만큼만.',
      },
      respect: {
        title: '감정의 존중',
        desc: '절차보다 사람의 상태를 먼저 봅니다.',
      },
    },
    services: {
      title: '함께 하는 방식',
      subtitle: '부담 없이, 상황에 맞게',
      family: {
        title: '가족장',
        price: 150,
        tagline: '빈소없이, 가족만',
        desc: '조용히, 가장 가까운 사람들만 남아 이별에 집중하는 시간.',
      },
      practical: {
        title: '실용장',
        price: 290,
        tagline: '기본에 충실하게',
        desc: '불필요한 부담은 덜고, 장례의 기본은 놓치지 않은 현실적인 선택.',
      },
      standard: {
        title: '표준장',
        price: 360,
        tagline: '충분히, 정성껏',
        desc: '가장 많은 이들이 선택한, 균형과 품위를 갖춘 기본 장례.',
      },
      burial: {
        title: '매장 · 미국식장',
        price: 450,
        tagline: '마지막을 완벽하게',
        desc: '한 사람의 삶을 중심에 두고 설계하는 맞춤형 추모 의식.',
      },
      compareBtn: '전체 상품 비교하기',
      learnMore: '미국식 장례 알아보기 >',
      learnMore2: '미국식 장례는 무엇이 다른가 →',
    },
    threedays: {
      title: '사흘동안',
      intro: '사흘의 흐름을, 차분히 살펴보세요 →',
      day1: {
        title: '1일차',
        desc: '임종 및 빈소 마련',
        details: '황망한 첫날 복잡한 절차 대신 고인과의 인사에 집중',
      },
      day2: {
        title: '2일차',
        desc: '입관 및 조문',
        details: '가장 아름다운 마지막 모습을 기억할 수 있도록 최고의 예를 갖춘 입관식',
      },
      day3: {
        title: '3일차',
        desc: '발인 및 장지 동행',
        details: '마지막 안식처까지 소홀함 없이 끝까지 동행',
      },
    },
    resting: {
      title: '마지막 안식처',
      subtitle: '안치까지의 선택을 책임집니다',
      columbarium: {
        title: '봉안당',
        desc: '따뜻한 빛이 머무는 편안한 실내 안치 공간',
      },
      natural: {
        title: '자연장',
        desc: '자연에서 와서 자연으로 수목장 잔디장 해양장',
      },
      burial: {
        title: '매장',
        desc: '전통의 예를 갖춘 품격 있는 장지 동행',
      },
      relocation: {
        title: '개장·이장',
        desc: '오래된 묘소를 새로운 안식처로',
      },
    },
    stories: {
      title: '이별 이야기',
      story1: {
        title: '함께 견뎌낸 이야기들',
        excerpt: '한 사람의 마지막을 함께 지나온 기록',
      },
      story2: {
        title: '서툰 작별을 위한 안내서',
        excerpt: '알아두면 흔들리지 않는 최소한의 문법',
      },
      story3: {
        title: '사유하는 이별의 농도',
        excerpt: '삶과 죽음 사이에서 길어 올린 생각들',
      },
    },
    ceo: {
      quote: '이별은 끝이 아니라, 한 사람을 기억하는 시작입니다.',
      quoteLine1: '이별은 끝이 아니라,',
      quoteLine2: '한 사람을 기억하는',
      quoteLine3: '시작입니다.',
      name: '도원',
      title: '루시드라이프 대표',
      cta: '루시드 함께하기',
    },
    together: {
      title: '루시드와 함께.',
      subtitle: '이별 앞에서, 혼자가 아닙니다.\n지금 사전등록하시면 특별한 혜택을 드립니다.',
      cta: '사전등록',
      pre: '사전 상담',
      emergency: '긴급 상담',
    },
    footer: {
      company: '루시드라이프',
      representative: '대표: 서동원',
      location: '경기도 파주시 탄현로 144-55, 310-B02',
      business: '사업자번호: 123-92-47792',
      phone: '대표전화: 010-2116-4114',
      contact: '문의: 010-2116-4114 | lucidlife@kakao.com',
      copyright: 'Copyright © 2025 Lucid Life. All rights reserved.',
      membershipBtn: '멤버십 무료 가입',
      privacyBtn: '개인정보처리방침',
      termsBtn: '이용약관',
    },
    privacyPolicy: {
      title: '개인정보처리방침',
      content: `루시드라이프 (이하 "회사"는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
■ 수집하는 개인정보 항목 및 수집방법
가. 수집하는 개인정보의 항목
o 회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
- 회원가입시 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보
- 서비스 신청시 : 주소, 결제 정보
o 서비스 이용 과정이나 사업 처리 과정에서 서비스이용기록, 접속로그, 쿠키, 접속 IP, 결제 기록, 불량이용 기록이 생성되어 수집될 수 있습니다.
나. 수집방법
- 홈페이지, 서면양식, 게시판, 이메일, 이벤트 응모, 배송요청, 전화, 팩스, 생성 정보 수집 툴을 통한 수집
■ 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
o 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스
o 회원 관리
회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달
o 마케팅 및 광고에 활용
이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
■ 개인정보의 보유 및 이용기간
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
가. 회사 내부방침에 의한 정보보유 사유
 회원이 탈퇴한 경우에도 불량회원의 부정한 이용의 재발을 방지, 분쟁해결 및 수사기관의 요청에 따른 협조를 위하여, 이용계약 해지일로부터 5년간 회원의 정보를 보유할 수 있습니다.
나. 관련 법령에 의한 정보 보유 사유
전자상거래등에서의소비자보호에관한법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
o 계약 또는 청약철회 등에 관한 기록
-보존이유 : 전자상거래등에서의소비자보호에관한법률
-보존기간 : 5년
o 대금 결제 및 재화 등의 공급에 관한 기록
-보존이유: 전자상거래등에서의소비자보호에관한법률
-보존기간 : 5년
o 소비자 불만 또는 분쟁처리에 관한 기록
-보존이유 : 전자상거래등에서의소비자보호에관한법률
-보존기간 : 3년
o 로그 기록
-보존이유: 통신비밀보호법
-보존기간 : 3개월
■ 개인정보의 파기절차 및 방법
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
o 파기절차
회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
o 파기방법
전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
■ 개인정보 제공
회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
o 이용자들이 사전에 동의한 경우
o 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
■ 수집한 개인정보의 위탁
회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.
o 위탁 대상자 : [KCP] 넷페이
o 위탁업무 내용 : [카드결제/ 계좌이체/ 휴대폰결제]

■ 이용자 및 법정대리인의 권리와 그 행사방법
o 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
o 이용자들의 개인정보 조회,수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
o 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
o 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
o 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
■ 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
회사는 귀하의 정보를 수시로 저장하고 찾아내는 "쿠키(cookie)" 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.
회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.
o 쿠키 등 사용 목적
1. 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
2. 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
o 쿠키 설정 거부 방법
1. 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
2. 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보
3. 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
■ 개인정보에 관한 민원서비스
회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보보호책임자를 지정하고 있습니다.
o 개인정보보호담당자
성명 :서동원
소속 :루시드라이프 대표
전화번호 : 010-5320-1237
이메일 : neen@kakao.com
o 개인정보보호책임자
성명 :서동원
소속 :루시드라이프 대표
전화번호 : 010-5320-1237
이메일 : neen@kakao.com
o 귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수 있습니다.
o 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
o 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)
대검찰청 사이버범죄수사단 (www.spo.go.kr / 02-3480-2000)
경찰청 사이버안전국 (www.ctrc.go.kr/ 국번 없이 182)`,
    },
    termsOfService: {
      title: '이용약관',
      content: `제1조(목적)
이 약관은 루시드라이프(전자상거래 사업자)가 운영하는 루시드라이프_사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리/ 의무 및 책임사항을 규정함을 목적으로 합니다.
※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

제2조(정의)
① "몰"이란 루시드라이프 회사가 재화 또는 용역(이하 "재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ '회원'이라 함은 "몰"에 회원등록을 한 자로서, 계속적으로 "몰"이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
④ '비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.

제3조 (약관 등의 명시와 설명 및 개정)
① "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 루시드라이프 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
② "몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회?배송책임?환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
③ "몰"은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
④ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰"은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 "몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.

제4조(서비스의 제공 및 변경)
① "몰"은 다음과 같은 업무를 수행합니다.
1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
2. 구매계약이 체결된 재화 또는 용역의 배송
3. 기타 "몰"이 정하는 업무
② "몰"은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
③ "몰"이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
④ 전항의 경우 "몰"은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.

제5조(서비스의 중단)
① "몰"은 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
② "몰"은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지하고 당초 "몰"에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, "몰"이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 "몰"에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.

제6조(회원가입)
① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
3. 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우
③ 회원가입계약의 성립 시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다.
④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 "몰"에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.

제7조(회원 탈퇴 및 자격 상실 등)
① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다.
② 회원이 다음 각 호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다.
1. 가입 신청 시에 허위 내용을 등록한 경우
2. "몰"을 이용하여 구입한 재화 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
3. 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
4. "몰"을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
③ "몰"이 회원 자격을 제한?정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다.
④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.`,
    },
    floating: {
      call: 'Call',
      kakao: 'KakaoTalk',
      membership: 'Membership Pre-registration',
    },
    gnb: {
      emergency: '긴급상담 010-2116-4114',
      cta: '루시드 함께하기',
    },
    popup: {
      cta: '루시드 함께하기',
      message: '미리 가입해두세요. 18개월 치 내드립니다.',
    },
  },
  en: {
    nav: {
      login: 'Login',
      signup: 'Sign Up',
      lucidlife: 'Lucid Life',
      services: 'How We Walk Together',
      process: 'Three Days',
      resting: 'Final Rest',
      stories: 'Stories of Farewell',
      ceo: 'CEO',
      together: 'Get in Touch Now',
    },
    hero: {
      brand: 'LUCID LIFE',
      title: 'Every farewell is clumsy',
      titleLine2: 'We stand by their side',
      subtitle: 'Until the time when we don\'t need to speak',
      signature: 'your life lucid life',
      cta: 'Learn More',
    },
    accompany: {
      subtitle: 'Continuum Care',
      title: 'Not a procedure, but a ceremony. A funeral does not end in 3 days.',
      titleLine2: 'From before life to after the funeral,',
      titleLine3: 'we accompany the entire process of remembering one person.',
      before: {
        title: 'Before Passing',
        desc: 'When there are still things we haven\'t said to each other',
        period: '[Before Passing]',
      },
      during: {
        title: 'During Funeral',
        desc: 'The time of farewell with condolences and encoffining as the person becomes the deceased',
        period: '[During Funeral]',
      },
      after: {
        title: 'After Farewell',
        desc: 'When returning to daily life after the end of mourning, ancestral rites, and memorial services',
        period: '[After Farewell]',
      },
      link: 'Farewell does not end in a day',
    },
    pillars: {
      title: 'Three Pillars',
      tradition: {
        title: 'Reinterpretation of Tradition',
        desc: 'The dignity of Emperor Gojong\'s ceremony recreated.\nBeyond tradition, to protocol.',
      },
      modern: {
        title: 'Modern Needs',
        desc: 'Korea\'s first American-style memorial service.\nNot at funeral homes, but where you want.',
      },
      soul: {
        title: 'Care for the Soul',
        desc: 'Integrated conscious care through thanatology and counseling.\nTo stay awake in the face of farewell.',
      },
    },
    why: {
      title: 'Why Lucid Life?',
      q1: {
        question: 'Why has it always been done that way?',
        answer: 'We restore meaning, not formality.',
      },
      q2: {
        question: 'Does it have to be at a funeral home?',
        answer: 'Where you want, the way you want.',
      },
      q3: {
        question: 'What about you, after?',
        answer: 'We stay by your side even after farewell.',
      },
    },
    difference: {
      title: 'What Makes Us Different',
      responsibility: {
        title: 'One Line of Responsibility',
        desc: 'Before, during, and after - uninterrupted.',
      },
      minimal: {
        title: 'Minimal Explanation',
        desc: 'Only what\'s needed, when it\'s needed.',
      },
      respect: {
        title: 'Respect for Emotions',
        desc: 'We see people\'s state before procedures.',
      },
    },
    services: {
      title: 'How We Walk Together',
      subtitle: 'Without burden, according to the situation',
      family: {
        title: 'Family Service',
        price: 150,
        tagline: 'No wake, family only',
        desc: 'Quietly, only the closest people remain, focusing on farewell.',
      },
      practical: {
        title: 'Practical Service',
        price: 290,
        tagline: 'Faithful to the basics',
        desc: 'A practical choice that reduces unnecessary burden while not missing the basics of a funeral.',
      },
      standard: {
        title: 'Standard Service',
        price: 360,
        tagline: 'Fully, with sincerity',
        desc: 'The basic funeral chosen by the most people, with balance and dignity.',
      },
      burial: {
        title: 'Burial · American-style Service',
        price: 450,
        tagline: 'Perfect the final moment',
        desc: 'A customized memorial ceremony designed around one person\'s life.',
      },
      compareBtn: 'Compare All Products',
      learnMore: 'Learn about American-style Funerals >',
      learnMore2: 'What makes American-style funerals different? >',
    },
    threedays: {
      title: 'Three Days',
      intro: 'Take a calm look at the flow of three days ->',
      day1: {
        title: 'Day 1',
        desc: 'Passing and Setting Up the Funeral Hall',
        details: 'On the hectic first day focus on saying goodbye to the deceased instead of complicated procedures',
      },
      day2: {
        title: 'Day 2',
        desc: 'Encoffining and Condolences',
        details: 'An encoffining ceremony with the highest dignity so that the most beautiful final appearance can be remembered',
      },
      day3: {
        title: 'Day 3',
        desc: 'Procession and Accompanying to the Burial Site',
        details: 'Accompanying to the final resting place without neglect all the way to the end',
      },
    },
    resting: {
      title: 'Final Resting Place',
      subtitle: 'We take responsibility for the choice until interment',
      columbarium: {
        title: 'Columbarium',
        desc: 'The most comfortable indoor interment space where warm light remains.',
      },
      natural: {
        title: 'Natural Burial',
        desc: 'From nature to nature. Tree burial, lawn burial, sea burial.',
      },
      burial: {
        title: 'Burial',
        desc: 'A dignified accompaniment to the burial site with traditional dignity.',
      },
      relocation: {
        title: 'Relocation · Reburial',
        desc: 'From an old grave to a new resting place.',
      },
    },
    stories: {
      title: 'Stories of Farewell',
      story1: {
        title: 'Stories We Endured Together',
        excerpt: 'A record of going through one person\'s final moments together',
      },
      story2: {
        title: 'A Guide for Clumsy Farewells',
        excerpt: 'The minimum grammar that won\'t shake you if you know it',
      },
      story3: {
        title: 'The Depth of Contemplative Farewell',
        excerpt: 'Thoughts drawn from between life and death',
      },
    },
    ceo: {
      quote: 'Farewell is not an end, but the beginning of remembering one person.',
      quoteLine1: 'Farewell is not an end,',
      quoteLine2: 'but the beginning of',
      quoteLine3: 'remembering one person.',
      name: 'Dowon',
      title: 'CEO, Lucid Life',
      cta: 'Join Lucid Life',
    },
    together: {
      title: 'Together with LUCID.',
      subtitle: 'You are not alone in the face of farewell.\nPre-register now for special benefits.',
      cta: 'Pre-register',
      pre: 'Pre-consultation',
      emergency: 'Emergency',
    },
    footer: {
      company: 'Lucid Life',
      representative: 'CEO: Seo Dongwon',
      location: '144-55, Tanhyeon-ro, Paju-si, Gyeonggi-do, 310-B02',
      business: 'Business Registration: 123-92-47792',
      phone: 'Phone: 010-2116-4114',
      contact: 'Contact: 010-2116-4114 | lucidlife@kakao.com',
      copyright: 'Copyright © 2025 Lucid Life. All rights reserved.',
      membershipBtn: 'Free Membership Registration',
      privacyBtn: 'Privacy Policy',
      termsBtn: 'Terms of Service',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      content: `Lucid Life (hereinafter "Company") values your personal information and complies with the "Act on Promotion of Information and Communications Network Utilization and Information Protection."
The Company informs you through this Privacy Policy about how the personal information you provide is used and what measures are taken to protect your personal information.
■ Personal Information Items Collected and Collection Methods
A. Personal Information Items Collected
o The Company collects the following personal information for membership registration, consultation, and service requests:
- Upon membership registration: Name, date of birth, gender, login ID, password, home phone number, mobile phone number, email, and in the case of members under 14, legal guardian information
- Upon service request: Address, payment information
o Service usage records, access logs, cookies, access IP, payment records, and misuse records may be generated and collected during service use or business processing.
B. Collection Methods
- Collection through website, written forms, bulletin boards, email, event participation, delivery requests, phone, fax, and information collection tools
■ Purpose of Collection and Use of Personal Information
The Company uses the collected personal information for the following purposes:
o Contract fulfillment for service provision and fee settlement for service provision
Content provision, purchase and fee payment, delivery of goods or billing statements, identity verification for financial transactions and financial services
o Member Management
Identity verification for membership service use, personal identification, prevention of unauthorized use by bad members and unauthorized access, confirmation of membership intention, age verification, confirmation of legal guardian consent when collecting personal information of children under 14, handling complaints and civil affairs, delivery of notices
o Marketing and Advertising
Delivery of advertising information such as events, analysis of access frequency or statistics on member service use
■ Retention and Use Period of Personal Information
In principle, personal information is destroyed without delay after the purpose of collection and use is achieved. However, the following information is retained for the period specified below for the following reasons:
A. Information Retention According to Company Internal Policy
Even if a member withdraws, the Company may retain the member's information for 5 years from the date of contract termination to prevent recurrence of unauthorized use by bad members, resolve disputes, and cooperate with investigative agencies.
B. Information Retention According to Related Laws
If it is necessary to retain information according to the provisions of related laws such as the Consumer Protection Act in Electronic Commerce, the Company retains member information for the period specified in the relevant laws as follows:
o Records on contracts or withdrawal of offers
-Retention Reason: Consumer Protection Act in Electronic Commerce
-Retention Period: 5 years
o Records on payment of money and supply of goods, etc.
-Retention Reason: Consumer Protection Act in Electronic Commerce
-Retention Period: 5 years
o Records on consumer complaints or dispute handling
-Retention Reason: Consumer Protection Act in Electronic Commerce
-Retention Period: 3 years
o Log records
-Retention Reason: Communications Secrets Protection Act
-Retention Period: 3 months
■ Procedures and Methods for Destruction of Personal Information
The Company destroys personal information without delay after the purpose of collection and use is achieved. The procedures and methods for destruction are as follows:
o Destruction Procedures
Information entered by members for membership registration, etc., is moved to a separate DB (or separate documents in the case of paper) after the purpose is achieved and stored for a certain period according to internal policies and other related laws (see retention and use period) before being destroyed.
Personal information moved to a separate DB is not used for purposes other than retention unless required by law.
o Destruction Methods
Personal information stored in electronic file format is deleted using technical methods that cannot reproduce records.
■ Provision of Personal Information
The Company does not provide users' personal information to third parties in principle. However, exceptions are made in the following cases:
o When users have given prior consent
o When required by law or when investigative agencies request it according to procedures and methods prescribed by law for investigative purposes
■ Entrustment of Collected Personal Information
The Company entrusts the operation to external specialized companies as follows for service fulfillment:
o Entrusted Party: [KCP] Netpay
o Entrusted Business: [Card payment / Account transfer / Mobile payment]

■ Rights of Users and Legal Guardians and How to Exercise Them
o Users can view or modify their registered personal information at any time or request membership termination.
o For users to view or modify their personal information, click "Change Personal Information" (or "Modify Member Information", etc.), and for membership termination (withdrawal of consent), click "Member Withdrawal" to go through identity verification procedures, after which you can directly view, correct, or withdraw.
o Or contact the personal information protection officer in writing, by phone, or by email, and we will take action without delay.
o If you request correction of errors in personal information, we will not use or provide the personal information until the correction is completed. Also, if incorrect personal information has already been provided to a third party, we will notify the third party of the correction result without delay so that correction can be made.
o Personal information that has been terminated or deleted at the user's request is processed according to the "Retention and Use Period of Personal Information Collected by the Company" and cannot be viewed or used for other purposes.
■ Installation, Operation, and Refusal of Automatic Collection of Personal Information
The Company operates "cookies" that store and retrieve your information from time to time. Cookies are very small text files sent by the server that operates the website to your browser and stored on your computer's hard disk.
The Company uses cookies for the following purposes:
o Purpose of Using Cookies
1. Analysis of access frequency and visit time of members and non-members, understanding of user preferences and areas of interest and tracking, target marketing and personalized service provision through understanding of event participation and visit frequency
2. You have the right to choose whether to install cookies. Therefore, you can allow all cookies, check each time cookies are stored, or refuse to store all cookies by setting options in your web browser.
o How to Refuse Cookie Settings
1. To refuse cookie settings, you can allow all cookies, check each time cookies are stored, or refuse to store all cookies by selecting options in the web browser you use.
2. Example of setting method (for Internet Explorer): Tools > Internet Options > Privacy at the top of the web browser
3. However, if you refuse to install cookies, there may be difficulties in providing services.
■ Civil Service Regarding Personal Information
The Company has designated the following related departments and personal information protection officers to protect customers' personal information and handle complaints related to personal information:
o Personal Information Protection Officer
Name: Seo Dongwon
Affiliation: CEO, Lucid Life
Phone: 010-5320-1237
Email: neen@kakao.com
o Personal Information Protection Manager
Name: Seo Dongwon
Affiliation: CEO, Lucid Life
Phone: 010-5320-1237
Email: neen@kakao.com
o You can report all personal information protection-related complaints that occur while using the Company's services to the personal information protection manager or the responsible department.
o The Company will provide prompt and sufficient answers to users' reports.
o For other reports or consultations on personal information infringement, please contact the following agencies:
Personal Information Infringement Report Center (privacy.kisa.or.kr / 118 without area code)
Supreme Prosecutors' Office Cyber Crime Investigation Division (www.spo.go.kr / 02-3480-2000)
National Police Agency Cyber Safety Bureau (www.ctrc.go.kr / 182 without area code)`,
    },
    termsOfService: {
      title: 'Terms of Service',
      content: `Article 1 (Purpose)
These Terms and Conditions are intended to stipulate the rights, obligations, and responsibilities of the cyber mall and users in using the Internet-related services (hereinafter referred to as "Services") provided by Lucid Life Cyber Mall (hereinafter referred to as "Mall") operated by Lucid Life (e-commerce business operator).
※ "These Terms and Conditions shall apply to e-commerce using PC communication, wireless, etc., unless it is contrary to its nature."

Article 2 (Definitions)
① "Mall" means a virtual business place set up by Lucid Life Company to trade goods or services (hereinafter referred to as "goods, etc.") using information and communication facilities such as computers, and also refers to the business operator operating the cyber mall.
② "User" means members and non-members who access the "Mall" and receive services provided by the "Mall" in accordance with these Terms and Conditions.
③ "Member" means a person who has registered as a member and can continuously use the services provided by the "Mall".
④ "Non-member" means a person who uses the services provided by the "Mall" without joining as a member.

Article 3 (Display and Explanation of Terms and Conditions and Amendment)
① The "Mall" posts the contents of these Terms and Conditions, company name and representative name, business location address (including address where consumer complaints can be handled), phone number, facsimile number, e-mail address, business registration number, communication sales business report number, personal information protection manager, etc. on the initial service screen (front page) of Lucid Life Cyber Mall so that users can easily know them. However, the contents of the Terms and Conditions can be viewed by users through the connection screen.
② The "Mall" must provide a separate connection screen or pop-up screen so that users can understand important contents such as withdrawal of offer, delivery responsibility, refund conditions, etc. stipulated in the Terms and Conditions before users agree to the Terms and Conditions, and obtain user confirmation.
③ The "Mall" may amend these Terms and Conditions within the scope that does not violate related laws such as the "Consumer Protection Act in Electronic Commerce", "Act on Regulation of Terms and Conditions", "Basic Act on Electronic Documents and Electronic Commerce", "Electronic Financial Transactions Act", "Electronic Signature Act", "Act on Promotion of Information and Communications Network Utilization and Information Protection", "Door-to-Door Sales Act", and "Framework Act on Consumers".
④ When the "Mall" amends the Terms and Conditions, it shall specify the application date and reason for amendment and notify them together with the current Terms and Conditions on the initial screen of the Mall from 7 days before the application date to the day before the application date. However, if the Terms and Conditions are changed unfavorably to users, they shall be notified with a grace period of at least 30 days in advance. In this case, the "Mall" clearly compares the contents before and after the amendment so that users can easily understand.
⑤ When the "Mall" amends the Terms and Conditions, the amended Terms and Conditions apply only to contracts concluded after the application date, and the Terms and Conditions before the amendment apply to contracts already concluded before that. However, if a user who has already entered into a contract wants to be subject to the provisions of the amended Terms and Conditions and sends it to the "Mall" within the notice period of the amended Terms and Conditions under paragraph 3 and receives the consent of the "Mall", the provisions of the amended Terms and Conditions apply.
⑥ Matters not specified in these Terms and Conditions and interpretation of these Terms and Conditions shall be in accordance with the Consumer Protection Act in Electronic Commerce, the Act on Regulation of Terms and Conditions, the Consumer Protection Guidelines in Electronic Commerce, etc. determined by the Fair Trade Commission, and related laws or commercial practices.

Article 4 (Provision and Change of Services)
① The "Mall" performs the following tasks:
1. Provision of information on goods or services and conclusion of purchase contracts
2. Delivery of goods or services for which purchase contracts have been concluded
3. Other tasks determined by the "Mall"
② The "Mall" may change the contents of goods or services to be provided by contracts to be concluded in the future in case of out of stock or change in technical specifications of goods or services. In this case, the contents and delivery date of the changed goods or services shall be specified and immediately notified in the place where the contents of the current goods or services are posted.
③ If the "Mall" changes the contents of the service that it has contracted to provide to users due to reasons such as out of stock of goods, etc. or change in technical specifications, it shall immediately notify the user at the address where notification is possible.
④ In the case of the preceding paragraph, the "Mall" compensates for damages suffered by users. However, this does not apply if the "Mall" proves that there was no intention or negligence.

Article 5 (Suspension of Services)
① The "Mall" may temporarily suspend the provision of services in case of reasons such as maintenance, replacement, and failure of information and communication facilities such as computers, or interruption of communication.
② The "Mall" compensates for damages suffered by users or third parties due to temporary suspension of service provision due to the reasons in paragraph 1. However, this does not apply if the "Mall" proves that there was no intention or negligence.
③ In cases where services cannot be provided due to reasons such as conversion of business items, abandonment of business, merger between companies, etc., the "Mall" notifies users in the manner specified in Article 8 and compensates consumers according to the conditions initially presented by the "Mall". However, if the "Mall" does not notify the compensation standards, etc., it pays users mileage or points, etc. in kind or cash equivalent to the currency value used in the "Mall".

Article 6 (Membership Registration)
① Users apply for membership by filling in member information according to the registration form set by the "Mall" and expressing their intention to agree to these Terms and Conditions.
② The "Mall" registers as a member among users who have applied for membership as in paragraph 1, unless they fall under any of the following:
1. If the applicant has lost membership qualification under Article 7, Paragraph 3 of these Terms and Conditions, except for cases where 3 years have passed since the loss of membership qualification under Article 7, Paragraph 3 and approval for re-registration as a member of the "Mall" has been obtained.
2. If there is false information, omission, or error in the registration contents
3. If it is judged that registering as a member significantly hinders the "Mall" technically
③ The time of establishment of the membership registration contract is when the approval of the "Mall" reaches the member.
④ If there is a change in the matters registered at the time of membership registration, the member must notify the "Mall" of the change by modifying member information, etc. within a reasonable period.

Article 7 (Member Withdrawal and Loss of Qualification)
① Members may request withdrawal from the "Mall" at any time, and the "Mall" immediately processes member withdrawal.
② If a member falls under any of the following reasons, the "Mall" may limit or suspend membership:
1. If false information is registered at the time of membership application
2. If the member does not pay the price of goods, etc. purchased using the "Mall" or other debts related to the use of the "Mall" on time
3. If interfering with others' use of the "Mall" or stealing their information, etc., threatening the order of e-commerce
4. If using the "Mall" to commit acts prohibited by laws or these Terms and Conditions or contrary to public order and morals
③ If the same act is repeated 2 or more times or the reason is not corrected within 30 days after the "Mall" limits or suspends membership, the "Mall" may lose membership.
④ When the "Mall" loses membership, it deletes the membership registration. In this case, the member is notified, and an opportunity to explain is given by setting a period of at least 30 days before deleting the membership registration.`,
    },
    floating: {
      call: 'Call',
      kakao: 'KakaoTalk',
    },
    gnb: {
      emergency: 'Emergency 010-2116-4114',
      cta: 'Join Lucid Life',
    },
    popup: {
      cta: 'Join Lucid Life',
      message: 'Pre-register now. We\'ll give you 18 months worth.',
    },
  },
};

// 상품 상세 정보 타입
interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  items: {
    label: string;
    value: string;
  }[];
}

// 상품 상세 정보 데이터 (언어별)
const getProductDetails = (lang: Language): Record<string, ProductDetail> => {
  if (lang === 'en') {
    return {
      family: {
        id: 'family',
        name: 'Family Funeral · No Wake',
        tagline: 'Quietly, family only',
        price: 150,
        description: 'A time for only the closest people to remain quietly and focus on farewell.',
        items: [
          { label: 'Casket for the deceased', value: 'Paulownia wood standard casket' },
          { label: 'Last clothes (shroud)', value: 'Provided' },
          { label: 'Deceased\'s items', value: 'Alcohol, cotton, tying straps, etc.' },
          { label: 'Urn for eternal rest', value: 'Standard urn' },
          { label: 'Men\'s mourning attire', value: 'Total 5 sets' },
          { label: 'Women\'s mourning attire', value: '(Men and women combined)' },
          { label: 'Wake items', value: 'Incense, candles, guestbook, ancestral tablet' },
          { label: 'Floral tribute', value: '—' },
          { label: 'Funeral director', value: '1 person + 1 person (embalming)' },
          { label: 'Ceremonial assistant', value: '—' },
          { label: 'Limousine', value: 'Choose 1 / 150km' },
          { label: 'Bus', value: '(Limousine or bus)' },
          { label: 'Deceased transfer', value: 'Free within jurisdiction' },
          { label: 'Notification service', value: 'Mobile obituary, condolence reply' },
          { label: 'Additional service', value: 'Burial site arrangement' },
        ],
      },
      practical: {
        id: 'practical',
        name: 'Practical Funeral',
        tagline: 'Faithful to basics',
        price: 290,
        description: 'A realistic choice that reduces unnecessary burden and doesn\'t miss the basics of a funeral.',
        items: [
          { label: 'Casket for the deceased', value: 'Paulownia wood standard casket' },
          { label: 'Last clothes (shroud)', value: 'Provided' },
          { label: 'Deceased\'s items', value: 'Alcohol, cotton, tying straps, etc.' },
          { label: 'Urn for eternal rest', value: 'Premium urn' },
          { label: 'Men\'s mourning attire', value: '5 sets' },
          { label: 'Women\'s mourning attire', value: '5 sets' },
          { label: 'Wake items', value: 'Incense, candles, guestbook, ancestral tablet' },
          { label: 'Floral tribute', value: '30 flowers' },
          { label: 'Funeral director', value: '1 person + 1 person (embalming)' },
          { label: 'Ceremonial assistant', value: '4 people (8 hours)' },
          { label: 'Limousine', value: 'Choose 1 / 150km' },
          { label: 'Bus', value: '(Limousine or bus)' },
          { label: 'Deceased transfer', value: 'Free within jurisdiction' },
          { label: 'Notification service', value: 'Mobile obituary, condolence reply' },
          { label: 'Additional service', value: 'Burial site arrangement' },
        ],
      },
      standard: {
        id: 'standard',
        name: 'Standard Funeral',
        tagline: 'Sufficiently, with care',
        price: 360,
        description: 'The basic funeral chosen by the most people, with balance and dignity.',
        items: [
          { label: 'Casket for the deceased', value: 'Paulownia wood standard casket' },
          { label: 'Last clothes (shroud)', value: 'Provided' },
          { label: 'Deceased\'s items', value: 'Alcohol, cotton, tying straps, etc.' },
          { label: 'Urn for eternal rest', value: 'Standard urn' },
          { label: 'Men\'s mourning attire', value: '7 sets' },
          { label: 'Women\'s mourning attire', value: '7 sets' },
          { label: 'Wake items', value: 'Incense, candles, guestbook, ancestral tablet' },
          { label: 'Floral tribute', value: '30 flowers' },
          { label: 'Funeral director', value: '1 person + 1 person (embalming)' },
          { label: 'Ceremonial assistant', value: '6 people (8 hours)' },
          { label: 'Limousine', value: '150km' },
          { label: 'Bus', value: '150km' },
          { label: 'Deceased transfer', value: 'Free within jurisdiction' },
          { label: 'Notification service', value: 'Mobile obituary, condolence reply' },
          { label: 'Additional service', value: 'Burial site arrangement' },
        ],
      },
      premium: {
        id: 'premium',
        name: 'Burial · American Style',
        tagline: 'Perfect to the last',
        price: 450,
        description: 'A customized memorial service designed from the method to the space, centered on one person\'s life.',
        items: [
          { label: 'Casket for the deceased', value: 'Paulownia wood premium casket' },
          { label: 'Last clothes (shroud)', value: 'Provided' },
          { label: 'Deceased\'s items', value: 'Alcohol, cotton, tying straps, etc.' },
          { label: 'Urn for eternal rest', value: 'Premium urn' },
          { label: 'Men\'s mourning attire', value: '9 sets' },
          { label: 'Women\'s mourning attire', value: '9 sets' },
          { label: 'Wake items', value: 'Incense, candles, guestbook, ancestral tablet' },
          { label: 'Floral tribute', value: '50 flowers' },
          { label: 'Funeral director', value: '1 person + 1 person (embalming)' },
          { label: 'Ceremonial assistant', value: '8 people (8 hours)' },
          { label: 'Limousine', value: '400km' },
          { label: 'Bus', value: 'Nationwide free' },
          { label: 'Deceased transfer', value: 'Free within jurisdiction' },
          { label: 'Notification service', value: 'Mobile obituary, condolence reply' },
          { label: 'Additional service', value: 'Burial site arrangement' },
        ],
      },
    };
  }
  
  // Korean (default)
  return {
    family: {
      id: 'family',
      name: '가족장 · 무빈소',
      tagline: '조용히, 가족만',
      price: 150,
      description: '조용히, 가장 가까운 사람들만 남아 이별에 집중하는 시간.',
      items: [
        { label: '고인을 모시는 관', value: '오동나무 일반관' },
        { label: '마지막 옷 (수의)', value: '제공' },
        { label: '고인 용품', value: '알코올, 탈지면, 결관바 등' },
        { label: '영면함 (유골함)', value: '일반함' },
        { label: '남자 상복', value: '총 5벌' },
        { label: '여자 상복', value: '(남녀 합계)' },
        { label: '빈소 용품', value: '향, 초, 방명록, 위패' },
        { label: '헌화', value: '—' },
        { label: '장례지도사', value: '1명 + 1명 (입관)' },
        { label: '의전 도우미', value: '—' },
        { label: '리무진', value: '택1 / 150km' },
        { label: '버스', value: '(리무진 또는 버스)' },
        { label: '고인 이송', value: '관내 무료' },
        { label: '알림 서비스', value: '모바일 부고, 조문 답례' },
        { label: '추가 서비스', value: '장지 알선' },
      ],
    },
    practical: {
      id: 'practical',
      name: '실용장',
      tagline: '기본에 충실하게',
      price: 290,
      description: '불필요한 부담은 덜고, 장례의 기본은 놓치지 않은 현실적인 선택.',
      items: [
        { label: '고인을 모시는 관', value: '오동나무 일반관' },
        { label: '마지막 옷 (수의)', value: '제공' },
        { label: '고인 용품', value: '알코올, 탈지면, 결관바 등' },
        { label: '영면함 (유골함)', value: '고급함' },
        { label: '남자 상복', value: '5벌' },
        { label: '여자 상복', value: '5벌' },
        { label: '빈소 용품', value: '향, 초, 방명록, 위패' },
        { label: '헌화', value: '30송이' },
        { label: '장례지도사', value: '1명 + 1명 (입관)' },
        { label: '의전 도우미', value: '4명 (8시간)' },
        { label: '리무진', value: '택1 / 150km' },
        { label: '버스', value: '(리무진 또는 버스)' },
        { label: '고인 이송', value: '관내 무료' },
        { label: '알림 서비스', value: '모바일 부고, 조문 답례' },
        { label: '추가 서비스', value: '장지 알선' },
      ],
    },
    standard: {
      id: 'standard',
      name: '표준장',
      tagline: '충분히, 정성껏',
      price: 360,
      description: '가장 많은 이들이 선택한, 균형과 품위를 갖춘 기본 장례.',
      items: [
        { label: '고인을 모시는 관', value: '오동나무 일반관' },
        { label: '마지막 옷 (수의)', value: '제공' },
        { label: '고인 용품', value: '알코올, 탈지면, 결관바 등' },
        { label: '영면함 (유골함)', value: '일반함' },
        { label: '남자 상복', value: '7벌' },
        { label: '여자 상복', value: '7벌' },
        { label: '빈소 용품', value: '향, 초, 방명록, 위패' },
        { label: '헌화', value: '30송이' },
        { label: '장례지도사', value: '1명 + 1명 (입관)' },
        { label: '의전 도우미', value: '6명 (8시간)' },
        { label: '리무진', value: '150km' },
        { label: '버스', value: '150km' },
        { label: '고인 이송', value: '관내 무료' },
        { label: '알림 서비스', value: '모바일 부고, 조문 답례' },
        { label: '추가 서비스', value: '장지 알선' },
      ],
    },
    premium: {
      id: 'premium',
      name: '매장 · 미국식장',
      tagline: '마지막을 완벽하게',
      price: 450,
      description: '한 사람의 삶을 중심에 두고, 방식부터 공간까지 설계하는 맞춤형 추모 의식.',
      items: [
        { label: '고인을 모시는 관', value: '오동나무 고급관' },
        { label: '마지막 옷 (수의)', value: '제공' },
        { label: '고인 용품', value: '알코올, 탈지면, 결관바 등' },
        { label: '영면함 (유골함)', value: '고급함' },
        { label: '남자 상복', value: '9벌' },
        { label: '여자 상복', value: '9벌' },
        { label: '빈소 용품', value: '향, 초, 방명록, 위패' },
        { label: '헌화', value: '50송이' },
        { label: '장례지도사', value: '1명 + 1명 (입관)' },
        { label: '의전 도우미', value: '8명 (8시간)' },
        { label: '리무진', value: '400km' },
        { label: '버스', value: '전국 무료' },
        { label: '고인 이송', value: '관내 무료' },
        { label: '알림 서비스', value: '모바일 부고, 조문 답례' },
        { label: '추가 서비스', value: '장지 알선' },
      ],
    },
  };
};

const POPUP_DISMISS_KEY = 'lucid_popup_dismissed';
const POPUP_DISMISS_DURATION = 30 * 60 * 1000; // 30분 (밀리초)

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showPopupCTA, setShowPopupCTA] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const t = translations[language];

  // 팝업 표시 여부 확인 (localStorage 체크)
  const shouldShowPopup = (): boolean => {
    const dismissedTime = localStorage.getItem(POPUP_DISMISS_KEY);
    if (!dismissedTime) return true;
    
    const now = Date.now();
    const dismissedAt = parseInt(dismissedTime, 10);
    const timeDiff = now - dismissedAt;
    
    // 30분이 지났으면 다시 표시 가능
    return timeDiff >= POPUP_DISMISS_DURATION;
  };

  // 스크롤 완료 감지 - 푸터 직전 도달 시 팝업 노출
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current && shouldShowPopup()) {
        const footerTop = footerRef.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        // 푸터 직전 200px 전에 도달하면 팝업 표시
        if (scrollPosition >= footerTop - 200 && !showPopupCTA) {
          setShowPopupCTA(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopupCTA]);

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openGoogleForm = () => {
    window.open('https://forms.gle/tcBbh8kax7HL15ZeA', '_blank');
  };

  const openMembershipForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfS4JVmbSvHNcDjZg79VutuXk5dDb9A2twuui8xRyf9dA610Q/viewform', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#141C2E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#141C2E]/95 backdrop-blur-sm border-b border-[#C9A66B]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 lg:py-2">
          <div className="flex items-center justify-between">
            {/* 좌측: 루시드라이프 로고 텍스트 */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex-shrink-0"
            >
              <span 
                className="text-white text-base md:text-lg lg:text-xl font-medium"
                style={{ fontFamily: "'Malgun Gothic', '맑은 고딕', sans-serif" }}
              >
                {language === 'ko' ? '루시드라이프' : 'Lucid Life'}
              </span>
            </button>

            {/* 우측: 아이콘 및 버튼들 */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* 전화기 아이콘 */}
              <a
                href="tel:01021164114"
                className="flex items-center text-[#C9A66B] hover:text-[#C9A66B]/80 transition-colors"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              
              {/* 긴급상담 텍스트 - Desktop */}
              <a
                href="tel:01021164114"
                className="hidden md:flex items-center text-[#C9A66B] text-sm md:text-base hover:text-[#C9A66B]/80 transition-colors"
              >
                {t.gnb.emergency}
              </a>

              {/* 카카오톡 아이콘 */}
              <a
                href="http://pf.kakao.com/_sAKxbn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/KakaoTalk_20251219_152146545_20.png" 
                  alt={language === 'ko' ? '카카오톡 문의' : 'KakaoTalk Inquiry'}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </a>

              {/* 언어 토글 */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 text-[#C9A66B] text-sm md:text-base hover:bg-[#C9A66B]/20 rounded transition-colors"
              >
                {language === 'ko' ? 'EN' : 'KR'}
              </button>

              {/* CTA 버튼: 루시드 함께하기 */}
              <button
                onClick={openGoogleForm}
                className="hidden md:flex items-center px-4 py-2 bg-[#C9A66B] text-[#141C2E] hover:bg-[#C9A66B]/90 rounded transition-colors text-sm md:text-base font-medium"
              >
                {t.gnb.cta}
              </button>

              {/* 햄버거 메뉴 */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-[#C9A66B]/20 rounded transition-colors text-[#C9A66B]"
              >
                {isMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#141C2E]/98 backdrop-blur-md pt-28 md:pt-40">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-[#C9A66B] hover:bg-[#C9A66B]/20 rounded-lg transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="flex flex-col items-center justify-start md:justify-center h-full gap-3 md:gap-3.5 px-6 pb-28 md:pt-0">
            {[
              { id: 'services', label: t.nav.services },
              { id: 'threedays', label: t.nav.process },
              { id: 'resting', label: t.nav.resting },
              { id: 'stories', label: t.nav.stories },
              { id: 'ceo', label: t.nav.ceo },
              { id: 'together', label: t.nav.together },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'together') {
                    openMembershipForm();
                    setIsMenuOpen(false);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className="text-2xl md:text-2xl text-[#C9A66B] hover:text-[#C9A66B]/80 transition-colors tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#141C2E]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photo_2025-12-24_21-32-13.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-[#141C2E]/40" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
          {/* 로고 */}
          <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
            <img 
              src="/lucid_logo_white_3000.png" 
              alt="Lucid Life Logo" 
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto"
            />
          </div>
          
          {/* 메인 타이틀 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-serif-kr font-semibold mb-8 sm:mb-9 md:mb-10 lg:mb-12">
            <span className="block mb-2 sm:mb-3 md:mb-4">{language === 'ko' ? t.hero.title : t.hero.title}</span>
            <span className="block">{language === 'ko' ? t.hero.titleLine2 : t.hero.titleLine2}</span>
          </h1>
          
          {/* 서브 타이틀 */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-serif-kr mb-8 sm:mb-9 md:mb-10 lg:mb-12">
            {t.hero.subtitle}
          </p>
          
          {/* 시그니처 */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#C9A66B]">
            {t.hero.signature}
          </p>
        </div>
      </section>


      {/* Services Section - 함께하는 방식 */}
      <section id="services" className="py-40 bg-[#141C2E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-2 text-white font-serif-kr">
              {t.services.title}
            </h2>
            <p className="text-sm md:text-base text-white/70 mt-2">
              {t.services.subtitle}
            </p>
          </div>

          {/* Product Cards - 4개 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { data: t.services.family, id: 'family' },
              { data: t.services.practical, id: 'practical' },
              { data: t.services.standard, id: 'standard' },
              { data: t.services.burial, id: 'premium' },
            ].map((product, index) => {
              // 가격 표기: 한글은 만원, 영어는 M KRW 형식
              // 가족장은 "만원"으로만 표시 (만원부터 아님)
              const priceDisplay = language === 'en' 
                ? `${(product.data.price / 100).toFixed(1)}M KRW`
                : product.data.price;
              const priceUnit = language === 'en' ? '' : (product.id === 'family' ? '만원' : '만원');
              
              return (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-[#C9A66B]/10 rounded-xl p-5 md:p-6 cursor-pointer hover:border-[#C9A66B]/25 hover:-translate-y-1 transition-all"
                  onClick={() => setSelectedProduct(getProductDetails(language)[product.id])}
                >
                  <div className="mb-4">
                    <h3 className="text-base md:text-lg font-medium text-[#C9A66B] mb-2">{product.data.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl md:text-3xl font-light text-white">{priceDisplay}</span>
                      {priceUnit && <span className="text-xs text-white/50">{priceUnit}</span>}
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-white/60 mb-3">"{product.data.tagline}"</p>
                  <p className="text-[10px] md:text-xs text-white/50 leading-relaxed">{product.data.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 하단 버튼 및 링크 */}
          <div className="text-center space-y-6 md:space-y-8">
            <button 
              onClick={() => setShowCompareModal(true)}
              className="bg-[#C9A66B] text-[#141C2E] px-8 py-3 rounded-lg text-base font-medium hover:bg-[#C9A66B]/90 transition-all block mx-auto"
            >
              {t.services.compareBtn}
            </button>
            <div>
              <a 
                href="https://blog.naver.com/lucid-life/224121989139"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A66B] text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition-opacity font-semibold font-serif-kr cursor-pointer inline-block touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://blog.naver.com/lucid-life/224121989139', '_blank', 'noopener,noreferrer');
                }}
              >
                {t.services.learnMore2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Days Section */}
      <section id="threedays" className="py-40 bg-[#F8F5E6]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
              <a 
                href="https://blog.naver.com/lucid-life/224121990599"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-5xl text-[#141C2E] font-serif-kr hover:text-[#C9A66B] transition-colors cursor-pointer inline-block touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://blog.naver.com/lucid-life/224121990599', '_blank', 'noopener,noreferrer');
                }}
              >
                {t.threedays.title}
              </a>
              <a 
                href="https://blog.naver.com/lucid-life/224121990599"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-serif-kr font-semibold inline-block touch-manipulation hover:opacity-80 transition-opacity cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://blog.naver.com/lucid-life/224121990599', '_blank', 'noopener,noreferrer');
                }}
              >
                {t.threedays.intro}
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {[t.threedays.day1, t.threedays.day2, t.threedays.day3].map((day, index) => {
              // 각 일차별 이미지 파일
              const dayImages = ['/1st_.png', '/2st_.png', '/3st_.png'];
              
              return (
              <div
                key={index}
                className="relative bg-white p-6 md:p-10 lg:p-12 rounded-3xl border border-[#C9A66B]/20 overflow-hidden"
              >
                {/* 우측 상단 이미지 */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                  <img 
                    src={dayImages[index]} 
                    alt={`${day.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="mb-4 md:mb-6">
                  <h3 className="text-xl md:text-3xl text-[#141C2E] mb-2 font-serif-kr">{day.title}</h3>
                  <p className="text-base md:text-lg text-[#C9A66B] mb-3 md:mb-4">{day.desc}</p>
                </div>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  {language === 'ko' ? (
                    index === 0 ? (
                      <>
                        <span className="hidden md:block">
                          황망한 첫날<br />
                          복잡한 절차 대신 고인과의 인사에 집중
                        </span>
                        <span className="md:hidden">
                          황망한 첫날<br />
                          복잡한 절차 대신<br />
                          고인과의 인사에 집중
                        </span>
                      </>
                    ) : index === 1 ? (
                      <>
                        <span className="hidden md:block">
                          가장 아름다운 마지막 모습을<br />
                          기억할 수 있도록<br />
                          최고의 예를 갖춘 입관식
                        </span>
                        <span className="md:hidden">
                          가장 아름다운 마지막 모습을<br />
                          기억할 수 있도록<br />
                          최고의 예를 갖춘 입관식
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="hidden md:block">
                          마지막 안식처까지<br />
                          소홀함 없이 끝까지 동행
                        </span>
                        <span className="md:hidden">
                          마지막 안식처까지<br />
                          소홀함 없이 끝까지 동행
                        </span>
                      </>
                    )
                  ) : (
                    day.details
                  )}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resting Place Section */}
      <section id="resting" className="py-40 bg-[#F8F5E6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#141C2E] font-serif-kr">{t.resting.title}</h2>
            <p className="text-base text-[#C9A66B] mt-2">{t.resting.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { data: t.resting.columbarium },
              { data: t.resting.natural },
              { data: t.resting.burial },
              { data: t.resting.relocation },
            ].map((place, index) => {
              // 각 장소별 이미지 파일
              const placeImages = ['/봉안당st.png', '/자연장st.png', '/매장st.png', '/개장이장st.png'];
              
              return (
              <a
                key={index}
                href={
                  index === 0 ? 'https://blog.naver.com/lucid-life/224121991423' :
                  index === 1 ? 'https://blog.naver.com/lucid-life/224121992026' :
                  index === 2 ? 'https://blog.naver.com/lucid-life/224121992898' :
                  'https://blog.naver.com/lucid-life/224121993554'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white rounded-3xl p-4 md:p-8 hover:shadow-2xl transition-all border border-[#C9A66B]/20 overflow-hidden block cursor-pointer touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', zIndex: 1 }}
                onClick={(e) => {
                  e.preventDefault();
                  const urls = [
                    'https://blog.naver.com/lucid-life/224121991423',
                    'https://blog.naver.com/lucid-life/224121992026', 
                    'https://blog.naver.com/lucid-life/224121992898',
                    'https://blog.naver.com/lucid-life/224121993554'
                  ];
                  window.open(urls[index], '_blank', 'noopener,noreferrer');
                }}
              >
                {/* 우측 상단 이미지 - 모바일은 그대로, PC 버전만 작게 조정 */}
                <div className="absolute top-4 md:top-3 right-4 md:right-3 w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 pointer-events-none" style={{ zIndex: 0 }}>
                  <img 
                    src={placeImages[index]} 
                    alt={`${place.data.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-lg md:text-2xl lg:text-3xl mb-3 md:mb-4 text-[#141C2E] font-serif-kr hover:text-[#C9A66B] transition-colors">
                  {place.data.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {language === 'ko' ? (
                    index === 0 ? (
                      <>
                        <span className="hidden md:block">
                          따뜻한 빛이 머무는<br />
                          편안한 실내 안치 공간
                        </span>
                        <span className="md:hidden">
                          따뜻한 빛이 머무는<br />
                          편안한 실내 안치 공간
                        </span>
                      </>
                    ) : index === 1 ? (
                      <>
                        <span className="hidden md:block">
                          자연에서 와서 자연으로<br />
                          수목장 잔디장 해양장
                        </span>
                        <span className="md:hidden">
                          자연에서 와서 자연으로<br />
                          수목장 잔디장 해양장
                        </span>
                      </>
                    ) : index === 2 ? (
                      <>
                        <span className="hidden md:block">
                          전통의 예를 갖춘<br />
                          품격 있는 장지 동행
                        </span>
                        <span className="md:hidden">{place.data.desc}</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden md:block">
                          오래된 묘소를<br />
                          새로운 안식처로
                        </span>
                        <span className="md:hidden">
                          오래된 묘소를<br />
                          새로운 안식처로
                        </span>
                      </>
                    )
                  ) : (
                    place.data.desc
                  )}
                </p>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-40 bg-[#141C2E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#C9A66B] font-serif-kr">{t.stories.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[t.stories.story1, t.stories.story2, t.stories.story3].map((story, index) => {
              // 각 스토리별 이미지 파일
              const storyImages = ['/함께견뎌낸이야기들.png', '/서툰작업을위한안내서-.png', '/사유하는이별의농도.png'];
              
              return (
              <a
                key={index}
                href={
                  index === 0 ? 'https://blog.naver.com/lucid-life/224122000903' :
                  index === 1 ? 'https://blog.naver.com/lucid-life/224122002862' :
                  'https://blog.naver.com/lucid-life/224122004483'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/15 transition-all border border-white/20 overflow-hidden block cursor-pointer touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', zIndex: 1 }}
                onClick={(e) => {
                  e.preventDefault();
                  const urls = [
                    'https://blog.naver.com/lucid-life/224122000903',
                    'https://blog.naver.com/lucid-life/224122002862',
                    'https://blog.naver.com/lucid-life/224122004483'
                  ];
                  window.open(urls[index], '_blank', 'noopener,noreferrer');
                }}
              >
                {/* 좌측 상단 이미지 - 글자를 가리지 않도록 작은 크기 */}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 pointer-events-none" style={{ zIndex: 0 }}>
                  <img 
                    src={storyImages[index]} 
                    alt={`${story.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="mb-6 pl-12 md:pl-14 lg:pl-16">
                  <h3 className="text-xl md:text-2xl mb-3 text-white font-serif-kr hover:text-[#C9A66B] transition-colors">
                    {story.title}
                  </h3>
                </div>
                <p className="text-base text-white/70 leading-relaxed pl-12 md:pl-14 lg:pl-16">
                  {language === 'ko' ? (
                    index === 0 ? (
                      <>한 사람의 마지막을 함께<br />지나온 기록</>
                    ) : index === 1 ? (
                      <>알아두면 흔들리지 않는<br />최소한의 문법</>
                    ) : (
                      <>삶과 죽음 사이에서 길어 올린<br />생각들</>
                    )
                  ) : (
                    story.excerpt
                  )}
                </p>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Care Section - 이별동행케어 */}
      <section id="care" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* 배경 그라데이션 */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #F5F1E8 0%, #E8DFD0 30%, #D4C4A8 60%, #C9B896 100%)'
          }}
        />
        
        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* 제목 */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2C2C2C] font-serif-kr mb-2 md:mb-3">
              {language === 'ko' ? '이별동행케어' : 'Continuum Care'}
            </h2>
            <p className="text-base md:text-lg text-[#C9A66B] tracking-wider">
              Continuum Care
            </p>
          </div>
          
          {/* 본문 텍스트 */}
          <div className="text-center mb-10 md:mb-14">
            {/* 모바일 버전 - 4줄 */}
            <div className="md:hidden">
              <p className="text-lg text-[#2C2C2C] font-serif-kr leading-relaxed mb-1">
                {language === 'ko' ? '절차가 아니라, 의식으로.' : 'Not a procedure, but a ritual.'}
              </p>
              <p className="text-lg text-[#2C2C2C] font-serif-kr leading-relaxed mb-1">
                {language === 'ko' ? '장례는 3일로 끝나지 않습니다.' : 'A funeral doesn\'t end in 3 days.'}
              </p>
              <p className="text-lg text-[#2C2C2C] font-serif-kr leading-relaxed mb-1">
                {language === 'ko' ? '생전부터 장례 이후까지,' : 'From before passing to after the funeral,'}
              </p>
              <p className="text-lg text-[#2C2C2C] font-serif-kr leading-relaxed">
                {language === 'ko' ? '한 사람을 기억하는 전 과정을 함께합니다.' : 'we accompany you through the entire journey of remembering a person.'}
              </p>
            </div>
            {/* PC 버전 - 기존 3줄 유지 */}
            <div className="hidden md:block">
              <p className="text-xl lg:text-2xl text-[#2C2C2C] font-serif-kr leading-relaxed mb-1 md:mb-2">
                {language === 'ko' ? '절차가 아니라, 의식으로. 장례는 3일로 끝나지 않습니다.' : 'Not a procedure, but a ritual. A funeral doesn\'t end in 3 days.'}
              </p>
              <p className="text-xl lg:text-2xl text-[#2C2C2C] font-serif-kr leading-relaxed mb-1 md:mb-2">
                {language === 'ko' ? '생전부터 장례 이후까지,' : 'From before passing to after the funeral,'}
              </p>
              <p className="text-xl lg:text-2xl text-[#2C2C2C] font-serif-kr leading-relaxed">
                {language === 'ko' ? '한 사람을 기억하는 전 과정을 함께합니다.' : 'we accompany you through the entire journey of remembering a person.'}
              </p>
            </div>
          </div>
          
          {/* 3개 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-14">
            {/* 카드 1: 임종 전 */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg text-center">
              {/* 아이콘 */}
              <div className="flex justify-center mb-4 md:mb-6">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#C9A66B]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8C32 8 20 16 20 28C20 34 24 40 32 44C40 40 44 34 44 28C44 16 32 8 32 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M24 48C24 48 16 52 16 56L16 60L48 60L48 56C48 52 40 48 40 48" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M28 44L28 48" stroke="currentColor" strokeWidth="2"/>
                  <path d="M36 44L36 48" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              {/* 타이틀 */}
              <h3 className="text-lg md:text-xl text-[#C9A66B] font-medium mb-3 md:mb-4">
                {language === 'ko' ? '[임종 전]' : '[Before Passing]'}
              </h3>
              {/* 설명 */}
              <p className="text-sm md:text-base text-[#2C2C2C] leading-relaxed">
                {language === 'ko' ? (
                  <>서로가 아직 전하지 못한 것이<br />남아 있을 때</>
                ) : (
                  <>When there are still things<br />left unsaid between you</>
                )}
              </p>
            </div>
            
            {/* 카드 2: 장례 중 */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg text-center">
              {/* 아이콘 */}
              <div className="flex justify-center mb-4 md:mb-6">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#C9A66B]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="28" y="20" width="8" height="36" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M32 8C32 8 28 12 28 16C28 18 30 20 32 20C34 20 36 18 36 16C36 12 32 8 32 8Z" fill="currentColor"/>
                  <circle cx="44" cy="44" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="48" cy="36" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="52" cy="44" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              {/* 타이틀 */}
              <h3 className="text-lg md:text-xl text-[#C9A66B] font-medium mb-3 md:mb-4">
                {language === 'ko' ? '[장례 중]' : '[During Funeral]'}
              </h3>
              {/* 설명 */}
              <p className="text-sm md:text-base text-[#2C2C2C] leading-relaxed">
                {language === 'ko' ? (
                  <>고인이 되심에 조문과<br />입관의 작별의 시간</>
                ) : (
                  <>Time of condolences and<br />farewell at the encoffining</>
                )}
              </p>
            </div>
            
            {/* 카드 3: 이별 이후 */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg text-center">
              {/* 아이콘 */}
              <div className="flex justify-center mb-4 md:mb-6">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#C9A66B]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 48H56" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32C32 32 24 36 24 44H40C40 36 32 32 32 32Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M20 20L16 16M44 20L48 16M32 12V8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              {/* 타이틀 */}
              <h3 className="text-lg md:text-xl text-[#C9A66B] font-medium mb-3 md:mb-4">
                {language === 'ko' ? '[이별 이후]' : '[After Farewell]'}
              </h3>
              {/* 설명 */}
              <p className="text-sm md:text-base text-[#2C2C2C] leading-relaxed">
                {language === 'ko' ? (
                  <>탈상, 제사, 천도제를 지나며<br />다시 일상으로 돌아갈 때</>
                ) : (
                  <>Returning to daily life through<br />memorial rites and ceremonies</>
                )}
              </p>
            </div>
          </div>
          
          {/* 하단 링크 */}
          <div className="text-center">
            <a 
              href="https://blog.naver.com/lucid-life/224107549260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xl md:text-2xl lg:text-3xl text-[#1a237e] font-serif-kr hover:opacity-80 transition-opacity font-semibold touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              onClick={(e) => {
                e.preventDefault();
                window.open('https://blog.naver.com/lucid-life/224107549260', '_blank', 'noopener,noreferrer');
              }}
            >
              {language === 'ko' ? '이별은 왜 하루로 끝나지 않을까 →' : 'Why doesn\'t farewell end in a day →'}
            </a>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section id="ceo" className="py-40 bg-[#141C2E] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-10 text-white leading-relaxed border-l-4 border-[#C9A66B] pl-6 md:pl-8 font-serif-kr">
                <p className="mb-2 md:mb-3">{t.ceo.quoteLine1}</p>
                <p className="mb-2 md:mb-3">{t.ceo.quoteLine2}</p>
                <p>{t.ceo.quoteLine3}</p>
              </blockquote>
              
              <div className="mb-8 md:mb-10">
                <p className="text-2xl md:text-3xl lg:text-4xl text-[#C9A66B] mb-2">{t.ceo.name}</p>
                <p className="text-lg md:text-xl lg:text-2xl text-white/70">{t.ceo.title}</p>
              </div>

              <button
                onClick={openGoogleForm}
                className="px-8 md:px-10 py-4 md:py-5 bg-[#C9A66B] text-[#141C2E] hover:bg-[#C9A66B]/90 rounded-lg transition-all text-lg md:text-xl lg:text-2xl font-medium"
              >
                {t.ceo.cta}
              </button>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ceoImage}
                  alt="도원 대표"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Popup CTA - 스크롤 완료 시 */}
      {showPopupCTA && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowPopupCTA(false)} />
          <div 
            className="relative rounded-lg max-w-md w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopupCTA(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="relative">
              <img
                src={language === 'ko' ? '/KakaoTalk_20251225_193446943.png' : '/KakaoTalk_20251225_193600037.png'}
                alt={language === 'ko' ? '0원 장례준비' : '0 KRW Funeral Prep'}
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => {
                  openMembershipForm();
                  setShowPopupCTA(false);
                }}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
                <div className="flex items-center justify-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                  <input
                    type="checkbox"
                    id="dontShowToday"
                    checked={dontShowAgain}
                    onChange={(e) => {
                      setDontShowAgain(e.target.checked);
                      if (e.target.checked) {
                        // 체크박스 클릭 시 현재 시간을 localStorage에 저장
                        localStorage.setItem(POPUP_DISMISS_KEY, Date.now().toString());
                        setShowPopupCTA(false);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 text-white bg-white border-2 border-white rounded focus:ring-2 focus:ring-white cursor-pointer"
                  />
                  <label
                    htmlFor="dontShowToday"
                    className="text-sm text-white cursor-pointer select-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {language === 'ko' ? '오늘은 그만 보기' : 'Stop seeing this day'}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="footer" ref={footerRef} className="bg-[#141C2E] text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* 소셜 링크 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://blog.naver.com/lucid-life"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A66B] transition-colors"
              aria-label="Blog"
            >
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>
            <a
              href="https://www.youtube.com/@루시드라이프"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A66B] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/lucidlife.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A66B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>
          </div>

          {/* 문의 정보 */}
          <div className="text-center mb-4 md:mb-5">
            <p className="text-xs md:text-sm lg:text-base text-red-300 font-medium whitespace-nowrap">
              {language === 'ko' ? '문의 : 010-2116-4114 | lucidlife@kakao.com' : 'Contact : 010-2116-4114 | lucidlife@kakao.com'}
            </p>
          </div>

          {/* 회사 정보 - 가로 배치 */}
          <div className="text-center mb-4 md:mb-5">
            <p className="text-xs md:text-sm lg:text-base text-white/80 flex flex-wrap items-center justify-center gap-1 md:gap-2">
              <span>{language === 'ko' ? '루시드라이프 대표 : 서동원' : 'Lucid Life CEO: Seo Dongwon'}</span>
              <span className="text-white/40">|</span>
              <span>{language === 'ko' ? '사업자번호 : 123-92-47792' : 'Business No.: 123-92-47792'}</span>
              <span className="text-white/40">|</span>
              <span>{language === 'ko' ? '사업장 : 경기도 파주시 탄현로 144-55, 310-B02' : 'Location: 144-55, Tanhyeon-ro, Paju-si, Gyeonggi-do, 310-B02'}</span>
            </p>
          </div>

          {/* 개인정보처리방침, 이용약관, 저작권 */}
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base text-white/60">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-white/80 transition-colors underline"
              >
                {t.footer.privacyBtn}
              </button>
              <span className="text-white/40">|</span>
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:text-white/80 transition-colors underline"
              >
                {t.footer.termsBtn}
              </button>
              <span className="text-white/40">|</span>
              <span>{t.footer.copyright}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacyModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#F8F5E6] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#141C2E]/10 hover:bg-[#141C2E]/20 transition-colors"
            >
              <X className="w-5 h-5 text-[#141C2E]" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8 lg:p-10">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-[#141C2E] font-serif-kr font-semibold">
                {t.privacyPolicy.title}
              </h3>
              
              {/* Content */}
              <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-[#141C2E] leading-relaxed whitespace-pre-line">
                <p className="text-sm md:text-base lg:text-lg">{t.privacyPolicy.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowTermsModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#F8F5E6] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#141C2E]/10 hover:bg-[#141C2E]/20 transition-colors"
            >
              <X className="w-5 h-5 text-[#141C2E]" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8 lg:p-10">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-[#141C2E] font-serif-kr font-semibold">
                {t.termsOfService.title}
              </h3>
              
              {/* Content */}
              <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-[#141C2E] leading-relaxed whitespace-pre-line">
                <p className="text-sm md:text-base lg:text-lg">{t.termsOfService.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 md:gap-4 z-40">
        <a
          href="tel:010-2116-4114"
            className="w-12 h-12 md:w-16 md:h-16 bg-[#C9A66B] hover:bg-[#C9A66B]/80 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110"
          title={language === 'ko' ? '전화' : 'Call'}
        >
          <Phone className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </a>
        <a
          href="http://pf.kakao.com/_sAKxbn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-2xl transition-all transform hover:scale-110"
          title={language === 'ko' ? '카카오톡 문의' : 'KakaoTalk Inquiry'}
        >
          <img 
            src="/KakaoTalk_20251219_152146545_20.png" 
            alt={language === 'ko' ? '카카오톡 문의' : 'KakaoTalk Inquiry'}
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#1e1e1e] rounded-lg w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/50 border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-4 md:p-8 lg:p-10">
              {/* Header - 제목 */}
              <h3 className="text-lg md:text-2xl lg:text-3xl font-medium text-[#C9A66B] mb-2 md:mb-3">
                {selectedProduct.name}
              </h3>
              
              {/* Tagline */}
              <p className="text-xs md:text-base lg:text-lg text-white/80 mb-3 md:mb-5">"{selectedProduct.tagline}"</p>

              {/* Price */}
              <div className="mb-4 md:mb-5">
                {language === 'en' ? (
                  <>
                    {/* 모바일: 영어 형식 (1.5M KRW), PC: 기존 형식 */}
                    <span className="text-2xl md:text-5xl lg:text-6xl font-semibold text-[#C9A66B] md:hidden">
                      {(selectedProduct.price / 100).toFixed(1)}M KRW
                    </span>
                    <span className="hidden md:inline text-5xl lg:text-6xl font-semibold text-[#C9A66B]">
                      {selectedProduct.price}
                    </span>
                    <span className="hidden md:inline text-lg lg:text-xl text-white/70 ml-2">0k KRW~</span>
                  </>
                ) : (
                  <>
                    <span className="text-2xl md:text-5xl lg:text-6xl font-semibold text-[#C9A66B]">{selectedProduct.price}</span>
                    <span className="text-sm md:text-lg lg:text-xl text-white/70 ml-2">만원</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-white/70 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/10 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Items List - 구성 항목 */}
              <div className="mb-4">
                <p className="text-base md:text-lg lg:text-xl text-[#C9A66B] mb-6 md:mb-8 font-medium">{language === 'ko' ? '구성 항목' : 'Composition Items'}</p>
                <div className="space-y-0">
                  {selectedProduct.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex justify-between items-center py-3 md:py-4 lg:py-5 border-b border-white/10 gap-4 md:gap-6"
                    >
                      <span className="text-sm md:text-base lg:text-lg text-white/70 flex-shrink-0" style={{ minWidth: '120px', maxWidth: '180px' }}>{item.label}</span>
                      <span className={`text-sm md:text-base lg:text-lg text-right flex-1 ${
                        item.value === '—' ? 'text-white/40' : 
                        item.value.startsWith('(') ? 'text-white/60' : 'text-white'
                      }`} style={{ wordBreak: 'keep-all', whiteSpace: 'normal', textAlign: 'right' }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare Products Modal */}
      {showCompareModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
          onClick={() => setShowCompareModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#1e1e1e] rounded-lg w-full max-w-[calc(100vw-32px)] md:max-w-[1000px] lg:max-w-[1200px] max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCompareModal(false)}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-white/50" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-4 md:p-6 lg:p-10">
              {/* Header */}
              <h3 className="text-base md:text-lg lg:text-3xl font-medium text-[#C9A66B] mb-1 lg:mb-2">
                {language === 'ko' ? '전체 상품 비교' : 'Compare All Products'}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-[#808080] mb-4 md:mb-6 lg:mb-10">
                {language === 'ko' ? '각 상품의 구성을 한눈에 비교해보세요' : 'Compare the composition of each product at a glance'}
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-[8px] md:text-[9px] lg:text-base" style={{ tableLayout: 'fixed', width: '100%' }}>
                  {/* Header Row - Product Names */}
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 md:py-3 lg:py-6 pr-1 md:pr-3 lg:pr-6 text-[#808080] font-normal text-[8px] md:text-[9px] lg:text-base" style={{ width: '20%', minWidth: '65px' }}>{language === 'ko' ? '항목' : 'Item'}</th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '80px', maxWidth: '120px' }}>
                        <div className="text-[#C9A66B] font-medium text-[8px] md:text-[9px] lg:text-base leading-tight px-1" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{language === 'ko' ? '가족장 · 무빈소' : 'Family Funeral · No Wake'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          {language === 'ko' ? (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">150</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">만원</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">1.5</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">M KRW</span>
                            </>
                          )}
                        </div>
                      </th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '80px', maxWidth: '120px' }}>
                        <div className="text-[#C9A66B] font-medium text-[8px] md:text-[9px] lg:text-base leading-tight px-1" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{language === 'ko' ? '실용장' : 'Practical Funeral'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          {language === 'ko' ? (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">290</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">만원</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">2.9</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">M KRW</span>
                            </>
                          )}
                        </div>
                      </th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '80px', maxWidth: '120px' }}>
                        <div className="text-[#C9A66B] font-medium text-[8px] md:text-[9px] lg:text-base leading-tight px-1" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{language === 'ko' ? '표준장' : 'Standard Funeral'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          {language === 'ko' ? (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">360</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">만원</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">3.6</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">M KRW</span>
                            </>
                          )}
                        </div>
                      </th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '80px', maxWidth: '120px' }}>
                        <div className="text-[#C9A66B] font-medium text-[8px] md:text-[9px] lg:text-base leading-tight px-1" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{language === 'ko' ? '매장 · 미국식장' : 'Burial · American Style'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          {language === 'ko' ? (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">450</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">만원</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm md:text-base lg:text-4xl text-white font-light">4.5</span>
                              <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">M KRW</span>
                            </>
                          )}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(language === 'ko' ? [
                      { label: '고인을 모시는 관', values: ['오동나무 일반관', '오동나무 일반관', '오동나무 일반관', '오동나무 고급관'] },
                      { label: '마지막 옷 (수의)', values: ['제공', '제공', '제공', '제공'] },
                      { label: '고인 용품', values: ['알코올, 탈지면, 결관바 등', '알코올, 탈지면, 결관바 등', '알코올, 탈지면, 결관바 등', '알코올, 탈지면, 결관바 등'] },
                      { label: '영면함 (유골함)', values: ['일반함', '고급함', '일반함', '고급함'] },
                      { label: '남자 상복', values: ['총 5벌 (남녀 합계)', '5벌', '7벌', '9벌'] },
                      { label: '여자 상복', values: ['—', '5벌', '7벌', '9벌'] },
                      { label: '빈소 용품', values: ['향, 초, 방명록, 위패', '향, 초, 방명록, 위패', '향, 초, 방명록, 위패', '향, 초, 방명록, 위패'] },
                      { label: '헌화', values: ['—', '30송이', '30송이', '50송이'] },
                      { label: '장례지도사', values: ['1명 + 1명 (입관)', '1명 + 1명 (입관)', '1명 + 1명 (입관)', '1명 + 1명 (입관)'] },
                      { label: '의전 도우미', values: ['—', '4명 (8시간)', '6명 (8시간)', '8명 (8시간)'] },
                      { label: '리무진', values: ['택1 / 150km', '택1 / 150km', '150km', '400km'] },
                      { label: '버스', values: ['—', '—', '150km', '전국 무료'] },
                      { label: '고인 이송', values: ['관내 무료', '관내 무료', '관내 무료', '관내 무료'] },
                      { label: '알림 서비스', values: ['모바일 부고, 조문 답례', '모바일 부고, 조문 답례', '모바일 부고, 조문 답례', '모바일 부고, 조문 답례'] },
                      { label: '추가 서비스', values: ['장지 알선', '장지 알선', '장지 알선', '장지 알선'] },
                    ] : [
                      { label: 'Casket for the deceased', values: ['Paulownia wood standard', 'Paulownia wood standard', 'Paulownia wood standard', 'Paulownia wood premium'] },
                      { label: 'Last clothes (shroud)', values: ['Provided', 'Provided', 'Provided', 'Provided'] },
                      { label: 'Deceased\'s items', values: ['Alcohol, cotton, tying straps, etc.', 'Alcohol, cotton, tying straps, etc.', 'Alcohol, cotton, tying straps, etc.', 'Alcohol, cotton, tying straps, etc.'] },
                      { label: 'Urn for eternal rest', values: ['Standard urn', 'Premium urn', 'Standard urn', 'Premium urn'] },
                      { label: 'Men\'s mourning attire', values: ['Total 5 sets (combined)', '5 sets', '7 sets', '9 sets'] },
                      { label: 'Women\'s mourning attire', values: ['—', '5 sets', '7 sets', '9 sets'] },
                      { label: 'Wake items', values: ['Incense, candles, guestbook, ancestral tablet', 'Incense, candles, guestbook, ancestral tablet', 'Incense, candles, guestbook, ancestral tablet', 'Incense, candles, guestbook, ancestral tablet'] },
                      { label: 'Floral tribute', values: ['—', '30 flowers', '30 flowers', '50 flowers'] },
                      { label: 'Funeral director', values: ['1 person + 1 person (embalming)', '1 person + 1 person (embalming)', '1 person + 1 person (embalming)', '1 person + 1 person (embalming)'] },
                      { label: 'Ceremonial assistant', values: ['—', '4 people (8 hours)', '6 people (8 hours)', '8 people (8 hours)'] },
                      { label: 'Limousine', values: ['Choose 1 / 150km', 'Choose 1 / 150km', '150km', '400km'] },
                      { label: 'Bus', values: ['—', '—', '150km', 'Nationwide free'] },
                      { label: 'Deceased transfer', values: ['Free within jurisdiction', 'Free within jurisdiction', 'Free within jurisdiction', 'Free within jurisdiction'] },
                      { label: 'Notification service', values: ['Mobile obituary, condolence reply', 'Mobile obituary, condolence reply', 'Mobile obituary, condolence reply', 'Mobile obituary, condolence reply'] },
                      { label: 'Additional service', values: ['Burial site arrangement', 'Burial site arrangement', 'Burial site arrangement', 'Burial site arrangement'] },
                    ]).map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-1.5 md:py-2 lg:py-4 pr-1 md:pr-3 lg:pr-6 text-[#808080] text-[8px] md:text-[9px] lg:text-base leading-relaxed" style={{ width: '20%', wordBreak: 'break-word', whiteSpace: 'normal' }}>{row.label}</td>
                        {row.values.map((value, vIdx) => (
                          <td key={vIdx} className={`py-1.5 md:py-2 lg:py-4 px-0.5 md:px-1 lg:px-4 text-center text-[8px] md:text-[9px] lg:text-base leading-relaxed ${value === '—' ? 'text-[#505050]' : 'text-white'}`} style={{ width: '20%', wordBreak: 'break-word', whiteSpace: 'normal', lineHeight: '1.4' }}>
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal - Removed per design guidelines */}
      {/* Modal code removed */}
      {false && false && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => {}}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#2c3e50] rounded-lg w-full max-w-[900px] lg:max-w-[1000px] max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {}}
              className="absolute top-4 right-4 z-10 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-white/50" />
            </button>

            {/* Header */}
            <div className="p-6 lg:p-8 border-b border-white/10">
              <h2 className="text-xl lg:text-2xl font-bold text-[#C9A66B]">{language === 'ko' ? '개인정보 처리방침' : 'Privacy Policy'}</h2>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6 text-sm lg:text-base text-white/80 leading-relaxed">
                {language === 'ko' ? (
                  <>
                    <p>
                      루시드라이프 (이하 "회사"는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
                      회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                    </p>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 수집하는 개인정보 항목 및 수집방법</h3>
                  <div className="space-y-2 text-white/70">
                    <p className="font-medium text-white/90">가. 수집하는 개인정보의 항목</p>
                    <p>○ 회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <p className="pl-4">- 회원가입시 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보</p>
                    <p className="pl-4">- 서비스 신청시 : 주소, 결제 정보</p>
                    <p>○ 서비스 이용 과정이나 사업 처리 과정에서 서비스이용기록, 접속로그, 쿠키, 접속 IP, 결제 기록, 불량이용 기록이 생성되어 수집될 수 있습니다.</p>
                    <p className="font-medium text-white/90 mt-3">나. 수집방법</p>
                    <p className="pl-4">- 홈페이지, 서면양식, 게시판, 이메일, 이벤트 응모, 배송요청, 전화, 팩스, 생성 정보 수집 툴을 통한 수집</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 개인정보의 수집 및 이용목적</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                    <p>○ 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>
                    <p className="pl-4">콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스</p>
                    <p>○ 회원 관리</p>
                    <p className="pl-4">회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달</p>
                    <p>○ 마케팅 및 광고에 활용</p>
                    <p className="pl-4">이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 개인정보의 보유 및 이용기간</h3>
                  <div className="space-y-2 text-white/70">
                    <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</p>
                    <p className="font-medium text-white/90 mt-3">가. 회사 내부방침에 의한 정보보유 사유</p>
                    <p className="pl-4">회원이 탈퇴한 경우에도 불량회원의 부정한 이용의 재발을 방지, 분쟁해결 및 수사기관의 요청에 따른 협조를 위하여, 이용계약 해지일로부터 5년간 회원의 정보를 보유할 수 있습니다.</p>
                    <p className="font-medium text-white/90 mt-3">나. 관련 법령에 의한 정보 보유 사유</p>
                    <p>전자상거래등에서의소비자보호에관한법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
                    <div className="pl-4 space-y-1 mt-2">
                      <p>○ 계약 또는 청약철회 등에 관한 기록 - 보존기간 : 5년</p>
                      <p>○ 대금 결제 및 재화 등의 공급에 관한 기록 - 보존기간 : 5년</p>
                      <p>○ 소비자 불만 또는 분쟁처리에 관한 기록 - 보존기간 : 3년</p>
                      <p>○ 로그 기록 - 보존기간 : 3개월</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 개인정보의 파기절차 및 방법</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                    <p className="font-medium text-white/90 mt-3">○ 파기절차</p>
                    <p className="pl-4">회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</p>
                    <p className="font-medium text-white/90 mt-3">○ 파기방법</p>
                    <p className="pl-4">전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 개인정보 제공</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                    <p className="pl-4">○ 이용자들이 사전에 동의한 경우</p>
                    <p className="pl-4">○ 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 수집한 개인정보의 위탁</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.</p>
                    <p className="pl-4">○ 위탁 대상자 : [KCP] 넷페이</p>
                    <p className="pl-4">○ 위탁업무 내용 : [카드결제/ 계좌이체/ 휴대폰결제]</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 이용자 및 법정대리인의 권리와 그 행사방법</h3>
                  <div className="space-y-2 text-white/70">
                    <p>○ 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.</p>
                    <p>○ 이용자들의 개인정보 조회,수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.</p>
                    <p>○ 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.</p>
                    <p>○ 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
                    <p>○ 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 귀하의 정보를 수시로 저장하고 찾아내는 "쿠키(cookie)" 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.</p>
                    <p className="font-medium text-white/90 mt-3">○ 쿠키 등 사용 목적</p>
                    <p className="pl-4">1. 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공</p>
                    <p className="pl-4">2. 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                    <p className="font-medium text-white/90 mt-3">○ 쿠키 설정 거부 방법</p>
                    <p className="pl-4">1. 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
                    <p className="pl-4">2. 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보</p>
                    <p className="pl-4">3. 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#C9A66B] font-semibold mb-3">■ 개인정보에 관한 민원서비스</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보보호책임자를 지정하고 있습니다.</p>
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                      <p className="font-medium text-white/90">○ 개인정보보호담당자 / 개인정보보호책임자</p>
                      <div className="pl-4 mt-2 space-y-1">
                        <p>성명 : 서동원</p>
                        <p>소속 : 루시드라이프 대표</p>
                        <p>전화번호 : 010-5320-1237</p>
                        <p>이메일 : neen@kakao.com</p>
                      </div>
                    </div>
                    <p className="mt-4">○ 귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수 있습니다.</p>
                    <p>○ 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
                    <p className="mt-4">○ 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
                    <div className="pl-4 mt-2 space-y-1">
                      <p>개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)</p>
                      <p>대검찰청 사이버범죄수사단 (www.spo.go.kr / 02-3480-2000)</p>
                      <p>경찰청 사이버안전국 (www.ctrc.go.kr / 국번 없이 182)</p>
                    </div>
                  </div>
                </div>
                  </>
                ) : (
                  <>
                    <p>
                      Lucid Life (hereinafter referred to as "the Company") values your personal information and complies with the "Act on Promotion of Information and Communications Network Utilization and Information Protection."
                      Through this Privacy Policy, the Company informs you about how the personal information you provide is used and for what purposes, and what measures are taken to protect your personal information.
                    </p>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Items of Personal Information Collected and Collection Methods</h3>
                      <div className="space-y-2 text-white/70">
                        <p className="font-medium text-white/90">a. Items of Personal Information Collected</p>
                        <p>○ The Company collects personal information such as the following for membership registration, consultation, and service application.</p>
                        <p className="pl-4">- Upon membership registration: Name, Date of birth, Gender, Login ID, Password, Home phone number, Mobile phone number, Email, Information of legal guardian for subscribers under 14 years of age</p>
                        <p className="pl-4">- Upon service application: Address, Payment information</p>
                        <p>○ During the service use process or business processing, service usage records, access logs, cookies, access IP, payment records, and misuse records may be generated and collected.</p>
                        <p className="font-medium text-white/90 mt-3">b. Collection Methods</p>
                        <p className="pl-4">- Collection through website, written forms, bulletin boards, email, event applications, delivery requests, phone, fax, and generated information collection tools</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Purpose of Collection and Use of Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>The Company uses the collected personal information for the following purposes.</p>
                        <p>○ Contract fulfillment for service provision and fee settlement for service provision</p>
                        <p className="pl-4">Content provision, purchase and fee payment, delivery of goods or invoices, identity verification for financial transactions and financial services</p>
                        <p>○ Member management</p>
                        <p className="pl-4">Identity verification for membership service use, personal identification, prevention of fraudulent use by bad members and unauthorized use, confirmation of membership intention, age verification, confirmation of legal guardian consent for collection of personal information of children under 14, handling of complaints, delivery of notices</p>
                        <p>○ Use for marketing and advertising</p>
                        <p className="pl-4">Delivery of advertising information such as events, analysis of access frequency or statistics on member service use</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Retention and Use Period of Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>In principle, personal information is destroyed without delay after the purpose of collection and use is achieved. However, the following information may be retained for the period specified below for the following reasons.</p>
                        <p className="font-medium text-white/90 mt-3">a. Information Retention Reasons According to Company Internal Policy</p>
                        <p className="pl-4">Even if a member withdraws, the Company may retain member information for 5 years from the date of contract termination to prevent recurrence of fraudulent use by bad members, resolve disputes, and cooperate with requests from investigative agencies.</p>
                        <p className="font-medium text-white/90 mt-3">b. Information Retention Reasons According to Related Laws</p>
                        <p>If it is necessary to retain information according to related laws such as the Act on Consumer Protection in Electronic Commerce, the Company retains member information for the period specified by related laws as follows.</p>
                        <div className="pl-4 space-y-1 mt-2">
                          <p>○ Records on contracts or withdrawal of offers - Retention period: 5 years</p>
                          <p>○ Records on payment of money and supply of goods, etc. - Retention period: 5 years</p>
                          <p>○ Records on consumer complaints or dispute resolution - Retention period: 3 years</p>
                          <p>○ Log records - Retention period: 3 months</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Procedures and Methods for Destruction of Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>In principle, the Company destroys personal information without delay after the purpose of collection and use is achieved. The procedures and methods for destruction are as follows.</p>
                        <p className="font-medium text-white/90 mt-3">○ Destruction Procedures</p>
                        <p className="pl-4">Information entered by members for membership registration, etc., is moved to a separate DB (or a separate document box in case of paper) after the purpose is achieved, stored for a certain period according to internal policy and other related laws, and then destroyed. Personal information moved to a separate DB is not used for purposes other than retention unless required by law.</p>
                        <p className="font-medium text-white/90 mt-3">○ Destruction Methods</p>
                        <p className="pl-4">Personal information stored in electronic file format is deleted using technical methods that cannot reproduce records.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Provision of Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>In principle, the Company does not provide users' personal information to external parties. However, exceptions are made in the following cases.</p>
                        <p className="pl-4">○ When users have given prior consent</p>
                        <p className="pl-4">○ When required by investigative agencies according to legal procedures and methods for investigation purposes, in accordance with legal provisions</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Entrustment of Collected Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>The Company entrusts and operates personal information to external specialized companies as follows to fulfill services.</p>
                        <p className="pl-4">○ Entrusted party: [KCP] Netpay</p>
                        <p className="pl-4">○ Entrusted business: [Card payment / Account transfer / Mobile payment]</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Rights of Users and Legal Guardians and How to Exercise Them</h3>
                      <div className="space-y-2 text-white/70">
                        <p>○ Users can view or modify their registered personal information at any time and may also request membership cancellation.</p>
                        <p>○ For users to view or modify their personal information, click "Change Personal Information" (or "Modify Member Information", etc.), and for membership cancellation (withdrawal of consent), click "Withdraw Membership" to go through identity verification procedures, then directly view, correct, or withdraw.</p>
                        <p>○ Or, if you contact the personal information protection officer in writing, by phone, or by email, we will take action without delay.</p>
                        <p>○ If you request correction of errors in personal information, we will not use or provide the personal information until the correction is completed. Also, if incorrect personal information has already been provided to a third party, we will notify the third party of the correction processing results without delay to ensure correction is made.</p>
                        <p>○ Personal information that has been terminated or deleted at the user's request is processed according to the "Retention and Use Period of Personal Information Collected by the Company" and cannot be viewed or used for other purposes.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Installation, Operation, and Refusal of Automatic Collection Devices for Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>The Company operates "cookies" that frequently store and retrieve your information. Cookies are very small text files sent by the server used to operate the website to your browser and stored on your computer's hard disk.</p>
                        <p className="font-medium text-white/90 mt-3">○ Purpose of Using Cookies, etc.</p>
                        <p className="pl-4">1. Analysis of access frequency or visit time of members and non-members, understanding of user preferences and interests and tracking, understanding of participation in various events and visit frequency, etc., for targeted marketing and personalized service provision</p>
                        <p className="pl-4">2. You have the right to choose whether to install cookies. Therefore, you can allow all cookies, check each time a cookie is stored, or refuse to store all cookies by setting options in your web browser.</p>
                        <p className="font-medium text-white/90 mt-3">○ How to Refuse Cookie Settings</p>
                        <p className="pl-4">1. To refuse cookie settings, you can allow all cookies, check each time a cookie is stored, or refuse to store all cookies by selecting options in the web browser you use.</p>
                        <p className="pl-4">2. Example of setting method (for Internet Explorer): Tools &gt; Internet Options &gt; Privacy in the web browser menu</p>
                        <p className="pl-4">3. However, if you refuse to install cookies, there may be difficulties in providing services.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">■ Complaint Services Regarding Personal Information</h3>
                      <div className="space-y-2 text-white/70">
                        <p>The Company designates related departments and personal information protection officers as follows to protect customers' personal information and handle complaints related to personal information.</p>
                        <div className="mt-4 p-4 bg-white/5 rounded-lg">
                          <p className="font-medium text-white/90">○ Personal Information Protection Officer / Personal Information Protection Manager</p>
                          <div className="pl-4 mt-2 space-y-1">
                            <p>Name: Seo Dong-won</p>
                            <p>Affiliation: Lucid Life CEO</p>
                            <p>Phone: (+82) 10-5320-1237</p>
                            <p>Email: neen@kakao.com</p>
                          </div>
                        </div>
                        <p className="mt-4">○ You can report all complaints related to personal information protection that occur while using the Company's services to the personal information protection manager or the responsible department.</p>
                        <p>○ The Company will promptly provide sufficient responses to users' reports.</p>
                        <p className="mt-4">○ For other reports or consultations regarding personal information infringement, please contact the following agencies.</p>
                        <div className="pl-4 mt-2 space-y-1">
                          <p>Personal Information Infringement Report Center (privacy.kisa.or.kr / 118 without area code)</p>
                          <p>Supreme Prosecutors' Office Cyber Crime Investigation Division (www.spo.go.kr / 02-3480-2000)</p>
                          <p>National Police Agency Cyber Safety Bureau (www.ctrc.go.kr / 182 without area code)</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal - Removed per design guidelines */}
      {/* Modal code removed */}
      {false && false && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => {}}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-[#2c3e50] rounded-lg w-full max-w-[900px] lg:max-w-[1000px] max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {}}
              className="absolute top-4 right-4 z-10 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-white/50" />
            </button>

            {/* Header */}
            <div className="p-6 lg:p-8 border-b border-white/10">
              <h2 className="text-xl lg:text-2xl font-bold text-[#C9A66B]">{language === 'ko' ? '이용약관' : 'Terms and Conditions'}</h2>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6 text-sm lg:text-base text-white/80 leading-relaxed">
                {language === 'ko' ? (
                  <>
                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제1조(목적)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>이 약관은 루시드라이프(전자상거래 사업자)가 운영하는 루시드라이프_사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리/ 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                        <p className="text-white/50 text-sm">※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제2조(정의)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① "몰"이란 루시드라이프 회사가 재화 또는 용역(이하 "재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</p>
                        <p>② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
                        <p>③ '회원'이라 함은 "몰"에 회원등록을 한 자로서, 계속적으로 "몰"이 제공하는 서비스를 이용할 수 있는 자를 말합니다.</p>
                        <p>④ '비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제3조 (약관 등의 명시와 설명 및 개정)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 루시드라이프 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</p>
                        <p>② "몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회·배송책임·환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.</p>
                        <p>③ "몰"은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                        <p>④ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰"은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.</p>
                        <p>⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 "몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.</p>
                        <p>⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제4조(서비스의 제공 및 변경)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① "몰"은 다음과 같은 업무를 수행합니다.</p>
                        <div className="pl-4 space-y-1">
                          <p>1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결</p>
                          <p>2. 구매계약이 체결된 재화 또는 용역의 배송</p>
                          <p>3. 기타 "몰"이 정하는 업무</p>
                        </div>
                        <p>② "몰"은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.</p>
                        <p>③ "몰"이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.</p>
                        <p>④ 전항의 경우 "몰"은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제5조(서비스의 중단)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① "몰"은 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
                        <p>② "몰"은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
                        <p>③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지하고 당초 "몰"에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, "몰"이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 "몰"에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제6조(회원가입)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</p>
                        <p>② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>
                        <div className="pl-4 space-y-1">
                          <p>1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다.</p>
                          <p>2. 등록 내용에 허위, 기재누락, 오기가 있는 경우</p>
                          <p>3. 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우</p>
                        </div>
                        <p>③ 회원가입계약의 성립 시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다.</p>
                        <p>④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 "몰"에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">제7조(회원 탈퇴 및 자격 상실 등)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다.</p>
                        <p>② 회원이 다음 각 호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다.</p>
                        <div className="pl-4 space-y-1">
                          <p>1. 가입 신청 시에 허위 내용을 등록한 경우</p>
                          <p>2. "몰"을 이용하여 구입한 재화 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우</p>
                          <p>3. 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</p>
                          <p>4. "몰"을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</p>
                        </div>
                        <p>③ "몰"이 회원 자격을 제한·정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다.</p>
                        <p>④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 1 (Purpose)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>These terms and conditions are intended to regulate the rights, obligations, and responsibilities of the cyber mall and users in using Internet-related services (hereinafter referred to as "Services") provided by the Lucid Life Cyber Mall (hereinafter referred to as "Mall") operated by Lucid Life (e-commerce business operator).</p>
                        <p className="text-white/50 text-sm">※ "These terms and conditions also apply to e-commerce using PC communication, wireless, etc., unless contrary to their nature."</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 2 (Definitions)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① "Mall" refers to a virtual business place set up by Lucid Life Company to allow users to trade goods or services (hereinafter referred to as "Goods, etc.") using information and communication facilities such as computers, and also refers to the business operator operating the cyber mall.</p>
                        <p>② "User" refers to members and non-members who access the "Mall" and receive services provided by the "Mall" according to these terms and conditions.</p>
                        <p>③ "Member" refers to a person who has registered as a member of the "Mall" and can continuously use the services provided by the "Mall".</p>
                        <p>④ "Non-member" refers to a person who uses the services provided by the "Mall" without joining as a member.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 3 (Disclosure, Explanation, and Amendment of Terms and Conditions)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① The "Mall" posts the contents of these terms and conditions, company name and representative name, business address (including address where consumer complaints can be handled), phone number, fax number, email address, business registration number, communication sales business report number, personal information protection officer, etc., on the initial service screen (front page) of the Lucid Life Cyber Mall so that users can easily know them. However, the contents of the terms and conditions can be viewed by users through a connected screen.</p>
                        <p>② Before users agree to the terms and conditions, the "Mall" must provide a separate connected screen or popup screen so that users can understand important contents such as withdrawal of offer, delivery responsibility, refund conditions, etc., and seek user confirmation.</p>
                        <p>③ The "Mall" may amend these terms and conditions within the scope that does not violate related laws such as the "Act on Consumer Protection in Electronic Commerce," "Act on Regulation of Terms and Conditions," "Basic Act on Electronic Documents and Electronic Transactions," "Electronic Financial Transactions Act," "Electronic Signature Act," "Act on Promotion of Information and Communications Network Utilization and Information Protection," "Act on Door-to-Door Sales, etc.," and "Framework Act on Consumers."</p>
                        <p>④ When the "Mall" amends the terms and conditions, it shall specify the application date and reason for amendment and notify them together with the current terms and conditions on the initial screen of the mall from 7 days before the application date to the day before the application date. However, if the terms and conditions are changed unfavorably to users, they shall be notified with at least 30 days of prior grace period. In this case, the "Mall" clearly compares the contents before and after the amendment so that users can easily understand.</p>
                        <p>⑤ When the "Mall" amends the terms and conditions, the amended terms and conditions apply only to contracts concluded after the application date, and the terms and conditions before the amendment apply to contracts already concluded before that. However, if a user who has already concluded a contract wishes to be subject to the amended terms and conditions and sends this intention to the "Mall" within the notice period of the amended terms and conditions under paragraph 3 and receives the consent of the "Mall," the amended terms and conditions apply.</p>
                        <p>⑥ Matters not specified in these terms and conditions and interpretation of these terms and conditions shall be in accordance with the Act on Consumer Protection in Electronic Commerce, Act on Regulation of Terms and Conditions, Consumer Protection Guidelines in Electronic Commerce, etc., set by the Fair Trade Commission, and related laws or commercial practices.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 4 (Provision and Change of Services)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① The "Mall" performs the following tasks.</p>
                        <div className="pl-4 space-y-1">
                          <p>1. Provision of information on goods or services and conclusion of purchase contracts</p>
                          <p>2. Delivery of goods or services for which purchase contracts have been concluded</p>
                          <p>3. Other tasks determined by the "Mall"</p>
                        </div>
                        <p>② The "Mall" may change the contents of goods or services to be provided by contracts to be concluded in the future in cases such as out of stock of goods or services or changes in technical specifications. In this case, the changed contents of goods or services and the provision date are specified and immediately notified where the current contents of goods or services are posted.</p>
                        <p>③ If the "Mall" changes the contents of services that it has contracted with users to provide due to reasons such as out of stock of goods, etc., or changes in technical specifications, it immediately notifies users of the reason to an address where notification is possible.</p>
                        <p>④ In the case of the preceding paragraph, the "Mall" compensates for damages suffered by users. However, this does not apply if the "Mall" proves that there was no intention or negligence.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 5 (Suspension of Services)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① The "Mall" may temporarily suspend the provision of services if reasons such as maintenance, replacement, and failure of information and communication facilities such as computers, or interruption of communication occur.</p>
                        <p>② The "Mall" compensates for damages suffered by users or third parties due to temporary suspension of service provision due to the reasons in paragraph 1. However, this does not apply if the "Mall" proves that there was no intention or negligence.</p>
                        <p>③ If services cannot be provided due to reasons such as conversion of business items, abandonment of business, integration between companies, etc., the "Mall" notifies users by the method specified in Article 8 and compensates consumers according to the conditions initially presented by the "Mall." However, if the "Mall" has not notified compensation standards, etc., it pays users' mileage or accumulated points, etc., to users in kind or cash corresponding to the currency value used in the "Mall."</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 6 (Membership Registration)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① Users apply for membership registration by filling in member information according to the registration form set by the "Mall" and expressing their intention to agree to these terms and conditions.</p>
                        <p>② The "Mall" registers as members those who have applied for membership as in paragraph 1, unless they fall under any of the following subparagraphs.</p>
                        <div className="pl-4 space-y-1">
                          <p>1. If the applicant has previously lost membership qualification under Article 7, Paragraph 3 of these terms and conditions, except for those who have passed 3 years after losing membership qualification under Article 7, Paragraph 3 and have obtained approval for re-registration as a member of the "Mall"</p>
                          <p>2. If there is falsehood, omission, or error in the registered contents</p>
                          <p>3. If it is judged that registering as a member significantly hinders the "Mall" technically</p>
                        </div>
                        <p>③ The time of establishment of the membership registration contract is when the "Mall's" approval reaches the member.</p>
                        <p>④ If there are changes in the matters registered at the time of membership registration, members must notify the "Mall" of the changes by methods such as modifying member information within a reasonable period.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#C9A66B] font-semibold mb-3">Article 7 (Member Withdrawal and Loss of Qualification)</h3>
                      <div className="space-y-2 text-white/70">
                        <p>① Members may request withdrawal from the "Mall" at any time, and the "Mall" immediately processes member withdrawal.</p>
                        <p>② If a member falls under any of the following subparagraphs, the "Mall" may restrict or suspend membership qualification.</p>
                        <div className="pl-4 space-y-1">
                          <p>1. If false contents were registered at the time of membership application</p>
                          <p>2. If the member does not pay the price of goods, etc., purchased using the "Mall" or other debts borne by the member related to the use of the "Mall" by the due date</p>
                          <p>3. If interfering with others' use of the "Mall" or stealing their information, etc., threatening the order of e-commerce</p>
                          <p>4. If using the "Mall" to commit acts prohibited by laws or these terms and conditions or contrary to public order and morals</p>
                        </div>
                        <p>③ After the "Mall" restricts or suspends membership qualification, if the same act is repeated 2 or more times or the reason is not corrected within 30 days, the "Mall" may lose membership qualification.</p>
                        <p>④ If the "Mall" loses membership qualification, it deletes the member registration. In this case, it notifies the member and gives an opportunity to explain by setting a period of at least 30 days before deleting the member registration.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}