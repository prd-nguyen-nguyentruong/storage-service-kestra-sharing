class UserService {
 
  async getUser() {
    try {
      
      return "Hello user";

    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserService();