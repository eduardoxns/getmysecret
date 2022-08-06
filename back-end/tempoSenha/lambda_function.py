import json
import boto3
from datetime import datetime

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('tb_senha')
    
    response = table.scan(ProjectionExpression = 'ate_quando, id_senha')['Items']
    
    for item in response:
        dataBanco = item['ate_quando']
        dataID = item['id_senha']

        tempoData = datetime.strptime(dataBanco, '%d/%m/%Y as %H:%M:%S')
        
        if tempoData <= datetime.now():
            table.delete_item(
                Key = {
                    'id_senha': dataID
                }
            )
    return {
        'statusCode': 200,
        'body': json.dumps('Success')
    }