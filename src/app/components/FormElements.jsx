import {
  Button,
  Input,
  Space,
  Typography,
  Checkbox,
  Radio,
  Select,
  DatePicker,
  Switch,
  Form,
  Row,
  Col,
  ConfigProvider,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const FormElements = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Değerleri:", values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2596be",
          colorTextSecondary: "#888888",
        },
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <Title level={3}>Form Elemanları</Title>
        <Text
          type="secondary"
          style={{ display: "block", marginBottom: "16px" }}
        >
          Form elemanları, kullanıcıların veri girişi yapmasını sağlayan temel
          bileşenlerdir. Butonlar, input alanları, checkbox'lar, radio butonları
          ve diğer form elemanları, tutarlı bir görsel dil ve kullanıcı dostu
          bir tasarım ile sunulmuştur.
        </Text>

        {/* Ana Form Bileşeni */}
        <Form
          form={form}
          initialValues={{
            dropdown: "1",
          }}
          onFinish={onFinish}
          layout="vertical"
        >
          {/* Buton Grubu */}
          <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
            <Col xs={24}>
              <Text strong style={{ display: "block", marginBottom: "8px" }}>
                Butonlar
              </Text>
              <Space>
                <Button type="primary">Birincil Buton</Button>
                <Button>İkincil Buton</Button>
                <Button type="dashed">Dashed Buton</Button>
                <Button danger>Danger Buton</Button>
              </Space>
            </Col>
          </Row>

          {/* Input Grubu */}
          <Text strong style={{ display: "block", marginBottom: "8px" }}>
            Input Alanları
          </Text>
          <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Kullanıcı Adı"
                name="username"
                rules={[
                  { required: true, message: "Lütfen kullanıcı adı giriniz!" },
                ]}
              >
                <Input placeholder="Kullanıcı adı" prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Şifre"
                name="password"
                rules={[{ required: true, message: "Lütfen şifre giriniz!" }]}
              >
                <Input.Password placeholder="Şifre" prefix={<LockOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="Açıklama"
                name="description"
                rules={[
                  { required: false, message: "Lütfen açıklama ekleyin!" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Açıklama ekleyin..." />
              </Form.Item>
            </Col>
          </Row>

          {/* Checkbox ve Radio */}
          <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
            <Col xs={24} md={12}>
              <Text strong style={{ display: "block", marginBottom: "8px" }}>
                Checkbox
              </Text>
              <Form.Item name="checkbox" valuePropName="checked">
                <Checkbox>Onaylıyorum</Checkbox>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Text strong style={{ display: "block", marginBottom: "8px" }}>
                Radio
              </Text>
              <Form.Item name="radio">
                <Radio.Group
                  options={["Seçenek 1", "Seçenek 2"]}
                  optionType="button"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Select ve Tarih Seçici */}
          <Text strong style={{ display: "block", marginBottom: "8px" }}>
            Dropdown ve Tarih Seçici
          </Text>
          <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Dropdown"
                name="dropdown"
                rules={[
                  { required: true, message: "Lütfen bir seçenek seçiniz!" },
                ]}
              >
                <Select
                  options={[
                    { value: "1", label: "Seçenek 1" },
                    { value: "2", label: "Seçenek 2" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Tarih"
                name="date"
                rules={[
                  { required: true, message: "Lütfen bir tarih seçiniz!" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          {/* Switch ve Gönder Butonu */}
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Text strong style={{ display: "block", marginBottom: "8px" }}>
                Toggle
              </Text>
              <Form.Item name="switch" valuePropName="checked">
                <Switch checkedChildren="Açık" unCheckedChildren="Kapalı" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item style={{ marginTop: "24px" }}>
                <Button type="primary" htmlType="submit" block>
                  Gönder
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default FormElements;
