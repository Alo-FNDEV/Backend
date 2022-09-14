
function grabby(app) {
    require("fs").readdir(require("path").join(__dirname, "../workers"), (err, files) => {
        console.log(files)
        files.filter(function(mainFiles) {
        if (err) {
            console.log(err)
        } else {
            if (mainFiles.endsWith(".js")) {
                try {
                    app.use(require(`../workers/${mainFiles}`))
                } catch (err) {
                    console.log(`Sorry, ${mainFiles} Failed To Load, Err: ${err}`)
                }
            } else {
                console.log(`Sorry, ${mainFiles} Failed To Load Please make sure it ends with .js`)
            }
        }
     })
    })
}

module.exports = {
    grabby: grabby
}