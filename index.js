var mygitalkConfig = {};

module.exports = {
    book: {
        assets: "./assets",
        css: [
            "https://unpkg.com/gitalk/dist/gitalk.css",
        ],
        js: [
            "https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js",
            "gitalk.min.js",
            "mygitalk.js"
        ]
    },
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.mygitalk);

            mygitalkConfig = this.options.pluginsConfig["mygitalk"];
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', page.content);

            if (mygitalkConfig) {
                var str = '<div id="gitalk-container"></div>';

                page.content = page.content + '\n' + str;
            }

            return page;
        }
    }
};
