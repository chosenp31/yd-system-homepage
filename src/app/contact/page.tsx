'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// フリーメールドメインのリスト
const freeEmailDomains = [
  'gmail.com',
  'yahoo.co.jp',
  'yahoo.com',
  'hotmail.com',
  'hotmail.co.jp',
  'outlook.com',
  'outlook.jp',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'mail.com',
  'protonmail.com',
  'zoho.com',
  'ymail.com',
  'live.com',
  'live.jp',
  'msn.com',
  'nifty.com',
  'excite.co.jp',
  'infoseek.jp',
  'biglobe.ne.jp',
  'ocn.ne.jp',
  'plala.or.jp',
  'so-net.ne.jp',
  'ezweb.ne.jp',
  'au.com',
  'docomo.ne.jp',
  'softbank.ne.jp',
  'i.softbank.jp',
];

const isCompanyEmail = (email: string): boolean => {
  if (!email || !email.includes('@')) return true; // 入力途中は許可
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return true; // ドメイン未入力は許可
  return !freeEmailDomains.includes(domain);
};

const isValidEmailFormat = (email: string): boolean => {
  // ASCII文字のみ許可、より厳密なメール形式チェック
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// 日本の電話番号形式チェック（固定電話推奨）
const isValidPhoneFormat = (phone: string): boolean => {
  if (!phone) return true; // 入力途中は許可
  // 数字とハイフンのみに正規化
  const normalized = phone.replace(/[-\s]/g, '');
  // 10桁または11桁の数字（0から始まる）
  if (!/^0\d{9,10}$/.test(normalized)) return false;
  return true;
};


export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('');
      return;
    }

    // メール形式が正しいかチェック
    if (!isValidEmailFormat(email)) {
      setEmailError('有効なメールアドレス形式でご入力ください');
      return;
    }

    // フリーメールかチェック
    if (!isCompanyEmail(email)) {
      setEmailError('会社用メールアドレスをご入力ください');
      return;
    }

    setEmailError('');
  };

  const validatePhone = (phone: string) => {
    if (!phone) {
      setPhoneError('');
      return;
    }

    // 電話番号形式チェック
    if (!isValidPhoneFormat(phone)) {
      setPhoneError('有効な電話番号をご入力ください（例: 03-1234-5678）');
      return;
    }

    setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 最終バリデーション - メール
    if (!isValidEmailFormat(formData.email)) {
      setEmailError('有効なメールアドレス形式でご入力ください');
      return;
    }

    if (!isCompanyEmail(formData.email)) {
      setEmailError('会社用メールアドレスをご入力ください');
      return;
    }

    // 最終バリデーション - 電話番号
    if (!isValidPhoneFormat(formData.phone)) {
      setPhoneError('有効な電話番号をご入力ください（例: 03-1234-5678）');
      return;
    }

    setEmailError('');
    setPhoneError('');
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // メールアドレス変更時にリアルタイムバリデーション
    if (name === 'email') {
      validateEmail(value);
    }

    // 電話番号変更時にリアルタイムバリデーション
    if (name === 'phone') {
      validatePhone(value);
    }
  };

  const handleEmailBlur = () => {
    if (formData.email && !isValidEmailFormat(formData.email)) {
      setEmailError('有効なメールアドレス形式でご入力ください');
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone) {
      if (!isValidPhoneFormat(formData.phone)) {
        setPhoneError('有効な電話番号をご入力ください（例: 03-1234-5678）');
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">お問い合わせ</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              システム開発のご相談、お見積り依頼など、お気軽にお問い合わせください
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-[0_10px_40px_rgba(79,124,255,0.12)] border border-[rgba(79,124,255,0.1)]">
              <div className="text-center mb-10">
                <span className="inline-block text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-xs mb-4 bg-[rgba(79,124,255,0.08)] px-4 py-2 rounded-full">
                  Contact
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">
                  お問い合わせフォーム
                </h2>
              </div>

              {formStatus === 'success' ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                    お問い合わせありがとうございます
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    内容を確認次第、担当者よりご連絡いたします。
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary"
                  >
                    新しいお問い合わせ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {formStatus === 'error' && (
                    <div className="mb-6 p-4 bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[var(--foreground)]">
                          送信に失敗しました
                        </p>
                        <p className="text-sm text-[var(--muted)]">
                          時間をおいて再度お試しください。
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        会社名 <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--muted)]"
                        placeholder="株式会社〇〇"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        お名前 <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--muted)]"
                        placeholder="山田 太郎"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        メールアドレス <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        className={`w-full px-4 py-3 rounded-lg border bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--muted)] ${
                          emailError ? 'border-red-500' : 'border-[var(--border)]'
                        }`}
                        placeholder="example@company.co.jp"
                      />
                      {emailError && (
                        <p className="mt-2 text-sm text-red-500">{emailError}</p>
                      )}
                      <p className="mt-2 text-xs text-[var(--muted)]">
                        ※会社用メールアドレスをご入力ください
                      </p>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        電話番号 <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handlePhoneBlur}
                        className={`w-full px-4 py-3 rounded-lg border bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--muted)] ${
                          phoneError ? 'border-red-500' : 'border-[var(--border)]'
                        }`}
                        placeholder="03-1234-5678"
                      />
                      {phoneError && (
                        <p className="mt-2 text-sm text-red-500">{phoneError}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        お問い合わせ内容 <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none placeholder:text-[var(--muted)]"
                        placeholder="ご相談内容をご記入ください"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting' || !!emailError || !!phoneError}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          送信中...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          送信する
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
