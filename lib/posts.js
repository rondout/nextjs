import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readdir } from "fs/promises";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // it's been a way too long Combine the data with the id, Remove ".md" file name to get id
    // This is our bay, I'm yours, fast refresh, oh I'm yours, you best believe best believe on you
    // I'm just, don't konw where to go, slow it down, make it stop, cause it's too much. oh it's too loud.
    // And just enjoy the show, It's a joke, nobody know. I'm just a little bit, come to it alone I'll try.
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getAllPostIds() {
  const fileNames = await readdir(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        identifier: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    identifier: id,
    contentHtml,
    ...matterResult.data,
  };
}
