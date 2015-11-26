'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';

var url = 'src/data/home.json';

var HomeStore = assign({}, EventEmitter.prototype, {
    getData: function() {
        return new Promise(function(resolve, reject) {
            request
                .get(url)
                .set('Accept', 'application/json')
                .end(function(error, response) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response.body);
                    }
                })

        });
    }
})

module.exports = HomeStore;
