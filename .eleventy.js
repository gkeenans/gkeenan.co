const { DateTime } = require("luxon")
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const escape = require('lodash.escape');
const rfc822Date = require('rfc822-date');


  // Markdown Footnotes stuff
module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let markdownItFootnote = require("markdown-it-footnote");
  
  
  let options = {
    html: true, // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
  };
  
  // configure the library with options
  let markdownLib =  markdownIt(options).use(markdownItFootnote);
  // set the library to process markdown files
  eleventyConfig.setLibrary("md", markdownLib);

  // passthrough
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/css/img");
    eleventyConfig.addPassthroughCopy("./src/css/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css/js");
    eleventyConfig.addPassthroughCopy("./_redirects");

  // Posts collections
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("./src/avgb/*.md");
  })

  // Year collections

  eleventyConfig.addCollection("postsByYear", collection => {
    const posts = collection.getFilteredByTag("posts").reverse()
    const years = posts.map(post => post.date.getFullYear())
    const uniqueYears = [...new Set(years)]
    const postsByYear = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(post => post.date.getFullYear() === year)
      return [...prev, [year, filteredPosts]]
    }, [])
    return postsByYear
  })

  // get current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("postDate", date =>
    DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL),
  )

  // RSS plugin stuff
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/avgb/feed.xml",
    collection: {
        name: "posts", // iterate over `collections.posts`
        limit: 20,     // 0 means no limit
    },
    metadata: {
        language: "en",
        title: "A Very Good Blog by Keenan",
        subtitle: "This is a very good blog I made all by myself.",
        base: "https://gkeenan.co/avgb",
        author: {
            name: "Keenan",
            email: "keenan@gkeenan.co", // Optional
        }
    }
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/avgb/feed.json",
    collection: {
        name: "posts", // iterate over `collections.posts`
        limit: 20,     // 0 means no limit
    },
    metadata: {
        language: "en",
        title: "A Very Good Blog by Keenan",
        subtitle: "This is a very good blog I made all by myself.",
        base: "https://gkeenan.co/avgb",
        author: {
            name: "Keenan",
            email: "keenan@gkeenan.co", // Optional
        }
    }
  });

// Podcast feed stuff

    // RSS
    eleventyConfig.addLiquidFilter('rfc822Date', (dateValue) => {
        return rfc822Date(dateValue);
    });

    // Escape characters for XML feed
    eleventyConfig.addLiquidFilter('xmlEscape', (value) => {
        return escape(value);
    });

    // Newest date in the collection
    eleventyConfig.addFilter('collectionLastUpdatedDate', (collection) => {
        if (!collection || !collection.length) {
            throw new Error(
                'Collection is empty in collectionLastUpdatedDate filter.'
            );
        }

        return rfc822Date(
            new Date(
                Math.max(...collection.map((item) => {
                    return item.date;
                }))
            )
        );
    });

return {
  passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };

};
