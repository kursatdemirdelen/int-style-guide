import { Table, Typography, Row, Col } from "antd";

const { Title, Text } = Typography;

const TypographySection = () => {
  const columns = [
    {
      title: "Stil",
      dataIndex: "stil",
      key: "stil",
      align: "center",
      render: (text) => (
        <span
          style={{
            fontWeight: 600,
            color: "var(--color-text-primary)",
          }}
        >
          {text}
        </span>
      ),
      fixed: "left",
      width: 60,
    },
    {
      title: "Boyut",
      dataIndex: "boyut",
      key: "boyut",
      align: "center",
      width: 60,
      render: (text) => (
        <span
          style={{
            color: "var(--color-text-secondary)",
            fontFamily: "monospace",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Ağırlık",
      dataIndex: "agirlik",
      key: "agirlik",
      align: "center",
      width: 80,
      render: (text) => (
        <span
          style={{
            color: "var(--color-text-secondary)",
            fontWeight: text.replace(/[^0-9]/g, ""),
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Kullanım Alanı",
      dataIndex: "kullanim",
      align: "center",
      key: "kullanim",
      width: 200,
      render: (text) => (
        <span
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {text}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      stil: "H1",
      boyut: "24px",
      agirlik: "700",
      kullanim: "Ana başlıklar, sayfa başlıkları",
    },
    {
      key: "2",
      stil: "H2",
      boyut: "20px",
      agirlik: "600",
      kullanim: "Bölüm başlıkları",
    },
    {
      key: "3",
      stil: "H3",
      boyut: "16px",
      agirlik: "500",
      kullanim: "Kartlar veya modül içi küçük başlıklar",
    },
    {
      key: "4",
      stil: "Body",
      boyut: "14px",
      agirlik: "400",
      kullanim: "Ana içerik metni",
    },
    {
      key: "5",
      stil: "Small",
      boyut: "12px",
      agirlik: "300",
      kullanim: "Yardımcı metin, tarih, ek bilgi",
    },
  ];

  return (
    <div style={{ marginBottom: "40px" }}>
      {/* Başlık */}
      <Title level={3}>Tipografi Rehberi</Title>

      {/* Açıklama Metni */}
      <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
        Uygulama genelinde tutarlı bir tipografi hiyerarşisi kullanılmaktadır.
        Başlıklar (H1, H2, H3), ana içerik metni (Body) ve yardımcı metinler
        (Small) arasında net bir ayrım sağlanmıştır. Satır yüksekliği ve margin
        değerleri, okunabilirliği artırmak için optimize edilmiştir.
      </Text>

      {/* Roboto Fontu Açıklaması */}
      <Text style={{ display: "block", marginBottom: "16px" }}>
        Roboto Fontu Google Fonts üzerinden import edilir.
      </Text>
      <Text code copyable style={{ display: "block", marginBottom: "16px" }}>
        {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');`}
      </Text>
      <Text style={{ display: "block", marginBottom: "16px" }}>
        Global stil dosyasında body için font-family tanımlanır.
      </Text>
      <Text code copyable style={{ display: "block", marginBottom: "16px" }}>
        {`body {
  font-family: 'Roboto', sans-serif;}`}
      </Text>

      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div
            style={{
              maxHeight: "calc(100vh - 300px)",
              overflow: "auto",
              marginBottom: "40px",
            }}
          >
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              size="middle"
              style={{
                background: "var(--color-white)",
                borderRadius: "8px",
                boxShadow: "var(--shadow-default)",
                border: "1px solid var(--color-border)",
                minWidth: "800px",
                maxWidth: "800px",
                width: "100%",
              }}
              tableLayout="fixed"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TypographySection;
