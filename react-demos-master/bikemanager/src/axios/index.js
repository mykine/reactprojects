import JsonP from 'jsonp'
export default class Axios{
    static jsonp(options){
        return new Promise((resovle,reject)=>{
            JsonP(options.url,{
                param:"callback"
            },function(err,response){
                // debugger; 
                if( response.status == "success" ){
                    return resovle(response);
                }else{
                    return reject(response.message);
                }
            })
        })
    }
}