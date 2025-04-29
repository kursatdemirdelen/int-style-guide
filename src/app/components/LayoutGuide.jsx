import { Layout, Breadcrumb, Typography } from "antd";
const { Header, Content, Footer } = Layout;

const { Title, Text } = Typography;

const LayoutGuide = () => (
  <>
    <Title level={3}>Düzen Rehberi</Title>
    <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
      Uygulamanın düzen rehberi, tutarlı bir kullanıcı deneyimi sağlamak için
      tasarlanmıştır. Grid sistemi, boşluklandırma ve responsive tasarım
      ilkeleri ile farklı cihazlarda optimum görüntüleme sağlanır.
    </Text>
    <Layout style={{ minHeight: "500px" }}>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>Üstbilgi</Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Ana Sayfa" }, { title: "İçerik" }]}
          />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Ana İçerik Alanı
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Alt Bilgi © 2025</Footer>
      </Layout>
    </Layout>
  </>
);

export default LayoutGuide;
