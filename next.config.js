const { PHASE_DEVELOPMENT_SERVER }= require("next/constants")

module.exports = (phase) => {

    if (phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username:"karlaabad1",
                mongodb_password: "873729kvab",
                mongodb_clustername: "cluster0",
                mongodb_database: "my-blog-dev"
            }
        }
    }

    // Below are values we will use for production to not alter data from our production database.
    return {
        env: {
            mongodb_username:"karlaabad1",
            mongodb_password: "873729kvab",
            mongodb_clustername: "cluster0",
            mongodb_database: "my-blog"
        }
    }
}