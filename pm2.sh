pm2 start 'node server.js'
pm2 start 'peerjs -p 3001 -k peerjs --path /mypeer'
pm2 serve build/ 3003 --name "frontend" --spa