function firstImage(noiDung) {
  var regExp = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
  var results = regExp.exec(noiDung);
  var image = "/images/noimage.png";
  if (results) {
    image = results[1].replace(
      /https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?/gi,
      "",
    );
  }
  return image;
}

module.exports = firstImage;
