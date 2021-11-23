import bcrypt from 'bcrypt';
import DB from '@databases';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import {Boat} from "@interfaces/boat.interface";
import {CreateBoatDto} from "@dtos/boat.dto";

class BoatService {
  public boats = DB.Boats;

  public async findAllBoat(): Promise<Boat[]> {
    const allBoat: Boat[] = await this.boats.findAll();
    return allBoat;
  }

  public async findBoatById(boatId: number): Promise<Boat> {
    if (isEmpty(boatId)) throw new HttpException(400, "You're not boatId");

    const findBoat: Boat = await this.boats.findByPk(boatId);
    if (!findBoat) throw new HttpException(409, "You're not boat");

    return findBoat;
  }

  public async createBoat(boatData: CreateBoatDto): Promise<Boat> {
    if (isEmpty(boatData)) throw new HttpException(400, "You're not boatData");

    const findBoat: Boat = await this.boats.findOne({ where: { id: boatData.name } });
    if (findBoat) throw new HttpException(409, `You're name ${boatData.name} already exists`);

    const createBoatData: Boat = await this.boats.create({ ...boatData });
    return createBoatData;
  }

  public async updateBoat(boatId: number, boatData: CreateBoatDto): Promise<Boat> {
    if (isEmpty(boatData)) throw new HttpException(400, "You're not boatData");

    const findBoat: Boat = await this.boats.findByPk(boatId);
    if (!findBoat) throw new HttpException(409, "You're not boat");

    await this.boats.update({ ...boatData}, { where: { id: boatId } });

    const updateBoat: Boat = await this.boats.findByPk(boatId);
    return updateBoat;
  }

  public async deleteBoat(boatId: number): Promise<Boat> {
    if (isEmpty(boatId)) throw new HttpException(400, "You're not boatId");

    const findBoat: Boat = await this.boats.findByPk(boatId);
    if (!findBoat) throw new HttpException(409, "You're not boat");

    await this.boats.destroy({ where: { id: boatId } });

    return findBoat;
  }
}

export default BoatService;
