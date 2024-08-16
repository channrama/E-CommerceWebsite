import bcrypt from "bcrypt";
//hashing password function
export const hashpassword = async (password) => {
  try {
    const hashedpass = await bcrypt.hash(password, 10); //10 roundes
    return hashedpass;
  } catch (error) {
    console.log(error);
  }
};

//compare password function
export const comparepassword =async (password, hashedpassword) => {
  try {
    return bcrypt.compare(password, hashedpassword);
  } catch (error) {
    console.log(error);
  }
};
