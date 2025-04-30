import React from "react";
import { Col, Row, Typography } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

const Header = () => {
  return (
    <>
      <div
        style={{
          background: "#2596be",
          padding: "24px 0",
        }}
      >
        <Row
          justify="center"
          style={{ maxWidth: "1200px", margin: "20px auto" }}
          gutter={[16, 16]}
        >
          <Col xs={24} md={4} lg={2}>
            <Image
              src="/images/int.png"
              alt="Örnek Resim"
              width={64}
              height={64}
              priority
            />
          </Col>
          <Col xs={24} md={20} lg={22}>
            <Title level={1} style={{ color: "#fff", marginTop: 0 }}>
              Intellium Style Guide
            </Title>
            <Title level={5} style={{ color: "#fff", marginBottom: 0 }}>
              Design System
            </Title>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
