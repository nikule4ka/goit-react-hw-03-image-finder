(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},25:function(e,t,a){e.exports={Loader:"Loader_Loader__17sQZ"}},26:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},31:function(e,t,a){},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),s=(a(31),a(13)),l=a(4),i=a(5),u=a(7),h=a(6),m=(a(32),a(22)),g=a.n(m);function d(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.perPage,c=void 0===o?12:o;return g.a.get("".concat("https://pixabay.com/api/?","q=").concat(a,"&page=").concat(r,"&key=").concat("19649885-84cc8a7bfeabe0e9969e6732","d&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))}var b=a(8),j=a.n(b),p=a(0),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:j.a.Searchbar,children:Object(p.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(p.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),f=a(23),O=a.n(f),v=a(11),_=a.n(v);var S=function(e){var t=e.id,a=e.src,n=e.alt,r=e.largeImageURL,o=e.onClick;return Object(p.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:a,alt:n,className:_.a.ImageGalleryItemImage,onClick:o,"data-source":r})},t)};var I=function(e){var t=e.images,a=e.onClick;return Object(p.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(p.jsx)(S,{id:t,src:n,alt:r,onClick:function(){a(o)}})}))})},x=a(24),w=a.n(x),k=a(25),C=a.n(k),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(w.a,{type:"Bars",color:"#3f51b5",height:80,width:80,className:C.a.Loader})}}]),a}(r.a.Component),L=a(26),B=a.n(L),N=function(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",onClick:t,className:B.a.Button,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})},F=a(12),G=a.n(F),P=document.querySelector("#modal-root"),Q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:G.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:G.a.Modal,children:Object(p.jsx)("img",{src:"{this.props.url}",alt:""})})}),P)}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,largeImage:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.getImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),d(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}})),1!==a&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.showImageModal=function(t){console.log(t),e.setState({largeImage:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.showModal,o=e.largeImage,c=t.length>0&&!a;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(y,{onSubmit:this.onChangeQuery}),n&&Object(p.jsx)("h3",{className:"Error__title",children:"Oops, something wrong. Please, try again"}),Object(p.jsx)(I,{images:t,onClick:this.showImageModal}),a&&Object(p.jsx)(M,{}),c&&Object(p.jsx)(N,{onClick:this.getImages}),r&&Object(p.jsx)(Q,{onClose:this.toggleModal,url:o})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[72,1,2]]]);
//# sourceMappingURL=main.54bea267.chunk.js.map