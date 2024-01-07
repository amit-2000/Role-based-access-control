const roles = require("../config/roles.json");

class Permissions {
  constructor() {
    this.permissions = [];
    this.roles = roles.roles;
  }

  getPermissionsByRoleName(roleName) {
    const role = roles.roles.find((r) => r.name === roleName);
    console.log("roleee", role);
    return role ? role.permissions : [];
  }
}

module.exports = Permissions;
