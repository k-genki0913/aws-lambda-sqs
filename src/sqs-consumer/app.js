exports.lambdaHandler = async (event, context) => {
  const batchItemFailures = [];

  for (const record of event.Records) {
    try {
      await console.log(record.body);
      throw new Error();
    } catch (error) {
      batchItemFailures.push({ itemIdentifier: record.messageId });
    }
  }
  console.log(JSON.stringify({ batchItemFailures: batchItemFailures }));

  return { batchItemFailures: batchItemFailures };
};
