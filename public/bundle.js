/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/mock */ "./src/mock/mock.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _view_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/profile */ "./src/view/profile.js");
/* harmony import */ var _view_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/navigation */ "./src/view/navigation.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_films__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/films */ "./src/view/films.js");
/* harmony import */ var _view_film_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/film-list */ "./src/view/film-list.js");
/* harmony import */ var _view_top_rated_film_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/top-rated-film-list */ "./src/view/top-rated-film-list.js");
/* harmony import */ var _view_most_comment_film_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/most_comment_film_list */ "./src/view/most_comment_film_list.js");
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/film-card */ "./src/view/film-card.js");











const MAX_COMMENT_QUANTITY = 5;
const MAX_MOCK_QUANTITY = 20;
const FILMS_QUANTITY_PER_STEP = 5;
const commentsData = Object(_mock_mock__WEBPACK_IMPORTED_MODULE_0__["createComments"])(MAX_COMMENT_QUANTITY);
const mockData = Object(_mock_mock__WEBPACK_IMPORTED_MODULE_0__["createMocksData"])(MAX_MOCK_QUANTITY, commentsData);

const topRatedFilms = mockData.slice().sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating);
const mostCommentedFilms = mockData.slice().sort((prev, next) => next.comments.length - prev.comments.length);

const navigationInfo = {
  'watchlist': mockData.filter(({userDetails: {watchlist}}) => watchlist).length,
  'history': mockData.filter(({userDetails: {alreadyWatched:watched}}) => watched).length,
  'favorites': mockData.filter(({userDetails: {favorite}}) => favorite).length,
};


const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const statisticsContainer = document.querySelector('.footer__statistics');

