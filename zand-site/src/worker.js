export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/zand") {
      url.pathname = "/zand/";
      return Response.redirect(url, 308);
    }

    return env.ASSETS.fetch(request);
  },
};
