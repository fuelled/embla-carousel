"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[1217],{1217:function(e,n,l){l.r(n),n.default="\nconst TWEEN_FACTOR = 1.2;\n\nconst calculateTweenValuesParallax = (emblaApi) => {\n    const engine = emblaApi.internalEngine();\n    const scrollProgress = emblaApi.scrollProgress();\n    \n    return emblaApi.scrollSnapList().map((scrollSnap, index) => {\n        if (!emblaApi.slidesInView().includes(index))\n            return 0;\n        let diffToTarget = scrollSnap - scrollProgress;\n        \n        if (engine.options.loop) {\n            engine.slideLooper.loopPoints.forEach((loopItem) => {\n                const target = loopItem.target().get();\n                if (index === loopItem.index && target !== 0) {\n                    const sign = Math.sign(target);\n                    if (sign === -1)\n                        diffToTarget = scrollSnap - (1 + scrollProgress);\n                    if (sign === 1)\n                        diffToTarget = scrollSnap + (1 - scrollProgress);\n                }\n            });\n        }\n        return diffToTarget * (-1 / TWEEN_FACTOR) * 100;\n    });\n};\n\nexport const setupTweenParallax = (emblaApi) => {\n    const tweenNodes = (emblaApi\n        .slideNodes()\n        .map((slideNode) => slideNode.querySelector('.embla__parallax__layer')));\n    \n    const applyTweenParallax = () => {\n        const tweenValues = calculateTweenValuesParallax(emblaApi);\n        tweenValues.forEach((tweenValue, index) => {\n            tweenNodes[index].style.transform = `translateX(${tweenValue}%`;\n        });\n    };\n    \n    const removeTweenParallax = () => {\n        tweenNodes.forEach((slide) => slide.removeAttribute('style'));\n    };\n    \n    return {\n        applyTweenParallax,\n        removeTweenParallax,\n    };\n};\n"}}]);
//# sourceMappingURL=1217-b48ab748ec61a974e97b.js.map