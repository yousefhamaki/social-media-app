import * as jwt from "jsonwebtoken";
import Config from "../shared/services/config.service";

class Token {
  private readonly secretKey: string;
  private readonly config: Config;

  constructor() {
    this.config = new Config();
    this.secretKey = this.config.secretKey;
  }
  async generate(payload) {
    try {
      // Generate a JWT
      const token = await jwt.sign(payload, this.secretKey, {
        expiresIn: "7d",
      });
      return token;
    } catch (err) {
      console.error("JWT verification failed:", (err as Error).message);
    }
  }

  async verifyJWT(token: string): Promise<void> {
    try {
      const decoded = await jwt.verify(token, this.secretKey);

      // If JWT verification succeeds, you can access the decoded payload
      return decoded;
    } catch (err) {
      console.error("JWT verification failed:", (err as Error).message);
    }
  }
}

export default Token;
function comparePasswords(enteredPassword: string, storedHashedPassword: any) {
  throw new Error("Function not implemented.");
}
