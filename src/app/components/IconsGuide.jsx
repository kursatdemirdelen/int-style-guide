import {
  CheckCircleTwoTone,
  HeartTwoTone,
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SmileTwoTone,
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Typography } from "antd";
import Image from "next/image";
import AvatarComponent from "./AvatarComponent";

const { Title, Text, Link: AntLink } = Typography;

const IconsGuide = () => (
  <div>
    <Title level={3}>İkon Rehberi</Title>
    <Text type="secondary" style={{ display: "block", marginBottom: "16px" }}>
      İkonlar, kullanıcı arayüzünde görsel ipuçları sağlamak ve eylemleri
      hızlıca tanımlamak için kullanılır. Tutarlı bir ikon seti, modern ve
      kullanıcı dostu bir tasarım oluştururken erişilebilirliği de artırır.
    </Text>

    <Title level={5} style={{ marginTop: 16 }}>
      Ant Design İkonları
    </Title>
    <Card style={{ marginTop: 16 }}>
      <Space>
        <SmileTwoTone style={{ fontSize: "24px" }} />
        <HeartTwoTone style={{ fontSize: "24px" }} twoToneColor="#eb2f96" />
        <CheckCircleTwoTone
          style={{ fontSize: "24px" }}
          twoToneColor="#52c41a"
        />
        <HomeOutlined style={{ fontSize: "24px", color: "#2596be" }} />
        <UserOutlined style={{ fontSize: "24px", color: "#25be46" }} />
        <HomeOutlined style={{ fontSize: "24px" }} />
        <SettingFilled style={{ fontSize: "24px" }} />
        <SmileOutlined style={{ fontSize: "24px" }} />
        <SyncOutlined spin style={{ fontSize: "24px" }} />
        <SmileOutlined rotate={180} style={{ fontSize: "24px" }} />
        <LoadingOutlined style={{ fontSize: "24px" }} />
      </Space>
      <Text type="secondary" style={{ display: "block", marginTop: 16 }}>
        Daha fazla ikon için{" "}
        <AntLink
          href="https://ant.design/components/icon"
          target="_blank"
          style={{ color: "#2596be" }}
        >
          Ant Design ikon kütüphanesini
        </AntLink>{" "}
        ziyaret edebilirsiniz.
      </Text>
    </Card>
    <Title level={5} style={{ marginTop: 16 }}>
      Avatar Component
    </Title>
    <Card style={{ marginTop: 16 }}>
      <AvatarComponent />
      <Text type="secondary" style={{ display: "block", marginTop: 16 }}>
        Ant Design Avatar bileşenini kullanarak hazırladığımız bu komponentle,
        kullanıcıların profil fotoğraflarını veya ikonlarını gösterebilirsiniz.
      </Text>
    </Card>

    <Title level={5} style={{ marginTop: 16 }}>
      Optimize Edilmiş Resimler
    </Title>
    <Card style={{ marginTop: 16 }}>
      <Image src="/kedi.jpg" alt="Örnek Resim" width={200} height={200} />
      <Text code style={{ display: "block", marginTop: 16 }}>
        {`<Image src="/kedi.jpg" alt="Örnek Resim" width={200} height={200} />`}
      </Text>
    </Card>
  </div>
);

export default IconsGuide;
