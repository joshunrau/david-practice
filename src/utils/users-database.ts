export type User = {
  username: string;
  password: string;
};

export class UsersDatabase {
  static createUser(user: User) {
    const users = [...this.getUsers(), user];
    if (this.isUser(user.username)) {
      throw new Error(`User exists: ${user.username}`);
    }
    window.sessionStorage.setItem('users', JSON.stringify(users));
  }

  static getUsers(): User[] {
    return JSON.parse(window.sessionStorage.getItem('users')!) ?? [];
  }

  static isUser(username: string) {
    return this.getByUsername(username) !== null;
  }

  static getByUsername(username: string) {
    return this.getUsers().find((user) => user.username === username) ?? null;
  }
}
