import path from 'path';

// directories
const getDirectories = () => {
    const root = path.resolve(__dirname, '../../');
    const dist = path.resolve(root, './dist');
    const src = path.resolve(root, './src');
    const client = path.resolve(src, './client/react');
    const server = path.resolve(src, './server');
    return {
        root, dist, src, client, server
    }
}

// server
const getServer = () => {
    const host = 'localhost';
    const port = '3000';
    const apiBase = '/api/v1/';
    const getTopic = () => {
        const base = `${apiBase}topics`;
        const getAll = `${base}`;
        const get = `${base}/:id`;
        const create = `${base}/`;
        const update = `${base}/:id`;
        const _delete = `${base}/:id/`;
        return {
            base, getAll, get, create, update,
            delete: _delete
        }
    };
    const getReply = () => {
        const base = `${apiBase}topics/:topicId/replies`;
        const getAll = `${base}`;
        const get = `${base}/:id`;
        const create = `${base}/`;
        const update = `${base}/:id`;
        const _delete = `${base}/:id/`;
        return {
            base, getAll, get, create, update, delete: _delete
        }
    };
    const getLocalUser = () => {
        const base = `${apiBase}users`;
        const create = `${base}/`;
        const update = `${base}/:id`;
        return {
            base, create, update
        }
    };
    const getAuth = () => {
        const base = `${apiBase}auth`;
        const github = `${base}/github`;
        const githubCallback = `${github}/callback`;
        const logout = `${base}/logout`;
        return { base, github, githubCallback, logout }
    };
    return {
        host, port, apiBase,
        topic: getTopic(),
        reply: getReply(),
        auth: getAuth(),
        localUser: getLocalUser()
    }
}


// client

class Config {
    get directories() {
        return getDirectories();
    }

    get server() {
        return getServer();
    }
}

export default new Config();
