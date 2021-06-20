/**
 * User model
 * @module user/model
 */
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

const { v4: uuidv4 } = require('uuid');

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

@Entity({name: 'User'})
export class User extends BaseEntity {
  @PrimaryColumn('varchar', {length: 100})
  id: string;

  @Column('varchar', {length: 100})
  name: string;

  @Column('varchar', {length: 100})
  login: string;

  @Column('varchar', {length: 100})
  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    super();
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Create user instance like object exclude password
   * @param {User} user user instance
   * @returns {Object} object exclude password field
   */
  static toResponse(user: User | undefined) {
    const { id, name, login } = user!;
    return { id, name, login };
  }
}
