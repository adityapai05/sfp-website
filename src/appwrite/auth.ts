import { Client, Account } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account: Account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async login(email: string, password: string) {
    try {
      const response = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      console.error("Error in login: ", error);
      throw error;
    }
  }
  async logout() {
    try {
      const response = await this.account.deleteSession("current");
      return response;
    } catch (error) {
      console.error("Error in logout: ", error);
      throw error;
    }
  }
  async getCurrentUser() {
    try {
        const user = await this.account.get();
        return user;
    } catch (error) {
        console.error("Error in getCurrentUser: ", error);
        throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
