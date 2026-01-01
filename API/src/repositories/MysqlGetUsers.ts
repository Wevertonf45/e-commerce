import type { IGetUsersRepository } from "../controllers/getUsers/protocols.js"
import { MySQLClient } from "../database/database.js"
import type { User } from "../models/User.js"

export class MysqlGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await MySQLClient.query("SELECT * FROM users")
        return users as User[]
    }
}