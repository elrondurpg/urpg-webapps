export class LoginRequest {
    state:number;
    returnUrl:string;
    constructor(state:number,returnUrl:string) {
        this.state = state;
        this.returnUrl = returnUrl;
    }
}