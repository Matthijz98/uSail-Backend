import { Router } from 'express';
import BoatsController from '@controllers/boats.controller';
import { CreateBoatDto } from '@dtos/boats.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BoatsRoute implements Routes {
  public path = '/boats';
  public router = Router();
  public boatsController = new BoatsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.boatsController.getBoats);
    this.router.get(`${this.path}/:id(\\d+)`, this.boatsController.getBoatById);
    this.router.post(`${this.path}`, validationMiddleware(CreateBoatDto, 'body'), this.boatsController.createBoat);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateBoatDto, 'body', true), this.boatsController.updateBoat);
    this.router.delete(`${this.path}/:id(\\d+)`, this.boatsController.deleteBoat);
  }
}

export default BoatsRoute;