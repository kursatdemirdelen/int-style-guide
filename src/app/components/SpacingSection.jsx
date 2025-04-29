import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Divider,
  Tooltip,
} from "antd";
import { CopyOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const SpacingSection = () => {
  const spacingValues = [
    { size: 0, name: "None", usage: "Hiç boşluk olmayan durumlar" },
    { size: 8, name: "Small", usage: "Form elemanları arasında" },
    { size: 16, name: "Medium", usage: "Kartlar ve içerik blokları" },
    { size: 24, name: "Large", usage: "Bölüm araları" },
    { size: 32, name: "X-Large", usage: "Sayfa kenar boşlukları" },
  ];

  return (
    <div style={{ marginBottom: "40px" }}>
      {/* Başlık ve Açıklama */}
      <Space direction="vertical" size={16}>
        <Title level={3}>
          Boşluklandırma ve Grid Sistemi{" "}
          <Tooltip title="Ant Design'in 8px grid sistemine göre tasarlanmıştır">
            <InfoCircleOutlined style={{ color: "#888" }} />
          </Tooltip>
        </Title>
        <Paragraph type="secondary">
          Ant Design, tüm boşluk değerlerini <strong>8px'in katları</strong>{" "}
          olarak tanımlar. Bu, tutarlı bir tasarım sağlar ve responsive
          düzenlemelerde kolaylık sağlar.
        </Paragraph>
      </Space>

      {/* Spacing Örnekleri */}
      <Divider orientation="left">Spacing Değerleri</Divider>
      <Row gutter={[16, 16]}>
        {spacingValues.map(({ size, name, usage }) => (
          <Col key={name} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              actions={[
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  onClick={() => navigator.clipboard.writeText(`${size}px`)}
                />,
              ]}
            >
              {/* Görsel Alan */}
              <div
                style={{
                  width: "100%",
                  height: 80,
                  border: "1px dashed #e0e0e0",
                  borderRadius: 4,
                  padding: `${size}px`,
                  background: `repeating-linear-gradient(
                    45deg,
                    rgba(0, 0, 0, 0.05),
                    rgba(0, 0, 0, 0.05) 4px,
                    transparent 4px,
                    transparent 8px
                  )`,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#2596be",
                    opacity: 0.2,
                    borderRadius: 4,
                  }}
                />
              </div>

              {/* Açıklamalar */}
              <Space direction="vertical" size={4} style={{ marginTop: 12 }}>
                <Text strong>
                  {name} ({size}px)
                </Text>
                <Text type="secondary">{usage}</Text>
                <Text code style={{ fontSize: 12, display: "block" }}>
                  padding: {size}px;
                </Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Grid Sistemi Örneği */}
      <Divider orientation="left">Grid Sistemi</Divider>
      <Paragraph type="secondary">
        Ant Design'in <strong>Row</strong> ve <strong>Col</strong> bileşenleri,
        esnek ve responsive düzenler oluşturmak için kullanılır.{" "}
        <code>gutter</code> özelliği ile sütunlar arasında boşluk eklenir.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <div style={{ padding: "16px" }}>
              <Text strong>Sol Kolon</Text>
              <Paragraph type="secondary">span={6}</Paragraph>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <div style={{ padding: "24px" }}>
              <Text strong>Ana İçerik</Text>
              <Paragraph type="secondary">span={12}</Paragraph>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div style={{ padding: "16px" }}>
              <Text strong>Sağ Kolon</Text>
              <Paragraph type="secondary">span={6}</Paragraph>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Responsive Grid Örneği */}
      <Divider orientation="left">Responsive Grid</Divider>
      <div style={{ marginBottom: "40px" }}>
        <Paragraph type="secondary">
          Ant Design'in <strong>Col</strong> bileşeni, <code>xs</code>,{" "}
          <code>sm</code>, <code>md</code>, ve <code>lg</code> gibi
          breakpoint'lerle responsive düzenler oluşturmanıza olanak tanır.
          Aşağıda, farklı ekran boyutlarında nasıl bir düzen değişikliği
          olduğunu görebilirsiniz.
        </Paragraph>

        <Divider />

        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          {/* Kolon 1 */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Text strong>
                XS: 24
                <br />
                SM: 12
                <br />
                MD: 8<br />
                LG: 6
              </Text>
              <Paragraph type="secondary" style={{ margin: 0 }}>
                Bu kolon, ekran boyutuna göre genişlik değiştirir.
              </Paragraph>
            </Card>
          </Col>

          {/* Kolon 2 */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Text strong>
                XS: 24
                <br />
                SM: 12
                <br />
                MD: 8<br />
                LG: 6
              </Text>
              <Paragraph type="secondary" style={{ margin: 0 }}>
                Bu kolon, ekran boyutuna göre genişlik değiştirir.
              </Paragraph>
            </Card>
          </Col>

          {/* Kolon 3 */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Text strong>
                XS: 24
                <br />
                SM: 12
                <br />
                MD: 8<br />
                LG: 6
              </Text>
              <Paragraph type="secondary" style={{ margin: 0 }}>
                Bu kolon, ekran boyutuna göre genişlik değiştirir.
              </Paragraph>
            </Card>
          </Col>

          {/* Kolon 4 */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Text strong>
                XS: 24
                <br />
                SM: 12
                <br />
                MD: 8<br />
                LG: 6
              </Text>
              <Paragraph type="secondary" style={{ margin: 0 }}>
                Bu kolon, ekran boyutuna göre genişlik değiştirir.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Responsive Grid Açıklaması */}
        <Space direction="vertical" size={16}>
          <Text strong>Breakpoint'ler:</Text>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <Text code>xs</Text>: Ekran genişliği &lt; 576px (mobil)
            </li>
            <li>
              <Text code>sm</Text>: Ekran genişliği ≥ 576px (tablet)
            </li>
            <li>
              <Text code>md</Text>: Ekran genişliği ≥ 768px (küçük masaüstü)
            </li>
            <li>
              <Text code>lg</Text>: Ekran genişliği ≥ 992px (büyük masaüstü)
            </li>
          </ul>
        </Space>
      </div>
    </div>
  );
};

export default SpacingSection;
