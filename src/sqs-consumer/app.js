exports.lambdaHandler = async (event, context) => {
  const records = event.Records;
  const body = JSON.parse(records[0].body);

  return {
    records: records,
    body: body,
  };
};
