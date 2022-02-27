const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_uri:
          "mongodb+srv://Anmol:AnmolDhami@cluster0.t2rax.mongodb.net/Blog_App?retryWrites=true&w=majority",
      },
    };
  }
  return {
    env: {
      mongodb_uri:
        "mongodb+srv://Anmol:AnmolDhami@cluster0.t2rax.mongodb.net/Blog_App?retryWrites=true&w=majority",
    },
  };
};
