var superstruct = require('superstruct');

[
  'coerce', 'refine', 'optional', 'defaulted', 'masked', 'trimmed', 'empty',
  'min', 'below', 'pattern', 'size', 'assign', 'omit', 'partial', 'pick',
].forEach(function(name) {
  var f = superstruct[name];
  if (typeof(f) !== 'function') {
    return;
  }
  Object.defineProperty(superstruct.Struct.prototype, name, {
    configurable: true,
    writable: true,
    value: function() {
      var args = [ this ];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return f.apply(null, args)
    },
  });
});
