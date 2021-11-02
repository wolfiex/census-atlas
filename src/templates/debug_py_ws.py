import asyncio
import websockets
import datetime


f = open('./debug.txt','a')

async def start(websocket, path):
    print("connected")
    while True:
       data = await websocket.recv()
       print(f"< {data}",datetime.datetime.now().__str__())

       f.write('%s: %s\n'%(datetime.datetime.now().__str__(),data))

async def main():
    server = await websockets.serve(start, 'localhost', 5001)
    await server.wait_closed()
    
asyncio.run(main())