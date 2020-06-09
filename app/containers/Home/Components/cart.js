import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, totalPrice } from "../actions";
import { Row, Col, Table, Space, Button, InputNumber } from "antd";
import PropTypes from "prop-types";
import { compose } from "redux";
import { convertCurrency } from "utils/price";
import { createStructuredSelector } from "reselect";
import makeSelectHome from "./../selectors";

const { Column, ColumnGroup } = Table;

export function Cart({ dispatch, home }) {
  
  const { addedItems, total, tempTotal } = home;

  useEffect(() => {
    
  }, [addedItems]);
  
  useEffect(() => {
    dispatch(totalPrice());
  }, [total]);

   const handleRemove = (id) => {
     dispatch(removeItem(id))
   };

   const onChangeQuantity = (value, id) => {
     dispatch(addQuantity(Number(value), id));
   }

  const columns = [
    {
      title: "",
      key: "action",
      width: 10,
      render: (text, record) => (
        <Space size="middle">
          <Button
            danger
            size="small"
            onClick={() => handleRemove(record.name)}
          >
            X
          </Button>
        </Space>
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Row>
          <Col span={24}>
            <Space align="center">
              <img
                src={record.image}
                alt={record.name}
                width="80"
                className="bordered"
              />
              <div className="mid-text">{record.name}</div>
            </Space>
          </Col>
        </Row>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: (text, record) => convertCurrency(record.price),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (text, record) => (
        <InputNumber
          min={1}
          max={100}
          value={record.quantity}
          defaultValue={0}
          onChange={(e) => onChangeQuantity(e, record.name)}
        />
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "right",
      render: (text, record) =>
        convertCurrency(Number(record.price) * Number(record.quantity)),
    },
  ];

  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <div className="divider" />
          <h2>Shopping Cart - {addedItems.length} items</h2>
          {addedItems && (
            <Table
              dataSource={addedItems}
              columns={columns}
              pagination={false}
              footer={() => (
                <div className="total">
                  <h3>{convertCurrency(total)}</h3>
                </div>
              )}
            />
          )}
        </Col>
      </Row>
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

Cart.propTypes = {
  addedItems: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Cart);
