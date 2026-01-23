'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          inquiryType: '',
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">お問い合わせ</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              システム開発のご相談、お見積り依頼など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-2xl mx-auto">
              {formStatus === 'success' ? (
                <div className="bg-[var(--background-card)] rounded-2xl p-8 md:p-12 border border-[var(--border)] text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                    お問い合わせありがとうございます
                  </h2>
                  <p className="text-[var(--muted)] mb-6">
                    内容を確認次第、担当者よりご連絡いたします。
                    <br />
                    通常、2営業日以内にご返信いたします。
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary"
                  >
                    新しいお問い合わせ
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[var(--background-card)] rounded-2xl p-8 md:p-12 border border-[var(--border)]"
                >
                  {formStatus === 'error' && (
                    <div className="mb-6 p-4 bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[var(--foreground)]">
                          送信に失敗しました
                        </p>
                        <p className="text-sm text-[var(--muted)]">
                          時間をおいて再度お試しいただくか、直接メールにてお問い合わせください。
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
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

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        会社名
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--muted)]"
                        placeholder="株式会社〇〇"
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
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--muted)]"
                        placeholder="example@company.co.jp"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        ご相談内容 <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      >
                        <option value="">選択してください</option>
                        <option value="new">新規開発のご相談</option>
                        <option value="modify">既存システムの改修</option>
                        <option value="consult">まずは相談したい</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-[var(--foreground)]"
                      >
                        詳細 <span className="text-[var(--secondary)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none placeholder:text-[var(--muted)]"
                        placeholder="ご相談内容の詳細をご記入ください"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
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
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Note */}
      <section className="py-12">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[var(--muted)] text-sm">
                お問い合わせいただいた内容は、2営業日以内にご返信いたします。
                <br />
                お急ぎの場合は、その旨をメッセージにご記入ください。
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
