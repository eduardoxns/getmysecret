import os
import json
import boto3
from datetime import datetime

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')   #IMPORTA DYNAMODB
    table = dynamodb.Table('tb_senha')      #IMPORTA A TABELA 'tb_senha' DO DYNAMODB
    
    response = table.scan(ProjectionExpression = 'ate_quando, id_senha')['Items']   #PESQUISA PELO TEMPO LIMITE E O ID DOS ITENS DA TABELA
    
    for i in response:              #CRIA UM LAÇO DE REPETIÇÃO PARA CADA ITEM EM RESPONSE
        dataBanco = i['ate_quando'] #CRIA UMA VARIAVEL COM O VALOR DO TEMPO LIMITE
        dataID = i['id_senha']      #CRIA UMA VARIAVEL COM O VALOR DO ID

        tempoData = datetime.strptime(dataBanco, '%d/%m/%Y as %H:%M:%S')    #CRIA UMA VARIAVEL E DIZ QUE O TEMPO LIMITE É FORMATADO DE TAL FORMA
        
        if tempoData <= datetime.now(): #SE O TEMPO LIMITE FOR MENOR OU IGUAL AO TEMPO ATUAL
            table.delete_item(          #EXECUTA A FUNÇÃO DE DELETAR ITEM
                Key = {
                    'id_senha': dataID  #REFERENCIA A CHAVE PRIMARIA DO ITEM EM QUESTÃO
                }
            )
    return {    #SE TUDO OCORRER DE FORMA CORRETA, RETORNA "SUCESSO"
        'statusCode': 200,
        'body': json.dumps('Success')
    }