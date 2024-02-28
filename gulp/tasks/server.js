export const server = (done) => {
    app.plugins.browsersync.init({
        proxy: "gps.loc",
        // server: {
        //     baseDir: "dist",
        //     index: "index.html"
        // },
        notify: false,
        part: 3000
    })
}