"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { contactContent } from "@/data/content";
import {
  Mail,
  User,
  Building2,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { sendContactEmail } from "@/app/actions/send-email";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [phoneNumber, setPhoneNumber] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only numbers
    setPhoneNumber(value);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!recaptchaValue) {
      alert("Mohon selesaikan Captcha terlebih dahulu.");
      setStatus("idle");
      return;
    }

    // Basic validation for phone (already handled by handlePhoneChange but good to check length)
    if (phoneNumber.length < 9) {
      alert("Mohon masukkan nomor WhatsApp yang valid.");
      setStatus("idle");
      return;
    }

    try {
      formData.append("g-recaptcha-response", recaptchaValue);
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus("success");
        e.currentTarget.reset();
        setPhoneNumber("");
      } else {
        setStatus("error");
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="hubungi"
      className="relative w-full py-12 md:py-20 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {contactContent.label}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                {contactContent.title}
              </h2>
              <div className="mt-2 flex gap-1.5">
                <div className="w-12 h-[3px] rounded-full bg-primary" />
                <div className="w-6 h-[3px] rounded-full bg-secondary" />
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              {contactContent.subtitle}
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 group">
                <div className="size-12 rounded-full border-[3px] border-primary flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">
                    Email Kami
                  </p>
                  <p className="text-slate-800 font-bold">halo@alhamra.id</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="size-12 rounded-full border-[3px] border-secondary flex items-center justify-center text-secondary transition-transform group-hover:scale-110">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
                  <p className="text-slate-800 font-bold">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-none shadow-2xl shadow-slate-200/50 border border-slate-200">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12 gap-6 animate-in fade-in zoom-in duration-500">
                  <div className="size-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-slate-800">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-slate-600">
                      Terima kasih telah menghubungi kami. Tim kami akan segera
                      menindaklanjuti pesan Anda.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-8 py-3 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-all"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      {contactContent.fields.fullName.label}
                    </label>
                    <input
                      required
                      name="fullName"
                      type="text"
                      placeholder={contactContent.fields.fullName.placeholder}
                      className="w-full px-5 py-4 rounded-none bg-white border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      {contactContent.fields.company.label}
                    </label>
                    <input
                      required
                      name="company"
                      type="text"
                      placeholder={contactContent.fields.company.placeholder}
                      className="w-full px-5 py-4 rounded-none bg-white border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      {contactContent.fields.email.label}
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder={contactContent.fields.email.placeholder}
                      className="w-full px-5 py-4 rounded-none bg-white border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      {contactContent.fields.whatsapp.label}
                    </label>
                    <input
                      required
                      name="whatsapp"
                      type="tel"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder={contactContent.fields.whatsapp.placeholder}
                      className="w-full px-5 py-4 rounded-none bg-white border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>

                  {/* Purpose */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">
                      {contactContent.fields.purpose.label}
                    </label>
                    <select
                      required
                      name="purpose"
                      className="w-full px-5 py-4 rounded-none bg-white border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none cursor-pointer"
                    >
                      {contactContent.fields.purpose.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">
                      {contactContent.fields.message.label}
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder={contactContent.fields.message.placeholder}
                      className="w-full px-5 py-4 rounded-none bg-white border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* reCAPTCHA Widget */}
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    />
                    <p className="text-[10px] text-slate-400">
                      Input Site Key dapat dikelola di file .env.local
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 mt-4">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-5" />
                          <span>{contactContent.submitButton}</span>
                        </>
                      )}
                    </button>
                    {status === "error" && (
                      <div className="flex items-center gap-2 mt-4 text-red-500 text-sm font-medium">
                        <AlertCircle className="size-4" />
                        <span>Terjadi kesalahan. Mohon coba lagi nanti.</span>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
