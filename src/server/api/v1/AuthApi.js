import {LocalUserRepository} from '../../repositories';
import jwt from 'jsonwebtoken';
const userRepository = new LocalUserRepository();

export default class AuthApi {
    async auth(ctx, next) {
        return await jwt.verify(token, 'aaaa')
    }
}