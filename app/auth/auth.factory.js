angular.module('buzzer').factory('AuthFactory', ['$http', function AuthFactory($http) {
  /**
   * // user
  {
    "_id": "58e8d7e6a4f8e33ec891e709",
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "occupation": "Software Developer @ Cisco",
    "__v": 6,
    "overallReport": "58e9ff48666952f0d4399f46",
    "deleted": false,
    "portfolios": [],
    "products": ["58e9f77a80922ee7244af4ee", "58e9f8fb3ffeffe83de2c3cb", "58e9f9dded1f9ee8ac83482f", "58e9fad0820d04e951577c10"],
    "availableAmount": 0,
    "mimicking": [],
    "mimickedCount": 0,
    "following": [],
    "followerCount": 0,
    "emailHash": "e13743a7f1db7f4246badd6fd6ff54ff",
    "id": "58e8d7e6a4f8e33ec891e709"
  }
   */
  return {
    getLoggedUser: function () {
      return Object.assign({
        "_id": "58e8d7e6a4f8e33ec891e709",
        "name": "John Doe",
        "email": "john.doe@gmail.com",
        "occupation": "Software Developer @ Cisco",
        "__v": 6,
        "overallReport": "58e9ff48666952f0d4399f46",
        "deleted": false,
        "portfolios": [],
        "products": ["58e9f77a80922ee7244af4ee", "58e9f8fb3ffeffe83de2c3cb", "58e9f9dded1f9ee8ac83482f", "58e9fad0820d04e951577c10"],
        "availableAmount": 0,
        "mimicking": [],
        "mimickedCount": 0,
        "following": [],
        "followerCount": 0,
        "emailHash": "e13743a7f1db7f4246badd6fd6ff54ff",
        "id": "58e8d7e6a4f8e33ec891e709"
      }, {
          // _id: '58e8d7e6a4f8e33ec891e709',
          // name: 'Guilherme Ventura',
          // occupation: 'Front-end developer & investor as hobby',
          // email: 'guilhermeventura2@gmail.com',
          // emailHash: '4c63581802d04203e3f0ab00c72a2410'
        })
    }
  }
}]);