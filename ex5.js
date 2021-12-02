function toQueryString(params) {
  const specialKeys = ["orderByField", "orderByDirection"];

  const queryString = Object.entries(params)
    .filter(([key]) => !specialKeys.includes(key))
    .map(
      ([key, value]) => `${key}=${Array.isArray(value) ? value.join() : value}`
    )
    .join("&");

  const { orderByField = "name", orderByDirection = "asc" } = params;
  const sort = `sort=${orderByField}:${orderByDirection}`;

  return `?${queryString}&${sort}`;
}

const params = {
  cols: ["name", "age", "quota_holders"],
  orderByField: "name",
  orderByDirection: "desc",
  limit: 10,
};

const queryString = toQueryString(params);

console.log(queryString);
