/**
 * Grants database `permissions` table that role can access an endpoint/controllers
 *
 * @param {int} roleID, 1 Autentihected, 2 Public, etc
 * @param {Object} body
 */
 const grantPrivilege = async (roleID = 1) => {
    return strapi.plugin("users-permissions").service("role").updateRole(roleID, authenticatedRolePermissions); // i will add a sample for that below
  };

  const authenticatedRolePermissions = {
    name: "Authenticated",
    description: "Default role given to authenticated user.",
    permissions: {
        "api::article": {
              controllers: {
                   article: {
                       find: { enabled: true, policy: "" },
                       findOne: { enabled: true, policy: "" },
                       create: { enabled: true, policy: "" },
                       update: { enabled: true, policy: "" },
                       delete: { enabled: true, policy: "" },
    // If there is any custom methods will need to add it here
                      myCustomMethod: { enable : true, policy: "" }
                  }
              }
          }
      },
    }