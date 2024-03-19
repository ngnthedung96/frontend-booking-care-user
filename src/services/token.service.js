class TokenService {
  getLocalRefreshToken() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    return admin?.refreshToken;
  }
  getLocalAccessToken() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(admin)
    return admin?.accessToken;
  }
  updateLocalToken(data) {
    let admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      admin ={...admin,data} ;
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  }
  getAdmin() {
    return JSON.parse(localStorage.getItem("admin"));
  }
  setAdmin(admin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
  removeAdmin() {
    localStorage.removeItem("admin");
  }
}

export default new TokenService();
