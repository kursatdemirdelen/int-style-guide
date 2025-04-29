import React from "react";

const AnnouncementTop = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "20px",
        background:
          "linear-gradient(121deg, #4DA1A9 0%, #3674B5 40%, #578FCA 90%)",
      }}
    >
      <Text
        type="secondary"
        style={{
          display: "block",
          marginBottom: "16px",
          color: "#ccc",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Style Guide'ımızın ilk sürümü (v1.0) olarak hazırlanmıştır. Amacımız,
        tutarlı ve kullanıcı odaklı bir tasarım deneyimi sunmaktır. Bu sürümde
        temel bileşenler ve stil kuralları yer alırken, gelecekteki
        güncellemelerle yeni özellikler ve iyileştirmeler eklemeyi planlıyoruz.
        Geri bildirimleriniz için şimdiden teşekkür ederiz!
      </Text>
    </div>
  );
};

export default AnnouncementTop;
