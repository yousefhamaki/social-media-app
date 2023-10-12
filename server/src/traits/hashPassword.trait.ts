import bcrypt from "bcrypt";

class HashPassword {
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Number of salt rounds (higher is more secure but slower)

    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }

  async chech(enteredPassword: string, hashedPassword: string) {
    try {
      const match = await bcrypt.compare(enteredPassword, hashedPassword);
      return match;
    } catch (error) {
      throw error;
    }
  }
}

export default HashPassword;
