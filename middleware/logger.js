//***Custom Middleware*** copies Morgan

module.exports = () => {
    return (req, res, next) => {
        const time = new Date().toISOString()
        console.log(`${time} ${req.ip} ${req.method} ${req.url}`);

        //when we are one, we move on to the next piece of middleware in the stack (which is the routes)
        next();
    }  
} 