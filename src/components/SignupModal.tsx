import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  language: 'ko' | 'en';
}

const translations = {
  ko: {
    title: '회원가입',
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인',
    phone: '연락처',
    signup: '가입하기',
    hasAccount: '이미 계정이 있으신가요?',
    login: '로그인',
    agree: '이용약관 및 개인정보처리방침에 동의합니다',
  },
  en: {
    title: 'Sign Up',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    phone: 'Phone',
    signup: 'Sign Up',
    hasAccount: 'Already have an account?',
    login: 'Login',
    agree: 'I agree to the Terms of Service and Privacy Policy',
  },
};

export function SignupModal({ isOpen, onClose, onSwitchToLogin, language }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agree: false,
  });
  const t = translations[language];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert(language === 'ko' ? '비밀번호가 일치하지 않습니다.' : 'Passwords do not match.');
      return;
    }

    if (!formData.agree) {
      alert(language === 'ko' ? '이용약관에 동의해주세요.' : 'Please agree to the terms.');
      return;
    }

    // Mock signup - in production, this would call an API
    console.log('Signup attempt:', formData);
    alert(language === 'ko' ? '회원가입 기능은 데모 버전입니다.' : 'Signup feature is in demo mode.');
    onClose();
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl mb-8 text-[#2c3e50] text-center">{t.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-neutral-700">
              {t.name}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder={language === 'ko' ? '홍길동' : 'John Doe'}
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-700">
              {t.email}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-700">
              {t.phone}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder={language === 'ko' ? '010-0000-0000' : '000-0000-0000'}
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-700">
              {t.password}
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-700">
              {t.confirmPassword}
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={formData.agree}
              onChange={(e) => handleChange('agree', e.target.checked)}
              required
              className="mt-1 w-5 h-5 text-[#8c7b65] border-neutral-300 rounded focus:ring-[#8c7b65]"
            />
            <label htmlFor="agree" className="text-sm text-neutral-700 leading-relaxed">
              {t.agree}
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#8c7b65] hover:bg-[#8c7b65]/80 text-white rounded-lg transition-all text-lg mt-6"
          >
            {t.signup}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
            <span>{t.hasAccount}</span>
            <button
              onClick={onSwitchToLogin}
              className="text-[#8c7b65] hover:underline"
            >
              {t.login}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
