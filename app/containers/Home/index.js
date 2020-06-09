
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import { Row, Col, Layout, Card, Button } from "antd";
import makeSelectHome from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import "antd/dist/antd.css";
import "./style.scss";
import { fetchDetail, addToCart } from "./actions";
import { convertCurrency } from "utils/price";
import Cart from "./Components/cart"

const {Content} = Layout;
const { Meta } = Card;


export function Home({dispatch, home}) {
  useInjectReducer({ key: "home", reducer });
  useInjectSaga({ key: "home", saga });

  const { products } = home

  useEffect(() => {
    dispatch(fetchDetail());
  }, []);

  const handleClick = (id) => {
    dispatch(addToCart(id))
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <div>
        <Layout>
          <Content>
            <Row gutter={16}>
              <Col span={24}>
                <Row>
                  {products &&
                    products.map((item, key) => (
                      <Col span={8} key={key}>
                        <Card
                          hoverable
                          style={{ width: 240 }}
                          cover={<img alt="example" src={item.image} />}
                        >
                          <Row>
                            <Col span={12}>
                              <Meta
                                title={item.name}
                                description={convertCurrency(item.price)}
                              />
                            </Col>
                            <Col span={12}>
                              <Button
                                type="primary"
                                onClick={() => {
                                  handleClick(item.name);
                                }}
                              >
                                ADD TO CART
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
            <Cart />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Home);
