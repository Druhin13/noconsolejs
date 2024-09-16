(function (global) {
  function disableConsole() {
    if (typeof console !== "undefined") {
      const methods = ["log", "warn", "error", "info", "debug", "table"];
      methods.forEach(function (method) {
        console[method] = function () {};
      });
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = disableConsole;
  } else {
    disableConsole();
  }
})(typeof window !== "undefined" ? window : global);
