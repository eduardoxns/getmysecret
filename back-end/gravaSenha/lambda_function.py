import json
import boto3
from uuid import uuid4
from datetime import datetime, timedelta

def lambda_handler(event, context):
	
	dynamodb = boto3.resource('dynamodb')   #IMPORTA DYNAMODB
	table = dynamodb.Table('tb_senha')      #IMPORTA A TABELA 'tb_senha' DO DYNAMODB
	
	def calculaTempo():						#DEFINE UMA FUNÇÃO PARA CALCULAR O TEMPO
		tempo = str(event['ate_quando'])	#CRIA UMA VARIAVEL "TMEPO" E DIZ QUE É UMA STRING COM O VALOR DO EVENTO "ate_quando"
		tempo = tempo.split(":")			#SEPARA A STRING A CADA ":"
		calculo = datetime.now() + timedelta(days=int(tempo[0]), hours=int(tempo[1]), minutes=int(tempo[2]), seconds=int(tempo[3]))	#DIZ QUE CALCULO É IGUAL AO TEMPO ATUAL + O TEMPO QUE O USUARIO SELECIONOU
		return str(calculo.strftime('%d/%m/%Y as %H:%M:%S'))	#RETORNA UMA STRING O CALCULO DE TEMPO DE ESPIRAÇÃO 
	
	response = table.put_item(	#CRIA UMA FUNÇÃO PARA POR OS ITENS NA TABELA
		Item = {				#REFERENCIA OS ITENS
			'id_senha': str(uuid4()),											#GERA UM ID ATRAVÉS DO UUID4
			'criado_em': str(datetime.now().strftime('%d/%m/%Y as %H:%M:%S')),	#MOSTRA A DATA QUE FOI CRIADO ATRAVÉS DE UM DATETIME.NOW()
			'ate_quando': calculaTempo(),										#O TEMPO LIMITE É IGUAL A FUNÇÃO "calculaTempo"
			'senha': event['senha']												#A SENHA É IGUAL EVENTO SENHA
		}
	)
	return {    #SE TUDO OCORRER DE FORMA CORRETA, RETORNA "SUCESSO"
		'statusCode': 200,
		'body': json.dumps('Success')
	}