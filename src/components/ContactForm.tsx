import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ContactFormProps {
  language: 'ko' | 'en';
}

const translations = {
  ko: {
    name: '성함',
    phone: '연락처',
    type: '상담 유형',
    types: {
      pre: '사전 상담',
      emergency: '긴급 장례',
      other: '기타 문의',
    },
    agree: '개인정보 수집 및 이용에 동의합니다',
    submit: '상담 신청하기',
    success: '상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.',
  },
  en: {
    name: 'Name',
    phone: 'Phone',
    type: 'Consultation Type',
    types: {
      pre: 'Pre-planning',
      emergency: 'Emergency',
      other: 'Other inquiry',
    },
    agree: 'I agree to the collection and use of personal information',
    submit: 'Submit Request',
    success: 'Your request has been submitted. We will contact you soon.',
  },
};

export function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'pre',
    agree: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agree) {
      alert(language === 'ko' ? '개인정보 수집 및 이용에 동의해주세요.' : 'Please agree to the privacy policy.');
      return;
    }

    // Mock form submission - in production, this would send data to a backend
    console.log('Contact form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        type: 'pre',
        agree: false,
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <p className="text-xl text-[#2c3e50] leading-relaxed">
          {t.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 space-y-6">
      <div>
        <label className="block text-lg font-bold mb-3 text-neutral-800">
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
        <label className="block text-lg font-bold mb-3 text-neutral-800">
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
        <label className="block text-lg font-bold mb-3 text-neutral-800">
          {t.type}
        </label>
        <select
          value={formData.type}
          onChange={(e) => handleChange('type', e.target.value)}
          className="w-full px-5 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c7b65] transition-all bg-white"
        >
          <option value="pre">{t.types.pre}</option>
          <option value="emergency">{t.types.emergency}</option>
          <option value="other">{t.types.other}</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contact-agree"
          checked={formData.agree}
          onChange={(e) => handleChange('agree', e.target.checked)}
          required
          className="mt-1 w-5 h-5 text-[#8c7b65] border-neutral-300 rounded focus:ring-[#8c7b65]"
        />
        <label htmlFor="contact-agree" className="text-sm text-neutral-700 leading-relaxed">
          {t.agree}
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-5 bg-[#8c7b65] hover:bg-[#8c7b65]/80 text-white rounded-lg transition-all text-lg"
      >
        {t.submit}
      </button>
    </form>
  );
}