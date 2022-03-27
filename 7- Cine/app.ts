interface Service {
    Renew(): void;
    Login(): void;
    Cancel(): void;
}

class NewHBOMax implements Service{
    Renew(): void {
        console.log('Renewing HBOMAX');
    }
    Login(): void {
        console.log('Login to HBOMAX');
    }
    Cancel(): void {
        console.log('Canceling HBOMAX');
    }
}

class NewNetflix implements Service{
    Renew(): void {
        console.log('Renewing NetFlix');
    }
    Login(): void {
        console.log('Login to Netflix');
    }
    Cancel(): void {
        console.log('Canceling Netflix');
    }
}

class NewDisney implements Service{
    Renew(): void {
        console.log('Renewing Disney');
    }
    Login(): void {
        console.log('Login to Disney');
    }
    Cancel(): void {
        console.log('Canceling Disney');
    }
}

enum ServiceOperation{
    Renew,
    Cancel,
    Login
}

const button = document.getElementById('btnExecution')!;
const service = <HTMLSelectElement> document.getElementById('idService');
const operation = <HTMLSelectElement> document.getElementById('idOperation');
document.getElementById('msgErrorService')!.style.display  = "none";
document.getElementById('msgErrorOperation')!.style.display  = "none";

let selectedService: Service;
let currentOperation: ServiceOperation;

service.addEventListener('change', () => {
    if(service.value !== '0'){
        document.getElementById('msgErrorService')!.style.display  = "none";
    }
    switch(service.value){
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
operation.addEventListener('change', () =>{
    if(service.value == '0'){
        document.getElementById('msgErrorService')!.style.display  = "block";
        operation.value = '0';
    } else {
        if(operation.value == '0'){
            document.getElementById('msgErrorOperation')!.style.display  = "block";
        } else  {
            document.getElementById('msgErrorOperation')!.style.display  = "none";
        }
        switch(operation.value){
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
        document.getElementById('msgErrorService')!.style.display  = "none";
    }
});

button.addEventListener('click', () =>{
    if(service.value == '0' && operation.value == '0'){
        document.getElementById('msgErrorService')!.style.display  = "block";
        document.getElementById('msgErrorOperation')!.style.display  = "block";
    }else if(service.value !== '0' && operation.value == '0'){
        document.getElementById('msgErrorService')!.style.display  = "none";
        document.getElementById('msgErrorOperation')!.style.display  = "block";
    } else if(service.value == '0' && operation.value !== '0'){
        document.getElementById('msgErrorService')!.style.display  = "block";
        document.getElementById('msgErrorOperation')!.style.display  = "none";
        operation.value = '0';
    } else {
        document.getElementById('msgErrorService')!.style.display  = "none";
        document.getElementById('msgErrorOperation')!.style.display  = "none";
        switch(currentOperation){
            case ServiceOperation.Renew: selectedService.Renew();
            break;
    
            case ServiceOperation.Cancel: selectedService.Cancel();
            break;
    
            case ServiceOperation.Login: selectedService.Login();
            break;
        }
    }
});
