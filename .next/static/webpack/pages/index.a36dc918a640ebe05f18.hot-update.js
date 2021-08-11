webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\simbo\\Documents\\Dosyalar\\Programlama Dosyalar\u0131\\React\\24-nextjs-project\\pages\\index.js";
// import { useEffect, useState } from 'react';

var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A first meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'address 5 istanbul',
  description: 'first meetup'
}, {
  id: 'm2',
  title: 'second meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'address 5 istanbul',
  description: 'first meetup'
}, {
  id: 'm3',
  title: 'third meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'address 5 istanbul',
  description: 'first meetup'
}];

var HomePage = function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 10
  }, this);
}; // //this funtion talks with server and client never sees this. if our site wont be watch very frequently this is the way to go.


_c = HomePage;
//if site updates are very frequent we might want to choose this approach. Since its updated auto by every request we dont need to revalidate by ourselves.
//this function does not run during build process (unlike getStaticProps), but during deployment on server.
//code here run on server and wont be exposed to client as getStaticProps.
// export async function getServerSideProps(context) {
//     //context parameter gives us extra data as server side props.
//     const req = context.req; //request
//     const res = context.res; //respond
//     //fetch data
//     return {
//       props: {
//         meetups: DUMMY_MEETUPS,
//       },
//     };
//   }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSCx3SEFKSjtBQUtFQyxTQUFPLEVBQUUsb0JBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsT0FBSyxFQUNILHdIQUpKO0FBS0VDLFNBQU8sRUFBRSxvQkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRvQixFQWlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsT0FBSyxFQUNILHdIQUpKO0FBS0VDLFNBQU8sRUFBRSxvQkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQWpCb0IsQ0FBdEI7O0FBMkJBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLEtBQVYsRUFBaUI7QUFDaEM7QUFFQTtBQUNBO0FBQ0E7QUFFQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxDQVJELEMsQ0FVQTs7O0tBVk1GLFE7QUFrQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTM2ZGM5MThhNjQwZWJlMDVmMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdtMScsXHJcbiAgICB0aXRsZTogJ0EgZmlyc3QgbWVldHVwJyxcclxuICAgIGltYWdlOlxyXG4gICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICBhZGRyZXNzOiAnYWRkcmVzcyA1IGlzdGFuYnVsJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnZmlyc3QgbWVldHVwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbTInLFxyXG4gICAgdGl0bGU6ICdzZWNvbmQgbWVldHVwJyxcclxuICAgIGltYWdlOlxyXG4gICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICBhZGRyZXNzOiAnYWRkcmVzcyA1IGlzdGFuYnVsJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnZmlyc3QgbWVldHVwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbTMnLFxyXG4gICAgdGl0bGU6ICd0aGlyZCBtZWV0dXAnLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcclxuICAgIGFkZHJlc3M6ICdhZGRyZXNzIDUgaXN0YW5idWwnLFxyXG4gICAgZGVzY3JpcHRpb246ICdmaXJzdCBtZWV0dXAnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gIC8vICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgLy8gICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxufTtcclxuXHJcbi8vIC8vdGhpcyBmdW50aW9uIHRhbGtzIHdpdGggc2VydmVyIGFuZCBjbGllbnQgbmV2ZXIgc2VlcyB0aGlzLiBpZiBvdXIgc2l0ZSB3b250IGJlIHdhdGNoIHZlcnkgZnJlcXVlbnRseSB0aGlzIGlzIHRoZSB3YXkgdG8gZ28uXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvL2ZldGNoIGRhdGFcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vdXNlcjpUY3NnLTEzNFVTRVJAY2x1c3RlcjAucndyamYubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsIC8vd2UgY2FuIGNoYW5nZSB0aGlzIGluIHNlY29uZHMuIDM2MDAgaXMgYW4gaG91ci5cclxuICAgIC8vMTAgc2Vjb25kcyB0byB3YWl0IHRvIHJlbmVnZXJhdGUgaW5jYW1pbmcgcmVxdWVzdCwgdG8gdXBkYXRlIHByZS1yZW5kZXJlZCBwYWdlIHdpdGggbmV2ZXIgZGF0YS4gaXQgd2lsbCBydW4gZXZlcnkgMTBzZWNvbnMgaWYgdGhlcmUgaXMgYSByZXF1ZXN0IHNvIGRhdGEgaXMgbmV2ZXIgb2xkZXIgdGhhbiAxMCBzZWNvbmRzLlxyXG4gIH07XHJcbn1cclxuXHJcbi8vaWYgc2l0ZSB1cGRhdGVzIGFyZSB2ZXJ5IGZyZXF1ZW50IHdlIG1pZ2h0IHdhbnQgdG8gY2hvb3NlIHRoaXMgYXBwcm9hY2guIFNpbmNlIGl0cyB1cGRhdGVkIGF1dG8gYnkgZXZlcnkgcmVxdWVzdCB3ZSBkb250IG5lZWQgdG8gcmV2YWxpZGF0ZSBieSBvdXJzZWx2ZXMuXHJcbi8vdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBydW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MgKHVubGlrZSBnZXRTdGF0aWNQcm9wcyksIGJ1dCBkdXJpbmcgZGVwbG95bWVudCBvbiBzZXJ2ZXIuXHJcbi8vY29kZSBoZXJlIHJ1biBvbiBzZXJ2ZXIgYW5kIHdvbnQgYmUgZXhwb3NlZCB0byBjbGllbnQgYXMgZ2V0U3RhdGljUHJvcHMuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgLy9jb250ZXh0IHBhcmFtZXRlciBnaXZlcyB1cyBleHRyYSBkYXRhIGFzIHNlcnZlciBzaWRlIHByb3BzLlxyXG4vLyAgICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7IC8vcmVxdWVzdFxyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7IC8vcmVzcG9uZFxyXG4vLyAgICAgLy9mZXRjaCBkYXRhXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9