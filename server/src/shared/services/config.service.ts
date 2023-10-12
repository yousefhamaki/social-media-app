import * as dotenv from "dotenv";

dotenv.config();
class Config {
  constructor() {
    this.port = Number(process.env.PORT);
    this.TimeLimit = parseInt(process.env.TIMELIMIT as string, 10);
    this.RequestLimit = Number(process.env.REQUEST_LIMIT);
    this.MessageLimit = process.env.MESSAGE_LIMIT as string;
    this.ActiveHome = process.env.ACTIVE_HOME === "true" ? true : false;
    this.Perpage = Number(process.env.PERPAGE);
    this.DB_host = process.env.DB_HOST as string;
    this.DB_port = parseInt(process.env.DB_PORT as string, 10);
    this.DB_username = process.env.DB_USERNAME as string;
    this.DB_password = process.env.DB_PASSWORD as string;
    this.DB_database =
      process.env.NODE_ENV === "dev"
        ? process.env.DB_DATABASE_DEV
        : process.env.DB_DATABASE_TEST;

    this.minPasswordLength = parseInt(process.env.MIN_PASSWORD_LENGTH, 10);
    this.minUppercase = parseInt(process.env.MIN_UPPERCASE_LETTERS, 10);
    this.minLowercase = parseInt(process.env.MIN_LOWERCASE_LETTERS, 10);
    this.minDigits = parseInt(process.env.MIN_DIGITS, 10);
    this.minSpecialCharacters = parseInt(
      process.env.MIN_SPECIAL_CHARACTERS,
      10
    );

    this.secretKey = process.env.SECRET_KEY as string;

    this.filesType = process.env.FILES_TYPE[0] === "t" ? "ts" : "js";

    this.PageCount = Number(process.env.PAGE_COUNT) as number;
  }
  public readonly filesType: "ts" | "js";

  public readonly port: number;
  public readonly TimeLimit: number;
  public readonly Perpage: number;
  public readonly RequestLimit: number;
  public readonly MessageLimit: string;
  public readonly ActiveHome: boolean;
  public readonly DB_host: string;
  public readonly DB_port: number;
  public readonly DB_username: string;
  public readonly DB_password;
  public readonly DB_database;

  public readonly minPasswordLength;
  public readonly minUppercase;
  public readonly minLowercase;
  public readonly minDigits;
  public readonly minSpecialCharacters;
  public readonly secretKey;

  public readonly PageCount;
}

export default Config;
