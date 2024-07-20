import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(request, response) {
	  const status = {
		  redis: redisClient.isAlive(),
		  db: dbClient.isAlive(),
	  };
	  response.status(200).send(status);
  }

  static async getStats(request, response) {
	  const status = {
		  users: await dbClient.nbUsers(),
		  files: await dbClient.nbFiles(),
	  };
	  response.status(200).send(status);
  }
}

module.exports = AppController;
