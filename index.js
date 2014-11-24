var defined = {};

/**
 * Return whether variable is defined
 * @param v
 * @returns {boolean}
 */
defined.is_defined = function (v) {
    return typeof v !== 'undefined';
}

/**
 * If variable defined, return whether equals 1
 * Else return undefined
 * @param v
 * @returns {boolean}
 */
defined.binary_to_boolean = function(v) {
    return defined.is_defined(v) ? v == 1 : undefined;
};

/**
 * If variable defined, return binary value of boolean
 * Else return undefined
 * @param v
 * @returns {*}
 */
defined.boolean_to_binary = function(v) {
    if(defined.is_defined(v)){
        if(v == 'true' || v == true) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return undefined;
    }
};

module.exports = defined;