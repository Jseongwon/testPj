'use strict';
import {QueryMethod} from "./queryMethod.js";

export class SelectMethod extends QueryMethod{
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