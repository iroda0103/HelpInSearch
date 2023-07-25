const { Op } = require("sequelize");
const Finding = require("./_Model");


const getFindings = async ({
  q,
  page = { limit: 3, offset: 0 },
  sort = { by: "name", order: "ASC" },
  filtered,
}) => {
  const filter = {};
  filter.q = q ? q : "";
  filter.order = [];
  filter.order.push(sort.by, sort.order);

  console.log(filter.q);
  const findings = await Finding.findAll({
    where: {
      name: {
        [Op.like]: `%${filter.q}%`,
      },
      ...filtered,
    },
    order: [filter.order],
    limit: page.limit,
    offset: page.offset,
  });

  return {
    list: findings,
    pageInfo: { ...page },
  };
};

module.exports = getFindings;
