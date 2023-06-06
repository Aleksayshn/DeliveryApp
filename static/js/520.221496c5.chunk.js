"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[520],{2520:function(e,r,s){s.r(r),s.d(r,{default:function(){return o}});var n=s(9439),d=s(2791),t=s(1224),a=s(8820),i=s(184),l=function(e){var r=e.hideAddressHandler,s=(0,d.useContext)(t.V),n=s.address,l=s.selectAddressHandler,c=s.removeAddressHandler;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"checkout-address-header",children:"Address Details"}),(0,i.jsx)("div",{children:0===n.length?(0,i.jsx)("p",{className:"empty-address",children:"No Address Added"}):(0,i.jsx)("ul",{className:"checkout-address-ul",children:n.map((function(e){var r=e.id,s=e.active,n=e.name,d=e.user_address,t=e.pincode,a=e.mobile;return(0,i.jsxs)("li",{children:[(0,i.jsx)("input",{type:"radio",name:"address",id:r,checked:s,onChange:function(){return l(r)}}),(0,i.jsxs)("label",{htmlFor:r,children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:d}),(0,i.jsxs)("span",{children:["Pincode:",t]}),(0,i.jsxs)("span",{children:["Mobile:",a]})]}),(0,i.jsx)("button",{className:"btn-remove-address",onClick:function(){return c(r)},children:"Remove"})]},r)}))})}),(0,i.jsxs)("button",{className:"checkout-add-address",onClick:function(){return r(!1)},children:[(0,i.jsx)(a.dEn,{}),"Add new Address"]})]})},c=s(683),o=function(){var e=(0,d.useState)(!0),r=(0,n.Z)(e,2),s=r[0],a=r[1],o=(0,d.useContext)(t.V).addAddressHandler;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{display:s&&"none"},className:"add-address-form-container",children:(0,i.jsxs)("form",{onSubmit:function(e){o(e),a(!0)},className:"add-address-form",children:[(0,i.jsx)("h3",{children:"ADD NEW ADDRESS"}),(0,i.jsx)("label",{htmlFor:"addressname",children:"Name"}),(0,i.jsx)("input",{id:"addressname",type:"text",placeholder:"John walter",required:!0}),(0,i.jsx)("label",{htmlFor:"pincode",children:"Pin Code"}),(0,i.jsx)("input",{id:"pincode",type:"number",required:!0,placeholder:"123456"}),(0,i.jsx)("label",{htmlFor:"mobileno",children:"mobile"}),(0,i.jsx)("input",{id:"mobileno",type:"number",required:!0,placeholder:"1234567890"}),(0,i.jsx)("label",{htmlFor:"address",children:"address"}),(0,i.jsx)("textarea",{col:5,id:"address",type:"text",required:!0,placeholder:"New Delivery Address Here"}),(0,i.jsx)("button",{type:"submit",className:"btn-add-address",children:"Add Address"}),(0,i.jsx)("button",{type:"button",className:"btn-cancel-address",onClick:function(){return a(!0)},children:"Cancel"})]})}),(0,i.jsxs)("div",{className:"checkout-container",children:[(0,i.jsx)("div",{className:"address-card",children:(0,i.jsx)(l,{hideAddressHandler:a})}),(0,i.jsx)("div",{className:"price-card",children:(0,i.jsx)(c.j,{})})]})]})}},683:function(e,r,s){s.d(r,{j:function(){return o}});var n=s(2791),d=s(4648),t=s(7689),a=s(5206),i=s(1224),l=s(4261),c=s(184),o=function(){var e=(0,n.useContext)(d.A),r=e.getTotalPrice,s=e.getTotalDiscount,o=e.cart,u=e.clearCart,h=e.removeMultipleFromCart,p=(0,n.useContext)(i.V),m=p.address,x=p.orderHistoryHandler,j=(0,t.TH)(),f=(0,t.s0)(),v=function(e){var s=new Date,n=m.find((function(e){return e.active}));x(e.razorpay_payment_id,r()+249,s.toString(),n,o),b("Payment Successfull!!"),h(o),u(),f("/profile")},y=function(e){return a.Am.error(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"colored"})},b=function(e){return a.Am.success(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"colored"})},g=function(e){if(0!==m.length&&m.find((function(e){return e.active}))){if(0!==o.length)return r=v,void setTimeout((function(){r({razorpay_payment_id:"fake_payment_id"})}),1e3);y("No items added")}else y("Please select an address to place order");var r};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"Order details"}),(0,c.jsx)("hr",{}),(0,c.jsx)("section",{children:(0,c.jsxs)("ul",{className:"price-detail-list",children:[0===o.length?(0,c.jsx)("p",{children:"No Product Added"}):(0,c.jsx)("ul",{className:"price-detail-list",children:o.map((function(e){var r=e.title,s=e.price,n=e.qty;e.id;return(0,c.jsxs)("li",{children:[(0,c.jsxs)("span",{children:[r,"(x",n,")"]}),(0,c.jsx)("span",{className:"price",children:s*n})]},(0,l.Z)())}))}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Discount"}),(0,c.jsxs)("span",{children:["-",(0,c.jsx)("span",{className:"price",children:s()})]})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Delivery Charges"}),(0,c.jsx)("span",{className:"price",children:0===r()?"0":"249"})]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("li",{className:"total-price",children:[(0,c.jsx)("span",{children:"Total amount"}),(0,c.jsx)("span",{className:"price",children:0===r()?"0":r()+249})]})]})}),(0,c.jsx)("hr",{}),(0,c.jsxs)("p",{className:"saving-info",children:["You will save ",s()," on this order"]}),(0,c.jsx)("button",{style:{display:"/checkout"===(null===j||void 0===j?void 0:j.pathname)?"":"none"},className:"btn-place-order",onClick:function(){return g(r())},children:"Place Order"}),(0,c.jsx)("button",{style:{display:"/cart"===(null===j||void 0===j?void 0:j.pathname)?"":"none"},className:"btn-place-order",onClick:function(){return f("/checkout")},children:"Checkout"})]})}},4261:function(e,r,s){s.d(r,{Z:function(){return o}});var n,d={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},t=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(t)}for(var i=[],l=0;l<256;++l)i.push((l+256).toString(16).slice(1));function c(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(i[e[r+0]]+i[e[r+1]]+i[e[r+2]]+i[e[r+3]]+"-"+i[e[r+4]]+i[e[r+5]]+"-"+i[e[r+6]]+i[e[r+7]]+"-"+i[e[r+8]]+i[e[r+9]]+"-"+i[e[r+10]]+i[e[r+11]]+i[e[r+12]]+i[e[r+13]]+i[e[r+14]]+i[e[r+15]]).toLowerCase()}var o=function(e,r,s){if(d.randomUUID&&!r&&!e)return d.randomUUID();var n=(e=e||{}).random||(e.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){s=s||0;for(var t=0;t<16;++t)r[s+t]=n[t];return r}return c(n)}}}]);
//# sourceMappingURL=520.221496c5.chunk.js.map