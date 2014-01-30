/*global hbApp*/
/* jslint node: true */
"use strict";

hbApp.service("TagsSrvc", function (HttpSrvc) {

    var URI_PREFIX = "/heinebier/tag";

    return {
        fetchAll: function () {
            var url = URI_PREFIX;
            return HttpSrvc.hbGet(url);
        }
    };
});