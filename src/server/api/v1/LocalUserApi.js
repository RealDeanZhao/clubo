import {LocalUserRepository} from '../../repositories';

const userRepository = new LocalUserRepository();

export default class LocalUserApi {
    async create(ctx, next) {
        let result = await userRepository.create(ctx.request.body);
        ctx.body = 'haha';
    }

    async update(ctx, next) {
        let result = await userRepository.update(ctx.request.body);
        ctx.body = 'haha';
    }
}

