import React, { useState } from "react";
import { Breadcrumb, Tabs, Menu, Typography, Card } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const NavigationGuide = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: "Mail",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Disabled Menu Item",
      key: "disabled",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },
    {
      key: "link",
      label: (
        <a
          href="https://portal.intellium.com.tr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      ),
    },
  ];

  return (
    <>
      <Title level={3}>Navigasyon Rehberi</Title>
      <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
        Navigasyon öğeleri, kullanıcıların uygulama içinde kolayca hareket
        etmesini sağlar. Breadcrumb, Tabs ve Menu gibi bileşenler, içerik
        arasında sorunsuz geçiş imkanı sunar.
      </Text>
      <div style={{ padding: "24px" }}>
        {/* Breadcrumb Örneği */}
        <Card
          hoverable={false}
          variant="borderless"
          style={{
            marginBottom: "24px",
          }}
        >
          <Title level={4}>Breadcrumb Örneği</Title>
          <Text
            type="secondary"
            style={{ display: "block", marginBottom: "16px" }}
          >
            Kullanıcıların nerede olduğunu anlamasına yardımcı olan iz
            navigasyonudur.
          </Text>
          <Breadcrumb items={[{ title: "Ana Sayfa" }, { title: "Ayarlar" }]} />
        </Card>

        {/* Tabs Örneği */}
        <Card
          hoverable={false}
          variant="borderless"
          style={{
            marginBottom: "24px",
          }}
        >
          <Title level={4}>Tabs Örneği</Title>
          <Text
            type="secondary"
            style={{ display: "block", marginBottom: "16px" }}
          >
            İçerikleri sekmeler halinde düzenlemek için kullanılır. Sekmeler
            arasında kolay geçiş sağlar.
          </Text>
          {/* Updated Tabs with `items` prop */}
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Sekme 1",
                key: "1",
                children: "İçerik 1",
              },
              {
                label: "Sekme 2",
                key: "2",
                children: "İçerik 2",
              },
            ]}
          />
        </Card>

        {/* Menu Örneği (Dropdown Yerine) */}
        <Card
          hoverable={false}
          variant="borderless"
          style={{
            marginBottom: "24px",
          }}
        >
          <Title level={4}>Menu Örneği</Title>
          <Text
            type="secondary"
            style={{ display: "block", marginBottom: "16px" }}
          >
            Geniş menü yapıları veya seçenekler için açılır menü sağlar.
          </Text>
          {/* Menu Bileşeni   */}
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Card>
      </div>{" "}
    </>
  );
};

export default NavigationGuide;
