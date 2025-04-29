import { Table, List, Card, Typography } from "antd";

const { Title, Text } = Typography;

const columns = [
  { title: "Ad", dataIndex: "name", key: "name" },
  { title: "Yaş", dataIndex: "age", key: "age" },
];

const data = [
  { key: "1", name: "Ali", age: 32 },
  { key: "2", name: "Ayşe", age: 28 },
];

const DataDisplayGuide = () => (
  <div>
    <Title level={3}>Veri Gösterimi Rehberi</Title>
    <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
      Veri gösterimi, kullanıcıların bilgileri hızlı ve net bir şekilde
      anlamasını sağlamak için tasarlanır. Tablolar, listeler ve grafikler gibi
      bileşenler, tutarlı bir stil ve düzenle sunulur.
    </Text>

    {/* Table Örneği */}
    <Card
      hoverable={false}
      variant="borderless"
      style={{
        marginBottom: "24px",
      }}
    >
      <Title level={4}>Table Örneği</Title>
      <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
        Tablolar, verileri düzenli ve okunabilir bir şekilde sunmak için
        kullanılır. Sütunlar, satırlar ve filtreleme gibi özellikler sayesinde
        kullanıcılar hızlıca bilgilere erişebilir.
      </Text>
      <Table columns={columns} dataSource={data} />
    </Card>

    {/* List Örneği */}
    <Card
      hoverable={false}
      variant="borderless"
      style={{
        marginBottom: "24px",
      }}
    >
      <Title level={4}>List Örneği</Title>
      <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
        Listeler, verileri düzenli ve okunabilir bir şekilde sunmak için
        kullanılır. Basit metinlerden karmaşık öğelere kadar farklı içerikler
        için kullanılabilir.
      </Text>
      <List
        bordered
        dataSource={["Maddem 1", "Madde 2", "Madde 3"]}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>

    {/* Card Örneği */}
    <Card
      hoverable={false}
      variant="borderless"
      style={{
        marginBottom: "24px",
      }}
    >
      <Title level={4}>Card Örneği</Title>
      <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
        Kartlar, içerikleri düzenli ve görsel olarak çekici bir şekilde sunmak
        için kullanılır. Başlıklar, metinler ve butonlar gibi farklı içerikler
        için kullanılabilir.
      </Text>
      <Card title="Kart Başlığı" style={{ width: 300 }}>
        Bu bir kart içeriğidir.
      </Card>
    </Card>
  </div>
);

export default DataDisplayGuide;
