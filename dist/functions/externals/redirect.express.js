"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function redirect(props) {
    const { app, urlToRedirect } = props;
    return app.redirect(urlToRedirect);
}
exports.default = redirect;
