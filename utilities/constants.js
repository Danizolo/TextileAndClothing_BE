/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 14/10/2023 - 21:43:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/


// User Types
exports.Users = {
    _masterAdmin: 1,
    _deliveryStaff: 2,
    _customer: 3
}




// Categories
exports.Categories = {
    _shirts: 1,
    _tShirts: 2,
    _pants: 3
}



// Status Codes
exports.StatusCodes = {
    SuccessResponse: {
        _ok: 200,
        _created: 201
    },
    ClientErrorResponse:{
        _badRequest: 400,
        _notFound: 404,
        _alreadyExists : 409
    },
    ServerErrorResponse: {
        _internalError : 500
    }

}

// Status
exports.Status = {
    _active: 1,
    _inActive: 0
}



exports.dateToday = () => {
    return new Date();
}


exports.istTimeNow = (date) => {
    return date.toLocaleTimeString('en',
    { timeStyle: 'short', hour12: true, timeZone: 'Asia/Kolkata' })
}



exports.student = {
    firstName: null,
    
    set changeName(newName) {
        this.firstName = newName;
    }
};
