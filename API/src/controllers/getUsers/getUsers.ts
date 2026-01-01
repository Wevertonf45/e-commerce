import type { User } from "../../models/User.js";
import type { HttpResponse } from "../protocols.js";
import type { IGetUsersController, IGetUsersRepository } from "./protocols.js";

export class GetUsersController implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository) { }
    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();
            return {
                statusCode: 200,
                body: users
            };

        } catch (error) {
            console.error('Error in GetUsersController:', error);
            return {
                statusCode: 500,
                body: 'Internal server error'
            };
        }
    }

}