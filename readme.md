
## aws-sign-mqtt

Set the AWS_IOT_HOST environmental variable. AWS_IOT_HOST looks like:

```
xxxxx.iot.us-east-1.amazonaws.com
```

```bash
export AWS_IOT_HOST=$(aws --region us-east-1 iot describe-endpoint --output text)
```

```js

const url = require('aws-sign-mqtt')()

console.log(url)

// => wss://XXXXX.iot.us-east-1.amazonaws.com/mqtt?X-Amz-Date=20180812T133259Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ZZZ%2F20180812%2Fus-east-1%2Fiotdevicegateway%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=PPP&X-Amz-Security-Token=QQQ
```
