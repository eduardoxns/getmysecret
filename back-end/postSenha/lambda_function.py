import json
import boto3
from uuid import uuid4
from datetime import datetime, timedelta

def lambda_handler(event, context):
	
	dynamodb = boto3.resource('dynamodb')
	table = dynamodb.Table('tb_senha')
	
	senhaID = str(uuid4())
	
	tempo = str(event['ate_quando'])
	tempo = tempo.split(":")
	
	calculo = datetime.now() + timedelta(days=int(tempo[0]), hours=int(tempo[1]), minutes=int(tempo[2]), seconds=int(tempo[3]))
	
	tempoLimite = str(calculo.strftime('%d/%m/%Y as %H:%M:%S'))
	TTL = int(calculo.timestamp())
	
	response = table.put_item(
		Item = {
			'id_senha': senhaID,
			'acesso_ip': '-',
			'criado_em': str(datetime.now().strftime('%d/%m/%Y as %H:%M:%S')),
			'ate_quando': tempoLimite,
			'senha': event['senha'],
			'TTL': TTL
		}
	)
	return {
		'body': senhaID
	}