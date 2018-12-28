import React, { Component } from "react";

class Th extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  formatWidth = width => Number(width.replace("px", ""));

  calculateResize = parentWidth => {
    if (this.defaultParentWidth < parentWidth) {
      return { type: "add", value: parentWidth - this.defaultParentWidth };
    } else {
      return {
        type: "substract",
        value: this.defaultParentWidth - parentWidth
      };
    }
  };

  calculateTh = (nbPixelResize, nbChildren) => {
    const nbPixelResizeForOneTh = nbPixelResize.value / nbChildren;
    if (nbPixelResize.type === "add") {
      return this.defaultThWidth + nbPixelResizeForOneTh;
    } else {
      return this.defaultThWidth - nbPixelResizeForOneTh;
    }
  };

  handleResize = e => {
    const { maxWidth, minWidth } = this.props;

    if (maxWidth || minWidth) {
      const parent = this.th.parentElement;
      const parentWidth = parent.clientWidth;
      const nbChildren = parent.children.length;
      const nbPixelResize = this.calculateResize(parentWidth);
      const newDefaultThWidth = this.calculateTh(nbPixelResize, nbChildren);

      this.setSize(this.th, newDefaultThWidth);

      this.defaultThWidth = newDefaultThWidth;
      this.defaultParentWidth = parentWidth;
    }
  };

  setSize = (elm, defaultThWidth) => {
    this.th = elm;
    this.defaultParentWidth = this.th.parentElement.clientWidth;
    this.defaultThWidth = this.th.clientWidth;

    const { maxWidth, minWidth } = this.props;
    const currentWidth = defaultThWidth || this.th.clientWidth;
    if (maxWidth) {
      const formatedMaxWidth = this.formatWidth(maxWidth);
      if (formatedMaxWidth <= currentWidth) {
        this.th.style.width = maxWidth;
      } else {
        this.th.style.width = null;
      }
    }
    if (minWidth) {
      const formatedMinWidth = this.formatWidth(minWidth);
      if (formatedMinWidth >= currentWidth) {
        this.th.style.width = minWidth;
      } else {
        this.th.style.width = null;
      }
    }
  };

  render() {
    return <th ref={this.setSize}>{this.props.children}</th>;
  }
}

export default Th;
