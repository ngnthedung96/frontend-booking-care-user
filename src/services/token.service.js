class TokenService {
  getLocalRefreshToken() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    return admin?.refreshToken;
  }
  getLocalAccessToken() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    return admin?.token;
  }
  updateLocalToken(token, refreshToken, infor) {
    let admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      admin.token = token;
      admin.refreshToken = refreshToken;
      admin.adminInfo = infor;
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  }
  getAdmin() {
    return {
      adminInfo: {
        name: "Hà Quang Thuy",
        project: "VTP",
        phone: "0982776493",
        email: "haquangthuyhd93@gmail.com",
        token: "",
        status: "1",
        time: "1658130358",
        id: "154",
      },
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxNTQiLCJpYXQiOjE2NTQ1MDYxOTEsImV4cCI6NDgwODEwNjE5MX0.HRK9PEG4CxP3p5gATM5ijQ-SdMlNPmRlJ8U0WPTXVa0",
    };
    // return JSON.parse(localStorage.getItem("admin"));
  }
  setAdmin(admin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
  removeAdmin() {
    localStorage.removeItem("admin");
  }
}

export default new TokenService();
