class ApiError extends Error{
    constructor(
        statuscode,
        message="fail",
        errors=[],
        stack=""
    ){
        super(Error);

        this.message=message;
        this.statuscode=statuscode;
        this.errors=errors;
        this.success=false;
        this.data=null;
        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiError};