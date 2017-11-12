/**
 * Loads the text from a JavaScript file into memory.
 *
 * @param {string} url The URL of the JavaScript file to load.
 * @returns {string} The textual representation of the code.
 */
function loadCode(url) {
  var code;

  $.ajax({
    url: url,
    dataType: 'text',
    async: false,
    success: function (data) {
      code = data;
    }
  });

  return code;
}

/**
 * Synchronously loads and executes a JavaScript file.
 *
 * @param {string} url The URL of the JavaScript file to load and execute.
 */
function runCode(url) {
  var code = loadCode(url);
  eval(code);
}

/**
 * Computes a random integer within the range defined by the min and max (inclusive).
 *
 * @param {number} min The minimum integer (inclusive).
 * @param {number} max The maximum integer (inclusive).
 * @returns {number} A random integer in the range of [min, max].
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
