/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n    Swal.fire({\n      title: 'Czy napewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          //url: \"localhost:8000/users/\" + $(this).data(\"id\"),\n          url: deleteUrl + $(_this).data(\"id\")\n          //data: {id: $(this).data(\"id\")}\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oppss', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGVVcmwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcz82YzExIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnQ3p5IG5hcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHJla29yZD8nLFxyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaycsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOaWUnXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAvL3VybDogXCJsb2NhbGhvc3Q6ODAwMC91c2Vycy9cIiArICQodGhpcykuZGF0YShcImlkXCIpLFxyXG4gICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKSxcclxuICAgICAgICAgIC8vZGF0YToge2lkOiAkKHRoaXMpLmRhdGEoXCJpZFwiKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoJ09wcHNzJywgZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzKTsgICAgICAgICAgICBcclxuICAgICAgICB9KSAgXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSk7XHJcbn0pOyAiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVTtFQUNWQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFVO0lBQUE7SUFDM0JDLElBQUksQ0FBQ0MsSUFBSSxDQUFDO01BQ1JDLEtBQUssRUFBRSxtQ0FBbUM7TUFDMUNDLElBQUksRUFBRSxTQUFTO01BQ2ZDLGdCQUFnQixFQUFFLElBQUk7TUFDdEJDLGtCQUFrQixFQUFFLFNBQVM7TUFDN0JDLGlCQUFpQixFQUFFLE1BQU07TUFDekJDLGlCQUFpQixFQUFFLEtBQUs7TUFDeEJDLGdCQUFnQixFQUFFO0lBQ3BCLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO01BQ2xCLElBQUlBLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO1FBQ3RCYixDQUFDLENBQUNjLElBQUksQ0FBQztVQUNMQyxNQUFNLEVBQUUsUUFBUTtVQUNoQjtVQUNBQyxHQUFHLEVBQUVDLFNBQVMsR0FBR2pCLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJO1VBQ2xDO1FBQ0YsQ0FBQyxDQUFDLENBQ0RDLElBQUksQ0FBQyxVQUFTRCxJQUFJLEVBQUM7VUFDbEJFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLENBQ0RDLElBQUksQ0FBQyxVQUFTTCxJQUFJLEVBQUM7VUFDbEJoQixJQUFJLENBQUNDLElBQUksQ0FBQyxPQUFPLEVBQUVlLElBQUksQ0FBQ00sWUFBWSxDQUFDQyxPQUFPLEVBQUVQLElBQUksQ0FBQ00sWUFBWSxDQUFDRSxNQUFNLENBQUM7UUFDekUsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;