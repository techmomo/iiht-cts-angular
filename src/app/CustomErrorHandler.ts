import { ErrorHandler } from "@angular/core";
import { EmptyError } from "rxjs";

export class CustomErrorHandler implements ErrorHandler{
    handleError(err:Error){
        if(err instanceof EmptyError){
            console.log(err);
        }else{
            console.error(err);
        }
        //console.log(err);
    }
}