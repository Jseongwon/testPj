'use strict';
import {QueryMethod} from "./queryMethod.js";

export class LoginMethod extends QueryMethod {
    static excute(request, response) {
        console.log('login!');
    }
}