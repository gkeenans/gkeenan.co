module.exports = {
  layout: "podcast",
  tags: ["fm"],
  eleventyComputed: {
    title: data => data.media.title,
  },
};
