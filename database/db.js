import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL =
    "mongodb+srv://pranavigote:admin123@flipkartclone.4r9puux.mongodb.net/?retryWrites=true&w=majority&appName=FlipkartClone";
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error While connecting the database", error);
  }
};
export default Connection;
