"use client";
import React, { useState } from "react";
import { Layout, Menu,   Drawer, Typography } from "antd";
import ColorPalette from "./components/ColorPalette";
import TypographySection from "./components/TypographySection";
import SpacingSection from "./components/SpacingSection";
import FormElements from "./components/FormElements";
import LayoutGuide from "./components/LayoutGuide";
import NavigationGuide from "./components/NavigationGuide";
import DataDisplayGuide from "./components/DataDisplayGuide";
import Header from "./components/Header";
import FeedbackGuide from "./components/FeedbackGuide";
import IconsGuide from "./components/IconsGuide";
import { Footer } from "antd/es/layout/layout";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;
export default function Home() {
  const [activeSection, setActiveSection] = useState("color-palette");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "color-palette":
        return <ColorPalette />;
      case "typography":
        return <TypographySection />;
      case "spacing":
        return <SpacingSection />;
      case "form-elements":
        return <FormElements />;
      case "layout-guide":
        return <LayoutGuide />;
      case "navigation-guide":
        return <NavigationGuide />;
      case "data-display-guide":
        return <DataDisplayGuide />;
        case "feedback-guide":
          return <FeedbackGuide />;
          case "icons-guide":
            return <IconsGuide />;
      default:
        return <ColorPalette />;
    }
  };
 

  return (
    <>
      <Header />
      <Layout style={{ maxWidth: "1200px", margin: "36px auto",minHeight: "72vh",    }}>
        {/* Sidebar */}
        <Sider
      breakpoint="md" 
      width={250}
      collapsedWidth="0"  
      onCollapse={(collapsed) => {
        if (collapsed) setIsDrawerOpen(false);
      }}
      style={{
        background: "var(--color-background)",  
        padding: "16px",   
        boxShadow: "1px 0 4px rgba(0, 0, 0, 0.1)", 
        transition: "background 0.3s ease, width 0.3s ease",  
      }}
    >
          {/* Başlık */}
          <Title level={3}> Stil Rehberi</Title>
         
          {/* Açıklama Metni */}
          <Text type="secondary" style={{ display: "block", marginBottom: "14px"  }}>
          Bu rehber, tüm stil ve bileşenlerin tutarlı bir şekilde nasıl
          kullanılacağını açıklar.
      </Text>
          
          {/* Menü */}
          <Menu
            mode="inline"
            selectedKeys={[activeSection]}
            onClick={({ key }) => setActiveSection(key)}
            items={[
              { key: "color-palette", label: "Renk Paleti" },
              { key: "typography", label: "Tipografi" },
              { key: "spacing", label: "Boşluklandırma" },
              { key: "form-elements", label: "Form Elemanları" },
              { key: "layout-guide", label: "Düzen Rehberi" },
              { key: "navigation-guide", label: "Navigasyon Rehberi" },
              { key: "data-display-guide", label: "Veri Gösterimi" },
              { key: "feedback-guide", label: "Etkileşim Rehberi" },
              { key: "icons-guide", label: "İkon Rehberi" },
            ]}
            style={{
              background: "transparent",
              border: "none",
            }}
          />
        </Sider>

        {/* İçerik Alanı */}
        <Content
          style={{
            padding: "24px",
            background: "var(--color-white)",
            color: "var(--color-text-primary)",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          {renderSection()}
        </Content>
      </Layout>
      <Footer
      style={{
        textAlign: "center",
        backgroundColor: "var(--color-primary)",  
        color: "#fff", 
        position: "fixed",  
        bottom: 0,  
        width: "100%",  
        padding: "8px 0",   
      }}
    >
     Intellium Style Guide © 2025  
    </Footer>

      {/* Mobil İçin Drawer */}
      <Drawer
        title="Stil Rehberi"
        placement="left"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        style={{
          background: "var(--color-background)",
          color: "var(--color-text-primary)",
        }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          onClick={({ key }) => {
            setActiveSection(key);
            setIsDrawerOpen(false);
          }}
          items={[
            { key: "color-palette", label: "Renk Paleti" },
            { key: "typography", label: "Tipografi" },
            { key: "spacing", label: "Boşluklandırma" },
            { key: "form-elements", label: "Form Elemanları" },
            { key: "layout-guide", label: "Düzen Rehberi" },
            { key: "navigation-guide", label: "Navigasyon Rehberi" },
            { key: "data-display-guide", label: "Veri Gösterimi" },
          ]}
          style={{
            background: "var(--color-background)",
            border: "none",
          }}
        />
      </Drawer>
    </>
  );
}