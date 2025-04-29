import React, { useState } from "react";
import {
  Alert,
  Modal,
  Progress,
  Button,
  Typography,
  Card,
  Row,
  Col,
  Space,
  Divider,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const FeedbackGuide = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div style={{ marginBottom: "40px" }}>
      {/* Başlık ve Açıklama */}
      <Space direction="vertical" size={16}>
        <Title level={3}>Etkileşim Rehberi</Title>
        <Paragraph type="secondary">
          Etkileşim rehberi, kullanıcıların uygulama içindeki eylemlerini daha
          sezgisel ve verimli hale getirmeyi amaçlar. Butonlar, linkler, hover
          efektleri ve geri bildirim mekanizmaları gibi unsurlar, kullanıcı
          deneyimini artırmak için tutarlı bir şekilde tasarlanır.
        </Paragraph>
      </Space>

      {/* Örnekler Bölümü */}
      <Divider orientation="left">Örnekler</Divider>
      <Row gutter={[16, 16]}>
        {/* Alert Örnekleri */}
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Alert"
            extra={<InfoCircleOutlined style={{ color: "#888" }} />}
            style={{ height: "100%" }}
          >
            <Space direction="vertical" size={16}>
              <Alert message="Başarılı!" type="success" showIcon />
              <Alert message="Uyarı!" type="warning" showIcon />
              <Alert message="Hata!" type="error" showIcon />
              <Alert message="Bilgi" type="info" showIcon />
            </Space>
          </Card>
        </Col>

        {/* Modal Örnekleri */}
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Modal"
            extra={<InfoCircleOutlined style={{ color: "#888" }} />}
            style={{ height: "100%" }}
          >
            <Space direction="vertical" size={16}>
              <Button type="primary" onClick={() => setIsModalVisible(true)}>
                Modal Aç
              </Button>
              <Modal
                title="Modal Başlığı"
                open={isModalVisible}
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
                okText="Tamam"
                cancelText="İptal"
              >
                <p>Bu bir modal içeriğidir.</p>
              </Modal>
              <Text type="secondary">
                Modal, kullanıcıya önemli bilgileri göstermek veya onay almak
                için kullanılır.
              </Text>
            </Space>
          </Card>
        </Col>

        {/* Progress Örnekleri */}
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Progress"
            extra={<InfoCircleOutlined style={{ color: "#888" }} />}
            style={{ height: "100%" }}
          >
            <Space direction="vertical" size={16}>
              <Progress percent={75} status="active" />
              <Progress percent={50} status="exception" />
              <Progress percent={100} />
              <Text type="secondary">
                Progress bileşeni, bir işlemin durumunu görsel olarak ifade
                eder.
              </Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackGuide;
