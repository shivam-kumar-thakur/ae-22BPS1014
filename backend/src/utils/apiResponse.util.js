class ApiResponse{
    constructor(
        statuscode,
        message="success",
        responseData
    ){
        this.statuscode=statuscode;
        this.message=message;
        this.responseData=responseData;
        this.success=statuscode<400;
    }
}

export {ApiResponse};