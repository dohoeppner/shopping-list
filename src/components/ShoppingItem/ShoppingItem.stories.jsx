import React from "react";

import { ShoppingItem } from "./ShoppingItem";

export default {
  title: "Components/ShoppingItem",
  component: ShoppingItem,
};

const exampleItem = {
  _id: "c2hvcHBpbmcuaXRlbTow",
  _type: "shopping.item",
  category: {
    _type: "ref",
    _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==",
  },
  name: {
    en: "Algae",
    de: "Algen",
  },
};

const Template = (args) => <ShoppingItem {...args} />;

export const ActiveItem = Template.bind({});
ActiveItem.args = { item: exampleItem };
