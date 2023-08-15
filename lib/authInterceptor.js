module.exports = (req, res, next) => {
    console.log('authenticated', req.user)
    if (!req.user) { return res.status(401).json({ success: false, message: "Authentication required" })}
    next()
}