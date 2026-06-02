const siteConfig = {
  version: "v1.0.0",
  downloadUrl: "https://drive.google.com/file/d/THAY_ID_FILE_MOD_CUA_BAN/view?usp=sharing",
  feedbackUrl: "https://m.me/THAY_USERNAME_FACEBOOK_CUA_BAN",
  donateName: "ThanhTuan",
  donateNote: "Ung ho Lu Quan Nhiem Vu",
  donateQr: "assets/donate-qr-placeholder.svg"
};

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
