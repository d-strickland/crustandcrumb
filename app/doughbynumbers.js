
// eslint-disable-next-line no-unused-vars, no-undef
const app = new Vue({
    el: '#app',
    data: {
        batches: 2,
        flourWeight: 10,
        ingredients: { 
            Flour: 1.00,
            Water: 0.70,
            Starter: 0.75,
            Salt: 0.03
        }
    },
    methods: {
        getWeight: function getWeight (batches, flourPerBatch, percent) {

            'use strict';

            // eslint-disable-next-line no-magic-numbers
            return (batches * flourPerBatch * percent).toFixed(1);

        }
    }
});
