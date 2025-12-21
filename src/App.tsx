import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MessageSquare, Heart, Flower2, MapPin, BookOpen, User, FileText, Edit3 } from 'lucide-react';
import ceoImage from './assets/e0f2c43b934867240dc85cbcb59db1458376a4f8.png';
import logoImage from './assets/ed9c4979525d1d92a2e2ee261a14686c632bc8de.png';

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
      together: '루시드와 함께(상담하기)',
    },
    hero: {
      brand: '루시드라이프',
      title: '모든 이별은 서툴기에,\n누군가는 그 곁에 선다.',
      subtitle: '루시드라이프는 장례를 대신해주는 곳이 아닙니다.\n서툰 이별 앞에, 함께 서 있는 곳입니다.',
      cta: '사전등록',
    },
    accompany: {
      title: '이별동행케어',
      subtitle: '임종 전부터 이별 이후까지.\n한 사람의 전 과정을, 하나의 팀이 돌봅니다.',
      before: {
        title: '임종 전',
        desc: '불안을 줄이는 준비',
      },
      during: {
        title: '장례 중',
        desc: '절차보다 사람',
      },
      after: {
        title: '이별 이후',
        desc: '일상으로 돌아가는 정리',
      },
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
      title: '함께하는 방식',
      subtitle: '한 사람을 위한, 네 가지 선택',
      basic: {
        title: '베이직 케어',
        desc: '본질에 집중한 기본 케어',
        features: ['전통 의식 진행', '심리 상담 1회', '49재 안내', '투명한 비용'],
      },
      signature: {
        title: '시그니처 케어',
        desc: '루시드라이프의 정수',
        features: ['맞춤 의전 기획', '지속 심리 케어', '미국식 메모리얼', '사후 관리 지원'],
      },
      memorial: {
        title: '메모리얼 파티',
        desc: '미국식 추모 파티',
        features: ['원하는 장소 선택', '파티형 추모식', '영상/음악 기획', '케이터링 제공'],
      },
      noblesse: {
        title: '노블레스 케어',
        desc: '최상급 토탈 케어',
        features: ['1:1 전담 매니저', '고종황제식 의전', 'VIP 공간 제공', '평생 사후 관리'],
      },
    },
    threedays: {
      title: '사흘동안',
      subtitle: '장례의 3일, 한 챕터씩 함께 걷습니다',
      day1: {
        title: '첫째 날',
        desc: '임종과 준비',
        details: '24시간 긴급 출동\n염습과 입관\n장례 계획 수립',
      },
      day2: {
        title: '둘째 날',
        desc: '추모와 의식',
        details: '조문 공간 운영\n심리 상담 지원\n추모 영상 상영',
      },
      day3: {
        title: '셋째 날',
        desc: '발인과 안치',
        details: '발인 의식\n장지 이동\n안치 후 정리',
      },
      after: {
        title: '그 이후',
        desc: '이별 후 동행',
        details: '49재 안내\n심리 케어\n일상 복귀 지원',
      },
    },
    resting: {
      title: '마지막 안식처',
      subtitle: '2차 장지, 신중하게 선택하도록 돕습니다',
      natural: {
        title: '자연장',
        desc: '자연으로 돌아가는 안식',
        info: '수목장, 산골, 해양장',
      },
      memorial: {
        title: '봉안당',
        desc: '편안한 참배 공간',
        info: '실내 봉안, 정기 관리',
      },
      family: {
        title: '가족묘',
        desc: '함께하는 영원',
        info: '세대별 공간, 맞춤 조성',
      },
      park: {
        title: '공원묘지',
        desc: '품격 있는 안식처',
        info: '조경 관리, 편의시설',
      },
    },
    stories: {
      title: '이별 이야기',
      subtitle: '루시드라이프와 함께한 이별의 기록',
      visitBlog: '블로그 방문하기',
      story1: {
        title: '전통의 재해석, 그 시작',
        excerpt: '고종황제 입관 의식을 현대에 복원하다',
      },
      story2: {
        title: '미국식 메모리얼의 실제',
        excerpt: '장례식장이 아닌, 추억의 공간에서',
      },
      story3: {
        title: '이별 후의 동행',
        excerpt: '49일간의 심리 케어 이야기',
      },
    },
    ceo: {
      title: '도원',
      subtitle: '루시드라이프 대표',
      quote: '"이별은 끝이 아니라,\n한 사람을 기억하는 시작입니다."',
      credentials: [
        '국가공인 장례지도사',
        '최면 상담 전문가',
        '現 대한 장례지도사 연합회 사무국장',
        '前 MBC마당놀이 국악관현악단 지휘자',
        '前 프리드라이프 전국 1% 의전팀장',
      ],
    },
    together: {
      title: '루시드와 함께.',
      subtitle: '이별 앞에서, 혼자가 아닙니다.\n지금 사전등록하시면 특별한 혜택을 드립니다.',
      cta: '사전등록',
      pre: '사전 상담',
      emergency: '긴급 상담',
    },
    footer: {
      company: '업체명 : 루시드라이프 | 대표자 : 서동원',
      business: '사업자등록번호 : 123-92-47792',
      address: '사업장소재지 : 경기도 파주시 교하로 100, 908-102',
      contact: '전화번호 : 010-2116-4114',
      copyright: '© 2024 LUCID LIFE. All rights reserved.',
    },
    floating: {
      call: 'Call',
      kakao: 'KakaoTalk',
      membership: 'Membership Pre-registration',
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
      together: 'Get in Touch',
    },
    hero: {
      brand: 'LUCID LIFE',
      title: 'Every farewell is awkward,\nSomeone stands beside you.',
      subtitle: 'LUCID LIFE is not a place that does funerals for you.\nIt is a place that stands with you in awkward farewells.',
      cta: 'Pre-register',
    },
    accompany: {
      title: 'Farewell Companion Care',
      subtitle: 'From before death to after farewell.\nOne team cares for the entire process of one person.',
      before: {
        title: 'Before Death',
        desc: 'Preparation to reduce anxiety',
      },
      during: {
        title: 'During Funeral',
        desc: 'People over procedures',
      },
      after: {
        title: 'After Farewell',
        desc: 'Organization to return to daily life',
      },
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
      title: 'Our Services',
      subtitle: 'Four choices for one person',
      basic: {
        title: 'Basic Care',
        desc: 'Essential care focused on fundamentals',
        features: ['Traditional ceremony', '1 counseling session', '49-day guidance', 'Transparent pricing'],
      },
      signature: {
        title: 'Signature Care',
        desc: 'The essence of LUCID LIFE',
        features: ['Custom protocol planning', 'Ongoing psychological care', 'American memorial', 'Aftercare support'],
      },
      memorial: {
        title: 'Memorial Party',
        desc: 'American-style celebration',
        features: ['Choose your location', 'Party-style memorial', 'Video/music planning', 'Catering provided'],
      },
      noblesse: {
        title: 'Noblesse Care',
        desc: 'Premium total care',
        features: ['1:1 dedicated manager', 'Emperor-style protocol', 'VIP space', 'Lifetime aftercare'],
      },
    },
    threedays: {
      title: 'Three Days',
      subtitle: 'Walking through 3 days of funeral, one chapter at a time',
      day1: {
        title: 'Day 1',
        desc: 'Death and Preparation',
        details: '24-hour emergency response\nShrouding and coffining\nFuneral planning',
      },
      day2: {
        title: 'Day 2',
        desc: 'Memorial and Ceremony',
        details: 'Mourning space operation\nPsychological support\nMemorial video screening',
      },
      day3: {
        title: 'Day 3',
        desc: 'Departure and Burial',
        details: 'Departure ceremony\nTransport to burial site\nPost-burial arrangement',
      },
      after: {
        title: 'After',
        desc: 'Companion after farewell',
        details: '49-day guidance\nPsychological care\nReturn to daily life support',
      },
    },
    resting: {
      title: 'Final Resting Place',
      subtitle: 'We help you carefully choose the secondary burial site',
      natural: {
        title: 'Natural Burial',
        desc: 'Rest returning to nature',
        info: 'Tree burial, scattering, sea burial',
      },
      memorial: {
        title: 'Columbarium',
        desc: 'Comfortable visitation space',
        info: 'Indoor enshrinement, regular care',
      },
      family: {
        title: 'Family Grave',
        desc: 'Eternal togetherness',
        info: 'Generational space, custom creation',
      },
      park: {
        title: 'Cemetery Park',
        desc: 'Dignified resting place',
        info: 'Landscape care, amenities',
      },
    },
    stories: {
      title: 'Farewell Stories',
      subtitle: 'Records of farewells with LUCID LIFE',
      visitBlog: 'Visit Blog',
      story1: {
        title: 'Reinterpretation of Tradition',
        excerpt: 'Restoring Emperor Gojong\'s ceremony in modern times',
      },
      story2: {
        title: 'American Memorial in Practice',
        excerpt: 'Not at funeral homes, but in places of memories',
      },
      story3: {
        title: 'Companion After Farewell',
        excerpt: 'Stories of 49 days of psychological care',
      },
    },
    ceo: {
      title: 'Dowon',
      subtitle: 'CEO of LUCID LIFE',
      quote: '"Farewell is not the end,\nbut the beginning of remembering a person."',
      credentials: [
        'Nationally Certified Funeral Director',
        'Hypnotherapy Counseling Expert',
        'Current Secretary General, Korean Funeral Directors Association',
        'Former Conductor, MBC Madangnori Korean Orchestra',
        'Former Top 1% Protocol Team Leader, FreeLife',
      ],
    },
    together: {
      title: 'Together with LUCID.',
      subtitle: 'You are not alone in the face of farewell.\nPre-register now for special benefits.',
      cta: 'Pre-register',
      pre: 'Pre-consultation',
      emergency: 'Emergency',
    },
    footer: {
      company: 'LUCID DRIVE | CEO: Dowon',
      business: 'Business Registration: 000-00-00000',
      address: 'Address: Seoul, South Korea',
      contact: 'Customer Service: 1800-0000',
      copyright: '© 2024 LUCID LIFE. All rights reserved.',
    },
    floating: {
      call: 'Call',
      kakao: 'KakaoTalk',
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

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const t = translations[language];

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

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2c3e50]/95 backdrop-blur-sm border-b border-[#8c7b65]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex-shrink-0"
            >
              <img 
                src={logoImage} 
                alt="LUCID LIFE" 
                className="h-20 md:h-28 lg:h-32 w-auto"
              />
            </button>

            <div className="flex items-center gap-5">
              {/* Phone & Membership - Desktop */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="tel:010-2116-4114"
                  className="flex items-center gap-2 px-5 py-2.5 text-[#eecfa1] hover:bg-[#8c7b65]/20 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-base lg:text-lg">010-2116-4114</span>
                </a>
                <button
                  onClick={openGoogleForm}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#8c7b65] text-white hover:bg-[#8c7b65]/80 rounded-lg transition-colors"
                >
                  <Edit3 className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-base lg:text-lg whitespace-nowrap">멤버십 사전등록</span>
                </button>
              </div>

              {/* Language Toggle - Mobile */}
              <button
                onClick={toggleLanguage}
                className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#8c7b65]/20 transition-colors text-[#eecfa1]"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">{language === 'ko' ? 'EN' : 'KO'}</span>
              </button>

              {/* Language Toggle - Desktop */}
              <button
                onClick={toggleLanguage}
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-[#8c7b65]/20 transition-colors text-[#eecfa1]"
              >
                <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="text-base lg:text-lg">{language === 'ko' ? 'EN' : 'KO'}</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-[#8c7b65]/20 rounded-lg transition-colors text-[#eecfa1]"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#2c3e50]/98 backdrop-blur-md pt-28">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-[#eecfa1] hover:bg-[#8c7b65]/20 rounded-lg transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6 pb-28">
            {[
              { id: 'hero', label: t.nav.lucidlife },
              { id: 'services', label: t.nav.services },
              { id: 'threedays', label: t.nav.process },
              { id: 'resting', label: t.nav.resting },
              { id: 'stories', label: t.nav.stories },
              { id: 'ceo', label: t.nav.ceo },
              { id: 'together', label: t.nav.together },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl text-[#eecfa1] hover:text-[#8c7b65] transition-colors tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.75), rgba(44, 62, 80, 0.75)), url('https://images.unsplash.com/photo-1723240226503-cc08d5821d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMG1lbW9yaWFsfGVufDF8fHx8MTc2NTgwODM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <div className="mb-16">
            <p className="text-[#eecfa1] text-2xl md:text-2xl my-12 md:my-16 tracking-[0.3em]">{t.hero.brand}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-10 text-white whitespace-pre-line leading-tight">
              {t.hero.title}
            </h1>
            {/* Mobile: 3줄 / PC: 2줄 */}
            <p className="text-lg md:text-xl mb-16 text-white/90 leading-relaxed max-w-3xl mx-auto">
              <span className="block md:hidden whitespace-pre-line">
                {language === 'ko' 
                  ? '루시드라이프는 장례를 대신해주는\n곳이 아닙니다.\n서툰 이별 앞에, 함께 서 있는 곳입니다.'
                  : 'LUCID LIFE is not a place\nthat does funerals for you.\nIt is a place that stands with you in awkward farewells.'}
              </span>
              <span className="hidden md:block whitespace-pre-line">{t.hero.subtitle}</span>
            </p>
          </div>

          {/* Accompany Care */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 mb-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#eecfa1]">{t.accompany.title}</h2>
            {/* Mobile: 3줄 / PC: 2줄 */}
            <p className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed">
              <span className="block md:hidden whitespace-pre-line">
                {language === 'ko'
                  ? '임종 전부터 이별 이후까지.\n한 사람의 전 과정을,\n하나의 팀이 돌봅니다.'
                  : 'From before death\nto after farewell.\nOne team cares for the entire process of one person.'}
              </span>
              <span className="hidden md:block whitespace-pre-line">{t.accompany.subtitle}</span>
            </p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[t.accompany.before, t.accompany.during, t.accompany.after].map((phase, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl mb-4 text-[#eecfa1]">{phase.title}</h3>
                  <p className="text-white/80 text-lg">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={openGoogleForm}
            className="px-12 py-5 bg-[#8c7b65] hover:bg-[#8c7b65]/80 text-white rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-8 text-[#2c3e50]">{t.pillars.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: Flower2, data: t.pillars.tradition },
              { icon: MapPin, data: t.pillars.modern },
              { icon: Heart, data: t.pillars.soul },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-10 lg:p-12 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#8c7b65]/20"
              >
                <item.icon className="w-16 h-16 text-[#8c7b65] mb-8 mx-auto" />
                <h3 className="text-2xl md:text-3xl mb-6 text-[#2c3e50] text-center">{item.data.title}</h3>
                {/* 시대의 요구: Mobile 2줄 */}
                {index === 1 ? (
                  <p className="text-neutral-600 text-center leading-relaxed text-lg">
                    <span className="block md:hidden whitespace-pre-line">
                      {language === 'ko'
                        ? '국내최초, 미국식 메모리얼 장례.\n장례식장이 아닌, 원하는곳에서.'
                        : 'Korea\'s first American-style memorial service.\nNot at funeral homes, but where you want.'}
                    </span>
                    <span className="hidden md:block whitespace-pre-line">{item.data.desc}</span>
                  </p>
                ) : index === 2 ? (
                  /* 영혼의 보살핌: Mobile 3줄 */
                  <p className="text-neutral-600 text-center leading-relaxed text-lg">
                    <span className="block md:hidden whitespace-pre-line">
                      {language === 'ko'
                        ? '죽음학과 심리상담을\n통합한 의식 케어.\n이별앞에서, 깨어 있도록.'
                        : 'Integrated conscious care\nthrough thanatology and counseling.\nTo stay awake in the face of farewell.'}
                    </span>
                    <span className="hidden md:block whitespace-pre-line">{item.data.desc}</span>
                  </p>
                ) : (
                  <p className="text-neutral-600 text-center leading-relaxed whitespace-normal md:whitespace-pre-line text-lg">
                    {item.data.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lucid Life Section */}
      <section className="py-32 bg-[#2c3e50] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-12 text-[#eecfa1]">{t.why.title}</h2>
          </div>

          <div className="space-y-16">
            {[t.why.q1, t.why.q2, t.why.q3].map((item, index) => (
              <div key={index} className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl mb-6 text-white/90">{item.question}</h3>
                <p className="text-xl md:text-2xl text-[#eecfa1]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-8 text-[#2c3e50]">{t.difference.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[t.difference.responsibility, t.difference.minimal, t.difference.respect].map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 lg:p-12 rounded-3xl hover:shadow-2xl transition-all border border-[#8c7b65]/20 text-center"
              >
                <h3 className="text-2xl md:text-3xl mb-6 text-[#2c3e50]">{item.title}</h3>
                {/* 감정의 존중: Mobile 2줄 / PC 1줄 */}
                {index === 2 ? (
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    <span className="block md:hidden whitespace-pre-line">
                      {language === 'ko'
                        ? '절차보다 사람의 상태를\n먼저 봅니다.'
                        : 'We see people\'s state\nbefore procedures.'}
                    </span>
                    <span className="hidden md:block">{item.desc}</span>
                  </p>
                ) : (
                  <p className="text-neutral-600 text-lg leading-relaxed">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 함께하는 방식 */}
      <section id="services" className="py-32 lg:py-40 bg-[#2c3e50] relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 125, 0.05) 0%, transparent 60%)'
        }} />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] mb-3 text-[#d4af7d] opacity-60">
              LUCIDLIFE SERVICE
            </p>
            <h2 className="text-4xl font-medium mb-4 text-white">
              {language === 'ko' ? '함께 하는 방식' : 'Our Services'}
            </h2>
            <p className="text-base font-light text-white/40">
              {language === 'ko' ? '부담 없이, 상황에 맞게.' : 'Without burden, according to the situation.'}
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              {
                id: 'family',
                name: language === 'ko' ? '가족장 · 무빈소' : 'Family Funeral',
                price: 150,
                tagline: language === 'ko' ? '조용히, 가족만' : 'Quietly, family only',
                details: {
                  coffin: language === 'ko' ? '일반관' : 'Standard',
                  suit: language === 'ko' ? '총 5벌' : 'Total 5',
                  assistant: '—'
                }
              },
              {
                id: 'practical',
                name: language === 'ko' ? '실용장' : 'Practical Funeral',
                price: 290,
                tagline: language === 'ko' ? '기본에 충실하게' : 'Faithful to basics',
                details: {
                  coffin: language === 'ko' ? '일반관' : 'Standard',
                  suit: language === 'ko' ? '각 5벌' : 'Each 5',
                  assistant: language === 'ko' ? '4명' : '4 people'
                }
              },
              {
                id: 'standard',
                name: language === 'ko' ? '표준장' : 'Standard Funeral',
                price: 360,
                tagline: language === 'ko' ? '충분히, 정성껏' : 'Sufficiently, with care',
                details: {
                  coffin: language === 'ko' ? '일반관' : 'Standard',
                  suit: language === 'ko' ? '각 7벌' : 'Each 7',
                  assistant: language === 'ko' ? '6명' : '6 people'
                }
              },
              {
                id: 'premium',
                name: language === 'ko' ? '매장 · 미국식장' : 'Burial · American Style',
                price: 450,
                tagline: language === 'ko' ? '마지막을 완벽하게' : 'Perfect to the last',
                details: {
                  coffin: language === 'ko' ? '고급관' : 'Premium',
                  suit: language === 'ko' ? '각 9벌' : 'Each 9',
                  assistant: language === 'ko' ? '8명' : '8 people'
                }
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-[#d4af7d]/10 rounded-xl p-5 cursor-pointer hover:border-[#d4af7d]/25 hover:-translate-y-1 transition-all"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-light text-[#d4af7d]">{product.name}</h3>
                </div>
                
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-light text-white">{product.price}</span>
                  <span className="text-xs text-white/30">{language === 'ko' ? '만원~' : '0k KRW~'}</span>
                </div>
                
                <p className="text-sm text-white/50 mb-4">"{product.tagline}"</p>
                
                <div className="h-px bg-gradient-to-r from-[#d4af7d]/20 to-transparent mb-4" />
                
                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/30">{language === 'ko' ? '관' : 'Coffin'}</span>
                    <span className="text-white/50">{product.details.coffin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">{language === 'ko' ? '상복' : 'Mourning'}</span>
                    <span className="text-white/50">{product.details.suit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">{language === 'ko' ? '의전' : 'Protocol'}</span>
                    <span className={product.details.assistant === '—' ? 'text-white/20' : 'text-white/50'}>
                      {product.details.assistant}
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProduct(getProductDetails(language)[product.id])}
                  className="w-full py-2.5 rounded-lg text-sm bg-[#d4af7d]/10 text-[#d4af7d] border border-[#d4af7d]/20 hover:bg-[#d4af7d]/20 hover:border-[#d4af7d]/40 transition-all"
                >
                  {language === 'ko' ? '자세히 보기' : 'View Details'}
                </button>
              </div>
            ))}
          </div>

          {/* Compare Button */}
          <div className="text-center">
            <button 
              onClick={() => setShowCompareModal(true)}
              className="bg-[#d4af7d]/10 text-[#d4af7d] border border-[#d4af7d]/20 px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2 hover:bg-[#d4af7d]/20 hover:border-[#d4af7d]/40 transition-all"
            >
              {language === 'ko' ? '전체 상품 비교하기' : 'Compare All Products'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Three Days Section */}
      <section id="threedays" className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2c3e50]">{t.threedays.title}</h2>
            <p className="text-xl text-[#8c7b65]">{t.threedays.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {[t.threedays.day1, t.threedays.day2, t.threedays.day3, t.threedays.after].map((day, index) => (
              <div
                key={index}
                className="bg-white p-10 lg:p-12 rounded-3xl hover:shadow-2xl transition-all border border-[#8c7b65]/20"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full bg-[#8c7b65] text-white flex items-center justify-center text-2xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl text-[#2c3e50] mb-2">{day.title}</h3>
                    <p className="text-lg text-[#8c7b65]">{day.desc}</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-lg leading-relaxed whitespace-pre-line pl-2">
                  {day.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resting Place Section */}
      <section id="resting" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2c3e50]">{t.resting.title}</h2>
            <p className="text-xl text-[#8c7b65]">{t.resting.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {[
              { data: t.resting.natural, img: 'https://images.unsplash.com/photo-1735222001088-e27f45a75c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwZm9yZXN0JTIwcGF0hxlbnwxfHx8fDE3NjU4MDgzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
              { data: t.resting.memorial, img: 'https://images.unsplash.com/photo-1764776502723-cd26790363b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjBzcGFjZXxlbnwxfHx8fDE3NjU3NjM4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
              { data: t.resting.family, img: 'https://images.unsplash.com/photo-1679767472068-099e64158c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBjZW1ldGVyeSUyMGdhcmRlbnxlbnwxfHx8fDE3NjU4MDk2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
              { data: t.resting.park, img: 'https://images.unsplash.com/photo-1747115275646-49725fb5a003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWVtb3JpYWwlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjU4MDk2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
            ].map((place, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#8c7b65]/20"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={place.img}
                    alt={place.data.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl md:text-3xl mb-4 text-[#2c3e50]">{place.data.title}</h3>
                  <p className="text-lg text-[#8c7b65] mb-4">{place.data.desc}</p>
                  <p className="text-neutral-600">{place.data.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-32 bg-[#2c3e50] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#eecfa1]">{t.stories.title}</h2>
            <p className="text-xl text-white/80">{t.stories.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-12">
            {[t.stories.story1, t.stories.story2, t.stories.story3].map((story, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl hover:bg-white/15 transition-all border border-white/20 cursor-pointer"
                onClick={() => window.open('https://blog.naver.com/lucid-life', '_blank')}
              >
                <div className="w-12 h-12 rounded-full bg-[#8c7b65] text-white flex items-center justify-center text-xl mb-8">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl mb-6 text-white">{story.title}</h3>
                {/* story1: Mobile 2줄 */}
                {index === 0 ? (
                  <p className="text-lg text-white/70 leading-relaxed">
                    <span className="block md:hidden whitespace-pre-line">
                      {language === 'ko'
                        ? '고종황제 입관 의식을\n현대에 복원하다'
                        : 'Restoring Emperor Gojong\'s\nceremony in modern times'}
                    </span>
                    <span className="hidden md:block">{story.excerpt}</span>
                  </p>
                ) : (
                  <p className="text-lg text-white/70 leading-relaxed">{story.excerpt}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://blog.naver.com/lucid-life"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#8c7b65] hover:bg-[#8c7b65]/80 text-white rounded-lg transition-all text-lg"
            >
              <BookOpen className="w-6 h-6" />
              {t.stories.visitBlog}
            </a>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section id="ceo" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl mb-3 text-[#2c3e50]">{t.ceo.title}</h2>
                <p className="text-xl text-[#8c7b65]">{t.ceo.subtitle}</p>
              </div>

              <blockquote className="text-2xl md:text-3xl mb-12 text-[#2c3e50] italic whitespace-pre-line leading-relaxed border-l-4 border-[#8c7b65] pl-8">
                {t.ceo.quote}
              </blockquote>

              <ul className="space-y-4">
                {t.ceo.credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-4 text-neutral-700">
                    <div className="w-2 h-2 rounded-full bg-[#8c7b65] flex-shrink-0 mt-3" />
                    <span className="text-lg leading-relaxed">{credential}</span>
                  </li>
                ))}
              </ul>
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

      {/* Together CTA Section */}
      <section id="together" className="py-32 bg-[#2c3e50]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl mb-8 text-[#eecfa1]">{t.together.title}</h2>
          <p className="text-xl md:text-2xl mb-16 text-white/90 whitespace-pre-line leading-relaxed">
            {t.together.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={openGoogleForm}
              className="px-12 py-5 bg-[#8c7b65] hover:bg-[#8c7b65]/80 text-white rounded-lg transition-all transform hover:scale-105 text-lg"
            >
              {t.together.cta}
            </button>
            <a
              href="tel:010-2116-4114"
              className="px-12 py-5 bg-transparent border-2 border-[#eecfa1] text-[#eecfa1] hover:bg-[#eecfa1] hover:text-[#2c3e50] rounded-lg transition-all text-lg flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              {t.together.emergency}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-3 mb-8">
            <p className="text-lg">{t.footer.company}</p>
            <p>{t.footer.business}</p>
            <p>{t.footer.address}</p>
            <p>{t.footer.contact}</p>
          </div>
          {/* 개인정보 처리방침 & 이용약관 버튼 */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-white/50 hover:text-white underline underline-offset-4 text-sm transition-colors"
            >
              개인정보 처리방침
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="text-white/50 hover:text-white underline underline-offset-4 text-sm transition-colors"
            >
              이용약관양식
            </button>
          </div>
          <div className="text-center text-sm border-t border-white/10 pt-8">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 md:gap-4 z-40">
        <a
          href="tel:010-2116-4114"
          className="w-12 h-12 md:w-16 md:h-16 bg-[#8c7b65] hover:bg-[#8c7b65]/80 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110"
          title={language === 'ko' ? '전화' : 'Call'}
        >
          <Phone className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </a>
        <button
          onClick={openGoogleForm}
          className="w-12 h-12 md:w-16 md:h-16 bg-[#2c3e50] hover:bg-[#2c3e50]/80 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110"
          title={language === 'ko' ? '멤버십 사전등록' : 'Pre-register'}
        >
          <Edit3 className="w-5 h-5 md:w-7 md:h-7 text-[#eecfa1]" />
        </button>
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
            className="relative bg-[#1e1e1e] rounded-lg w-full max-w-[400px] md:max-w-[400px] max-h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-white/50" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[85vh] p-4 md:p-5">
              {/* Header - 제목 */}
              <h3 className="text-base md:text-lg font-medium text-[#d4af7d] mb-1">
                {selectedProduct.name}
              </h3>
              
              {/* Tagline */}
              <p className="text-xs md:text-sm text-[#808080] mb-3">"{selectedProduct.tagline}"</p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-light text-white">{selectedProduct.price}</span>
                <span className="text-xs md:text-sm text-[#808080] ml-1">{language === 'ko' ? '만원부터' : '0k KRW~'}</span>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#808080] mb-5 pb-5 border-b border-white/10">
                {selectedProduct.description}
              </p>

              {/* Items List - 구성 항목 */}
              <div className="mb-4">
                <p className="text-xs md:text-sm text-[#d4af7d] mb-4">{language === 'ko' ? '구성 항목' : 'Composition Items'}</p>
                <div className="space-y-0">
                  {selectedProduct.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex justify-between items-center py-2 md:py-3 border-b border-white/5 gap-2 md:gap-4"
                    >
                      <span className="text-xs md:text-sm text-[#808080] flex-shrink-0" style={{ minWidth: '90px', maxWidth: '120px' }}>{item.label}</span>
                      <span className={`text-xs md:text-sm text-right flex-1 ${
                        item.value === '—' ? 'text-[#505050]' : 
                        item.value.startsWith('(') ? 'text-[#606060]' : 'text-white'
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
              <h3 className="text-base md:text-lg lg:text-3xl font-medium text-[#d4af7d] mb-1 lg:mb-2">
                {language === 'ko' ? '전체 상품 비교' : 'Compare All Products'}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-[#808080] mb-4 md:mb-6 lg:mb-10">
                {language === 'ko' ? '각 상품의 구성을 한눈에 비교해보세요' : 'Compare the composition of each product at a glance'}
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-[8px] md:text-[9px] lg:text-base" style={{ tableLayout: 'auto' }}>
                  {/* Header Row - Product Names */}
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 md:py-3 lg:py-6 pr-1 md:pr-3 lg:pr-6 text-[#808080] font-normal text-[8px] md:text-[9px] lg:text-base w-[65px] md:w-[80px] lg:w-[160px]">{language === 'ko' ? '항목' : 'Item'}</th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '70px', maxWidth: '90px' }}>
                        <div className="text-[#d4af7d] font-medium text-[8px] md:text-[9px] lg:text-lg leading-tight" style={{ wordBreak: 'keep-all', whiteSpace: 'normal' }}>{language === 'ko' ? '가족장 · 무빈소' : 'Family Funeral · No Wake'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          <span className="text-sm md:text-base lg:text-4xl text-white font-light">150</span>
                          <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">{language === 'ko' ? '만원' : '0k KRW'}</span>
                        </div>
                      </th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '70px', maxWidth: '90px' }}>
                        <div className="text-[#d4af7d] font-medium text-[8px] md:text-[9px] lg:text-lg leading-tight" style={{ wordBreak: 'keep-all', whiteSpace: 'normal' }}>{language === 'ko' ? '실용장' : 'Practical Funeral'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          <span className="text-sm md:text-base lg:text-4xl text-white font-light">290</span>
                          <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">{language === 'ko' ? '만원' : '0k KRW'}</span>
                        </div>
                      </th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '70px', maxWidth: '90px' }}>
                        <div className="text-[#d4af7d] font-medium text-[8px] md:text-[9px] lg:text-lg leading-tight" style={{ wordBreak: 'keep-all', whiteSpace: 'normal' }}>{language === 'ko' ? '표준장' : 'Standard Funeral'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          <span className="text-sm md:text-base lg:text-4xl text-white font-light">360</span>
                          <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">{language === 'ko' ? '만원' : '0k KRW'}</span>
                        </div>
                      </th>
                      <th className="text-center py-2 md:py-3 lg:py-6 px-0.5 md:px-1 lg:px-4" style={{ minWidth: '70px', maxWidth: '90px' }}>
                        <div className="text-[#d4af7d] font-medium text-[8px] md:text-[9px] lg:text-lg leading-tight" style={{ wordBreak: 'keep-all', whiteSpace: 'normal' }}>{language === 'ko' ? '매장 · 미국식장' : 'Burial · American Style'}</div>
                        <div className="mt-0.5 lg:mt-2">
                          <span className="text-sm md:text-base lg:text-4xl text-white font-light">450</span>
                          <span className="text-[7px] md:text-[8px] lg:text-sm text-[#808080]">{language === 'ko' ? '만원' : '0k KRW'}</span>
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
                        <td className="py-1.5 md:py-2 lg:py-4 pr-1 md:pr-3 lg:pr-6 text-[#808080] text-[8px] md:text-[9px] lg:text-base leading-tight" style={{ minWidth: '65px', maxWidth: '90px' }}>{row.label}</td>
                        {row.values.map((value, vIdx) => (
                          <td key={vIdx} className={`py-1.5 md:py-2 lg:py-4 px-0.5 md:px-1 lg:px-4 text-center text-[8px] md:text-[9px] lg:text-base leading-tight ${value === '—' ? 'text-[#505050]' : 'text-white'}`} style={{ wordBreak: 'keep-all', whiteSpace: 'normal', minWidth: '70px', maxWidth: '90px', lineHeight: '1.3' }}>
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
            className="relative bg-[#2c3e50] rounded-lg w-full max-w-[900px] lg:max-w-[1000px] max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-white/50" />
            </button>

            {/* Header */}
            <div className="p-6 lg:p-8 border-b border-white/10">
              <h2 className="text-xl lg:text-2xl font-bold text-[#d4af7d]">개인정보 처리방침</h2>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6 text-sm lg:text-base text-white/80 leading-relaxed">
                <p>
                  루시드라이프 (이하 "회사"는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
                  회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                </p>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 수집하는 개인정보 항목 및 수집방법</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 개인정보의 수집 및 이용목적</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 개인정보의 보유 및 이용기간</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 개인정보의 파기절차 및 방법</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                    <p className="font-medium text-white/90 mt-3">○ 파기절차</p>
                    <p className="pl-4">회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</p>
                    <p className="font-medium text-white/90 mt-3">○ 파기방법</p>
                    <p className="pl-4">전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 개인정보 제공</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                    <p className="pl-4">○ 이용자들이 사전에 동의한 경우</p>
                    <p className="pl-4">○ 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 수집한 개인정보의 위탁</h3>
                  <div className="space-y-2 text-white/70">
                    <p>회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.</p>
                    <p className="pl-4">○ 위탁 대상자 : [KCP] 넷페이</p>
                    <p className="pl-4">○ 위탁업무 내용 : [카드결제/ 계좌이체/ 휴대폰결제]</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 이용자 및 법정대리인의 권리와 그 행사방법</h3>
                  <div className="space-y-2 text-white/70">
                    <p>○ 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.</p>
                    <p>○ 이용자들의 개인정보 조회,수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.</p>
                    <p>○ 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.</p>
                    <p>○ 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
                    <p>○ 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">■ 개인정보에 관한 민원서비스</h3>
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
            className="relative bg-[#2c3e50] rounded-lg w-full max-w-[900px] lg:max-w-[1000px] max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 lg:w-5 lg:h-5 text-white/50" />
            </button>

            {/* Header */}
            <div className="p-6 lg:p-8 border-b border-white/10">
              <h2 className="text-xl lg:text-2xl font-bold text-[#d4af7d]">이용약관</h2>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6 text-sm lg:text-base text-white/80 leading-relaxed">
                
                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제1조(목적)</h3>
                  <div className="space-y-2 text-white/70">
                    <p>이 약관은 루시드라이프(전자상거래 사업자)가 운영하는 루시드라이프_사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리/ 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    <p className="text-white/50 text-sm">※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제2조(정의)</h3>
                  <div className="space-y-2 text-white/70">
                    <p>① "몰"이란 루시드라이프 회사가 재화 또는 용역(이하 "재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</p>
                    <p>② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
                    <p>③ '회원'이라 함은 "몰"에 회원등록을 한 자로서, 계속적으로 "몰"이 제공하는 서비스를 이용할 수 있는 자를 말합니다.</p>
                    <p>④ '비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제3조 (약관 등의 명시와 설명 및 개정)</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제4조(서비스의 제공 및 변경)</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제5조(서비스의 중단)</h3>
                  <div className="space-y-2 text-white/70">
                    <p>① "몰"은 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
                    <p>② "몰"은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
                    <p>③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지하고 당초 "몰"에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, "몰"이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 "몰"에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제6조(회원가입)</h3>
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
                  <h3 className="text-[#d4af7d] font-semibold mb-3">제7조(회원 탈퇴 및 자격 상실 등)</h3>
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

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}