class ApiResponse{
    constructor(statusCode, message = 'Success', data = {}, success = true) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400; // Assuming success for status codes < 400
    }
}

export { ApiResponse };
