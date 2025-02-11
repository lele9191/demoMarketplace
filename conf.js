export function urlPrefix() {
  var environment = "loc";
  switch (environment) {
    case "test":
      return "https://test.osteocom.me/sv6/";
    case "prod":
      return "https://osteocom.me/sv6/";
    case "loc":
      return "http://localhost:5000/sv6/";
    case "urlTest":
        return "https://test.osteocom.me/";
    case "urlProd":
        return "https://osteocom.me/";
    default:
      break;
  }
}

