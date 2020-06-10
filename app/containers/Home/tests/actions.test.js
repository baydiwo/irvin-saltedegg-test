import * as actions from "../actions";
import { DEFAULT_ACTION } from "../constants";

describe("Home actions", () => {
  describe("Default Action", () => {
    it("has a type of DEFAULT_ACTION", () => {
      const expected = {
        type: DEFAULT_ACTION
      };
      expect(actions.defaultAction()).toEqual(expected);
    });

    it("fetchDetailSuccess", () => {
      const payload = {
        products: [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
      };
      expect(actions.fetchDetailSuccess(payload)).toMatchSnapshot();
    });

    it("fetchDetailError", () => {
      const payload = { error: "Some error message" };
      expect(actions.fetchDetailError(payload)).toMatchSnapshot();
    });

    it("addToCart", () => {
      const payload = {
        products: [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
      };
      expect(actions.addToCart(payload)).toMatchSnapshot();
    });
    it("addToCart", () => {
      const payload = {
        products: [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
      };
      expect(actions.addToCart(payload)).toMatchSnapshot();
    });
    
    it("addQuantity", () => {
      
      const value = {
        products: [
          {
            currency: "SGD",
            image:
              "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            name: "IPhone 7",
            price: "15",
          },
        ],
      };
      expect(actions.addQuantity(value)).toMatchSnapshot();
    });
    
    it("totalPrice", () => {
      expect(actions.totalPrice(200)).toMatchSnapshot();
    });

  });
});
