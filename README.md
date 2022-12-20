# NextJs 学习笔记

## 简述

之前使用过 Nuxt3 基于前端框架 Vue3 来开发网站，因为 Nuxt3 很多地方借鉴了基于 React 的 SSR 框架 Next，因此最近抽时间开始学习一下 Next 这个框架。

## 创建项目

```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

如果想用 typescript 开发则可以在上面的命令后面加上`--typescript`选项。

## 开发

Next 框架的页面开发语法是 React，关于 React 有关用法这里不在赘述。

### 页面路由

#### 基于 pages 的路由

和 Nuxt 一样（准确地讲应该是 Nuxt 和 Next 类似，毕竟 Next 前辈，是 Nuxt 的借鉴对象），在项目根目录下有 pages 目录，这个目录的文件系统路径就是项目的页面路由，比如路径：`/pages/post/first-post.jsx`，这个页面在前端对应的前端路由就是`{host}/post/first-post`，

##### 动态路由

当然这个路由也是支持动态路由匹配的，比如路径：`/pages/products/[id].jsx`

```jsx
import { useRouter } from "next/router";

export default function () {
  const { query } = useRouter();

  return <h1>This is product detail page and product id is {query.id}</h1>;
}
```

然后访问`http://localhost:3000/products/123`会得到下面的页面：

**This is product detail page and product id is 123**。
**注：Next 官方有讲到一种动态路由静态页面生成的方法：**个人阅读了教程后的理解就是我可能有一个动态路由，这个路由页面的内容是由动态路由的参数（一般是 id 之类的）来决定的，但是如果这个参数是可以定下来的，也就是说虽然这个参数可能很多不同的值，但是这些可能的值是可以列出来的话（可枚举），我们就可以使用`getStaticPath`方法来生成动态路由可能的值，然后在这个方法中返回所有可能的 paths，而且返回的数据类型是要遵循 Next 定义的，至少包含 paths 字段且 value 类型为：

```ts
{
  params: {
    identifier: string;
  }
}
[];
```

这里的 identifier 这个字段不是固定的，但是需要和动态路由这个 page 文件的命名保持一致，比如这个 page 名称为`[identifier].jsx`则这里的字段名就必须为`identifier`。
然后还需要使用`getStaticProps`方法获取页面构建所需要的数据，比如下面这个完整的例子，在`getStaticProps`中就会根据所有可能的 path 去获取数据然后 Next 再利用这个数据去生成静态页面。也就是说，这里有多少个 path，Next 就会针对这一个路由生成多少个不同内容的页面（在构建的时候）。构建完成后，在生产环境中，页面不会再随这些静态资源的变化而变化，因为这些页面在构建的时候就已经写死了。

```jsx
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function BlogDetail(props) {
  const { query } = useRouter();

  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <h1>
        This blog id is: {<strong>{query.identifier?.toUpperCase()}</strong>}
      </h1>
      <h3>Title: {props.postData.title}</h3>
      <p>Date: {moment(props.postData.date).format("LL")}</p>
      <p>&nbsp;</p>
      <Link href="/blogs">
        <h3>Blogs</h3>
      </Link>
      <div
        dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }}
      ></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    // 这个path就是所有可能的path，是告诉给Next的，如果没有在这个里面就会是404页面，这就是getStaticPaths的作用
    paths,
    // fallback为false则代表任何未由getStaticPaths返回的path所对应的路由都会导致404页面，至于fallback为true的效果，参考官方文档
    fallback: false,
  };
}

export async function getStaticProps(args) {
  const postData = await getPostData(args.params.identifier);
  return {
    props: {
      postData,
    },
  };
}
```

##### 需要服务端参与的动态路由

上面讲到的动态路由在我们可以确定所有可能的路径的情况下才能使用的，如果我们并不能确定所有的路由，因为路由和服务端的数据有关，并且页面内容每次都需要和服务端保持一致，这种情况我们的动态路由就需要使用`getServerSideProps`去从服务端获取数据，同时也不需要`getStaticPath`了，因为我们现在已经无法确定所有的路由。

##### 404 路由

我们只需要在`page`目录下创建`404.jsx`文件然后编写这个组件即可。

#### Link 组件

在 Next 中，我们可以使用 Link 组件来在客户端（页面端）进行导航来获得更好的导航体验，用法：

```jsx
import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home by Link</Link>
        <hr />
        <Link href="/assets/img">Image test</Link>
      </h2>
    </div>
  );
}
```

