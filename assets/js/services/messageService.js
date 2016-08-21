app.service('MessageService', function ($rootScope) {
    var messageService = {};

    messageService.error = function (msg) {
        this.broadcast('error', 'Error', msg);
    };

    messageService.info = function (msg) {
        this.broadcast('info', 'Information', msg);
    };

    messageService.warning = function (msg) {
        this.broadcast('warn', 'Warning', msg);
    };

    messageService.success = function (msg) {
        this.broadcast('success', 'Success', msg);
    };

    messageService.broadcast = function (type, title, msg) {
        $rootScope.$broadcast('newMessage', {'type': type, 'title': title, 'msg': msg});
    };

    return messageService;
});