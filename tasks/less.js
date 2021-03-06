'use strict';

module.exports = function less(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');

    return {
        production: {
            options: {
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                    new (require('less-plugin-clean-css'))({advanced: true})
                ]
            },
            files: [
                {
                    expand: true,
                    cwd: 'public/style',
                    src: ['*.less'],
                    dest: 'public/style/',
                    ext: '.css'
                }
            ]
        }
    };
};
