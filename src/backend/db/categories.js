import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Coffee Shop",
    description: "Roots Coffee",
    categoryImage:
      "https://static.vecteezy.com/system/resources/previews/002/199/002/non_2x/online-concept-coffee-shop-delivery-on-mobile-food-and-drink-order-application-vector.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tea Shop",
    description: "Loose teas, Spices",
    categoryImage:
      "https://spiceislandteahouse.square.site/uploads/b/f48755f9d96601498b7e15e625c9bc9aef3c29f16c2189b73a1a9e9834836f08/static1.squarespace_1588445027.jpg?width=2400&optimize=medium",
  },
  {
    _id: uuid(),
    categoryName: "Candy Shop",
    description: "Sweet-stuff",
    categoryImage:
      "https://static.wixstatic.com/media/c8de2c_9d4d2f45cd5f44878fa15c6e1be05fc0~mv2.png/v1/fill/w_740,h_374,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8de2c_9d4d2f45cd5f44878fa15c6e1be05fc0~mv2.png",
  },
];
