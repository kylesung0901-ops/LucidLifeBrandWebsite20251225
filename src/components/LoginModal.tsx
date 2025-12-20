import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  language: 'ko' | 'en';
}

const translations = {
  ko: {
    title: '로그인',
    email: '이메일',
    password: '비밀번호',
    login: '로그인',
    noAccount: '계정이 없으신가요?',
    signup: '회원가입',
    forgotPassword: '비밀번호 찾기',
  },
  en: {
    title: 'Login',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    noAccount: "Don't have an account?",
    signup: 'Sign up',
    forgotPassword: 'Forgot password?',
  },
};

export function LoginModal({ isOpen, onClose, onSwitchToSignup, language }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const t = translations[language];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would call an API
    console.log('Login attempt:', { email, password });
    alert(language === 'ko' ? '로그인 기능은 데모 버전입니다.' : 'Login feature is in demo mode.');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl mb-8 text-[#2c3e50] text-center">{t.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-3 text-neutral-700">
              {t.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-3 text-neutral-700">
              {t.password}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#8c7b65] hover:bg-[#8c7b65]/80 text-white rounded-lg transition-all text-lg"
          >
            {t.login}
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <button className="text-sm text-[#8c7b65] hover:underline">
            {t.forgotPassword}
          </button>
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
            <span>{t.noAccount}</span>
            <button
              onClick={onSwitchToSignup}
              className="text-[#8c7b65] hover:underline"
            >
              {t.signup}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
