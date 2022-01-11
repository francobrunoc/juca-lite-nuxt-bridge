import Amplify from 'aws-amplify'

const config = {
  aws_project_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_BNQnph77f',
  aws_user_pools_web_client_id: '4u4h5h6eiib1751l4b4trndlhe',
}

Amplify.configure(config)
