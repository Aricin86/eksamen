import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  sendToken(user, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Fyll inn epost og passord', 400));
  }

  const user = await userService.getUserByEmail({ email }, true);
  if (!user) {
    return next(new ErrorHandler('Fyll inn epost og passord', 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler('Fyll inn epost og passord', 400));
  }

  sendToken(user, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: 'Logged ut',
  });
});

export const currentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    return next(new ErrorHandler('Finner ikke bruker', 404));
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});
