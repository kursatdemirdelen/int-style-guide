import React from "react";
import { Row, Col, Card, Typography, message } from "antd";

const { Title, Text } = Typography;

const colors = [
  {
    name: "Marka Rengi",
    hex: "#2596be",
    usage: "Birincil aksan; butonlar, linkler",
  },
  {
    name: "İkincil Marka Rengi",
    hex: "#118B50",
    usage: "İkincil aksan; başarılı işlemler, onaylar",
  },
  { name: "Arka Plan", hex: "#F8F9FA", usage: "Genel arka plan" },
  { name: "Beyaz", hex: "#FFFFFF", usage: "Kart içleri" },
  { name: "Metin (Birincil)", hex: "#333333", usage: "Ana metinler" },
  { name: "Metin (İkincil)", hex: "#888888", usage: "Yardımcı metinler" },
  { name: "Border", hex: "#E0E0E0", usage: "Sınır çizgileri" },
];

const ColorPalette = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopyHex = (hex) => {
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        messageApi.open({
          type: "success",
          content: `${hex} rengi kopyalandı!`,
        });
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Renk kopyalanırken bir hata oluştu.",
        });
        console.error("Kopyalama hatası:", err);
      });
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <Title level={3}>Renk Paleti</Title>
      <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
        Renk paleti, uygulamanın genel görsel kimliğini ve kullanıcı arayüzünün
        temelini oluşturur. Ana renk (#2596be) ve ikincil renk (#25be46),
        kullanıcı dikkatini çekmek ve önemli aksiyonları vurgulamak için
        kullanılır. Arka plan, metin ve sınır çizgileri gibi yardımcı renkler
        ise okunabilirliği ve netliği artırmak için tasarlanmıştır.
      </Text>
      {contextHolder}
      <Row gutter={[16, 16]} style={{ display: "flex", alignItems: "stretch" }}>
        {colors.map((color) => (
          <Col key={color.name} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              onClick={() => handleCopyHex(color.hex)}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  backgroundColor: color.hex,
                  height: "100px",
                  borderRadius: "4px",
                  marginBottom: "12px",
                }}
              />
              <Text strong>{color.name}</Text>
              <Text type="secondary" style={{ display: "block" }}>
                {color.hex}
              </Text>
              <Text style={{ marginTop: "auto" }}>{color.usage}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ColorPalette;
