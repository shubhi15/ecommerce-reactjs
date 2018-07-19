import React, { Component } from "react";
import ProductCarousal from "../ProductCarousal";

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductInfo: {},
      selectedOptions: []
    };
  }
  componentDidMount() {
    this.updateSelectedOptions();
  }
  updateSelectedOptions() {
    let selectedOptions = [];
    for (
      let i = 0;
      i < this.props.productInfo.selected_option_ids.length;
      i++
    ) {
      let filteredItems = this.props.productInfo.options.filter(
        val => this.props.productInfo.selected_option_ids[i] === val._id
      );
      if (filteredItems && filteredItems.length > 0) {
        selectedOptions.push(filteredItems[0]);
      }
    }
    this.setState({
      selectedOptions: selectedOptions
    });
    this.updateSelectedProductInfo(selectedOptions);
  }

  selectOption(event, option) {
    let updatedOptions = this.state.selectedOptions.map(val => {
      if (val.attrib_id === option.attrib_id) {
        val = option;
        return val;
      }
      return val;
    });
    this.setState({ selectedOptions: updatedOptions });
    this.updateSelectedProductInfo(updatedOptions);
  }

  updateSelectedProductInfo(selectedOptions) {
    for (let i = 0; i < this.props.productInfo.product_variations.length; i++) {
      for (let j = 0; j < selectedOptions.length; j++) {
        let filteredItems = this.props.productInfo.product_variations[
          i
        ].sign.filter(element => selectedOptions[j]._id === element);
        if (!filteredItems || filteredItems.length === 0) {
          break;
        } else {
          if (j === selectedOptions.length - 1) {
            let productInfo = this.props.productInfo.product_variations[i];
            productInfo.desc = this.props.productInfo.primary_product.desc;
            this.setState({
              selectedProductInfo: productInfo
            });
          }
        }
      }
    }
  }
  render() {
    if (this.props.productInfo) {
      return (
        <div className="selected_product__container">
          <ProductCarousal images={this.state.selectedProductInfo.images} />

          <div
            className="product_description"
            key={this.state.selectedProductInfo._id}
          >
            <div className="product_name">
              {this.state.selectedProductInfo.name}
            </div>
            <div className="product_text">
              {this.state.selectedProductInfo.desc}
            </div>

            <div className="product_price">
              <div className="sale_price_value">
                Rs. {Math.ceil(this.state.selectedProductInfo.sale_price)}
              </div>
              <div className="marked_price_value">
                <span>
                  Rs. {Math.ceil(this.state.selectedProductInfo.mark_price)}
                </span>
              </div>
            </div>

            <div className="product_saving_msg">
              You Save Rs.{" "}
              {Math.ceil(
                this.state.selectedProductInfo.mark_price -
                  this.state.selectedProductInfo.sale_price
              )}{" "}
              {this.state.selectedProductInfo.sale_msg}
            </div>
            <div className="product_attributes">
              {this.props.productInfo.attributes.map(attrItem => (
                <div className="option-container"  key = {'desc'+attrItem._id}>
                  <div className="option-header">
                    {
                      this.props.productInfo.options.filter(
                        optionItem => optionItem.attrib_id === attrItem._id
                      ).length
                    }{" "}
                    {attrItem.name} Available
                  </div>
                  {this.props.productInfo.options
                    .filter(optionItem => optionItem.attrib_id === attrItem._id)
                    .map(filteredItem => {
                      let isOptionSelected = false;
                      {
                        this.state.selectedOptions.map(selectedOption => {
                          if (selectedOption._id === filteredItem._id) {
                            isOptionSelected = true;
                          }
                        });
                      }
                      let optionclassName = ["option-content"];
                      if (isOptionSelected) {
                        optionclassName.push("option_selected");
                      }
                      return (
                        <button
                        key = {filteredItem._id}
                          className={optionclassName.join(" ")}
                          onClick={event =>
                            this.selectOption(event, filteredItem)
                          }
                        >
                          {filteredItem.name}
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>
            <div className="product_quantity" />
            <div className="product_actions" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDescription;
