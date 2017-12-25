import request from 'request';

//middleware function to verify each and every request
var authchecker = async (req, res) => {

    var accesstoken = req.body.accesstoken;
    //probably clean accesstoken to avoid injections
    //request to Account kit API endpoint to authenticate user
    request('https://graph.accountkit.com/v1.0/me/?access_token=' + accesstoken, function (error, response, body) {
        if (error) {
            res.send({
                "data": [],
                "message": 'Authentication service Facing Down time',
                "status": 500,
                "data_count": 0
            });
        }
        else if (response.statusCode !== 200) {
            res.send({
                "data": [],
                "message": 'Authentication failed',
                "status": 500,
                "data_count": 0
            });
        }
        else {

            var temp = JSON.parse(body);
            console.log(temp)
            res.json(temp);
            //   req.body.phone = temp.phone.national_number;
            //   next();
        }
    });
}

export default authchecker;