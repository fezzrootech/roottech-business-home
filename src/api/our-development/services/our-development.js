'use strict';

/**
 * our-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-development.our-development');
