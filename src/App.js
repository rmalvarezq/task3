import "./App.css";
import "antd/dist/antd.css";
import { Divider, Row, Col, Layout } from "antd";
import MenuNav from "./components/MenuNav";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Header>
          <MenuNav></MenuNav>
        </Header>
        <Content>
          <Row>
            <Col span={12}>
              {" "}
              <div className="unit-wrapper">
                <img
                  src="https://img.freepik.com/vector-gratis/fondo-elementos-isometricos-comercio-electronico_52683-536.jpg?size=626&ext=jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col span={6} offset={3}>
              <div>
                <img src="" alt="" />
                <h1>The Best Way Online Shop</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus quam ea odit vero natus dolores numquam similique
                  illum, consectetur nam, temporibus soluta! Neque dolorum ad
                  nisi ab aut nobis dolore.
                </p>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
