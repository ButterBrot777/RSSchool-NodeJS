import { BaseEntity } from 'typeorm';
export interface IUser {
    id?: string;
    name?: string;
    login?: string;
    password?: string;
}
/**
 * @type {User}
 * @param {data} data object with user  data
 * @param {String} id user id
 * @param {String} name user name
 * @param {String} login user login
 * @param {String} password user password
 */
export declare class User extends BaseEntity {
    id: string;
    name: string;
    login: string;
    password: string;
    hashPassword(): Promise<void>;
    constructor({ id, name, login, password }?: {
        id?: any;
        name?: string | undefined;
        login?: string | undefined;
        password?: string | undefined;
    });
    /**
     * Create user instance like object exclude password
     * @param {User} user user instance
     * @returns {Object} object exclude password field
     */
    static toResponse(user: User | undefined): {
        id: string;
        name: string;
        login: string;
    };
}
