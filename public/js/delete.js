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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n    Swal.fire({\n      title: 'Czy napewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          //url: \"localhost:8000/users/\" + $(this).data(\"id\"),\n          url: deleteUrl + $(_this).data(\"id\")\n          //data: {id: $(this).data(\"id\")}\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oppss', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6ICdDenkgbmFwZXdubyBjaGNlc3ogdXN1bsSFxIcgcmVrb3JkPycsXHJcbiAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVGFrJyxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05pZSdcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgIC8vdXJsOiBcImxvY2FsaG9zdDo4MDAwL3VzZXJzL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIiksXHJcbiAgICAgICAgICB1cmw6IGRlbGV0ZVVybCArICQodGhpcykuZGF0YShcImlkXCIpLFxyXG4gICAgICAgICAgLy9kYXRhOiB7aWQ6ICQodGhpcykuZGF0YShcImlkXCIpfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbChmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgIFN3YWwuZmlyZSgnT3Bwc3MnLCBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlLCBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pICBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KTtcclxufSk7ICJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFVO0VBQ1ZBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVU7SUFBQTtJQUMzQkMsSUFBSSxDQUFDQyxJQUFJLENBQUM7TUFDUkMsS0FBSyxFQUFFLG1DQUFtQztNQUMxQ0MsSUFBSSxFQUFFLFNBQVM7TUFDZkMsZ0JBQWdCLEVBQUUsSUFBSTtNQUN0QkMsa0JBQWtCLEVBQUUsU0FBUztNQUM3QkMsaUJBQWlCLEVBQUUsTUFBTTtNQUN6QkMsaUJBQWlCLEVBQUUsS0FBSztNQUN4QkMsZ0JBQWdCLEVBQUU7SUFDcEIsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxNQUFNLEVBQUs7TUFDbEIsSUFBSUEsTUFBTSxDQUFDQyxXQUFXLEVBQUU7UUFDdEJiLENBQUMsQ0FBQ2MsSUFBSSxDQUFDO1VBQ0xDLE1BQU0sRUFBRSxRQUFRO1VBQ2hCO1VBQ0FDLEdBQUcsRUFBRUMsU0FBUyxHQUFHakIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLElBQUk7VUFDbEM7UUFDRixDQUFDLENBQUMsQ0FDREMsSUFBSSxDQUFDLFVBQVNELElBQUksRUFBQztVQUNsQkUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtRQUMxQixDQUFDLENBQUMsQ0FDREMsSUFBSSxDQUFDLFVBQVNMLElBQUksRUFBQztVQUNsQmhCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRWUsSUFBSSxDQUFDTSxZQUFZLENBQUNDLE9BQU8sRUFBRVAsSUFBSSxDQUFDTSxZQUFZLENBQUNFLE1BQU0sQ0FBQztRQUN6RSxDQUFDLENBQUM7TUFDSjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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