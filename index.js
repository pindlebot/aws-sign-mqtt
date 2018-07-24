const aws4 = require('aws4')

function createPresignedURL (
  {
    host = process.env.AWS_IOT_HOST,
    path = '/mqtt',
    region = process.env.AWS_REGION,
    service = 'iotdevicegateway',
    accessKeyId = process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken = process.env.AWS_SESSION_TOKEN
    // expires = 0, // @TODO: 300, check if this is working http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html
  } = {}
) {
  const signed = aws4.sign(
    {
      host,
      path,
      service,
      region,
      signQuery: true
      // headers: {
      //   'X-Amz-Expires': expires,
      // },
    },
    {
      accessKeyId,
      secretAccessKey
    }
  )

  return `wss://${host}${signed.path}&X-Amz-Security-Token=${encodeURIComponent(
    sessionToken
  )}`
}
