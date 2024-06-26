jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(h, g, a, e, f) {
        return jQuery.easing[jQuery.easing.def](h, g, a, e, f)
    },
    easeInQuad: function(h, g, a, e, f) {
        return e * (g /= f) * g + a
    },
    easeOutQuad: function(h, g, a, e, f) {
        return -e * (g /= f) * (g - 2) + a
    },
    easeInOutQuad: function(h, g, a, e, f) {
        if ((g /= f / 2) < 1) {
            return e / 2 * g * g + a
        }
        return -e / 2 * ((--g) * (g - 2) - 1) + a
    },
    easeInCubic: function(h, g, a, e, f) {
        return e * (g /= f) * g * g + a
    },
    easeOutCubic: function(h, g, a, e, f) {
        return e * ((g = g / f - 1) * g * g + 1) + a
    },
    easeInOutCubic: function(h, g, a, e, f) {
        if ((g /= f / 2) < 1) {
            return e / 2 * g * g * g + a
        }
        return e / 2 * ((g -= 2) * g * g + 2) + a
    },
    easeInQuart: function(h, g, a, e, f) {
        return e * (g /= f) * g * g * g + a
    },
    easeOutQuart: function(h, g, a, e, f) {
        return -e * ((g = g / f - 1) * g * g * g - 1) + a
    },
    easeInOutQuart: function(h, g, a, e, f) {
        if ((g /= f / 2) < 1) {
            return e / 2 * g * g * g * g + a
        }
        return -e / 2 * ((g -= 2) * g * g * g - 2) + a
    },
    easeInQuint: function(h, g, a, e, f) {
        return e * (g /= f) * g * g * g * g + a
    },
    easeOutQuint: function(h, g, a, e, f) {
        return e * ((g = g / f - 1) * g * g * g * g + 1) + a
    },
    easeInOutQuint: function(h, g, a, e, f) {
        if ((g /= f / 2) < 1) {
            return e / 2 * g * g * g * g * g + a
        }
        return e / 2 * ((g -= 2) * g * g * g * g + 2) + a
    },
    easeInSine: function(h, g, a, e, f) {
        return -e * Math.cos(g / f * (Math.PI / 2)) + e + a
    },
    easeOutSine: function(h, g, a, e, f) {
        return e * Math.sin(g / f * (Math.PI / 2)) + a
    },
    easeInOutSine: function(h, g, a, e, f) {
        return -e / 2 * (Math.cos(Math.PI * g / f) - 1) + a
    },
    easeInExpo: function(h, g, a, e, f) {
        return (g == 0) ? a : e * Math.pow(2, 10 * (g / f - 1)) + a
    },
    easeOutExpo: function(h, g, a, e, f) {
        return (g == f) ? a + e : e * (-Math.pow(2, -10 * g / f) + 1) + a
    },
    easeInOutExpo: function(h, g, a, e, f) {
        if (g == 0) {
            return a
        }
        if (g == f) {
            return a + e
        }
        if ((g /= f / 2) < 1) {
            return e / 2 * Math.pow(2, 10 * (g - 1)) + a
        }
        return e / 2 * (-Math.pow(2, -10 * --g) + 2) + a
    },
    easeInCirc: function(h, g, a, e, f) {
        return -e * (Math.sqrt(1 - (g /= f) * g) - 1) + a
    },
    easeOutCirc: function(h, g, a, e, f) {
        return e * Math.sqrt(1 - (g = g / f - 1) * g) + a
    },
    easeInOutCirc: function(h, g, a, e, f) {
        if ((g /= f / 2) < 1) {
            return -e / 2 * (Math.sqrt(1 - g * g) - 1) + a
        }
        return e / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + a
    },
    easeInElastic: function(l, k, f, g, h) {
        var j = 1.70158;
        var i = 0;
        var e = g;
        if (k == 0) {
            return f
        }
        if ((k /= h) == 1) {
            return f + g
        }
        if (!i) {
            i = h * 0.3
        }
        if (e < Math.abs(g)) {
            e = g;
            var j = i / 4
        } else {
            var j = i / (2 * Math.PI) * Math.asin(g / e)
        }
        return -(e * Math.pow(2, 10 * (k -= 1)) * Math.sin((k * h - j) * (2 * Math.PI) / i)) + f
    },
    easeOutElastic: function(l, k, f, g, h) {
        var j = 1.70158;
        var i = 0;
        var e = g;
        if (k == 0) {
            return f
        }
        if ((k /= h) == 1) {
            return f + g
        }
        if (!i) {
            i = h * 0.3
        }
        if (e < Math.abs(g)) {
            e = g;
            var j = i / 4
        } else {
            var j = i / (2 * Math.PI) * Math.asin(g / e)
        }
        return e * Math.pow(2, -10 * k) * Math.sin((k * h - j) * (2 * Math.PI) / i) + g + f
    },
    easeInOutElastic: function(l, k, f, g, h) {
        var j = 1.70158;
        var i = 0;
        var e = g;
        if (k == 0) {
            return f
        }
        if ((k /= h / 2) == 2) {
            return f + g
        }
        if (!i) {
            i = h * (0.3 * 1.5)
        }
        if (e < Math.abs(g)) {
            e = g;
            var j = i / 4
        } else {
            var j = i / (2 * Math.PI) * Math.asin(g / e)
        }
        if (k < 1) {
            return -0.5 * (e * Math.pow(2, 10 * (k -= 1)) * Math.sin((k * h - j) * (2 * Math.PI) / i)) + f
        }
        return e * Math.pow(2, -10 * (k -= 1)) * Math.sin((k * h - j) * (2 * Math.PI) / i) * 0.5 + g + f
    },
    easeInBack: function(i, h, a, e, f, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return e * (h /= f) * h * ((g + 1) * h - g) + a
    },
    easeOutBack: function(i, h, a, e, f, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return e * ((h = h / f - 1) * h * ((g + 1) * h + g) + 1) + a
    },
    easeInOutBack: function(i, h, a, e, f, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((h /= f / 2) < 1) {
            return e / 2 * (h * h * (((g *= (1.525)) + 1) * h - g)) + a
        }
        return e / 2 * ((h -= 2) * h * (((g *= (1.525)) + 1) * h + g) + 2) + a
    },
    easeInBounce: function(h, g, a, e, f) {
        return e - jQuery.easing.easeOutBounce(h, f - g, 0, e, f) + a
    },
    easeOutBounce: function(h, g, a, e, f) {
        if ((g /= f) < (1 / 2.75)) {
            return e * (7.5625 * g * g) + a
        } else {
            if (g < (2 / 2.75)) {
                return e * (7.5625 * (g -= (1.5 / 2.75)) * g + 0.75) + a
            } else {
                if (g < (2.5 / 2.75)) {
                    return e * (7.5625 * (g -= (2.25 / 2.75)) * g + 0.9375) + a
                } else {
                    return e * (7.5625 * (g -= (2.625 / 2.75)) * g + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(h, g, a, e, f) {
        if (g < f / 2) {
            return jQuery.easing.easeInBounce(h, g * 2, 0, e, f) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(h, g * 2 - f, 0, e, f) * 0.5 + e * 0.5 + a
    }
});
