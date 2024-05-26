const aws = require('aws-sdk');
aws.config.update({ region: 'ap-northeast-1' });
const sqs = new aws.SQS({ apiVersion: '2012-11-05' });

exports.lambdaHandler = async (event, context) => {
  console.log('SQS.sendMessage() - START');
  const params = {
    MessageBody: JSON.stringify({
      user: { id: 'test-userId', name: 'test-name' },
      address: 'test-address',
    }),
    MessageDeduplicationId: 'testDeduplication',
    MessageGroupId: crypto.randomUUID(),
    QueueUrl: process.env.SQSQueueUrl,
  };

  await sqs.sendMessage(params).promise();
};
