const { Basket, Device, Brand, Type } = require("../models/models");
const ApiError = require("../error/ApiError");


class BasketController {
  async create(request, response, next) {
    try {
      const { userId, deviceId } = request.body;
      const basket = await Basket.create({
        userId,
        deviceId,
      })
      return response.json(basket);
    } catch (error) {
      return console.log(error);
    }
  }

  a
  async getAll(request, response, next) {
    try {
      const baskets = await Basket.findAll()
      return response.json(baskets);
    } catch (error) {
      return next(ApiError.internal("Ошибка на стороне сервера"));
    }
  }

  

  async getOne(request, response, next) {
    try {
      const { id } = request.params;
      const basket = await Basket.findOne({
        where: { id },
        include: [
          {
            model: Device}]
      })

      return response.json(basket);
    } catch (error) {
      return next(ApiError.internal("Ошибка на стороне сервера"));
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;
      const basket = await Basket.destroy({
        where: { id },
        
      })

      return response.json(basket);
    } catch (error) {
      return next(ApiError.internal("Ошибка на стороне сервера"));
    }
  }
}

module.exports = new BasketController();