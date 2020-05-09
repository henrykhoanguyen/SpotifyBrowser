function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carouse-card/carouse-card.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carouse-card/carouse-card.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCarouseCardCarouseCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  *ngIf=\"artists\"\n  id=\"{{ carouselId }}\"\n  class=\"carousel slide carousel-fade\"\n  data-ride=\"carousel\"\n>\n<h3>My Top Artists</h3>\n  <div class=\"carousel-inner\">\n    <div\n      class=\"carousel-item\"\n      *ngFor=\"let artist of artists; let first = first\"\n      [ngClass]=\"{ active: first }\"\n    >\n      <a [href]=\"artist.artistProfile\" target=\"blank\">\n        <img\n          [src]=\"artist.artistImg\"\n          class=\"d-block w-100\"\n          [alt]=\"artist.name\"\n        />\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5 style='text-shadow: 2px 2px 5px black'>{{ artist.name }}</h5>\n        </div>\n      </a>\n    </div>\n  </div>\n  <a\n    class=\"carousel-control-prev\"\n    href=\"#{{ carouselId }}\"\n    role=\"button\"\n    data-slide=\"prev\"\n  >\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a\n    class=\"carousel-control-next\"\n    href=\"#{{ carouselId }}\"\n    role=\"button\"\n    data-slide=\"next\"\n  >\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fave-tracks-table/fave-tracks-table.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fave-tracks-table/fave-tracks-table.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFaveTracksTableFaveTracksTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table table-hover mt-3\">\n  <!-- <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead> -->\n\n  <!-- **** Wait for tracks to load **** -->\n  <tbody *ngIf=\"!savedTracks\">\n    <tr style=\"font-size: larger;\" class=\"text-white text-center\">\n      Loading . . .\n    </tr>\n  </tbody>\n  <!-- ********************************* -->\n\n  <tbody *ngFor=\"let track of savedTracks\">\n    <tr>\n      <td><img [src]=\"track.album.images[2].url\" /></td>\n      <td class=\"track-info\">\n        <h5>\n          <a [href]=\"track.trackURL\" target=\"blank\">{{ track.name }}</a>\n        </h5>\n        <!-- <span [innerHTML]='track.artists'></span> -->\n        <a\n          *ngFor=\"let artist of track.artists\"\n          [href]=\"artist.external_urls.spotify\"\n          target=\"blank\"\n        >\n          {{ artist.name }}\n        </a>\n        &bull;\n        <a [href]=\"track.album.external_urls.spotify\" target=\"blank\">{{ track.album.name }}</a>\n      </td>\n      <td>\n        <a href=\"\" >\n          <span class=\"material-icons\">\n            more_horiz\n          </span>\n        </a>\n      </td>\n      <td>\n        {{track.duration}}\n      </td>\n    </tr>\n  </tbody>\n  <tbody *ngIf=\"savedTracks && savedTracks.length !== 100\" class=\"text-center font-weight-bold text-white\">\n    Loading...\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav navItem\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"https://github.com/henrykhoanguyen/SpotifyBrowser\" target=\"blank\">Github <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/in/khoathanhanhnguyen/\" target=\"blank\">LinkedIn</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <!-- if not logged in, direct to landing page -->\n  <!-- if logged in, direct to main page -->\n  <a class=\"navbar-brand logo\" *ngIf=\"!isLoggedIn\" routerLink=\"\">SpotBrowser</a>\n  <a class=\"navbar-brand logo\" *ngIf=\"isLoggedIn\" routerLink=\"me\"\n    >SpotBrowser</a\n  >\n\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav navItem justify-content-end\">\n      <li class=\"nav-item\" *ngFor=\"let link of links\">\n        <a\n          class=\"nav-link\"\n          *ngIf=\"link.linkName === 'Login'\"\n          [href]=\"link.path\"\n          >{{ link.linkName }}</a\n        >\n        <a\n          class=\"nav-link\"\n          *ngIf=\"link.linkName !== 'Login'\"\n          [routerLink]=\"link.path\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          >{{ link.linkName }}</a\n        >\n      </li>\n      <form\n        class=\"form-inline my-2 my-lg-0 ml-2 mr-3 w-50 justify-content-end\"\n        *ngIf=\"isLoggedIn\"\n      >\n        <input\n          class=\"form-control w-100\"\n          type=\"text\"\n          placeholder=\"Search . . .\"\n          aria-label=\"Search\"\n          (keyup)=\"keyUp($event)\"\n        />\n        <!-- *ngIf=\"results\" -->\n        <div *ngIf=\"results\" style=\"display:contents\">\n          <table *ngIf=\"results.searchArtists && results.searchTracks && results.searchAlbums\" class=\"table\">\n            <tbody class=\"autocomplete-item\">\n              <tr>\n                <h5 style=\"margin: auto; margin-top:.5em; margin-bottom: .5em;\">Artists</h5>\n                <td *ngFor=\"let artist of results.searchArtists\">\n                  <a href=\"single/artists/{{artist.artistId}}\">{{artist.name}}</a>\n                </td>\n\n                <h5 style=\"margin: auto; margin-top:.5em; margin-bottom: .5em;\" >Tracks</h5>\n                <td *ngFor=\"let track of results.searchTracks\">\n                  <a href=\"single/tracks/{{track.trackId}}\">{{track.name}}</a>\n                </td>\n\n                <h5 style=\"margin: auto; margin-top:.5em; margin-bottom: .5em;\">Albums</h5>\n                <td *ngFor=\"let album of results.searchAlbums\">\n                  <a href=\"single/albums/{{album.albumId}}\">{{album.name}}</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </form>\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a\n          class=\"btn btn-outline-dark\"\n          routerLink=\"logout\"\n          (click)=\"logout()\"\n          type=\"button\"\n          >Logout</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playlist-cards/playlist-cards.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playlist-cards/playlist-cards.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlaylistCardsPlaylistCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!playlists\" style=\"color: white; font-size: larger;\">Loading . . .</div>\n<div *ngFor=\"let playlist of playlists\" style=\"margin-right: 1%;\" >\n  <div class=\"card\" style=\"width: 18rem;\">\n    <img [src]=\"playlist.playlistImg\" class=\"card-img-top\" alt=\"\" />\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ playlist.name }}</h5>\n      <p class=\"card-text\" *ngIf=\"playlist.description !== ''\">\n        {{ playlist.description }}\n      </p>\n      <p class=\"card-text\" *ngIf=\"playlist.description === ''\">\n        A nice playlist that you love.\n      </p>\n      <a [href]=\"playlist.playlistURL\" class=\"btn btn-outline-dark\" target=\"blank\"\n        >Visit Playlist</a\n      >\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy-policy/privacy-policy.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy-policy/privacy-policy.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"text-center\">Privacy Policy of SpotifyBrowser</h1>\n\n<p>\n  <a href=\"https://henrykhoanguyen.github.io\" class=\"text-light\">Khoa Nguyen</a>\n  operates the SpotifyBrowser website, which provides the SERVICE.\n</p>\n\n<p>\n  This page is used to inform website visitors regarding our policies with the\n  collection, use, and disclosure of Personal Information if anyone decided to\n  use our Service, the SpotifyBrowser website.\n</p>\n\n<p>\n  If you choose to use our Service, then you agree to the collection and use of\n  information in relation with this policy. The Personal Information that we\n  collect are used for providing and improving the Service. We will not use or\n  share your information with anyone except as described in this Privacy Policy.\n</p>\n\n<p>\n  The terms used in this Privacy Policy have the same meanings as in our Terms\n  and Conditions, which is accessible at SpotifyBrowser, unless otherwise\n  defined in this Privacy Policy. Our Privacy Policy was created with the help\n  of the\n  <a href=\"https://www.privacypolicytemplate.net\" class=\"text-light\"\n    >Privacy Policy Template</a\n  >\n  and the\n  <a class=\"text-light\" href=\"https://www.disclaimergenerator.org/\"\n    >Disclaimer Generator</a\n  >.\n</p>\n\n<h2>Information Collection and Use</h2>\n\n<p>\n  For a better experience while using our Service, we may require you to provide\n  us with certain personally identifiable information, including but not limited\n  to your name, phone number, and postal address. The information that we\n  collect will be used to contact or identify you.\n</p>\n\n<h2>Log Data</h2>\n\n<p>\n  We want to inform you that whenever you visit our Service, we collect\n  information that your browser sends to us that is called Log Data. This Log\n  Data may include information such as your computer’s Internet Protocol (\"IP\")\n  address, browser version, pages of our Service that you visit, the time and\n  date of your visit, the time spent on those pages, and other statistics.\n</p>\n\n<h2>Cookies</h2>\n\n<p>\n  Cookies are files with small amount of data that is commonly used an anonymous\n  unique identifier. These are sent to your browser from the website that you\n  visit and are stored on your computer’s hard drive.\n</p>\n\n<p>\n  Our website uses these \"cookies\" to collection information and to improve our\n  Service. You have the option to either accept or refuse these cookies, and\n  know when a cookie is being sent to your computer. If you choose to refuse our\n  cookies, you may not be able to use some portions of our Service.\n</p>\n\n<p>\n  For more general information on cookies, please read\n  <a class=\"text-light\" href=\"https://www.cookieconsent.com/what-are-cookies/\"\n    >\"What Are Cookies\"</a\n  >.\n</p>\n\n<h2>Service Providers</h2>\n\n<p>\n  We may employ third-party companies and individuals due to the following\n  reasons:\n</p>\n\n<ul>\n  <li>To facilitate our Service;</li>\n  <li>To provide the Service on our behalf;</li>\n  <li>To perform Service-related services; or</li>\n  <li>To assist us in analyzing how our Service is used.</li>\n</ul>\n\n<p>\n  We want to inform our Service users that these third parties have access to\n  your Personal Information. The reason is to perform the tasks assigned to them\n  on our behalf. However, they are obligated not to disclose or use the\n  information for any other purpose.\n</p>\n\n<h2>Security</h2>\n\n<p>\n  We value your trust in providing us your Personal Information, thus we are\n  striving to use commercially acceptable means of protecting it. But remember\n  that no method of transmission over the internet, or method of electronic\n  storage is 100% secure and reliable, and we cannot guarantee its absolute\n  security.\n</p>\n\n<h2>Links to Other Sites</h2>\n\n<p>\n  Our Service may contain links to other sites. If you click on a third-party\n  link, you will be directed to that site. Note that these external sites are\n  not operated by us. Therefore, we strongly advise you to review the Privacy\n  Policy of these websites. We have no control over, and assume no\n  responsibility for the content, privacy policies, or practices of any\n  third-party sites or services.\n</p>\n\n<p>Children's Privacy</p>\n\n<p>\n  Our Services do not address anyone under the age of 13. We do not knowingly\n  collect personal identifiable information from children under 13. In the case\n  we discover that a child under 13 has provided us with personal information,\n  we immediately delete this from our servers. If you are a parent or guardian\n  and you are aware that your child has provided us with personal information,\n  please contact us so that we will be able to do necessary actions.\n</p>\n\n<h2>Changes to This Privacy Policy</h2>\n\n<p>\n  We may update our Privacy Policy from time to time. Thus, we advise you to\n  review this page periodically for any changes. We will notify you of any\n  changes by posting the new Privacy Policy on this page. These changes are\n  effective immediately, after they are posted on this page.\n</p>\n\n<h2>Contact Us</h2>\n\n<p>\n  If you have any questions or suggestions about our Privacy Policy, do not\n  hesitate to contact us.\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-of-use/term-of-use.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-of-use/term-of-use.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTermOfUseTermOfUseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <h1 class=\"text-center\">Terms of Use of <span class=\"website_url\">SpotifyBrowser</span></h1>\n\n  <p>Welcome to the <span class=\"website_name\">SpotifyBrowser</span>  website (the \"Website\").</p>\n\n  <p><span class=\"website_name\">SpotifyBrowser</span> provides this Website and Services (located at <span class=\"website_url\">SpotifyBrowser</span>) to you subject to the notices, terms, and conditions set forth in these terms (the \"Terms of Use\"). In addition, when you use any of our Services, you will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they are incorporated into this Terms of Use by this reference. This Terms of Service was created by <a class=\"text-light\" href=\"https://www.termsusetemplate.com\">Terms of Use Template</a> and the <a href=\"https://www.disclaimersample.com\" class=\"text-light\">Disclaimer Sample</a>.</p>\n\n  <p>These Terms of Use are effective as of <span class=\"date font-weight-bold\">April 12, 2020</span>.</p>\n\n  <p>Your eligibility for use of the Website is contingent upon meeting the following conditions:</p>\n\n  <ul>\n  <li>You are at least 18 years of age</li>\n  <li>You use the Website and Services according to these Terms of Use and all applicable laws and regulations determined by the state and country of residence</li>\n  <li>You provide complete and accurate registration information and maintain accurate registration information on the Webite</li>\n  <li>You agree and understand that <span class=\"website_name\">SpotifyBrowser</span> may, at any time, and without prior notice, revoke and/or cancel your access if you fail to meet these criteria or violate any portion of these Terms of Use</li>\n  </ul>\n\n  <h3>Use of this Website</h3>\n\n  <p>In connection with your use of our Website, you must act responsibly and exercise good judgment. Without limiting the foregoing, you will not:</p>\n\n  <ul>\n  <li>Violate any local, state, provincial, national, or other law or regulation, or any order of a court</li>\n  <li>Infringe the rights of any person or entity, including without limitation, their intellectual property, privacy, publicity or contractual rights</li>\n  <li>Interfere with or damage our Services, including, without limitation, through the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial-of-service attacks, packet or IP spoofing, forged routing or electronic mail address information or similar methods or technology</li>\n  <li>Use automated scripts to collect information or otherwise interact with the Services or the Website</li>\n  <li>Enter into this agreement on behalf of another person or entity without consent or the legal capacity to make such agreements as a representative of an organization or entity</li>\n  </ul>\n\n  <h3>Intellectual Property</h3>\n\n  <p>All code, text, software, scripts, graphics, files, photos, images, logos, and materials contained on this Website, or within the Services, are the sole property of <span class=\"website_name\">SpotifyBrowser</span>.</p>\n\n  <p>Unauthorized use of any materials contained on this Website or within the Service may violate copyright laws, trademark laws, the laws of privacy and publicity, and/or other regulations and statutes. If you believe that any of the materials infringe on any third party's rights, please contact <span class=\"website_name\">SpotifyBrowser</span> immediately at the address provided below.</p>\n\n  <h3>Third Party Websites</h3>\n\n  <p>Our Website may link you to other sites on the Internet or otherwise include references to information, documents, software, materials and/or services provided by other parties. These websites may contain information or material that some people may find inappropriate or offensive.</p>\n\n  <p>These other websites and parties are not under our control, and you acknowledge that we are not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content of such sites, nor are we responsible for errors or omissions in any references to other parties or their products and services. The inclusion of such a link or reference is provided merely as a convenience and does not imply endorsement of, or association with, the Website or party by us, or any warranty of any kind, either express or implied.</p>\n\n  <h3>Disclaimer of Warranty and Limitation of Liability</h3>\n\n  <p>The Website is provided \"AS IS.\" appfigures, its suppliers, officers, directors, employees, and agents exclude and disclaim all representations and warranties, express or implied, related to this Website or in connection with the Services. You exclude <span class=\"website_name\">SpotifyBrowser</span> from all liability for damages related to or arising out of the use of this Website.</p>\n\n  <h3>Changes to these Terms of Use</h3>\n\n  <p><span class=\"website_name\">SpotifyBrowser</span> retains the right to, at any time, modify or discontinue, any or all parts of the Website without notice.</p>\n\n  <p>Additionally, <span class=\"website_name\">SpotifyBrowser</span> reserves the right, in its sole discretion, to modify these Terms of Use at any time, effective by posting new terms on the Website with the date of modification. You are responsible for reading and understanding the terms of this agreement prior to registering with, or using the Service. Your use of the Website and/or Services after any such modification has been published constitutes your acceptance of the new terms as modified in these Terms of Use.</p>\n\n  <h3>Governing Law</h3>\n\n  <p>These Terms of Use and any dispute or claim arising out of, or related to them, shall be governed by and construed in accordance with the internal laws of the <span class=\"country\">us</span> without giving effect to any choice or conflict of law provision or rule.</p>\n\n  <p>Any legal suit, action or proceeding arising out of, or related to, these Terms of Use or the Website shall be instituted exclusively in the federal courts of <span class=\"country\">us</span>.</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tracks-table/tracks-table.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tracks-table/tracks-table.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTracksTableTracksTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>My Top 10 Tracks</h3>\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Track Name</th>\n      <th scope=\"col\">Artist(s)</th>\n      <th scope=\"col\">Album</th>\n    </tr>\n  </thead>\n\n  <!-- **** Wait for tracks to load **** -->\n  <tbody *ngIf=\"!tracks\">\n    <tr style=\"color: white; font-size: larger;\">\n      Loading . . .\n    </tr>\n  </tbody>\n  <!-- ********************************* -->\n\n  <tbody *ngFor=\"let track of tracks; let i = index\">\n    <tr>\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>\n        <a [href]=\"track.trackURL\" target=\"blank\">\n          {{ track.name }}\n        </a>\n      </td>\n      <td>\n        <div *ngFor=\"let artist of track.artists\">\n          <a [href]=\"artist.external_urls.spotify\" target=\"blank\">{{\n            artist.name\n          }}</a>\n        </div>\n      </td>\n      <td>\n        <a [href]=\"track.album.external_urls.spotify\" target=\"blank\">{{\n          track.album.name\n        }}</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-page/about-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-page/about-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutPageAboutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"m-3 text-center\">\n    <a\n    type=\"button\"\n    class=\"btn btn-primary mr-3\"\n    [ngClass]=\"{ active: isPolicy }\"\n    (click)=\"isPolicy = true; isTerm = false\"\n    >Privacy Policy</a\n  >\n\n  <a\n    type=\"button\"\n    class=\"btn btn-primary\"\n    [ngClass]=\"{ active: isTerm }\"\n    (click)=\"isPolicy = false; isTerm = true\"\n    >Term of Use</a\n  >\n  </div>\n\n  <app-privacy-policy *ngIf=\"isPolicy\" class=\"text-dark\"></app-privacy-policy>\n  <app-term-of-use *ngIf=\"isTerm\" class=\"text-dark\"></app-term-of-use>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"home-main-section\">\n  <div class=\"image-wrapper\">\n    <img src=\"../assets/hand.png\" alt=\"diskHand\" id=\"handImg\">\n  </div>\n\n  <div class=\"call-to-action\">\n    <h1 class=\"title\">Feel The Music</h1>\n    <span class=\"subtitle\">Stream over 20 thousand new song with one click.</span>\n    <a type=\"button\" href=\"https://us-spotify-browser.herokuapp.com/login\" class=\"btn btn-primary\">Login</a>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"column\">\n\n    <div class=\"profile-box\">\n      <img [src]=\"userImg\" alt=\"an image of Khoa Nguyen\" class=\"profile-img\" />\n      <h3>{{ userName }}</h3>\n      <a\n        [href]=\"userProfile\"\n        type=\"button\"\n        class=\"btn btn-primary\"\n        target=\"blank\"\n        >Open profile on Spotify</a\n      >\n    </div>\n\n    <hr />\n\n    <div class=\"dashboard-box\">\n      <app-carouse-card\n        [artists]=\"myArtists\"\n        carouselId=\"list\"\n        class=\"artists-box\"\n      >\n      </app-carouse-card>\n\n      <div class=\"tracks-box\">\n        <app-tracks-table [tracks]=\"myTracks\"> </app-tracks-table>\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"playlists-box\">\n      <h3 style=\"color:black\">My Fave Playlists</h3>\n      <app-playlist-cards class=\"playlist-cards\" [playlists]=\"myPlaylists\" (scroll)=\"onPlaylistScroll($event)\">\n      </app-playlist-cards>\n    </div>\n\n    <hr />\n\n    <div class=\"saved-tracks-box\">\n      <h3 style=\"color:black\">My 100 Recent Fave Tracks</h3>\n      <app-fave-tracks-table class=\"tracks-list\" [savedTracks]=\"mySavedTracks\" (scroll)=\"onTracksListScroll($event)\"></app-fave-tracks-table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-page/single-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-page/single-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSinglePageSinglePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" *ngIf=\"data\">\n  <!-- Track's Display -->\n  <div *ngIf=\"data.type === 'track'\" class=\"track-display mb-3 mt-3\">\n    <img [src]=\"data.album.images[0].url\" [alt]=\"data.name\" class=\"w-25\"/>\n\n    <div class=\"track-detail\">\n      <h3>{{ data.name }}</h3>\n      <table class=\"mb-2\">\n        <tbody>\n          <tr>\n            <td style=\"padding-right: 5em;\">Duration:</td>\n            <td>{{ data.duration }} minutes</td>\n          </tr>\n          <tr>\n            <td>Artists:</td>\n            <td>\n              <div\n                [innerHTML] = 'artists'\n              >\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>Album:</td>\n            <td><a [href]=\"data.album.external_urls.spotify\">{{ data.album.name }}</a></td>\n          </tr>\n          <tr>\n            <td>Date:</td>\n            <td>{{ releaseDate }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div>\n        <a\n          [href]=\"data.trackURL\"\n          type=\"button\"\n          class=\"btn btn-primary mr-2\"\n          target=\"blank\"\n          >Visit Track</a\n        >\n        <a\n          [href]=\"data.album.external_urls.spotify\"\n          type=\"button\"\n          class=\"btn btn-primary mr-2\"\n          target=\"blank\"\n          >Visit Album</a\n        >\n      </div>\n    </div>\n  </div>\n\n  <!-- Album's Display -->\n  <div *ngIf=\"data.type === 'album'\" class=\"album-display mb-3 mt-3\">\n    <img [src]=\"data.albumImg\" [alt]=\"data.name\" class=\"w-25 h-25\"/>\n    <div class=\"album-detail\">\n      <h3>{{data.name}}</h3>\n      <p>\n        {{data.name}} was released on {{releaseDate}}. This album is a collaboration between\n        <span [innerHTML]='artists'></span>\n        with {{data.num_tracks}} tracks made available for listener. We hope you enjoy!\n      </p>\n\n      <table class=\"mb-2 table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Title</th>\n            <th>Duration</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let track of tracks; let i = index\">\n            <th>{{i + 1}}</th>\n            <th>\n              <a [href]=\"track.trackURL\" target=\"blank\"> {{track.name}}</a>\n              <div id=\"artists-title\" [innerHTML]=\"track.artists\"></div>\n            </th>\n            <th>{{track.duration}}</th>\n          </tr>\n        </tbody>\n      </table>\n\n      <div>\n        <a\n          [href]=\"data.albumURL\"\n          type=\"button\"\n          class=\"btn btn-primary mr-2\"\n          target=\"blank\"\n          >Visit Album</a\n        >\n      </div>\n    </div>\n  </div>\n\n  <!-- Artist's Display -->\n  <div *ngIf=\"data.type === 'artist'\" class=\"artist-display mb-3 mt-3\">\n    <img [src]=\"data.artistImg\" [alt]=\"data.name\" class=\"w-25 h-25\"/>\n    <div class=\"artist-detail\">\n      <h3>{{data.name}}</h3>\n      <p>\n        This week, {{data.name}} is currently rank {{data.popularity}} on Spotify's popularity chart. Past years, there are {{data.followers}} listeners tune in and follow {{data.name}}. We hope you find these information useful.\n      </p>\n      <div>\n        <a\n        [href]=\"data.artistProfile\"\n        type=\"button\"\n        class=\"btn btn-primary mr-2 mb-3\"\n        target=\"blank\"\n        >Visit Artist Profile</a\n      >\n      </div>\n\n      <h5>Artist's Top 10 Tracks</h5>\n      <table class=\"table\">\n        <tbody>\n          <tr *ngFor=\"let track of tracks; let i = index\">\n            <th>{{i + 1}}</th>\n            <th>\n              <a [href]=\"track.trackURL\" target=\"blank\"> {{track.name}}</a>\n              <div id=\"artists-title\" [innerHTML]=\"track.artists\"></div>\n            </th>\n            <th>{{track.duration}}</th>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");

    var routes = [// { path: 'me', component: MainPageComponent },
    {
      path: '',
      component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: 'home',
      redirectTo: '',
      pathMatch: 'full'
    } // { path: 'about', component: AboutPageComponent },
    // { path: 'single', component: SinglePageComponent }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\n  margin: auto;\n  padding-top: 10px;\n  height: 100%;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/spotify.service */
    "./src/app/services/spotify.service.ts");

    var AppComponent = function AppComponent(spotifyService) {
      _classCallCheck(this, AppComponent);

      this.spotifyService = spotifyService;
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/main-page/main-page.component */
    "./src/app/pages/main-page/main-page.component.ts");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _components_carouse_card_carouse_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/carouse-card/carouse-card.component */
    "./src/app/components/carouse-card/carouse-card.component.ts");
    /* harmony import */


    var _components_tracks_table_tracks_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/tracks-table/tracks-table.component */
    "./src/app/components/tracks-table/tracks-table.component.ts");
    /* harmony import */


    var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/about-page/about-page.component */
    "./src/app/pages/about-page/about-page.component.ts");
    /* harmony import */


    var _components_playlist_cards_playlist_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/playlist-cards/playlist-cards.component */
    "./src/app/components/playlist-cards/playlist-cards.component.ts");
    /* harmony import */


    var _components_fave_tracks_table_fave_tracks_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/fave-tracks-table/fave-tracks-table.component */
    "./src/app/components/fave-tracks-table/fave-tracks-table.component.ts");
    /* harmony import */


    var _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/single-page/single-page.component */
    "./src/app/pages/single-page/single-page.component.ts");
    /* harmony import */


    var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/privacy-policy/privacy-policy.component */
    "./src/app/components/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _components_term_of_use_term_of_use_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/term-of-use/term-of-use.component */
    "./src/app/components/term-of-use/term-of-use.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _components_carouse_card_carouse_card_component__WEBPACK_IMPORTED_MODULE_10__["CarouseCardComponent"], _components_tracks_table_tracks_table_component__WEBPACK_IMPORTED_MODULE_11__["TracksTableComponent"], _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_12__["AboutPageComponent"], _components_playlist_cards_playlist_cards_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistCardsComponent"], _components_fave_tracks_table_fave_tracks_table_component__WEBPACK_IMPORTED_MODULE_14__["FaveTracksTableComponent"], _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_15__["SinglePageComponent"], _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyComponent"], _components_term_of_use_term_of_use_component__WEBPACK_IMPORTED_MODULE_17__["TermOfUseComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      entryComponents: [_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_12__["AboutPageComponent"], _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_15__["SinglePageComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/carouse-card/carouse-card.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/carouse-card/carouse-card.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCarouseCardCarouseCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZS1jYXJkL2Nhcm91c2UtY2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/carouse-card/carouse-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/carouse-card/carouse-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CarouseCardComponent */

  /***/
  function srcAppComponentsCarouseCardCarouseCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouseCardComponent", function () {
      return CarouseCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CarouseCardComponent =
    /*#__PURE__*/
    function () {
      function CarouseCardComponent() {
        _classCallCheck(this, CarouseCardComponent);
      }

      _createClass(CarouseCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.artists);
        }
      }]);

      return CarouseCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouseCardComponent.prototype, "artists", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouseCardComponent.prototype, "carouselId", void 0);
    CarouseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carouse-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carouse-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carouse-card/carouse-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carouse-card.component.css */
      "./src/app/components/carouse-card/carouse-card.component.css")).default]
    })], CarouseCardComponent);
    /***/
  },

  /***/
  "./src/app/components/fave-tracks-table/fave-tracks-table.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/fave-tracks-table/fave-tracks-table.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFaveTracksTableFaveTracksTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "thead,\ntbody {\n  border-style: hidden;\n}\n\na:hover{\n  color: white;\n}\n\na {\n  color: black;\n}\n\n/* .table{\n  height: 600px;\n  display: -webkit-box;\n  overflow: auto;\n  overflow-x: auto;\n  flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  background-color: darkgray;\n} */\n\n.track-info {\n  width: 40em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZlLXRyYWNrcy10YWJsZS9mYXZlLXRyYWNrcy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhdmUtdHJhY2tzLXRhYmxlL2ZhdmUtdHJhY2tzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCxcbnRib2R5IHtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbmE6aG92ZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogLnRhYmxle1xuICBoZWlnaHQ6IDYwMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn0gKi9cblxuLnRyYWNrLWluZm8ge1xuICB3aWR0aDogNDBlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fave-tracks-table/fave-tracks-table.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/fave-tracks-table/fave-tracks-table.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FaveTracksTableComponent */

  /***/
  function srcAppComponentsFaveTracksTableFaveTracksTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaveTracksTableComponent", function () {
      return FaveTracksTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaveTracksTableComponent =
    /*#__PURE__*/
    function () {
      function FaveTracksTableComponent() {
        _classCallCheck(this, FaveTracksTableComponent);
      }

      _createClass(FaveTracksTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaveTracksTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FaveTracksTableComponent.prototype, "savedTracks", void 0);
    FaveTracksTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fave-tracks-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fave-tracks-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fave-tracks-table/fave-tracks-table.component.html")).default,
      // ViewEncapsulation.None helps provide css styling
      // to an injected and sanitized innerHTML.
      // Solution was found here: https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular-2-typescript
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fave-tracks-table.component.css */
      "./src/app/components/fave-tracks-table/fave-tracks-table.component.css")).default]
    })], FaveTracksTableComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navItem {\n  margin: auto;\n}\n\nnav {\n  -webkit-animation: display 3s ease-in forwards;\n          animation: display 3s ease-in forwards;\n}\n\n@-webkit-keyframes display {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes display {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2SXRlbSB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubmF2IHtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5IDNzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navItem {\n  margin: auto;\n  margin-right: 10%;\n}\n\n.logo{\n  margin-left: 5%;\n}\n\n.custom-select {\n  width: 35%;\n}\n\n/* .form-control {\n  width: 65%\n} */\n\n.autocomplete-item {\n  border-left: 3px solid white;\n  border-bottom: 2px solid white;\n  border-bottom-left-radius: 5%;\n  border-bottom-right-radius: 2%;\n  position: absolute;\n  height: 300px;\n  max-width: 300px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#948977));\n  background-image: linear-gradient(#fff, #948977);\n  overflow-y: scroll;\n  overflow-x: visible;\n  z-index: 99;\n}\n\n.autocomplete-item > tr {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.autocomplete-item > td {\n  color: black;\n}\n\ntd > a {\n  display: block;\n  width: 100%;\n  color: black;\n}\n\ntd:hover {\n  background-color: #e9e9e9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDBGQUFnRDtFQUFoRCxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZJdGVtIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmxvZ297XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICB3aWR0aDogMzUlO1xufVxuXG4vKiAuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDY1JVxufSAqL1xuXG4uYXV0b2NvbXBsZXRlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsICM5NDg5NzcpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uYXV0b2NvbXBsZXRlLWl0ZW0gPiB0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hdXRvY29tcGxldGUtaXRlbSA+IHRkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50ZCA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/main-page/main-page.component */
    "./src/app/pages/main-page/main-page.component.ts");
    /* harmony import */


    var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pages/about-page/about-page.component */
    "./src/app/pages/about-page/about-page.component.ts");
    /* harmony import */


    var _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pages/single-page/single-page.component */
    "./src/app/pages/single-page/single-page.component.ts");
    /* harmony import */


    var _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/nav-bar.service */
    "./src/app/services/nav-bar.service.ts");
    /* harmony import */


    var _services_spotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/spotify.service */
    "./src/app/services/spotify.service.ts");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(navbarService, router, spotifyService) {
        _classCallCheck(this, NavBarComponent);

        this.navbarService = navbarService;
        this.router = router;
        this.spotifyService = spotifyService;
        this.isLoggedIn = false;
        this.query = '';
        this.router.config.unshift( // Change pages dynamically
        {
          path: 'me',
          component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
        }, {
          path: 'about',
          component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]
        }, {
          path: 'single/:type/:id',
          component: _pages_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_5__["SinglePageComponent"]
        });
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.links = this.navbarService.getLinks();
          this.navbarService.getLogInStatus().subscribe(function (status) {
            return _this.isLoggedIn = status;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.navbarService.updateLoginStatus(false);
          this.router.navigate(['home']);
        }
      }, {
        key: "keyUp",
        value: function keyUp(event) {
          if (event.target.value.length > 0) {
            this.query = event.target.value; // Set delay on input from users

            this.search(this.query);
          } else {
            this.query = '';
            this.results = '';
          }
        }
      }, {
        key: "search",
        value: function search(query) {
          var _this2 = this;

          this.spotifyService.search(query).then(function (results) {
            // console.log(results);
            _this2.results = results;
          });
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_6__["NavBarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_7__["SpotifyService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/components/nav-bar/nav-bar.component.css")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/components/playlist-cards/playlist-cards.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/playlist-cards/playlist-cards.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPlaylistCardsPlaylistCardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n  height: 100%;\n  background-color: transparent;\n}\n\n.card-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  /* align-items: flex-start; */\n  color: black;\n}\n\n.card-text {\n  height: 100%;\n  overflow: auto;\n}\n\n.card-img-top {\n  height: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC1jYXJkcy9wbGF5bGlzdC1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3QtY2FyZHMvcGxheWxpc3QtY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDUwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/playlist-cards/playlist-cards.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/playlist-cards/playlist-cards.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PlaylistCardsComponent */

  /***/
  function srcAppComponentsPlaylistCardsPlaylistCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistCardsComponent", function () {
      return PlaylistCardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlaylistCardsComponent =
    /*#__PURE__*/
    function () {
      function PlaylistCardsComponent() {
        _classCallCheck(this, PlaylistCardsComponent);
      }

      _createClass(PlaylistCardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlaylistCardsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PlaylistCardsComponent.prototype, "playlists", void 0);
    PlaylistCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-playlist-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./playlist-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playlist-cards/playlist-cards.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./playlist-cards.component.css */
      "./src/app/components/playlist-cards/playlist-cards.component.css")).default]
    })], PlaylistCardsComponent);
    /***/
  },

  /***/
  "./src/app/components/privacy-policy/privacy-policy.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/privacy-policy/privacy-policy.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/privacy-policy/privacy-policy.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/privacy-policy/privacy-policy.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyPolicyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy-policy/privacy-policy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.component.css */
      "./src/app/components/privacy-policy/privacy-policy.component.css")).default]
    })], PrivacyPolicyComponent);
    /***/
  },

  /***/
  "./src/app/components/term-of-use/term-of-use.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/term-of-use/term-of-use.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTermOfUseTermOfUseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybS1vZi11c2UvdGVybS1vZi11c2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/term-of-use/term-of-use.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/term-of-use/term-of-use.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TermOfUseComponent */

  /***/
  function srcAppComponentsTermOfUseTermOfUseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermOfUseComponent", function () {
      return TermOfUseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermOfUseComponent =
    /*#__PURE__*/
    function () {
      function TermOfUseComponent() {
        _classCallCheck(this, TermOfUseComponent);
      }

      _createClass(TermOfUseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermOfUseComponent;
    }();

    TermOfUseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term-of-use',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./term-of-use.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-of-use/term-of-use.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./term-of-use.component.css */
      "./src/app/components/term-of-use/term-of-use.component.css")).default]
    })], TermOfUseComponent);
    /***/
  },

  /***/
  "./src/app/components/tracks-table/tracks-table.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/tracks-table/tracks-table.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTracksTableTracksTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a:hover{\n  color: white;\n}\n\na {\n  color: black;\n}\n\n.table {\n  border-width: none;\n}\n\nthead,\ntbody {\n  border-style: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFja3MtdGFibGUvdHJhY2tzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFja3MtdGFibGUvdHJhY2tzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVye1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59XG4udGFibGUge1xuICBib3JkZXItd2lkdGg6IG5vbmU7XG59XG5cbnRoZWFkLFxudGJvZHkge1xuICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/tracks-table/tracks-table.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/tracks-table/tracks-table.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TracksTableComponent */

  /***/
  function srcAppComponentsTracksTableTracksTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TracksTableComponent", function () {
      return TracksTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TracksTableComponent =
    /*#__PURE__*/
    function () {
      function TracksTableComponent() {
        _classCallCheck(this, TracksTableComponent);
      }

      _createClass(TracksTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TracksTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TracksTableComponent.prototype, "tracks", void 0);
    TracksTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tracks-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tracks-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tracks-table/tracks-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tracks-table.component.css */
      "./src/app/components/tracks-table/tracks-table.component.css")).default]
    })], TracksTableComponent);
    /***/
  },

  /***/
  "./src/app/data/album-data.ts":
  /*!************************************!*\
    !*** ./src/app/data/album-data.ts ***!
    \************************************/

  /*! exports provided: AlbumData */

  /***/
  function srcAppDataAlbumDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumData", function () {
      return AlbumData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlbumData = function AlbumData(objectModel) {
      _classCallCheck(this, AlbumData);

      this.name = objectModel['name'];
      this.type = objectModel['type'];
      this.artists = objectModel['artists'];
      this.albumId = objectModel['id'];
      this.albumURL = objectModel['external_urls'].spotify;

      if (objectModel['images'].length > 0) {
        this.albumImg = objectModel['images'][0].url;
      } else {
        this.albumImg = '../../assets/playlist.png';
      }

      this.release_date = objectModel['release_date'];
      this.num_tracks = objectModel['total_tracks'];

      if (objectModel['tracks']) {
        this.tracks = _toConsumableArray(objectModel['tracks'].items);
      }
    };
    /***/

  },

  /***/
  "./src/app/data/artist-data.ts":
  /*!*************************************!*\
    !*** ./src/app/data/artist-data.ts ***!
    \*************************************/

  /*! exports provided: ArtistData */

  /***/
  function srcAppDataArtistDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistData", function () {
      return ArtistData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ArtistData = function ArtistData(objectModel) {
      _classCallCheck(this, ArtistData);

      this.name = objectModel['name'];
      this.type = objectModel['type'];
      this.artistProfile = objectModel['external_urls'].spotify;
      this.artistId = objectModel['id'];

      if (objectModel['images'].length > 0) {
        this.artistImg = objectModel['images'][0].url;
      } else {
        this.artistImg = '../../assets/user.png';
      }

      this.genres = objectModel["genres"];
      this.popularity = objectModel["popularity"];
      this.followers = objectModel["followers"].total;
    };
    /***/

  },

  /***/
  "./src/app/data/playlist-data.ts":
  /*!***************************************!*\
    !*** ./src/app/data/playlist-data.ts ***!
    \***************************************/

  /*! exports provided: PlaylistData */

  /***/
  function srcAppDataPlaylistDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistData", function () {
      return PlaylistData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PlaylistData = function PlaylistData(objectModel) {
      _classCallCheck(this, PlaylistData);

      // const data = objectModel['items'];
      this.name = objectModel["name"];
      this.playlistId = objectModel['id'];
      this.type = objectModel['type'];
      this.owner = objectModel['owner'];
      this.playlistURL = objectModel['external_urls'].spotify;

      if (objectModel['images'].length > 0) {
        this.playlistImg = objectModel['images'][0].url;
      } else {
        this.playlistImg = '../../assets/playlist.png';
      }

      this.tracks = objectModel['tracks']; // TODO: implement link in description

      this.description = objectModel['description']; // this.next = objectModel['next'];
    };
    /***/

  },

  /***/
  "./src/app/data/profile-data.ts":
  /*!**************************************!*\
    !*** ./src/app/data/profile-data.ts ***!
    \**************************************/

  /*! exports provided: ProfileData */

  /***/
  function srcAppDataProfileDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileData", function () {
      return ProfileData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProfileData = function ProfileData(objectModel) {
      _classCallCheck(this, ProfileData);

      this.name = objectModel['display_name'];
      this.email = objectModel['email'];
      this.userProfile = objectModel['external_urls']['spotify'];

      if (objectModel['images'].length > 0) {
        this.userImg = objectModel['images'][0].url;
      } else {
        this.userImg = '../../assets/user.png';
      }
    };
    /***/

  },

  /***/
  "./src/app/data/track-data.ts":
  /*!************************************!*\
    !*** ./src/app/data/track-data.ts ***!
    \************************************/

  /*! exports provided: TrackData */

  /***/
  function srcAppDataTrackDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackData", function () {
      return TrackData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TrackData =
    /*#__PURE__*/
    function () {
      function TrackData(objectModel) {
        _classCallCheck(this, TrackData);

        this.name = objectModel['name'];
        this.trackId = objectModel['id'];
        this.type = objectModel['type'];
        this.artists = objectModel['artists'];
        this.trackURL = objectModel['external_urls'].spotify;

        if (objectModel['album']) {
          this.album = objectModel['album'];
        }

        this.duration = this.getDuration(objectModel['duration_ms']);
      }

      _createClass(TrackData, [{
        key: "getDuration",
        value: function getDuration(time) {
          var minutes = Math.floor(time / 60000);
          time -= minutes * 60000;
          var seconds = ('0' + Math.floor(time / 1000)).slice(-2); // console.log(minutes, seconds);

          return String(minutes) + ':' + String(seconds);
        }
      }]);

      return TrackData;
    }();
    /***/

  },

  /***/
  "./src/app/pages/about-page/about-page.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/pages/about-page/about-page.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutPageAboutPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/about-page/about-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/about-page/about-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppPagesAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/nav-bar.service */
    "./src/app/services/nav-bar.service.ts");

    var AboutPageComponent =
    /*#__PURE__*/
    function () {
      function AboutPageComponent(navbarService) {
        _classCallCheck(this, AboutPageComponent);

        this.navbarService = navbarService;
        this.isPolicy = true;
        this.isTerm = false;
      }

      _createClass(AboutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navbarService.updateNavAfterAuth();
          this.navbarService.updateLoginStatus(true);
        }
      }]);

      return AboutPageComponent;
    }();

    AboutPageComponent.ctorParameters = function () {
      return [{
        type: _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_2__["NavBarService"]
      }];
    };

    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-page/about-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-page.component.css */
      "./src/app/pages/about-page/about-page.component.css")).default]
    })], AboutPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.home-main-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.image-wrapper  #handImg{\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: bottom left;\n  -webkit-animation: give 1s 0.5s ease-in forwards;\n          animation: give 1s 0.5s ease-in forwards;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  width: 100%;\n  padding-top: -100px;\n}\n\n.home-main-section .image-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  /* justify-content: center; */\n  width: 55%;\n  margin-right: -5em;\n}\n\n.home-main-section .call-to-action {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  /* margin: 1rem; */\n  align-self: center;\n  width: 60%;\n  -webkit-animation: fade-in 1s 0.5s ease-in forwards;\n          animation: fade-in 1s 0.5s ease-in forwards;\n  transform-box: fill-box;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\n.call-to-action .title {\n  position: relative;\n  font-family: Reenie Beanie, sans-serif;\n  font-size: 8em;\n  line-height: 0.75;\n}\n\n.call-to-action .subtitle {\n  font-weight: 500;\n  font-size: 1.2em;\n  padding-bottom: 2%;\n}\n\n/* @keyframes fade-in {\n  from {\n    transform: translateY(-40%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes give {\n  from {\n    transform: rotateZ(-40deg) translateX(-5%);\n    opacity: 0;\n  }\n  to {\n    transform: rotateZ(0deg) translateX(-5%);\n    opacity: 1;\n  }\n} */\n\n@media screen and (max-width: 920px){\n  /* .home-main-section .image-wrapper {\n    display: none;\n  } */\n  .title {\n    font-size: 5em;\n  }\n}\n\n@media screen and (max-width: 720px){\n  .home-main-section .image-wrapper {\n    display: none;\n  }\n\n  .home-main-section .call-to-action {\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  .title {\n    font-size: 4em;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDBCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixtQkFBWTtVQUFaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQVk7VUFBWixZQUFZO0VBQ1osNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsMEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbURBQTJDO1VBQTNDLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSDtFQUNFOztLQUVHO0VBQ0g7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHlCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaG9tZS1tYWluLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5pbWFnZS13cmFwcGVyICAjaGFuZEltZ3tcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgYW5pbWF0aW9uOiBnaXZlIDFzIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAtMTAwcHg7XG59XG5cbi5ob21lLW1haW4tc2VjdGlvbiAuaW1hZ2Utd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICB3aWR0aDogNTUlO1xuICBtYXJnaW4tcmlnaHQ6IC01ZW07XG59XG5cbi5ob21lLW1haW4tc2VjdGlvbiAuY2FsbC10by1hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLyogbWFyZ2luOiAxcmVtOyAqL1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcyAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi5jYWxsLXRvLWFjdGlvbiAudGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBSZWVuaWUgQmVhbmllLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDhlbTtcbiAgbGluZS1oZWlnaHQ6IDAuNzU7XG59XG5cbi5jYWxsLXRvLWFjdGlvbiAuc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi8qIEBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBnaXZlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC00MGRlZykgdHJhbnNsYXRlWCgtNSUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSB0cmFuc2xhdGVYKC01JSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG4gIC8qIC5ob21lLW1haW4tc2VjdGlvbiAuaW1hZ2Utd3JhcHBlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcbiAgLmhvbWUtbWFpbi1zZWN0aW9uIC5pbWFnZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhvbWUtbWFpbi1zZWN0aW9uIC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gIH1cblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(router) {
        _classCallCheck(this, HomePageComponent);

        this.router = router;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/pages/home-page/home-page.component.css")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/main-page/main-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/main-page/main-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainPageMainPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-img {\n  width: 10%;\n  border-radius: 50%;\n  float: center;\n  margin-bottom: 1em;\n}\n\n.profile-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  margin-top: 2em;\n}\n\n.dashboard-box{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  position: relative;\n  margin: 0 2% 3% 2%;\n}\n\nhr {\n  margin: 4% 0 4% 0;\n  border-color: white;\n  border-style: double;\n}\n\n.artists-box{\n  width: 50%;\n  margin-right: 2em;\n}\n\n.tracks-box{\n  width: 100%;\n}\n\n.playlists-box {\n  margin-bottom: 5%;\n}\n\n.saved-tracks-box h3,\n.playlists-box h3{\n  text-align: center;\n}\n\n.playlist-cards{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  overflow: scroll;\n  overflow-y: auto;\n}\n\n.saved-tracks-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0 20% 0 20%;\n}\n\n.tracks-list{\n  height: 600px;\n  display: -webkit-box;\n  overflow: auto;\n  overflow-x: auto;\n  flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  background-color: darkgray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsb2F0OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnByb2ZpbGUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5kYXNoYm9hcmQtYm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAyJSAzJSAyJTtcbn1cblxuaHIge1xuICBtYXJnaW46IDQlIDAgNCUgMDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG59XG5cbi5hcnRpc3RzLWJveHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi50cmFja3MtYm94e1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBsYXlsaXN0cy1ib3gge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnNhdmVkLXRyYWNrcy1ib3ggaDMsXG4ucGxheWxpc3RzLWJveCBoM3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGxheWxpc3QtY2FyZHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zYXZlZC10cmFja3MtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAyMCUgMCAyMCU7XG59XG5cbi50cmFja3MtbGlzdHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/main-page/main-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/main-page/main-page.component.ts ***!
    \********************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppPagesMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/spotify.service */
    "./src/app/services/spotify.service.ts");
    /* harmony import */


    var _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/nav-bar.service */
    "./src/app/services/nav-bar.service.ts"); // Services


    var MainPageComponent =
    /*#__PURE__*/
    function () {
      function MainPageComponent(spotifyService, navbarService) {
        _classCallCheck(this, MainPageComponent);

        this.spotifyService = spotifyService;
        this.navbarService = navbarService;
        this.userImg = '../../../assets/user.png';
        this.userName = 'Loading . . .';
        this.userProfile = '#';
        this.mySavedTracks = []; // Saved Tracks

        this.reqPlaylists = 'none'; // Spotify endpoint to request more saved playlist

        this.reqTracks = 'none'; // Spotify endpoint to request more saved tracks
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.navbarService.updateNavAfterAuth();
          this.navbarService.updateLoginStatus(true); // /**** Get User's Info and URL to their profile ****/

          this.spotifyService.aboutMe().then(function (data) {
            _this3.userImg = data.userImg;
            _this3.userName = data.name;
            _this3.userProfile = data.userProfile;
            console.log('User info loaded...');
          });
          /**** Get User's Most Favorite Artists ****/

          this.spotifyService.topArtists().then(function (artists) {
            _this3.myArtists = artists; // console.log('Artists info loaded...', this.myArtists);
          });
          /**** Get User's Most Favorite Tracks ****/

          this.spotifyService.topTracks().then(function (tracks) {
            _this3.myTracks = tracks; // console.log('Tracks info loaded...', this.myTracks);
          });
          /**** Get All User's Saved Playlist ****/

          this.spotifyService.getUserPlaylists(this.reqPlaylists).then(function (playlists) {
            _this3.reqPlaylists = playlists.next;
            _this3.myPlaylists = playlists.playlistsArr; // console.log('Saved playlists loaded...', this.myPlaylists);
          });
          /**** Get 100 of User's Most Recent Saved Tracks ****/

          this.spotifyService.getUserSavedTracks(this.reqTracks).then(function (tracks) {
            _this3.reqTracks = tracks.next; // this.mySavedTracks = tracks.tracksArr;
            // tracks.tracksArr.forEach(track => {
            //   track.artists = this.getArtists(track.artists);
            // });

            _this3.mySavedTracks = tracks.tracksArr;
            console.log('My saved tracks loaded...', _this3.mySavedTracks);
          }); // // this.spotifyService.myArtists().then(artists => {
          // //   console.log('My followed artists loaded...');
          // // });
        }
      }, {
        key: "getArtists",
        value: function getArtists(artists) {
          var tmpArtists = []; // Get artist(s) that worked on a album

          artists.forEach(function (element) {
            tmpArtists.push("<a href=\"".concat(element.external_urls.spotify, "\" target=\"blank\">").concat(element.name, "</a>"));
          });

          if (tmpArtists.length !== 2) {
            return tmpArtists.join(', ');
          } else {
            return tmpArtists.join(' & ');
          }
        }
      }, {
        key: "onPlaylistScroll",
        value: function onPlaylistScroll(event) {
          if (event.target.offsetWidth + event.target.scrollLeft >= event.target.scrollWidth) {
            console.log('End of playlists...');
            this.getDisplayPlaylists();
          }
        }
      }, {
        key: "getDisplayPlaylists",
        value: function getDisplayPlaylists() {
          var _this4 = this;

          if (this.reqPlaylists !== null) {
            this.spotifyService.getUserPlaylists(this.reqPlaylists).then(function (playlists) {
              // console.log(playlists);
              _this4.reqPlaylists = playlists.next;
              _this4.myPlaylists = _this4.myPlaylists.concat(playlists.playlistsArr); // console.log('Saved playlists loaded...', this.myPlaylists);
            });
          } else {
            console.log('No more playlists to load...');
          }
        }
      }, {
        key: "onTracksListScroll",
        value: function onTracksListScroll(event) {
          if (event.target.clientHeight + event.target.scrollTop >= event.target.scrollHeight) {
            console.log('End of tracks list...');
            this.getMoreTracks();
          }
        }
      }, {
        key: "getMoreTracks",
        value: function getMoreTracks() {
          var _this5 = this;

          if (this.reqTracks !== null && this.mySavedTracks.length !== 100) {
            this.spotifyService.getUserSavedTracks(this.reqTracks).then(function (tracks) {
              _this5.reqTracks = tracks.next;
              _this5.mySavedTracks = _this5.mySavedTracks.concat(tracks.tracksArr);
            });
          } else {
            console.log('No more items to load...');
          }
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ctorParameters = function () {
      return [{
        type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]
      }, {
        type: _services_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__["NavBarService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event'])], MainPageComponent.prototype, "onPlaylistScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event'])], MainPageComponent.prototype, "onTracksListScroll", null);
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-page.component.css */
      "./src/app/pages/main-page/main-page.component.css")).default]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/single-page/single-page.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/single-page/single-page.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSinglePageSinglePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".track-display,\n.album-display,\n.artist-display {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.album-detail,\n.track-detail{\n  margin-left: 2%;\n  width: 50%;\n  display: inherit;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.artist-detail {\n  margin-left: 2%;\n  width: 50%;\n  display: inherit;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\na {\n  color: #212529;\n  font-weight: bold;\n}\n\n#artists-title {\n  font-size: small;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2luZ2xlLXBhZ2Uvc2luZ2xlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qiw4QkFBNkI7VUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaW5nbGUtcGFnZS9zaW5nbGUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYWNrLWRpc3BsYXksXG4uYWxidW0tZGlzcGxheSxcbi5hcnRpc3QtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uYWxidW0tZGV0YWlsLFxuLnRyYWNrLWRldGFpbHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmFydGlzdC1kZXRhaWwge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2FydGlzdHMtdGl0bGUge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/single-page/single-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/single-page/single-page.component.ts ***!
    \************************************************************/

  /*! exports provided: SinglePageComponent */

  /***/
  function srcAppPagesSinglePageSinglePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinglePageComponent", function () {
      return SinglePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/spotify.service */
    "./src/app/services/spotify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _data_track_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data/track-data */
    "./src/app/data/track-data.ts");
    /* harmony import */


    var src_app_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/nav-bar.service */
    "./src/app/services/nav-bar.service.ts");

    var SinglePageComponent =
    /*#__PURE__*/
    function () {
      function SinglePageComponent(activatedRouter, spotifyService, navbarService) {
        _classCallCheck(this, SinglePageComponent);

        this.activatedRouter = activatedRouter;
        this.spotifyService = spotifyService;
        this.navbarService = navbarService;
        this.type = this.activatedRouter.snapshot.paramMap.get('type');
        this.id = this.activatedRouter.snapshot.paramMap.get('id');
        this.tracks = []; // tracks detail in an album

        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
      }

      _createClass(SinglePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.navbarService.updateNavAfterAuth();
          this.navbarService.updateLoginStatus(true); // TODO: fix nav bar in single page
          // console.log(this.type, this.id);

          this.spotifyService.getSingle(this.id, this.type).then(function (result) {
            console.log(result);

            if (result) {
              _this6.data = result;

              if (result.type === 'track') {
                // Get formatted date
                _this6.releaseDate = _this6.pipe.transform(result['album'].release_date, 'fullDate'); // Get artist(s) that worked on a track

                _this6.artists = _this6.getArtists(result['artists']);
              }

              if (result.type === 'album') {
                // Get formatted date
                _this6.releaseDate = _this6.pipe.transform(result['release_date'], 'fullDate'); // Get artist(s) that works on an album

                _this6.artists = _this6.getArtists(result['artists']);
                result['tracks'].forEach(function (track) {
                  // console.log(track);
                  _this6.tracks.push(new _data_track_data__WEBPACK_IMPORTED_MODULE_5__["TrackData"](track));
                });

                _this6.tracks.forEach(function (track) {
                  track.artists = _this6.getArtists(track.artists);
                });

                console.log(_this6.tracks);
              } // console.log(this.artists, this.releaseDate);

            }
          });

          if (this.type === 'artists') {
            this.spotifyService.getArtistTopTracks(this.id).then(function (tracks) {
              _this6.tracks = tracks;

              _this6.tracks.forEach(function (track) {
                track.artists = _this6.getArtists(track.artists);
              });

              console.log(_this6.tracks);
            });
          }
        }
      }, {
        key: "getArtists",
        value: function getArtists(artists) {
          var tmpArtists = []; // Get artist(s) that worked on a album

          artists.forEach(function (element) {
            tmpArtists.push("<a href=\"".concat(element.external_urls.spotify, "\" target=\"blank\">").concat(element.name, "</a>"));
          });

          if (tmpArtists.length !== 2) {
            return tmpArtists.join(', ');
          } else {
            return tmpArtists.join(' & ');
          }
        }
      }]);

      return SinglePageComponent;
    }();

    SinglePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"]
      }, {
        type: src_app_services_nav_bar_service__WEBPACK_IMPORTED_MODULE_6__["NavBarService"]
      }];
    };

    SinglePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./single-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-page/single-page.component.html")).default,
      // ViewEncapsulation.None helps provide css styling
      // to an injected and sanitized innerHTML.
      // Solution was found here: https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular-2-typescript
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./single-page.component.css */
      "./src/app/pages/single-page/single-page.component.css")).default]
    })], SinglePageComponent);
    /***/
  },

  /***/
  "./src/app/services/nav-bar.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/nav-bar.service.ts ***!
    \*********************************************/

  /*! exports provided: NavBarService */

  /***/
  function srcAppServicesNavBarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarService", function () {
      return NavBarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NavBarService =
    /*#__PURE__*/
    function () {
      function NavBarService() {
        _classCallCheck(this, NavBarService);

        this.links = new Array();
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.links.push({
          linkName: 'Login',
          path: '/login'
        }); // for production
        // this.links.push({linkName: 'Login', path: 'http://localhost:5000/login'}); // for development

        this.isLoggedIn.next(false);
      }

      _createClass(NavBarService, [{
        key: "getLogInStatus",
        value: function getLogInStatus() {
          return this.isLoggedIn;
        }
      }, {
        key: "getLinks",
        value: function getLinks() {
          return this.links;
        }
      }, {
        key: "updateLoginStatus",
        value: function updateLoginStatus(status) {
          this.isLoggedIn.next(status); // console.log(status);

          if (!status) {
            this.clearAllLinks();
            this.links.push({
              linkName: 'Login',
              path: '/login'
            }); // for production
            // this.links.push({linkName: 'Login', path: 'http://localhost:5000/login'}); // for development
          }
        }
      }, {
        key: "updateNavAfterAuth",
        value: function updateNavAfterAuth() {
          this.removeLink({
            linkName: 'Login'
          }); // this.clearAllLinks();

          if (this.links.length < 2) {
            this.links.push({
              linkName: 'Dashboard',
              path: 'me'
            });
            this.links.push({
              linkName: 'About',
              path: 'about'
            });
          } // console.log(this.links);

        }
      }, {
        key: "removeLink",
        value: function removeLink(_ref) {
          var _this7 = this;

          var linkName = _ref.linkName;
          this.links.forEach(function (link, index) {
            if (link.linkName === linkName) {
              _this7.links.splice(linkName, 1);
            }
          });
        }
      }, {
        key: "clearAllLinks",
        value: function clearAllLinks() {
          this.links.length = 0;
        }
      }]);

      return NavBarService;
    }();

    NavBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavBarService);
    /***/
  },

  /***/
  "./src/app/services/spotify.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/spotify.service.ts ***!
    \*********************************************/

  /*! exports provided: SpotifyService */

  /***/
  function srcAppServicesSpotifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpotifyService", function () {
      return SpotifyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _data_profile_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/profile-data */
    "./src/app/data/profile-data.ts");
    /* harmony import */


    var _data_track_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data/track-data */
    "./src/app/data/track-data.ts");
    /* harmony import */


    var _data_artist_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data/artist-data */
    "./src/app/data/artist-data.ts");
    /* harmony import */


    var _data_playlist_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data/playlist-data */
    "./src/app/data/playlist-data.ts");
    /* harmony import */


    var _data_album_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/album-data */
    "./src/app/data/album-data.ts");

    var SpotifyService =
    /*#__PURE__*/
    function () {
      function SpotifyService(http) {
        _classCallCheck(this, SpotifyService);

        this.http = http; // private expressBaseUrl = 'http://localhost:5000'; // for development

        this.expressBaseUrl = ''; // for production

        console.log('Spotify service initialized...');
      }

      _createClass(SpotifyService, [{
        key: "sendRequest2Express",
        value: function sendRequest2Express(endpoint) {
          // console.log(this.expressBaseUrl + endpoint);
          this.http.get(this.expressBaseUrl + endpoint).subscribe(function (res) {});
          return Promise.resolve(this.http.get(this.expressBaseUrl + endpoint).toPromise());
        }
      }, {
        key: "aboutMe",
        value: function aboutMe() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.sendRequest2Express('/').then(function (data) {
                      if (data.success) {
                        // console.log('User\'s profile loaded...');
                        // console.log(data);
                        return new _data_profile_data__WEBPACK_IMPORTED_MODULE_3__["ProfileData"](data.data);
                      } else {
                        // console.log(data);
                        return data.success;
                      }
                    });

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "topArtists",
        value: function topArtists() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.sendRequest2Express('/topArtists').then(function (artists) {
                      if (artists.success) {
                        // console.log(artists.data.limit, artists.data.items);
                        return artists.data.items.map(function (artist) {
                          // console.log(artist);
                          return new _data_artist_data__WEBPACK_IMPORTED_MODULE_5__["ArtistData"](artist);
                        });
                      } else {
                        return artists.success;
                      }
                    });

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "topTracks",
        value: function topTracks() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.sendRequest2Express('/topTracks').then(function (tracks) {
                      // console.log(tracks.data.limit, tracks.data, tracks.data.items);
                      if (tracks.success) {
                        return tracks.data.items.map(function (track) {
                          // console.log(track);
                          return new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](track);
                        });
                      } else {
                        return tracks.success;
                      }
                    });

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "myArtists",
        value: function myArtists() {
          return this.sendRequest2Express('/followedArtists').then(function (artists) {
            console.log(artists.data);
          });
        }
      }, {
        key: "getUserPlaylists",
        value: function getUserPlaylists(request) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.sendRequest2Express("/getUserPlaylists/".concat(encodeURIComponent(request))).then(function (playlists) {
                      if (playlists.success) {
                        // console.log(playlists);
                        var getPlaylists = {
                          next: playlists.data.next,
                          // prev: playlists.data.previous,
                          playlistsArr: playlists.data.items.map(function (playlist) {
                            return new _data_playlist_data__WEBPACK_IMPORTED_MODULE_6__["PlaylistData"](playlist);
                          })
                        };
                        return getPlaylists;
                      } else {
                        return playlists.success;
                      }
                    });

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getUserSavedTracks",
        value: function getUserSavedTracks(request) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.sendRequest2Express("/getUserSavedTracks/".concat(encodeURIComponent(request))).then(function (tracks) {
                      // console.log(tracks.data);
                      if (tracks.success) {
                        var getTracks = {
                          next: tracks.data.next,
                          tracksArr: tracks.data.items.map(function (track) {
                            // console.log(track.track);
                            return new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](track.track);
                          })
                        };
                        return getTracks;
                      } else {
                        return tracks.success;
                      }
                    });

                  case 2:
                    return _context5.abrupt("return", _context5.sent);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getSingle",
        value: function getSingle(id, type) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.sendRequest2Express("/single/".concat(encodeURIComponent(type), "/").concat(encodeURIComponent(id))).then(function (result) {
                      if (result.success) {
                        switch (type) {
                          case 'artists':
                            console.log(result);
                            return new _data_artist_data__WEBPACK_IMPORTED_MODULE_5__["ArtistData"](result.data);
                          // break;

                          case 'tracks':
                            console.log(result);
                            return new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](result.data);
                          // break;

                          case 'albums':
                            console.log(result);
                            return new _data_album_data__WEBPACK_IMPORTED_MODULE_7__["AlbumData"](result.data);
                          // break;

                          default:
                            console.log('No result found');
                            return null;
                        }
                      }
                    });

                  case 2:
                    return _context6.abrupt("return", _context6.sent);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getArtistTopTracks",
        value: function getArtistTopTracks(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.sendRequest2Express("/getArtistTopTracks/".concat(encodeURIComponent(id))).then(function (results) {
                      if (results.success) {
                        return results.data.tracks.map(function (track) {
                          // console.log(track);
                          return new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](track);
                        });
                      }
                    });

                  case 2:
                    return _context7.abrupt("return", _context7.sent);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "search",
        value: function search(query) {
          return this.sendRequest2Express("/search/".concat(encodeURIComponent(query))).then(function (results) {
            // console.log(results);
            if (results.success) {
              var datas = results.data;
              var searchArtists = null;
              var searchTracks = null;
              var searchAlbums = null;
              var searchPlaylists = null;

              if (datas.artists !== undefined && datas.artists.items.length !== 0) {
                searchArtists = datas.artists.items.map(function (artist) {
                  return new _data_artist_data__WEBPACK_IMPORTED_MODULE_5__["ArtistData"](artist);
                });
              }

              if (datas.tracks !== undefined && datas.tracks.items.length !== 0) {
                searchTracks = datas.tracks.items.map(function (track) {
                  return new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](track);
                });
              }

              if (datas.albums !== undefined && datas.albums.items.length !== 0) {
                searchAlbums = datas.albums.items.map(function (album) {
                  // console.log(album);
                  return new _data_album_data__WEBPACK_IMPORTED_MODULE_7__["AlbumData"](album);
                });
              }

              if (datas.playlists !== undefined && datas.playlists.items.length !== 0) {
                // console.log(datas.playlists);
                searchPlaylists = datas.playlists.items.map(function (playlist) {
                  return new _data_playlist_data__WEBPACK_IMPORTED_MODULE_6__["PlaylistData"](playlist);
                });
              }

              return {
                searchArtists: searchArtists,
                searchTracks: searchTracks,
                searchAlbums: searchAlbums,
                searchPlaylists: searchPlaylists
              };
            }
          });
        }
      }]);

      return SpotifyService;
    }();

    SpotifyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpotifyService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/khoanguyen/Downloads/School/code/Projects/SpotifyBrowser/spotify-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map