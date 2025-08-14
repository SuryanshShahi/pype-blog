/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

module.exports = factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::blog.blog")
        .findOne({
          where: { slug: id },
          populate: ["coverImage", "authorImage"],
        });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
