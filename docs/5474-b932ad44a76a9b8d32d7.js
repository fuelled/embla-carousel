"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5474],{5474:function(e,s,o){o.r(s),s.default="import { setupIosPicker } from './ios-picker'\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n \nconst LOOP = false\n \nconst wheelNodes = document.querySelectorAll('.embla__ios-picker__viewport')\nconst iosPickerNodes = <HTMLElement[]>Array.from(wheelNodes)\n \n// @ts-ignore\nconst iosPickers = iosPickerNodes.map((iosPickerNode) =>\n  setupIosPicker(iosPickerNode, {\n    dragFree: true,\n    loop: LOOP,\n    axis: 'y',\n  }),\n)\n"}}]);
//# sourceMappingURL=5474-b932ad44a76a9b8d32d7.js.map