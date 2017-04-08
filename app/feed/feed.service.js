angular.module('buzzer').service('FeedService', ['API_BASE_URL', '$http', function FeedService(API_BASE_URL, $http) {
  var baseUrl = API_BASE_URL + 'feed';

  /**
   * Limpa o objeto que vem da view
   * @param {Comment} comment
   */
  function cleanComment(comment) {
    return {
      nome: comment.nome,
      email: comment.email,
      mensagem: comment.mensagem,
      categorias: comment.categorias
    };
  }

  function mock() {
    return new Promise(res => res({
      "result": [
        {
          "id": 1,
          "nome": "Joazinho",
          "mensagem": "Muito bom",
          "email": "joao@mundo.com",
          "categorias": [
            {
              "id": 3,
              "nome": "Elogio",
              "cor": "green"
            },
            {
              "id": 4,
              "nome": "Atendimento",
              "cor": "blue"
            }
          ]
        },
        {
          "id": 2,
          "nome": "Ana Carolina",
          "mensagem": "Muito sujo",
          "email": "anac@live.com",
          "categorias": [
            {
              "id": 1,
              "nome": "Crítica",
              "cor": "red"
            },
            {
              "id": 5,
              "nome": "Limpeza",
              "cor": "yellow"
            }
          ]
        }
      ],
      "count": 2
    }));
  }

  this.all = function all() {
    // return mock();
    return $http.get(baseUrl).then(function onSuccess(response) {
      return response.data;
    });
  }

  this.id = function id(id) {
    return $http.get(baseUrl + '/' + id).then(function onSuccess(response) {
      return response.data;
    });
  }

  this.add = function add(comment) {
    if (!comment.nome || !comment.mensagem || !comment.email || (!comment.categorias && comment.categorias.length == 0))
      throw Error('Um comentário deve ter a identidade do autor, mensagem e pelo menos uma categoria');
    return $http.post(baseUrl, cleanComment(comment)).then(function onSuccess(response) {
      return response.data;
    });
  }

  this.edit = function edit(id, comment) {
    if (!comment.nome || !comment.mensagem || !comment.email || (!comment.categorias && comment.categorias.length == 0))
      throw Error('Um comentário deve ter a identidade do autor, mensagem e pelo menos uma categoria');
    return $http.put(baseUrl + '/' + id, cleanComment(comment)).then(function onSuccess(response) {
      return response.data;
    });
  }

  this.remove = function remove(id) {
    return $http.delete(baseUrl + '/' + id).then(function onSuccess(response) {
      return response.data;
    });
  }
}]);