'''
IMPORTANTE: Configurar la contraseña de aplicacion para poder enviar el correo al destinatario.
'''

import smtplib 
from email.message import EmailMessage 

email_subject = "Hola" 
sender_email_address = "ibarrajose758@gmail.com" # Remitente
receiver_email_address = "inagepoh@gmail.com"  #Destinatario
email_smtp = "smtp.gmail.com" # Servicio
email_password = "ypskntjkjgjgttwd" #Contraseña de aplicaciones
message = EmailMessage() # Creacion del proyecto

# Configuracion de headers 
message['Subject'] = email_subject 
message['From'] = sender_email_address 
message['To'] = receiver_email_address 

# Cuerpo del mensaje
message.set_content("Hello from Python!") 

# Set smtp server y el puerto
server = smtplib.SMTP(email_smtp, '587') 

server.ehlo() 
server.starttls() 

# Login a la cuenta de email 
server.login(sender_email_address, email_password) 

# Mandar email 
server.send_message(message) 

# Terminar conexion con el servidor
server.quit()