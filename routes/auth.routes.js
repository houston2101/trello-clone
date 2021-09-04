const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../models/user");

const router = Router();

router.post(
  "/register",
  [
    check("email", "Некоректный email").isEmail(),
    check("password", "Минимальная длинна пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Введены неккоректные данные",
      });
    } else {
      try {
        const { nickname, email, password } = req.baseUrl;
        const candidate = await User.findOne({ email });
        if (candidate) {
          res.status(400).json({
            message: "Такой пользователь существует",
          });
        } else {
          const hashedPassword = await bcrypt.hash(password, 12);

          await accessKeys.updateOne({ accessKey }, { active: false });

          const user = new User({
            nickname,
            email,
            password: hashedPassword,
          });
          await user.save();
          res.status(201).json({
            message: "Пользователь создан",
          });
        }
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    }
  },
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Введены некорректные данные",
      });
    }
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        return res.status(404).json({
          message: "Пользователь не найден",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Неверный пароль, попробуйте снова",
        });
      }
      res.json({
        token,
        userId: user.id,
        nickname: user.nickname,
        email: user.email,
        theme: user.theme,
      });
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так, попробуйте снова",
      });
    }
  },
);
