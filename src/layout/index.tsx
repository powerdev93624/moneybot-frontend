import AppHeader from "./header";
import AppContent from "./content";
import { Layout } from "antd";
// import { HEAVY_GREEN_COLOR, LIGHT_GREEN_COLOR, GREEN_COLOR} from "@/constants";

const { Header, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 68,
  padding: "16px 24px",
  backgroundColor: "#f5f5f5",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "100px",
  backgroundColor: "#f5f5f5"
};

// const footerStyle: React.CSSProperties = {
//   textAlign: "center"
// };

const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  margin: "0px 12px 64px",
  backgroundColor: "#f5f5f5"
};
const AppLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <AppHeader />
      </Header>
      <Content style={contentStyle}>
        <AppContent />
      </Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  );
};

export default AppLayout;
