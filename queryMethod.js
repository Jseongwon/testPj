'use strict';
import{LoginMethod} from "./loginMethod.js";
import{SelectMethod} from "./selectMethod.js";

export class QueryMethod {
    constructor() {
        this.queryMethod = null;
    }

    static changeMethod(command) {
        switch (command){
            case ':login':
                QueryMethod.queryMethod = LoginMethod;
                break;

            case ':select':
                QueryMethod.queryMethod = SelectMethod;
                break;

            default:
                break;
        }
    }

    static excute(request, response) {
        if(QueryMethod.queryMethod != null){
            QueryMethod.queryMethod.excute(request, response);
        }
    }
}

QueryMethod.changeMethod(':login');
QueryMethod.excute();

QueryMethod.changeMethod(':select');
QueryMethod.excute();