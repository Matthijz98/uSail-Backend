import { NextFunction, Request, Response } from 'express';
import { CreateBoatDto } from '@dtos/boat.dto';
import { Boat } from '@interfaces/boat.interface';
import boatService from '@/services/boat.service';

class BoatsController {
  public boatService = new boatService();

  public getBoats = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBoatsData: Boat[] = await this.boatService.findAllBoat();

      res.status(200).json({ data: findAllBoatsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBoatById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const boatId = Number(req.params.id);
      const findOneBoatData: Boat = await this.boatService.findBoatById(boatId);

      res.status(200).json({ data: findOneBoatData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBoat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const boatData: CreateBoatDto = req.body;
      const createBoatData: Boat = await this.boatService.createBoat(boatData);

      res.status(201).json({ data: createBoatData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBoat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const boatId = Number(req.params.id);
      const boatData: CreateBoatDto = req.body;
      const updateBoatData: Boat = await this.boatService.updateBoat(boatId, boatData);

      res.status(200).json({ data: updateBoatData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBoat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const boatId = Number(req.params.id);
      const deleteBoatData: Boat = await this.boatService.deleteBoat(boatId);

      res.status(200).json({ data: deleteBoatData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BoatsController;
