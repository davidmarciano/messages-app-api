import gravatar from 'gravatar';

const userController = User => {
    const get = (req, res) => {
        User.find(req.query, (err,users) => {
            err ? res.status(400).send(err) : res.json(users);
        })
    }
    const post = (req, res) => {
        const {email, message} = req.body;
        const requestObject = {email, message};
        requestObject.gravatar = gravatar.url(email,{protocol: 'https'});
        const user = new User(requestObject);
        user.save((error) => {
            if(error) {
                res.status(400);
                res.send(error.message);
            }
            else {
                res.status(201);
                res.send(user);
            }
        });
    }   
    return {
        get,post
    } 
}

export default userController;