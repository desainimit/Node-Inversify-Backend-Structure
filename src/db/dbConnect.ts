import mongoose from "mongoose";
import config from "config";
import { CustomError } from "@utils";
import { MESSAGE } from "@constants";

const dbConnect = async () => {
  try {
    await mongoose.connect(config.get("DB_URL"));
    console.log(MESSAGE.MONGODB_CONNECTED);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw CustomError.internal(error.message);
    } else {
      throw CustomError.internal(MESSAGE.INTERNAL_STATUS);
    }
  }
};

export { dbConnect };
