var URI = 'http://127.0.0.1:8080/api'

var GET_HOME = '/home'



module.exports = {
  getHome: function()  {
    return URI + GET_HOME
  }
}
