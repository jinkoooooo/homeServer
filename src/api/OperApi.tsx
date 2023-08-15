import {Operation} from "../model/Operation";

import serverApi from "./IApi";


export function OperApi() {
    const _api = serverApi();

    return {
        /**
         * 로그인
         * @params 사용자 로그인 정보.
         * @param params
         */
        OperCreate : function(params:Operation){

            return _api.post('/opers/create',
                JSON.stringify({
                    name:params.name,
                    address:params.address,
                    phoneNo:params.phoneNo,
                    operQty:params.operQty
                })
            );
        },


    }

}