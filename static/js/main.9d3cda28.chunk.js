(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),c=a(13),s=a(7),l=a(8),m=a(10),u=a(9),p=a(11),v=a(19),d=(a(49),function(e){var t=e.id,a=e.title,n=e.onRemove;return o.a.createElement("div",{className:"col-6 col-md-4 col-lg-3"},o.a.createElement("div",{className:"movies-item  "},o.a.createElement("img",{src:"http://gravatar.com/avatar/".concat(t,"?s=300&d=identicon"),alt:"",className:"movies-item__img"}),o.a.createElement("p",{className:"movies-item__title"},a),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{className:"movies-item__remove btn btn-danger",onClick:function(){n(t)}},"remove"),o.a.createElement(v.b,{className:"btn btn-info",to:"".concat(t)},"info"))))}),f=function(e){var t=e.movies,a=e.onRemove;return o.a.createElement("div",{className:"row"},t.map(function(e){return o.a.createElement(d,{key:e.id,id:e.id,title:e.Title,onRemove:function(e){a(e)}})}))},h=a(15),b=a(33),E=a.n(b);a(57),a(76),a(59);E.a.initializeApp({apiKey:"AIzaSyAaVShtXKH8jFPbKlsQsV__JCrONhLuJjU",authDomain:"movies-56bdf.firebaseapp.com",databaseURL:"https://movies-56bdf.firebaseio.com",projectId:"movies-56bdf",storageBucket:"",messagingSenderId:"870648658967",appId:"1:870648658967:web:39a0a0bbf70526d1"});var _=E.a,g=function(e){return{type:"ADD_MOVIE",payload:e}},y=a(41),N=a(21),S=a.n(N),O=function(e){return e.map(function(e){return function(e){var t={};return e.forEach(function(e){var a=Object(y.a)(e),n=a[0],o=a.slice(1);t[n]="".concat(o)}),t.id=S()(t.Title),t}(e.map(function(e){return e.split(": ")}))})},C=function(e){var t=function(e){for(var t=e.split(/\r?\n/),a=0,n=[],o=0;o<t.length;o++)if(""==t[o]&&a!==o){var r=t.slice(a,o);4===r.length&&n.push(r),a=o+1}return n}(e);return O(t)},w=(a(65),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleFileRead=function(e){var t=e.result,n=C(t);a.setMoviesToDatabase(n)},a.handleFileChosen=function(e){var t=new FileReader;t.onloadend=function(){a.handleFileRead(t)},t.readAsText(e)},a.prepareDataForDb=function(e){var t={};return e.forEach(function(e){t[e.id]=e}),t},a.setMoviesToDatabase=function(e){var t=a.prepareDataForDb(e),n=a.props,o=n.addMoviesToStore,r=n.moviesInStore;_.database().ref("/movies").update(t).then(function(){o([].concat(Object(c.a)(r),Object(c.a)(e)))})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("label",{className:"btn btn-success upload"},o.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".txt",onChange:function(t){return e.handleFileChosen(t.target.files[0])}}),"Upload")}}]),t}(n.Component)),j=Object(h.b)(function(e){return{moviesInStore:e.movies}},function(e){return{addMoviesToStore:function(t){e(g(t))}}})(w),T=(a(66),function(e){var t=e.onSearch;return o.a.createElement("input",{type:"text",placeholder:"Type movie title or actor's name to search",className:"search form-control",onChange:function(e){t(e.target.value)}})}),I=a(34),F=a.n(I),M=a(42),D=a(17),R=(a(68),a(43)),k=(a(69),function(e){var t=e.items,a=e.changeActive,r=e.activeItem,i=Object(n.useState)(!1),c=Object(R.a)(i,2),s=c[0],l=c[1];return o.a.createElement("div",{className:"dropdown"},o.a.createElement("div",{className:"dropdown__header form-control",onClick:function(){return l(!s)}},r),o.a.createElement("ul",{className:"dropdown__list dropdown-menu ".concat(s?"active":null),onClick:function(e){!function(e){for(var t=e.target;"UL"!==e.target;){if("LI"==t.tagName)return a(t.innerText),void l(!s);t=t.parentNode}}(e)}},t.map(function(e){return o.a.createElement("li",{key:e,className:"dropdown__item dropdown-item ".concat(e===r?"active":null)},e)})))}),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).dropdownItems=["VHS","DVD","Blue-Ray"],a.state={Title:"","Release Year":"",Format:a.dropdownItems[0],Stars:"",id:"",validationError:""},a.typeMovieInput=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onYearChange=function(e){var t=e.target.value,n=isNaN(parseInt(t))?"":parseInt(t);t.length<5&&a.setState(Object(D.a)({},"Release Year",n))},a.isMovieExists=function(e,t){return-1!=t.findIndex(function(t){return t.id===e})},a.validateMovieInputs=function(){var e=a.state,t=e.Title,n=e.Format,o=e.Stars,r=e.id,i=a.props.moviesInStore,c=o.split(", ").every(function(e){return 2===e.split(" ").length}),s=a.state["Release Year"];t&&s&&n&&o?a.isMovieExists(r,i)?a.setState({validationError:"Movie is already exists"}):s>2019||s<1901?a.setState(Object(D.a)({validationError:"Release year must be in between 1901 and 2019 yy."},"Release Year","")):c||a.setState({validationError:"All stars must have a name and surname.\nEvery stars must be divided by comma and whitespace"}):a.setState({validationError:"Fill in all fields"})},a.setMovieToDb=function(){var e=a.props,t=e.moviesInStore,n=e.toggleSuccessPopup;_.database().ref("/movies/".concat(S()(a.state.Title))).update(a.state).then(function(){a.props.addMoviesToStore([].concat(Object(c.a)(t),[a.state])),a.setState({Title:"","Release Year":"",Format:"",Stars:"",id:"",validationError:""}),n(!0),setTimeout(function(){n(!1)},2e3)})},a.formatChange=function(e){a.setState({Format:e})},a.onCreateMovie=function(){var e=Object(M.a)(F.a.mark(function e(t){var n;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({id:S()(a.state.Title),validationError:""});case 3:a.validateMovieInputs(),(n=a.state.validationError)?alert(n):(a.setMovieToDb(),a.props.hideCreateForm());case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Title,a=e.Format,r=e.Stars,i=(e.id,this.state["Release Year"]),c=this.props,s=c.formVisibility,l=c.showCreateForm,m=c.hideCreateForm;return o.a.createElement(n.Fragment,null,o.a.createElement("button",{className:"btn btn-warning",onClick:l},"Add movie"),o.a.createElement("div",{className:"movie-form__wrapper ".concat(s?"active":null)},o.a.createElement("form",{className:"movie-form",onSubmit:this.onCreateMovie},o.a.createElement("button",{type:"button",className:"btn btn-danger movie-form__close",onClick:m},"X"),o.a.createElement("p",{className:"movie-form__title"},"Add new movie"),o.a.createElement("label",{htmlFor:"",className:"movie-form__label"},o.a.createElement("span",{className:"movie-form__tip"},"Title"),o.a.createElement("input",{onChange:this.typeMovieInput,type:"text",name:"Title",value:t,className:"movie-form__input form-control"})),o.a.createElement("label",{htmlFor:"",className:"movie-form__label"},o.a.createElement("span",{className:"movie-form__tip"},"Release year"),o.a.createElement("input",{onChange:this.onYearChange,type:"text",name:"Release Year",value:i,className:"movie-form__input form-control"})),o.a.createElement("label",{htmlFor:"",className:"movie-form__label"},o.a.createElement("span",{className:"movie-form__tip"},"Format"),o.a.createElement(k,{items:this.dropdownItems,changeActive:this.formatChange,activeItem:a})),o.a.createElement("label",{htmlFor:"",className:"movie-form__label"},o.a.createElement("span",{className:"movie-form__tip"},"Stars"),o.a.createElement("input",{onChange:this.typeMovieInput,type:"text",name:"Stars",className:"movie-form__input form-control",value:r})),o.a.createElement("button",{className:"movie-form__submit btn btn-success",type:"submit"},"Add movie"))))}}]),t}(n.Component),A=(a(70),function(e){var t=e.onSortChanged;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"sort"},o.a.createElement("div",{className:"sort__label"}," Alphabet sort:"),o.a.createElement("input",{className:"switch__input",type:"checkbox",id:"switch",onChange:function(e){t(e.target.checked)}}),o.a.createElement("label",{className:"switch sort__switch",htmlFor:"switch"})))}),P=(a(71),function(e){var t=e.actionConfirm,a=e.closePopup;return o.a.createElement("div",{className:"popup__wrapper"},o.a.createElement("div",{className:"popup"},o.a.createElement("p",{className:"popup__title"},"Are you sure, yo want to delete this film?"),o.a.createElement("div",{className:"popup__buttons"},o.a.createElement("button",{onClick:function(){t()},className:"popup__confirm btn btn-success"},"Yes"),o.a.createElement("button",{onClick:function(){a()},className:"popup__cancel btn btn-danger "},"No"))))}),L=function(){return o.a.createElement("div",{className:"popup__wrapper"},o.a.createElement("div",{className:"popup"},o.a.createElement("p",{className:"popup__text"},"Item successfully added")))},x=(a(72),function(){return o.a.createElement("div",{className:"loading-indicator"},o.a.createElement("div",{className:"lds-css ng-scope"},o.a.createElement("div",{style:{width:"100%",height:"100%"},className:"lds-double-ring"},o.a.createElement("div",null),o.a.createElement("div",null))))}),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={searchQuery:"",sort:!1,formVisibility:!1,confirmationVisibility:!1},a.removeItemFromStore=function(e){var t=a.props.movies,n=t.findIndex(function(t){return t.id===e}),o=[].concat(Object(c.a)(t.slice(0,n)),Object(c.a)(t.slice(n+1)));a.props.addMoviesToStore(o)},a.removeClicked=function(e){a.props.setItemToRemove(e),a.setState({confirmationVisibility:!0})},a.removeItemFromDb=function(e){a.closeConfirmPopup(),a.props.setLoading(!0),_.database().ref("/movies/".concat(e)).remove().then(function(){a.removeItemFromStore(e),a.props.setLoading(!1)})},a.showCreateForm=function(){a.setState({formVisibility:!0})},a.hideCreateForm=function(){a.setState({formVisibility:!1})},a.onSearch=function(e){a.setState({searchQuery:e})},a.onSortChanged=function(e){a.setState({sort:e})},a.filterMovies=function(e,t){return t.filter(function(t){return t.Title.toLowerCase().includes(e.toLowerCase())||t.Stars.toLowerCase().includes(e.toLowerCase())})},a.sortByAlphabet=function(e){return Object(c.a)(e).sort(function(e,t){return e.Title.toLowerCase().localeCompare(t.Title.toLowerCase())})},a.closeConfirmPopup=function(){a.setState({confirmationVisibility:!1})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMoviesFromDb()}},{key:"getMoviesFromDb",value:function(){var e=this;_.database().ref("/movies/").once("value").then(function(t){if(t.val())return e.props.addMoviesToStore(Object.values(t.val()))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.movies,n=t.addMoviesToStore,r=t.successPopupVisibility,i=t.toggleSuccessPopup,c=t.itemToRemove,s=t.loading,l=this.state,m=l.searchQuery,u=l.sort,p=l.formVisibility,v=l.confirmationVisibility,d=u?this.sortByAlphabet(a):a,h=this.filterMovies(m,d),b=a.length?o.a.createElement(f,{onRemove:this.removeClicked,movies:h}):null;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header jumbotron"},o.a.createElement(T,{onSearch:this.onSearch}),o.a.createElement(j,null),o.a.createElement(V,{moviesInStore:this.props.movies,addMoviesToStore:n,showCreateForm:this.showCreateForm,formVisibility:p,hideCreateForm:this.hideCreateForm,toggleSuccessPopup:i}),o.a.createElement(A,{onSortChanged:this.onSortChanged})),b,r?o.a.createElement(L,null):null,v?o.a.createElement(P,{actionConfirm:function(){e.removeItemFromDb(c)},closePopup:this.closeConfirmPopup}):null,s?o.a.createElement(x,null):null)}}]),t}(n.Component),U=Object(h.b)(function(e){return{movies:e.movies,successPopupVisibility:e.successPopupVisibility,itemToRemove:e.itemToRemove,loading:e.loading}},function(e){return{addMoviesToStore:function(t){e(g(t))},toggleSuccessPopup:function(t){e({type:"TOGGLE_SUCCESS_POPUP",payload:t})},setItemToRemove:function(t){e(function(e){return{type:"SET_ITEM_TO_REMOVE",payload:e}}(t))},setLoading:function(t){e(function(e){return{type:"SET_LOADING",payload:e}}(t))}}})(Y),G=(a(73),function(e){var t=e.actors.split(", ");return o.a.createElement("div",{className:"movie-info__actors"},t.map(function(e){return o.a.createElement("div",{className:"movie-info__actor"},o.a.createElement("img",{src:"https://robohash.org/".concat(e),alt:"",className:"movie-info__avatar"}),o.a.createElement("p",{className:"movie-info__name"},e))}))}),X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movie:{}},a.getMovieFromDb=function(e){_.database().ref("/movies/".concat(e)).once("value").then(function(e){a.setState({movie:e.val()})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.itemId),this.getMovieFromDb(this.props.movieId)}},{key:"render",value:function(){var e=this.state.movie,t=e.Title,a=e.Stars,n=e.id,r=e.Format,i=this.state.movie["Release Year"],c=a?o.a.createElement(G,{actors:a}):null;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-5 jumbotron"},o.a.createElement("img",{src:"http://gravatar.com/avatar/".concat(n,"?s=500&d=identicon"),alt:"",className:"img-responsive"})),o.a.createElement("div",{className:"col-12 col-md-7"},o.a.createElement("div",{className:"movie-info"},o.a.createElement("p",{className:"movie-info__title"},t),o.a.createElement("p",{className:"movie-info__item"},"Release Year: ",i),o.a.createElement("p",{className:"movie-info__item"},"Format: ",r),o.a.createElement("p",{className:"movie-info__item"},"Stars: ",c)))))}}]),t}(n.Component),B=a(14),J=(a(74),function(){return o.a.createElement(n.Fragment,null,o.a.createElement(B.a,{path:"/",exact:!0,component:U}),o.a.createElement(B.a,{path:"/:id",render:function(e){var t=e.match;return o.a.createElement(X,{movieId:t.params.id})}}))}),Q=function(){return o.a.createElement("div",{className:"error-indicator"},"Error!!!!!")},K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(Q,null):this.props.children}}]),t}(n.Component),z=a(26),H=a(22),q={movies:[],successPopupVisibility:!1,itemToRemove:null,loading:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE":return Object(H.a)({},e,{movies:t.payload});case"TOGGLE_SUCCESS_POPUP":return Object(H.a)({},e,{successPopupVisibility:t.payload});case"SET_ITEM_TO_REMOVE":return Object(H.a)({},e,{itemToRemove:t.payload});case"SET_LOADING":return Object(H.a)({},e,{loading:t.payload});default:return e}},Z=Object(z.b)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(h.a,{store:Z},o.a.createElement(K,null,o.a.createElement(v.a,null,o.a.createElement(J,null)))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9d3cda28.chunk.js.map