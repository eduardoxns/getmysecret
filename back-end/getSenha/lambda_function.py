import json
import boto3

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')   #IMPORTA DYNAMODB
    table = dynamodb.Table('tb_senha')      #IMPORTA A TABELA 'tb_senha' DO DYNAMODB
    
    response = table.scan()['Items']    #DIZ QUE RESPONSE É IGUAL A TODOS OS ITENS DA TABELA
    
    return response     #RETORNA RESPONSE