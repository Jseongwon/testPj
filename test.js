'use strict';
// import{LoginMethod} from "./loginMethod.js";
// import{SelectMethod} from "./selectMethod.js";

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
class SelectMethod extends QueryMethod{
    static excute(request, response) {
        // let queryString;
        //
        // queryString = (request.query) ? request.query : undefined;
        // // api 명령어가 선택일 때 연산 만들기
        // if(queryString.type != undefined){
        //     response.send({message: 'qeury!!'})
        //     return;
        // }
        // Database.connection.query(
        //     "SELECT * FROM Employee;",
        //     (err, rows, fields) => {
        //         if(err) throw err;
        //
        //         response.send(rows);
        //     }
        // )
        console.log('select!');
    }
}

class LoginMethod extends QueryMethod {
    static excute(request, response) {
        console.log('login!');
    }
}


QueryMethod.changeMethod(':login');
QueryMethod.excute();

QueryMethod.changeMethod(':select');
QueryMethod.excute();

