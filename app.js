
const logger = require('./logger/my_logger')
const path = require('path')
const express = require('express')
const cors = require('cors');

const body_parser = require('body-parser')

const message_router = require('./routers/message_router')

logger.info('==== System start =======')

const app = express()
const port = 3000
app.use(body_parser.json())
app.use(express.static(path.join('.', '/static/'))) 

app.listen(3000, () => {
    logger.info('==== Server started =======')
    console.log('Express server is running ....');
})
;

// Enable All CORS Requests
app.use('/api/message', message_router)
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(cors({
    origin: ['file:///C:/Ecom/project/QuickChat/files%20js/%D7%9E.html', 'https://www.google.com/']
}));

logger.info('==== System stop =======')