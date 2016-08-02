import {LocalUserRepository} from '../../repositories';

const userRepository = new LocalUserRepository();

export default class AuthApi {
    async auth(ctx, next) {
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        const user = await userRepository.getUserByUserNameAndPassword(username, password);

        ctx.body = JSON.stringify(user);
    }
}