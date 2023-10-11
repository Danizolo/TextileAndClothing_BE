

// User Types
exports.Users = {
    _masterAdmin: 1,
    _deliveryStaff: 2,
    _customer: 3
}



// Status Codes
exports.StatusCodes = {
    SuccessResponse: {
        _ok: 200,
        _created: 201
    },
    ClientErrorResponse:{
        _badRequest: 400
    }

}

// Status
exports.Status = {
    _active: 1,
    _inActive: 0
}
