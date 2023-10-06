module.exports = ({env})  => ({
  defaultconnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "dpg-ckfsq5ol3its739gvqhg-a.oregon-postgres.render.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "roottechnologies"),
      user: env("DATABASE_USERNAME", "roottechnologies_user"),
      password: env("DATABASE_PASSWORD", "hbz0REfHoPN9IOrVxLdrGcJCj46elWCC"),

      ssl: env.bool("DATABASE_SSL", "true")
      
  },
 
},
})


// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'mysql', // Change to 'postgres' if using PostgreSQL
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 8443), // Change port if needed
//         database: env('DATABASE_NAME', 'blog-site'),
//         username: env('DATABASE_USERNAME', 'abdulqadari'),
//         password: env('DATABASE_PASSWORD', '8$08Qr3dl'),
//         ssl: env.bool('DATABASE_SSL', 'false')  // Set to true if using SSL
//       },
//       options: {},
//   },
//   },
// })

