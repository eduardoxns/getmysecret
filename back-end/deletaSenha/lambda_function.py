import json
import boto3

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('tb_senha')
    
    response = table.delete_item(
        Key = {
            'id_senha': event['id_senha']
        }
    )
    return {
        'statusCode': 200,
        'body': json.dumps('Success')
    }