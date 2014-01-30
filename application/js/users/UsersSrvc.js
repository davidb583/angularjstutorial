/*global hbApp*/
/* jslint node: true */
"use strict";

hbApp.service("UsersSrvc", function (HttpSrvc) {

    var URI_PREFIX = "/heinebier/users";

    return {
        fetchAll: function () {
            var url = URI_PREFIX;
            return HttpSrvc.hbGet(url);
        }
    };
});