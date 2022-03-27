"use strict";
var NewHBOMax = /** @class */ (function () {
    function NewHBOMax() {
    }
    NewHBOMax.prototype.Renew = function () {
        console.log('Renewing HBOMAX');
    };
    NewHBOMax.prototype.Login = function () {
        console.log('Login to HBOMAX');
    };
    NewHBOMax.prototype.Cancel = function () {
        console.log('Canceling HBOMAX');
    };
    return NewHBOMax;
}());
var NewNetflix = /** @class */ (function () {
    function NewNetflix() {
    }
    NewNetflix.prototype.Renew = function () {
        console.log('Renewing NetFlix');
    };
    NewNetflix.prototype.Login = function () {
        console.log('Login to Netflix');
    };
    NewNetflix.prototype.Cancel = function () {
        console.log('Canceling Netflix');
    };
    return NewNetflix;
}());
var NewDisney = /** @class */ (function () {
    function NewDisney() {
    }
    NewDisney.prototype.Renew = function () {
        console.log('Renewing Disney');
    };
    NewDisney.prototype.Login = function () {
        console.log('Login to Disney');
    };
    NewDisney.prototype.Cancel = function () {
        console.log('Canceling Disney');
    };
    return NewDisney;
}());
var ServiceOperation;
(function (ServiceOperation) {
    ServiceOperation[ServiceOperation["Renew"] = 0] = "Renew";
    ServiceOperation[ServiceOperation["Cancel"] = 1] = "Cancel";
    ServiceOperation[ServiceOperation["Login"] = 2] = "Login";
})(ServiceOperation || (ServiceOperation = {}));
var button = document.getElementById('btnExecution');
var service = document.getElementById('idService');
var operation = document.getElementById('idOperation');
document.getElementById('msgErrorService').style.display = "none";
document.getElementById('msgErrorOperation').style.display = "none";
var selectedService;
var currentOperation;
service.addEventListener('change', function () {
    if (service.value !== '0') {
        document.getElementById('msgErrorService').style.display = "none";
    }
    switch (service.value) {
        case '1':
            selectedService = new NewHBOMax();
            break;
        case '2':
            selectedService = new NewNetflix();
            break;
        case '3':
            selectedService = new NewDisney();
            break;
    }
});
// assignated operation
operation.addEventListener('change', function () {
    if (service.value == '0') {
        document.getElementById('msgErrorService').style.display = "block";
        operation.value = '0';
    }
    else {
        if (operation.value == '0') {
            document.getElementById('msgErrorOperation').style.display = "block";
        }
        else {
            document.getElementById('msgErrorOperation').style.display = "none";
        }
        switch (operation.value) {
            case '1':
                currentOperation = ServiceOperation.Renew;
                break;
            case '2':
                currentOperation = ServiceOperation.Cancel;
                break;
            case '3':
                currentOperation = ServiceOperation.Login;
                break;
        }
        document.getElementById('msgErrorService').style.display = "none";
    }
});
button.addEventListener('click', function () {
    if (service.value == '0' && operation.value == '0') {
        document.getElementById('msgErrorService').style.display = "block";
        document.getElementById('msgErrorOperation').style.display = "block";
    }
    else if (service.value !== '0' && operation.value == '0') {
        document.getElementById('msgErrorService').style.display = "none";
        document.getElementById('msgErrorOperation').style.display = "block";
    }
    else if (service.value == '0' && operation.value !== '0') {
        document.getElementById('msgErrorService').style.display = "block";
        document.getElementById('msgErrorOperation').style.display = "none";
        operation.value = '0';
    }
    else {
        document.getElementById('msgErrorService').style.display = "none";
        document.getElementById('msgErrorOperation').style.display = "none";
        switch (currentOperation) {
            case ServiceOperation.Renew:
                selectedService.Renew();
                break;
            case ServiceOperation.Cancel:
                selectedService.Cancel();
                break;
            case ServiceOperation.Login:
                selectedService.Login();
                break;
        }
    }
});
