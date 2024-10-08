/**
 * wrap values with datetime
 * @param {Array<Object.<string, *>>} valuesList - values list.
 * @returns {Array<Object.<string, *>>} A list of data with datetime type parameters wrapped in it.
 */
const wrapValuesWithDateTime = (valuesList) => {
  return valuesList.map((values) => {
    return {
      ...values,
      created_at: new Date(),
      updated_at: new Date(),
    };
  });
};

export default wrapValuesWithDateTime;
