const siteConfig = {
  version: "v1.0.0",
  downloadUrl: "https://drive.google.com/file/d/THAY_ID_FILE_MOD_CUA_BAN/view?usp=sharing",
  feedbackUrl: "https://m.me/THAY_USERNAME_FACEBOOK_CUA_BAN",
  donateName: "ThanhTuan",
  donateNote: "Ung ho Lu Quan Nhiem Vu",
  donateQr: "assets/donate-qr-placeholder.svg?v=20260602"
};

const qrFallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
  <rect width="320" height="320" fill="#f5f0e5"/>
  <rect x="28" y="28" width="76" height="76" fill="#1c1812"/>
  <rect x="46" y="46" width="40" height="40" fill="#f5f0e5"/>
  <rect x="216" y="28" width="76" height="76" fill="#1c1812"/>
  <rect x="234" y="46" width="40" height="40" fill="#f5f0e5"/>
  <rect x="28" y="216" width="76" height="76" fill="#1c1812"/>
  <rect x="46" y="234" width="40" height="40" fill="#f5f0e5"/>
  <text x="160" y="156" text-anchor="middle" fill="#8b2f25" font-family="Arial" font-size="20" font-weight="700">THAY QR</text>
</svg>`);

document.querySelectorAll("[data-download-link]").forEach((link) => {
  link.href = siteConfig.downloadUrl;
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-version]").forEach((node) => {
  node.textContent = siteConfig.version;
});

document.querySelectorAll("[data-donate-name]").forEach((node) => {
  node.textContent = siteConfig.donateName;
});

document.querySelectorAll("[data-donate-note]").forEach((node) => {
  node.textContent = siteConfig.donateNote;
});

document.querySelectorAll("[data-donate-qr]").forEach((img) => {
  img.onerror = () => {
    img.onerror = null;
    img.src = qrFallback;
  };
  img.src = siteConfig.donateQr;
});

const hasFeedbackUrl = !siteConfig.feedbackUrl.includes("THAY_");

document.querySelectorAll("[data-feedback-link]").forEach((link) => {
  link.href = hasFeedbackUrl ? siteConfig.feedbackUrl : "#feedback";
  if (hasFeedbackUrl) {
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.querySelectorAll("[data-feedback-note]").forEach((node) => {
  node.textContent = hasFeedbackUrl
    ? "Góp ý sẽ được gửi qua tin nhắn Facebook."
    : "Mở app.js và thay feedbackUrl bằng link Messenger Facebook cá nhân của bạn.";
});
