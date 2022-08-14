import json
import boto3

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('tb_senha')
    
    senhaID = event['senhaID']
    senhaIP = event['acessoIP']
    
    response = table.get_item(
        Key = {
            'id_senha': senhaID
        }
    )
    
    item = response['Item']
    
    if item['acesso_ip'] == "-":
        item['acesso_ip'] = senhaIP
        table.put_item(Item = item)
    elif senhaIP in item['acesso_ip']:
        pass
    else:
        item['acesso_ip'] += ' | ' + senhaIP
        table.put_item(Item = item)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Success')
    }