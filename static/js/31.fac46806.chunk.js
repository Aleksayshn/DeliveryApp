"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[31],{1031:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var r=e(2791),i=e(7715),o=e(4648),a=e(4261),s=e(184),c=function(){var t=(0,r.useContext)(o.A).wishlist;return(0,s.jsxs)("div",{className:"wishlist-container",children:[(0,s.jsx)("h2",{className:"wishlist-heading",children:"Your Wishlist"}),0===t.length?(0,s.jsx)("p",{className:"empty-wishlist",children:"You don't have any product inside your wishlist"}):(0,s.jsx)("ul",{className:"wishlist-product-listing",children:t.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(i.I,{product:t})},(0,a.Z)())}))})]})}},7715:function(t,n,e){e.d(n,{I:function(){return d}});var r=e(2791),i=e(8820),o=e(9126),a=e(4648),s=e(1224),c=e(5206),l=e(7689),u=e(184),d=function(t){var n=t.product,e=(0,r.useRef)(),d=(0,r.useRef)(),p=(0,r.useContext)(a.A),h=p.addToCart,m=p.isProductInCart,f=p.isProductInWihlist,y=p.toggleWishlist,g=(0,r.useContext)(s.V).checkLogin,v=(0,l.TH)(),b=(0,l.s0)(),x=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Added",r="to";return"Removed"===e&&(r="from"),c.Am.success("".concat(e," 1 ").concat(t.title," ").concat(r," ").concat(n),{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!1,draggable:!1,progress:void 0,theme:"colored"})},j=function(t,n){g()?(h(t),f(t._id)&&y(t),x(t,n)):b("/login",{state:v})},C=function(t,n){g()?(y(t),f(t._id)?x(t,n,"Removed"):x(t,n)):b("/login",{state:v})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{className:"product-image",src:n.image,onClick:function(){return b("/products/".concat(n._id))},alt:"pro banner",loading:"lazy"}),(0,u.jsx)("button",{onClick:function(){return function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];clearTimeout(e.current),e.current=setTimeout((function(){t.apply(void 0,i)}),n)}(C,600,n,"wishlist")},className:"btn-wishlist",children:(0,u.jsx)(i.Xlf,{style:{color:f(n._id)&&g()?"red":""},className:"btn-wishlist-icon"})}),(0,u.jsxs)("span",{className:"product-rating",children:[n.rating,"/5"]}),(0,u.jsx)("span",{className:"product-country",style:{display:""!==n.category?"":"none"},children:n.category}),(0,u.jsxs)("section",{className:"product-detail",children:[(0,u.jsx)("span",{className:"product-name",children:n.title}),(0,u.jsxs)("span",{className:"product-price",children:[n.discounted_price,(0,u.jsx)("span",{className:"actual-price",children:n.price})]}),(0,u.jsx)("span",{style:{color:n.availability?"green":"red",fontWeight:"800"},children:n.availability?"Use Promo Code":"Unavailable"}),(0,u.jsxs)("button",{onClick:function(){return function(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];clearTimeout(d.current),d.current=setTimeout((function(){t.apply(void 0,r)}),n)}(j,600,n,"cart")},style:{display:m(n._id)&&g()?"none":"",backgroundImage:!n.availability&&"none",backgroundColor:!n.availability&&"#666",cursor:!n.availability&&"default"},className:"btn-cart",disabled:!n.availability,children:[(0,u.jsx)(o.aDs,{}),"Add to Cart"]}),(0,u.jsx)("button",{className:"btn-cart",onClick:function(){return b("/cart")},style:{display:m(n._id)&&g()?"":"none"},children:"Go to Cart"})]})]})}},4261:function(t,n,e){e.d(n,{Z:function(){return u}});var r,i={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).slice(1));function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(s[t[n+0]]+s[t[n+1]]+s[t[n+2]]+s[t[n+3]]+"-"+s[t[n+4]]+s[t[n+5]]+"-"+s[t[n+6]]+s[t[n+7]]+"-"+s[t[n+8]]+s[t[n+9]]+"-"+s[t[n+10]]+s[t[n+11]]+s[t[n+12]]+s[t[n+13]]+s[t[n+14]]+s[t[n+15]]).toLowerCase()}var u=function(t,n,e){if(i.randomUUID&&!n&&!t)return i.randomUUID();var r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){e=e||0;for(var o=0;o<16;++o)n[e+o]=r[o];return n}return l(r)}}}]);
//# sourceMappingURL=31.fac46806.chunk.js.map