import json
import boto3
from boto3.dynamodb.conditions import Attr

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')   #IMPORTA DYNAMODB
    table = dynamodb.Table('tb_senha')      #IMPORTA A TABELA 'tb_senha' DO DYNAMODB
    
    senha = event['senha']  #CRIA UMA VARIAVEL QUE RECEBE UM VALOR DO FRONT-END ATRAVES DE UM BODY
    
    response = table.scan(FilterExpression = Attr("senha").eq(senha))['Items']  #FAZ UMA BUSCA NA TABELA PELO ITEM QUE CONTÉM A VARIAVEL "SENHA"
    
    for item in response:               #ENTRA DENTRO DO JSON "RESPONSE"
        senhaID = item.get('id_senha')  #CRIA UMA VARIAVEL "senhaID" QUE CORRENSPONDE COM O ID DA SENHA PESQUISADA
    
    table.delete_item(   #CRIA UMA FUNÇÃO PARA DELETAR UM ITEM DA TABELA
        Key = {
            'id_senha': senhaID     #REFERENCIA A CHAVE PRIMARIA DO ITEM EM QUESTÃO
        }
    )
    return {    #SE TUDO OCORRER DE FORMA CORRETA, RETORNA "SUCESSO"
        'statusCode': 200,
        'body': json.dumps('Success')
    }