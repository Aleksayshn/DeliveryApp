"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[546],{2546:function(i,t,e){e.r(t),e.d(t,{default:function(){return u}});var n=e(7689),s=e(2791),c=e(9126),a=e(1858),r=e(4648),o=e(5206),l=e(1224),d=e(184),u=function(){var i=(0,n.UO)().productId,t=(0,s.useContext)(a.H).getProductDetail,e=(0,s.useContext)(r.A),u=e.addToCart,p=e.toggleWishlist,m=e.isProductInCart,h=e.isProductInWihlist,v=(0,s.useContext)(l.V).checkLogin,g=(0,n.s0)(),b=t(i),x=b._id,y=b.image,j=b.title,C=b.description,N=b.price,f=b.discounted_price,k=b.rating,_=b.country,A=b.delivery_time,I=b.availability,w=(0,n.TH)(),D=function(i,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Added",n="to";return"Removed"===e&&(n="from"),o.Am.success("".concat(e," 1 ").concat(i.description," ").concat(n," ").concat(t),{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"colored"})};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"product-in-container",children:[(0,d.jsx)("img",{src:y,className:"product-in-image",alt:C}),(0,d.jsxs)("div",{className:"product-in-detail",children:[(0,d.jsx)("h2",{className:"product-in-title",children:j}),(0,d.jsx)("p",{className:"product-in-description",children:C}),(0,d.jsxs)("p",{className:"product-in-time",children:["Delivery time: ",A," Days"]}),(0,d.jsxs)("span",{className:"product-in-price",children:[f,(0,d.jsx)("span",{className:"product-in-discounted-price",children:N})]}),(0,d.jsxs)("span",{className:"product-in-rating",children:[k,"/5"]}),(0,d.jsx)("span",{className:"product-in-country",children:_}),(0,d.jsx)("span",{className:"product-in-availability",style:{color:!I&&"red"},children:I?"In-store":"Not Available"}),(0,d.jsxs)("button",{onClick:function(){return function(i,t){v()?(u(i),h(i._id)&&p(i),D(i,t)):g("/login",{state:w})}(b,"cart")},style:{display:m(b._id)&&v()?"none":"",backgroundImage:!b.availability&&"none",backgroundColor:!b.availability&&"#666"},className:"product-in-btn-cart",disabled:!b.availability,children:[(0,d.jsx)(c.aDs,{}),"Add to Cart"]}),(0,d.jsx)("button",{className:"product-in-btn-cart",onClick:function(){return g("/cart")},style:{display:v()&&m(b._id)?"":"none"},children:"Go to Cart"}),(0,d.jsx)("button",{onClick:function(){return function(i,t){v()?(p(i),h(i._id)?D(i,t,"Removed"):D(i,t)):g("/login",{state:w})}(b,"wishlist")},className:"product-in-btn-wishlist",children:v()&&h(b._id)?"Remove From Wishlist":"Move to Wishlist"})]})]},x)})}}}]);
//# sourceMappingURL=546.88299d9e.chunk.js.map