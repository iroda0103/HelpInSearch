const Joi = require('joi');

exports.postFindingSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    type: Joi.string().required(),
    user_id:Joi.number().required(),
    address_id:Joi.number().required(),
    img:Joi.string(),
  }),
};

// ?q=a&page[offset]=0&page[limit]=10
exports.getFindingSchema = {
  query: Joi.object({
      q: Joi.string(),
      page: Joi.object({
          offset: Joi.number().integer(),
          limit: Joi.number().integer().when("offset", { is: Joi.exist(), then: Joi.required(), otherwise: Joi.forbidden() }),
      }),
      sort: Joi.object({
          by: Joi.string().valid("updated_at", "created_at"),
          order: Joi.string().valid("asc", "desc"),
      }),
      filter: Joi.object({
        type: Joi.string().valid("found", "lost")
    }),
  }),
};


