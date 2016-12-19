export class LogService {

    enabled = true;

    constructor() {
        this.enabled = '<%= ENV %>' === 'dev';
        var methods = ['assert', 'debug', 'error', 'info', 'log', 'trace', 'warn'];
        methods.forEach((method) => {
            this[method] = this.consoleLog(method);
        });
    }

    assert(message) {
        //
    }
    debug(message, ...args) {
        //
    }
    error(message, ...args) {
        //
    }
    info(message, ...args) {
        //
    }
    log(message, ...args) {
        //
    }
    trace(message, ...args) {
        //
    }
    warn(message, ...args) {
        //
    }

    private formatError(arg) {
      if (arg instanceof Error) {
        if (arg.stack) {
          arg = (arg.message && arg.stack.indexOf(arg.message) === -1)
              ? 'Error: ' + arg.message + '\n' + arg.stack
              : arg.stack;
        } else if (arg.sourceURL) {
          arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
        }
      }
      return arg;
    }

    private consoleLog(type) {
        if (this.enabled) {
            let console = window.console || {},
              logFn = console[type] || console.log || noop,
              hasApply = false;

            let formatError = this.formatError;
            // Note: reading logFn.apply throws an error in IE11 in IE8 document mode.
            // The reason behind this is that console.log has type "object" in IE8...
            try {
                hasApply = !!logFn.apply;
            } catch (e) {
                //
            }

            if (hasApply) {
                return function(...args) {
                    var _args = [];
                    args.forEach(function(arg) {
                        _args.push(formatError(arg));
                    });
                    return logFn.apply(console, _args);
                };
            }
            // we are IE which either doesn't have window.console => this is noop and we do nothing,
            // or we are IE where console.log doesn't have apply so we log at least first 2 args
            return function(arg1, arg2) {
                logFn(arg1, arg2 === null ? '' : arg2);
            };
        }
        return function() {
            //
        };
    }
}