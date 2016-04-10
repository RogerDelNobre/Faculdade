import socket

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serversocket.bind((socket.gethostname(), 8080))
serversocket.listen(5)

while True:
    (localhost, adress) = serversocket.accept()
    ct = client_thread(clientsocket)
    ct.run()
