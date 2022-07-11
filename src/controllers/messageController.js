import * as MessageService from '../services/messageService.js'

async function message(request, response) {
  const { message, phoneNo } = request.body;
  try {
    const responseMessage = await MessageService.sendMessage(message, phoneNo);
    response.send(responseMessage);
  } catch(error) {
    response.status(error.status).send(error);
  }
}

export { message };