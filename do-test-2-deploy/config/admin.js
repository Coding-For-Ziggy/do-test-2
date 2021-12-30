module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8041ca505e0de0a74d0975f5cb2122a0'),
  },
});
