"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  // Debugging: Cek apakah env terdeteksi (Hanya muncul di terminal)
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error(
      "ERROR: RECAPTCHA_SECRET_KEY tidak ditemukan di environment.",
    );
    return { error: "Konfigurasi server bermasalah (Secret Key missing)." };
  }
  if (!process.env.RESEND_API_KEY) {
    console.error("ERROR: RESEND_API_KEY tidak ditemukan di environment.");
    return { error: "Konfigurasi email bermasalah (API Key missing)." };
  }

  const fullName = formData.get("fullName");
  const company = formData.get("company");
  const email = formData.get("email");
  const whatsapp = formData.get("whatsapp");
  const purpose = formData.get("purpose");
  const message = formData.get("message");
  const recaptchaResponse = formData.get("g-recaptcha-response");

  // Validasi server-side sederhana
  if (!fullName || !email || !message || !recaptchaResponse) {
    return { error: "Mohon isi semua field yang wajib." };
  }

  // Verifikasi reCAPTCHA
  try {
    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`,
      { method: "POST" },
    );
    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error(
        "reCAPTCHA Verification Failed:",
        verifyData["error-codes"],
      );
      return {
        error: "Verifikasi Captcha gagal. Silakan coba lagi atau cek koneksi.",
      };
    }
  } catch (error) {
    console.error("reCAPTCHA System Error:", error);
    return { error: "Terjadi kesalahan sistem saat verifikasi keamanan." };
  }

  try {
    // Kirim Email Real menggunakan Resend
    const { data, error } = await resend.emails.send({
      from: "Alhamra Web <onboarding@resend.dev>", // Ganti dengan domain Anda jika sudah diverifikasi di Resend
      to: "halo@alhamra.id", // Ganti dengan email tujuan Anda
      subject: `[Kontak Alhamra] ${purpose} - ${fullName}`,
      text: `
        Pesan Baru dari Website Al-Hamra:
        
        Nama Lengkap: ${fullName}
        Perusahaan: ${company}
        Email: ${email}
        No WhatsApp: ${whatsapp}
        Jenis Keperluan: ${purpose}
        
        Pesan:
        ${message}
      `,
    });

    if (error) {
      console.error("Resend Error State:", error);
      return { error: "Gagal mengirim email melalui layanan Resend." };
    }

    console.log("Email terkirim sukses:", data?.id);
    return { success: true };
  } catch (error) {
    console.error("Catastrophic Email Error:", error);
    return { error: "Gagal mengirim pesan karena gangguan teknis." };
  }
}
