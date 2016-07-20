
interface IUserRepository {
    getUserById(id: string): any;
    getUsersByNames(names: [String]): any;
    getUsersByIds(ids: [String]): any;
    getUserByLoginName(loginName: String): any;
    getUserByMail(email: String): any;
    getUsersByQuery(query: String): any;
    getUserByNameAndKey(loginName: String, key: String): any;
    addOrUpdate(): void;
}

export {IUserRepository}

