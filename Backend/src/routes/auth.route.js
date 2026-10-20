import { Router } from "express";
import * as authController from "../controller/auth.controller.js"
import { authLimiter } from "../middlewares/rateLimit.middleware.js";
import { validateUser } from "../middlewares/validation.middleware.js";
import { userAuth } from "../middlewares/userToken.middleware.js";

const authRouter = Router();

/**
 * UserRegister POST API localhost:3000/user/register
 * @param {string} username - The username of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {object} 201 - User registered successfully.
 * @returns {object} 400 - Bad request. Username, email and password are required.
 */
authRouter.post(
  "/register",
  authLimiter,
  validateUser,
  authController.userRegister,
);

/**
 * UserLogin POST API  localhost:3000/user/login
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {object} 200 - User logged in successfully.
 * @returns {object} 404 - User not found.
 * @returns {object} 400 - Invalid password.
 */
authRouter.post("/login", authLimiter, validateUser, authController.UserLogin);

/**
 *  userLogout GET API localhost:3000/user/logout
 * @description logout for devices
 */
authRouter.get("/logout", authLimiter, validateUser, authController.userLogout);

/**
 * UserLogout POST API  localhost:3000/user/emailVerify
 * @param {string} email - The email of the user.
 * @param {string} otp - The OTP code.
 * @returns {object} 200 - Email verified successfully.
 * @returns {object} 400 - Invalid OTP.
 */
authRouter.post(
  "/emailVerify",
  authLimiter,
  validateUser,
  authController.emailVerify,
);

/**
 * GET/user/get-me
 * @description : - get the current logged in user details
 */
authRouter.get("/get-me", userAuth, authController.userGetMe);


authRouter.get("refreshToken", authController.genRefreshToken);


/**
 * POST /api/auth/forgetEmail
 */
authRouter.post("/forgetPassword", authController.forgetPassword);

/**
 * POST /api/auth/updatePassword
 */
authRouter.post("/updatePassword", authController.updatePassword);

export default authRouter;