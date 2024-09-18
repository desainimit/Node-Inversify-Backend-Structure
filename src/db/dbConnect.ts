import mongoose from "mongoose";
import config from "config";
import { CustomError, message } from "@utils";

const dbConnect = async () => {
  try {
    await mongoose.connect(config.get("DB_URL"));
    console.log(message.MONGODB_CONNECTED);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw CustomError.internal(error.message);
    } else {
      throw CustomError.internal(message.INTERNAL_STATUS);
    }
  }
};

export { dbConnect };