/*
const renderMainFilms = (films) => {


  };

   */

Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(headerContainer, new _view_profile__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_utils__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(mainContainer, new _view_navigation__WEBPACK_IMPORTED_MODULE_3__["default"](navigationInfo).getElement(), _utils_utils__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(mainContainer, new _view_sort__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils_utils__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(mainContainer, new _view_films__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _utils_utils__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

const filmsContainer = document.querySelector('.films');

Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(filmsContainer, new _view_film_list__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils_utils__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(filmsContainer, new _view_top_rated_film_list__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement(), _utils_utils__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
/* render(filmsContainer, new MostCommentedListView().getElement(), RenderPosition.BEFOREEND); */

/* const filmListContainer =  filmsContainer.querySelector('.films-list:first-child .films-list__container');


for ( let i = 0; i < FILMS_QUANTITY_PER_STEP; i++) {
  render(filmListContainer, new FilmCardView(mockData[i]).getElement(), RenderPosition.AFTERBEGIN);
} */
/*
render(mainContainer, createSortElement(),'beforeend');
render(mainContainer, createFilmsElement(mockData, topRatedFilms, mostCommentedFilms),'beforeend');
render(statisticsContainer, createStatisticsElement(mockData), 'beforeend');

if(mockData.length > FILMS_QUANTITY_PER_STEP) {
  const filmsListContainer = document.querySelector('.films-list:first-child .films-list__container');
  const filmsMainContainer = document.querySelector('.films-list:first-child');
  let renderedFilmCount = FILMS_QUANTITY_PER_STEP;

  render(filmsMainContainer, createButtonShowMore(), 'beforeend');

  const buttonShowMore = document.querySelector('.films-list__show-more');

  buttonShowMore.addEventListener('click', (evt) => {
    evt.preventDefault();

    for (let i = renderedFilmCount; i < renderedFilmCount + FILMS_QUANTITY_PER_STEP; i++) {
      render(filmsListContainer, createFilmCardElement(mockData[i]), 'beforeend');
    }

    renderedFilmCount += FILMS_QUANTITY_PER_STEP;
    if (renderedFilmCount >= mockData.length) {
      buttonShowMore.remove();
    }
  });

} */


/***/ }),

/***/ "./src/mock/mock.js":
/*!**************************!*\
  !*** ./src/mock/mock.js ***!
  \**************************/
/*! exports provided: createComment, createMockData, createComments, createMocksData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMockData", function() { return createMockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComments", function() { return createComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMocksData", function() { return createMocksData; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");



const FILMS = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'The Man with the Golden Arm',
  'The Great Flamarion',
  'Santa Claus Conquers the Martians',
  'Made for Each Other',
];

const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const COMMENT_EMOTION = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

const NAMES = [
  'Ralph "Skid" Johnson',
  'Bonny Lee King (Carroll)',
  'John Brant',
  'Frankie Machine',
  'Frank Sinatra',
  'The Martians Momar',
  'Mom Martian',
  'King Martian',
  'Girl Martian',
  'Boy Martin',
  'Sindbad the Sailor',
  'John Mason',
  'James Stewart',
];

const COUNTRIES = [
  'Estonia',
  'Finland',
  'Ireland',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Costa Rica',
  'China',
  'Congo',
  'Egypt',
];

const GENRES = [
  'feature film',
  'short film',
  'action',
  'adventure',
  'comedy',
  'drama',
  'crime',
  'horror',
  'fantasy',
];

const AGE_RATING = [
  0,
  6,
  12,
  16,
  18,
];

const MAX_COMMENT_QUANTITY = 50;

const Rating = {
  MIN: 0,
  MAX: 10,
  PRECISION:1,
};

const Runtime = {
  MIN: 20,
  MAX: 200,
};

const Id = {
  MIN: 0,
  MAX: 100,
};

const createDescription = () => DESCRIPTION.slice(0, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(1, DESCRIPTION.length - 1)).join(' ');

const createComment = () => ({
  id: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, MAX_COMMENT_QUANTITY),
  author: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(NAMES),
  comment: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(DESCRIPTION),
  date: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["generateDateToComment"])(),
  emotion: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(COMMENT_EMOTION),
});


const createMockData = (comments) => {
  const commentsId = comments.map(({id}) => id);
  const wrinters = new Set;
  const actors = new Set;
  const genre = new Set;

  for (let i = 0; i < Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(1, NAMES.length - 1); i++) {
    actors.add(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(NAMES));
  }

  for (let i = 0; i < Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(1, NAMES.length - 1); i++) {
    wrinters.add(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(NAMES));
  }

  for (let i = 0; i < Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(1, GENRES.length - 1); i++) {
    genre.add(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(GENRES));
  }


  return {
    id: String(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(Id.MIN, Id.MAX)),
    comments: commentsId,
    filmInfo: {
      title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(FILMS),
      alternativeTitle: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(FILMS),
      totalRating: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomFloat"])(Rating.MIN, Rating.MAX, Rating.PRECISION),
      poster: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(POSTERS),
      ageRating: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(AGE_RATING),
      director: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(NAMES),
      wrinters: [...wrinters],
      actors: [...actors],
      release: {
        date: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["formateDate"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["generateDateRelease"])()),
        releaseCountry: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElementFromArray"])(COUNTRIES),
      },
      runtime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(Runtime.MIN, Runtime.MAX),
      genre: [...genre],
      description: createDescription(),
    },
    userDetails: {
      watchlist: Boolean(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])()),
      alreadyWatched: Boolean(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])()),
      watchngDate: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["formateDate"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["generateDate"])()),
      favorite: Boolean(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])()),
    },

  };
};

const createComments = (quantity) => {
  const comments = [];
  for (let i = 0; i < quantity; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createMocksData = (quantity, comments) => {
  const mocks =[];

  for (let i = 0; i < quantity; i++) {
    mocks.push(createMockData(comments));
  }
  return mocks;
};


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: RenderPosition, render, createElement, getRandomIntInclusive, getRandomFloat, getRandomElementFromArray, generateDateToComment, generateDateRelease, generateDate, formateDate, getTimeFromMins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntInclusive", function() { return getRandomIntInclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomFloat", function() { return getRandomFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElementFromArray", function() { return getRandomElementFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDateToComment", function() { return generateDateToComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDateRelease", function() { return generateDateRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDate", function() { return generateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formateDate", function() { return formateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFromMins", function() { return getTimeFromMins; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};


const render = (container, element, place) => {
  switch(place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');

  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getRandomIntInclusive = (min = 0, max = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomFloat = (start, end, precision) => (Math.random() * (end - start) + start).toFixed(precision);

const getRandomElementFromArray = (arr) => arr[getRandomIntInclusive(0, arr.length - 1)];

const generateDateToComment = () => {
  const maxDaysGap = 14;
  const daysGap = getRandomIntInclusive(-maxDaysGap, 0);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, 'd').toDate();
};

const generateDateRelease = () => {
  const maxYearsGap = 10;
  const maxMonthsGap = 12;
  const maxDaysGap = 30;

  const yearsGap = getRandomIntInclusive(-maxYearsGap, 0);
  const mountGap = getRandomIntInclusive(-maxMonthsGap, 0);
  const daysGap = getRandomIntInclusive(-maxDaysGap, 0);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(yearsGap, 'y').add(mountGap, 'M').add(daysGap, 'd').toDate();
};

const generateDate = () => {
  const maxDaysGap = 7;

  const daysGap = getRandomIntInclusive(-maxDaysGap, maxDaysGap);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, 'd').toDate();
};

const formateDate = (date, format = '') => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);

const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;

  if (hours === 0) {
    return `${minutes}m`;
  } else {
    return `${hours}H ${minutes}m`;
  }

};


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");


const ACTIVE_CLASS = 'film-card__controls-item--active';

const BLANK_FILM = {
  comments : '',
  filmInfo: {
    title: '',
    totalRating: {
      ratingFilm: 0,
    },
    poster: '',
    description: '',
    release: {
      date: '',
    },
    genre: [''],
    runtime: 20,
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: false,
    favorite: false,
  },
};

const createFilmCardElement = (film) => {
  const {
    filmInfo: {
      title,
      totalRating: ratingFilm,
      release: {
        date,
      },
      runtime,
      genre,
      poster,
      description,
    },
    comments,
    userDetails: {
      watchlist,
      alreadyWatched,
      favorite,
    },
  } = film;

  return (
    `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${ratingFilm}</p>
    <p class="film-card__info">
      <span class="film-card__year">${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["formateDate"])(date, 'YYYY')}</span>
      <span class="film-card__duration">${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getTimeFromMins"])(runtime)}</span>
      <span class="film-card__genre">${genre.join(', ')}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? ACTIVE_CLASS : ''}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatched ? ACTIVE_CLASS : ''}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${favorite ? ACTIVE_CLASS : ''}" type="button">Mark as favorite</button>
    </div>
  </article>`
  );};


class FilmCard {
  constructor (film = BLANK_FILM) {
    this._element = null,
    this._film = film;
  }

  getTemplate () {
    return createFilmCardElement(this._film);
  }

  getElement () {
    if (!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/film-list.js":
/*!*******************************!*\
  !*** ./src/view/film-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");




const createFilmListElement = () => (
  `
        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>  
          <div class="films-list__container">
            
          </div>
        </section>`
);

class FilmList {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createFilmListElement(this._mainFilms);
  }

  getElement () {
    if (!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Films; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");



const createFilmsElement = () => (
  `<section class="films">
        
      </section>`
);

class Films {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createFilmsElement();
  }

  getElement () {
    if(!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/most_comment_film_list.js":
/*!********************************************!*\
  !*** ./src/view/most_comment_film_list.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostCommentedList; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");


const createMostCommentsListFilms = () => (`<section class="films-list films-list--extra">
<h2 class="films-list__title">Most commented</h2>

<div class="films-list__container">
</div>
</section>`);

class MostCommentedList {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createMostCommentsListFilms();
  }

  getElement () {
    if (!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");


const createNavigationElement = (info) => {
  const {watchlist, history, favorites} = info;
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class Navigation {
  constructor (info) {
    this._element = null;
    this._info = info;
  }

  getTemplate () {
    return createNavigationElement(this._info);
  }

  getElement () {
    if (!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");


const createProfileElement = () => (
  `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

class Profile {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createProfileElement();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeTemplate() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");


const createSortElement = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);

class Sort {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createSortElement();
  }

  getElement () {
    if (!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/top-rated-film-list.js":
/*!*****************************************!*\
  !*** ./src/view/top-rated-film-list.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopRatedList; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");



const createTopRatedFilmList = () => `    <section class="films-list films-list--extra">
<h2 class="films-list__title">Top rated</h2>

<div class="films-list__container">
  
</div>
</section>`;

class TopRatedList {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createTopRatedFilmList(this._films);
  }

  getElement () {
    if(!this._element) {
      this._element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map