使用客户端 Link 组件导航页面在同一个 Next 应用中切换的时候比浏览器（使用 a 标签导航更快），具体验证这里就不详细说明，我们可以在使用 a 标签和 Link 组件两种导航模式来在页面间导航，然后在调试工具的 Network 选项查看网络请求就能看到诸多的不同。，或者查看[官网说明](https://nextjs.org/learn/basics/navigate-between-pages/client-side)。

### 静态资源

我们可以在根目录下创建 public 目录，public 里面的文件可以直接使用绝对路径拿到（类似 pages）。

#### 图片资源

我们可以使用 Next 提供的 Image 组件来展示图片，Image 可以以 WebP 等现代格式调整大小、优化和提供图像，比如：

- 默认情况下图片都是延迟加载的
- 我们可以通过控制 Image 的 height 和 width 属性来天正图片的像素大小，优化图片的加载时间。

#### Meta 数据

我们使用 SSR 框架开发网站的很大部分原因就是 SEO 优化，ermeta 标签是 SEO 的重要因素，我们可以再 Next 中使用 Head 组件定义 head 标签的内容：

```jsx
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello Next</title>
        <link rel="icon" href="/Vantron.svg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <a href="/">Back to Home</a>
        <hr />
        <Link href="/">Back to Home by Link</Link>
        <hr />
        <Link href="/assets/img">Image test</Link>
      </h2>
    </Layout>
  );
}
```

#### Script 引入第三方 JavaScript

我们还可以使用 Script 来引入第三方的 JavaScript 脚本，同时我们还可以给 Script 组件的 strategy 属性传值为`"lazyOnload"`来控制脚本加载时间为浏览器空闲时间加载，传入 onLoad 方法用于脚本加载完成后立即执行的操作。

```jsx
<Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
```

#### CSS 样式引入

CSS 样式引入的具体详情查看[官网](https://nextjs.org/learn/basics/assets-metadata-css/layout-component)即可，这里只记录几个要点：

- 要使用 css 模块，则 css 文件名字必须以`.module.css`结尾。
- 全局样式：要使用全局样式则需要在 pages 目录下创建`_app.jsx`的文件，并且包含以下内容：

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

该 App 组件是顶级组件，将在所有不同页面中通用。例如，您可以使用此 App 组件在页面之间导航时保 ​​ 持状态。
在 Next.js 中，您可以通过从 pages/\_app.js. 您不能在其他任何地方导入全局 CSS。无法在外部导入全局 CSS 的原因是 pages/\_app.js 全局 CSS 会影响页面上的所有元素。创建好后可以引入自己的全局 css 样式：

```jsx
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

这样全局样式和生效了。

#### 布局 layout

在 components 中创建`layout.js`文件，在这里可以写入布局，然后再其他地方就能使用：

```jsx
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Joey Tribiani";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/server.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/server.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
```

在`index.js`中使用：

```jsx
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Home({ allPostsData, userInfo }) {
  console.log(userInfo, allPostsData);
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
```

### 预渲染和数据获取

这一节的内容相对比较重要，首先要了解什么事预渲染，预渲染指的是用户访问 Next 服务器返回的是生成好的 HTML 而不是返回 HTML 和 JavaSCript 然后再客户端（浏览器）使用 JavaScript 来生成 HTML。预渲染有两种形式：

- Static Site Genaration（SSG）即静态站点生成
- Server-side Rendering （SSR）即服务端渲染
  他们的区别是：SSG 是在构建（yarn build）的时候生成 HTML 的预渲染方法。然后在每次请求都直接返回这个 HTML 而无需再通过服务器生成一次。而 SSR 是在每次请求都要重新生成 HTML。（注：开发模式下即使使用 SSG 也会每次请求都去生成一次 HTML，这是为了开发方便）。最重要的是 Next 允许我们这两
  种渲染方式都进行使用，推荐我们大多数静态页面使用 SSG 而少数需要动态生成的页面再使用 SSR，这样有利于提高我们应用的性能。

#### 静态生成（SSG）

SSG 可以再有数据和没有数据下完成。没有数据的情况就很简单了，我们只需编写好我们的页面即可。对于有数据的 SSG 场景，我们可以通过 Next 提供的`getStaticProps`方法获取数据，这个方法可以是一个异步方法，会在构建的时候被调用，然后构建的时候会等待该方法的结果，方法成功返回后再根据方法返回的数据去生成静态 HTML。（注：同样的，开发模式下每次请求都会去运行，为了开发方便。）

##### getStaticProps 的使用

下面有个例子：我有一个`index.js`这个 page 里面想要在构建的时候去后台获取 userinfo 数据，然后生成 html，这里就满足我们需要使用有数据的 SSG 的场景，因此我们可以一步等待`getStaticProps`返回的结果了：

```jsx
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";

export async function getStaticProps() {
  const userInfo = await (
    await fetch("http://localhost:3002/api/username", {
      method: "get",
    })
  ).json();

  return {
    props: {
      userInfo,
    },
  };
}

export default function Profile({ userInfo }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h4>{`${userInfo.firstName} ${userInfo.lastName}`}</h4>
        <p>{userInfo.desc}</p>
        <br />
      </section>
    </Layout>
  );
}
```

这样我们访问页面就得到了用户信息：
![](F:\学习文档\笔记\react\imgs\next-1.png)

这里我们可以在开发环境和生产环境下查看后台 api 的日志来验证该数据获取方法是否是真的在生产环境中只会在构建（yarn build）的时候触发一次。
**注意：**`getStaticProps`只能在 pages 目录下的 page 文件中使用和导出，因为 React 需要在页面生成之前获取到所需要的数据（可以理解为 props 传入必须有值）。

#### 服务端渲染（SSR）

当然了并非所有的场景都能通过 SSG 这种模式来实现，我们的应用中经常不可避免的会存在每次请求都需要从其他地方（数据库等等）获取数据来生成页面的情况。这种情况 SSG 就不能满足我们的需求了，因此需要使用 SSR 来完成。使用 SSR 一般需要用到方法：`getServerSideProps`，按照官方的介绍，如果我们在一个 page 中导出`getServiceSideProps`方法，Next 会在每次请求的时候都对页面做一次预渲染。**`getServiceSideProps`只会在服务器端运行，不会再客户端运行。**
比如上面的例子，我们新建一个一样的 page，不同的只有把生成方式由 SSG 改为 SSR：

```jsx
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import Link from "next/link";

export async function getServerSideProps() {
  const userInfo = await fetch("http://localhost:3002/api/username", {
    method: "get",
  });

  return {
    props: {
      userInfo: await userInfo.json(),
    },
  };
}

export default function Profile({ userInfo }) {
  console.log("getServerSideProps", userInfo);
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h4>{`${userInfo.firstName} ${userInfo.lastName}`}</h4>
        <p>{userInfo.desc}</p>
        <br />
      </section>
      <Link href="/">Home</Link>
    </Layout>
  );
}
```

**注：这里要验证`getStaticProps`和`getServerSideProps`的区别需要构建（yarn build）之后才能验证，因为上面提到了，`getStaticProps`在开发环境中是每次请求都会调用。**

#### 增量静态生成（ISR）

个人认为增量静态生成是 Next 非常优秀的一个特性，Next 允许我们在构建网站后创建或者更新静态页面（通过 SSG 生成的页面），而无需重新构建整个站点。按照官方的描述：使用 ISR，我们可以再扩展到数百万页面的同时保留静态的优势。

##### 用法

使用 ISR，就需要将`revalidate`属性添加到`getStaticProps`的返回值里面，他的取值类型`number`，值的意义是重新生成静态页面的间隔，这里注意：**并非指的是每隔一段时间就一定会重新生成页面**，具体是这样的，比如`revalidate`设为`30`，则：

- 当我们构建应用后，收到该页面（page）的访问请求会直接返回缓存的生成好的静态页面
- 会去检查 30 秒内是否有更新（重新生成）过页面，如果有，不再做任何操作，如果没有，就去重新生成这个页面，但是**注意**：这次请求（其实是每次请求）并不会去等待这个页面生成的过程
- 新的页面生成好后会替换原来的页面缓存
- **每次请求**过来**都会直接把缓存的页面发送给客户端**

##### 在动态路由中使用

如果在动态路由中使用，之前提到的动态路由的`可能的路径`都是在构建（yarn build）的时候就确定了的，并且我们在`getStaticPaths`的返回值加上了`fallback: false`配置，导致不属于`可能的路径`里面的路径都会导致 404 页面，因此如果我们如果不能在构建的时候确定所有的路由我们就需要把`fallback`的值置为`"blocking"`，这样就不会导致 404 页面，也就是说任何路径都可以匹配该路由，这样我们的增量更新就能照常进行，**但是注意：这里由于不再对动态路由的路径做限制，这里我们开发人员就需要自己去处理路径不匹配资源的问题。**

例子：

```jsx
import Link from "next/link";
import Layout from "../../components/layout";

export async function getStaticPaths() {
  const poemList = await (
    await fetch("http://localhost:3002/api/poem-list")
  ).json();

  return {
    paths: poemList.map((item) => ({ params: { id: item } })),
    // 如果需要满足动态路由的增量更新则fallback需要设为blocking
    fallback: "blocking",
    // 如果fallback设为false，则构建的时候没有构建的路径都会导致404页面
    // fallback: false,
  };
}

export async function getStaticProps(args) {
  const data = await fetch("http://localhost:3002/api/" + args.params.id);
  const bufferResponse = await data.arrayBuffer();
  return {
    props: {
      id: args.params.id,
      content: Buffer.from(bufferResponse).toString(),
    },
    // 增量更新间隔
    revalidate: 30,
  };
}

export default function PoemDetails({ content, id }) {
  return (
    <Layout>
      <h1>Poem Details</h1>
      <br />
      <h2>{id}</h2>
      <Link href="/poems">
        <h3>Back to Poems</h3>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}
```

### 部署

首先使用`yarn build`指令打包，然后可以使用 pm2 来运行`pm2 start npm --name next -- run start`

**注意！！！nextjs 中无法使用 nodejs 的\_\_dirname，用以代替的是 process.cwd()`，返回的是项目工程的根目录的绝对路径**
