import json
import boto3

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('tb_senha')
    
    response = table.get_item(
        Key = {
            'id_senha': event["queryStringParameters"]['id']
        }
    )
    return {
        'body': response["Item"]
    }
